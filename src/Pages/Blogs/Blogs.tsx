
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Blogs.css";
import { fetchFromStrapi } from "../../api/strapi";

/* =========================
   TYPES (NO any USED)
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

type Blog = {
  id: number;
  Heading: string;
  slug: string;
  Image?: StrapiImage;
};

const STRAPI_URL = "http://localhost:1337";

function Blogs() {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFromStrapi("blogs")
      .then((data: Blog[]) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load blogs");
        setLoading(false);
      });
  }, []);

  return (
    <section id="blogs">
      <div className="blog-section">
        <div className="blog-container">
          <div className="blog-header">
            <h2>Read our blog</h2>
            <p>
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>

          {loading && <p>Loading blogs...</p>}
          {error && <p>{error}</p>}

          <div className="blog-grid">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="blog-card"
                onClick={() =>
                  navigate(`/blog/${blog.slug || blog.id}`)
                }
              >
                {/* Image */}
                {blog.Image && (
                  <div className="blog-image-wrapper">
                    <img
                      src={`${STRAPI_URL}${
                        blog.Image.formats?.medium?.url ||
                        blog.Image.url
                      }`}
                      alt={
                        blog.Image.alternativeText ||
                        blog.Heading
                      }
                    />
                  </div>
                )}

                {/* Heading */}
                <h3>{blog.Heading}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
