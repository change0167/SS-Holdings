import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Vastu.css";
import { fetchFromStrapi } from "../../api/strapi";

/* =========================
   TYPES
========================= */

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
};

const STRAPI_URL = "http://localhost:1337";

function Vastu() {
  const navigate = useNavigate();

  const [vastus, setVastus] = useState<Vastu[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFromStrapi("vastus")
      .then((data: Vastu[]) => {
        setVastus(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load vastu topics");
        setLoading(false);
      });
  }, []);

  return (
    <section id="vastu">
      <div className="vastu-section">
        <div className="vastu-container">
          {/* Header */}
          <div className="vastu-header">
            <h2>Vastu Guidance</h2>
            <p>
              Explore vastu principles to bring harmony, health and prosperity
              into your space.
            </p>
          </div>

          {loading && <p>Loading vastu...</p>}
          {error && <p>{error}</p>}

          <div className="vastu-grid">
            {vastus.map((item) => (
              <div
                key={item.id}
                className="vastu-card"
                role="button"
                tabIndex={0}
                onClick={() =>
                  navigate(`/vastu/${item.slug || item.id}`)
                }
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  navigate(`/vastu/${item.slug || item.id}`)
                }
              >
                <div className="vastu-image-wrapper">
                  <img
                    src={`${STRAPI_URL}${
                      item.Image.formats?.medium?.url ||
                      item.Image.url
                    }`}
                    alt={
                      item.Image.alternativeText || item.Title
                    }
                  />
                </div>

                <h3>{item.Title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vastu;
