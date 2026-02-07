import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./VastuDetail.css";
import { fetchFromStrapi } from "../../api/strapi";

/* =========================
<<<<<<< HEAD
   TYPES (MATCH STRAPI CLOUD)
========================= */

type RichTextChild = {
=======
   TYPES
========================= */

type RichTextChild = {
  type: "text";
>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb
  text: string;
};

type RichTextBlock = {
  type: "paragraph";
  children: RichTextChild[];
};

type ImageFormat = {
  url: string;
<<<<<<< HEAD
};

type StrapiImage = {
=======
  width: number;
  height: number;
};

type StrapiImage = {
  id: number;
>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb
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
<<<<<<< HEAD
  Image?: StrapiImage;
  Content: RichTextBlock[];
};

=======
  Image: StrapiImage;
  Content: RichTextBlock[];
};

const STRAPI_URL = "http://localhost:1337";

>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb
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

<<<<<<< HEAD
  const imageUrl =
    vastu.Image?.formats?.large?.url ||
    vastu.Image?.formats?.medium?.url ||
    vastu.Image?.url;

=======
>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb
  return (
    <section className="vastu-detail-section">
      <div className="vastu-detail-container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back to Vastu
        </button>

        <h1 className="vastu-detail-title">{vastu.Title}</h1>

<<<<<<< HEAD
        {/* Image */}
        {imageUrl && (
          <img
            src={imageUrl} // ✅ DIRECT STRAPI CLOUD URL
            alt={
              vastu.Image?.alternativeText ||
              vastu.Title
            }
            className="vastu-detail-image"
          />
        )}

        {/* Content */}
=======
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

>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb
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
