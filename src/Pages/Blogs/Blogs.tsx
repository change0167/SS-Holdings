<<<<<<< HEAD
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Blogs.css";
// import { fetchFromStrapi } from "../../api/strapi";

// /* =========================
//    TYPES (STRAPI v4 SAFE)
// ========================= */

// type ImageFormat = {
//   url: string;
// };

// type StrapiImage = {
//   data: {
//     attributes: {
//       url: string;
//       alternativeText: string | null;
//       formats?: {
//         thumbnail?: ImageFormat;
//         small?: ImageFormat;
//         medium?: ImageFormat;
//         large?: ImageFormat;
//       };
//     };
//   } | null;
// };

// type Blog = {
//   id: number;
//   Heading: string;
//   slug: string;
//   Image?: StrapiImage;
// };

// const STRAPI_URL =
//   import.meta.env.VITE_STRAPI_URL ||
//   "https://honest-morning-3de175b75d.strapiapp.com";

// function Blogs() {
//   const navigate = useNavigate();

//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     fetchFromStrapi("blogs")
//       .then((data: Blog[]) => {
//         setBlogs(data);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError("Failed to load blogs");
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <section id="blogs">
//       <div className="blog-section">
//         <div className="blog-container">
//           <div className="blog-header">
//             <h2>Read our blog</h2>
//             <p>
//               With lots of unique blocks, you can easily build a page without
//               coding. Build your next landing page.
//             </p>
//           </div>

//           {loading && <p>Loading blogs...</p>}
//           {error && <p>{error}</p>}

//           <div className="blog-grid">
//             {blogs.map((blog) => {
//               const imageData = blog.Image?.data;
//               const imageUrl =
//                 imageData?.attributes.formats?.medium?.url ||
//                 imageData?.attributes.url;

//               return (
//                 <div
//                   key={blog.id}
//                   className="blog-card"
//                   onClick={() =>
//                     navigate(`/blog/${blog.slug || blog.id}`)
//                   }
//                 >
//                   {/* Image (SAFE) */}
//                   {imageUrl && (
//                     <div className="blog-image-wrapper">
//                       <img
//                         src={`${STRAPI_URL}${imageUrl}`}
//                         alt={
//                           imageData?.attributes.alternativeText ||
//                           blog.Heading
//                         }
//                       />
//                     </div>
//                   )}

//                   {/* Heading */}
//                   <h3>{blog.Heading}</h3>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Blogs;
=======

>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Blogs.css";
import { fetchFromStrapi } from "../../api/strapi";

/* =========================
<<<<<<< HEAD
   TYPES (MATCH STRAPI CLOUD)
=======
   TYPES (NO any USED)
>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb
========================= */

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

type Blog = {
  id: number;
  Heading: string;
  slug: string;
  Image?: StrapiImage;
};

<<<<<<< HEAD
=======
const STRAPI_URL = "http://localhost:1337";

>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb
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
<<<<<<< HEAD
            {blogs.map((blog) => {
              const imageUrl =
                blog.Image?.formats?.medium?.url ||
                blog.Image?.url;

              return (
                <div
                  key={blog.id}
                  className="blog-card"
                  onClick={() =>
                    navigate(`/blog/${blog.slug || blog.id}`)
                  }
                >
                  {/* Image */}
                  {imageUrl && (
                    <div className="blog-image-wrapper">
                      <img
                        src={imageUrl} // ✅ STRAPI CLOUD URL (NO PREFIX)
                        alt={
                          blog.Image?.alternativeText ||
                          blog.Heading
                        }
                      />
                    </div>
                  )}

                  {/* Heading */}
                  <h3>{blog.Heading}</h3>
                </div>
              );
            })}
=======
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
>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
<<<<<<< HEAD

=======
>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb
