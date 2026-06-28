import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Vastu.css";
import { fetchFromStrapi } from "../../api/strapi";

/* =========================
   TYPES (MATCH STRAPI CLOUD)
========================= */

type ImageFormat = {
  url: string;
};

type StrapiImage = {
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
  Image?: StrapiImage;
};

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
            <h2>Vastu-Compliant Homes</h2>
            <p>
              Thoughtfully designed and built according to Vastu principles
            </p>
          </div>

          {loading && <p>Loading vastu...</p>}
          {error && <p>{error}</p>}

          <div className="vastu-grid">
            {vastus.map((item) => {
              const imageUrl =
                item.Image?.formats?.medium?.url ||
                item.Image?.url;

              return (
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
                  {/* Image */}
                  {imageUrl && (
                    <div className="vastu-image-wrapper">
                      <img
                        src={imageUrl} // ✅ USE DIRECT STRAPI CLOUD URL
                        alt={
                          item.Image?.alternativeText ||
                          item.Title
                        }
                      />
                    </div>
                  )}

                  <h3>{item.Title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vastu;
