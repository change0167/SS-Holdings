// import { useParams, useNavigate } from "react-router-dom";
// import "./BlogDetail.css";
// import { blogsData } from "./blogsData";

// function BlogDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const blog = blogsData.find(
//     (item) => item.id === Number(id)
//   );

//   if (!blog) {
//     return (
//       <section className="blog-detail-section">
//         <div className="blog-detail-container">
//           <button className="back-btn" onClick={() => navigate("/")}>
//             ← Back
//           </button>
//           <h2>Blog not found</h2>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="blog-detail-section">
//       <div className="blog-detail-container">
//         <button className="back-btn" onClick={() => navigate(-1)}>
//           ← Back to Blogs
//         </button>

//         {/* Image */}
//         <div className="blog-detail-image">
//           <img src={blog.image} alt={blog.title} />
//         </div>

//         {/* Heading */}
//         <h1 className="blog-detail-title">{blog.title}</h1>

//         {/* Content */}
//         <div className="blog-detail-content">
//           <p>{blog.content}</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default BlogDetail;

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./BlogDetail.css";
import { fetchFromStrapi } from "../../api/strapi";

/* =========================
   TYPES (NO any USED)
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

type Blog = {
  id: number;
  Heading: string;
  slug: string;
  blogContent: RichTextBlock[];
  Image?: StrapiImage;
};

const STRAPI_URL = "http://localhost:1337";

function BlogDetail() {
  const { id } = useParams(); // id = slug OR id
  const navigate = useNavigate();

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFromStrapi("blogs")
      .then((data: Blog[]) => {
        const foundBlog = data.find(
          (item) =>
            item.id === Number(id) || item.slug === id
        );

        if (!foundBlog) {
          setError("Blog not found");
        } else {
          setBlog(foundBlog);
        }

        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load blog");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <section className="blog-detail-section">
        <div className="blog-detail-container">
          <p>Loading blog...</p>
        </div>
      </section>
    );
  }

  if (error || !blog) {
    return (
      <section className="blog-detail-section">
        <div className="blog-detail-container">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>
          <h2>{error}</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="blog-detail-section">
      <div className="blog-detail-container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back to Blogs
        </button>
         {/* Heading */}
        <h1 className="blog-detail-title">{blog.Heading}</h1>

        {/* Image */}
        {blog.Image && (
          <div className="blog-detail-image">
            <img
              src={`${STRAPI_URL}${
                blog.Image.formats?.large?.url ||
                blog.Image.formats?.medium?.url ||
                blog.Image.url
              }`}
              alt={blog.Image.alternativeText || blog.Heading}
            />
          </div>
        )}

       

        {/* Content */}
        <div className="blog-detail-content">
          {blog.blogContent.map((block, index) =>
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

export default BlogDetail;



