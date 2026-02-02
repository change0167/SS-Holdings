import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./VastuDetail.css";
import { fetchFromStrapi } from "../../api/strapi";

/* =========================
   TYPES
========================= */

type RichTextChild = {
  type: "text";
  text: string;
};

type RichTextBlock = {
  type: "paragraph";
  children: RichTextChild[];
};

type ImageFormat = {
  url: string;
  width: number;
  height: number;
};

type StrapiImage = {
  id: number;
  url: string;
  alternativeText: string | null;
  formats?: {
    thumbnail?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    large?: ImageFormat;
  };
};

type Vastu = {
  id: number;
  Title: string;
  slug: string;
  Image: StrapiImage;
  Content: RichTextBlock[];
};

const STRAPI_URL = "http://localhost:1337";

function VastuDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [vastu, setVastu] = useState<Vastu | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFromStrapi("vastus")
      .then((data: Vastu[]) => {
        const found = data.find(
          (item) =>
            item.id === Number(id) || item.slug === id
        );

        if (!found) setError("Vastu topic not found");
        else setVastu(found);

        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load vastu");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <section className="vastu-detail-section">
        <div className="vastu-detail-container">
          <p>Loading vastu...</p>
        </div>
      </section>
    );
  }

  if (error || !vastu) {
    return (
      <section className="vastu-detail-section">
        <div className="vastu-detail-container">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>
          <h2>{error}</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="vastu-detail-section">
      <div className="vastu-detail-container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back to Vastu
        </button>

        <h1 className="vastu-detail-title">{vastu.Title}</h1>

        <img
          src={`${STRAPI_URL}${
            vastu.Image.formats?.large?.url ||
            vastu.Image.formats?.medium?.url ||
            vastu.Image.url
          }`}
          alt={
            vastu.Image.alternativeText || vastu.Title
          }
          className="vastu-detail-image"
        />

        <div className="vastu-detail-content">
          {vastu.Content.map((block, index) =>
            block.type === "paragraph" ? (
              <p key={index}>
                {block.children.map((child, i) => (
                  <span key={i}>{child.text}</span>
                ))}
              </p>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}

export default VastuDetail;
