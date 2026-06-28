// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import "./ProjectDetail.css";
// import { fetchFromStrapi } from "../../api/strapi";


// /* =========================
//    TYPES (MATCH STRAPI CLOUD)
// ========================= */

// type RichTextChild = {
//   text: string;
// };

// type RichTextBlock = {
//   type: "paragraph";
//   children: RichTextChild[];
// };

// type ImageFormat = {
//   url: string;
// };

// type StrapiMedia = {
//   id: number;
//   url: string;
//   alternativeText: string | null;
//   formats?: {
//     thumbnail?: ImageFormat;
//     small?: ImageFormat;
//     medium?: ImageFormat;
//     large?: ImageFormat;
//   };
// };

// type Project = {
//   id: number;
//   Title: string;
//   slug: string;
//   isFeatured: boolean;
//   Cover_img: StrapiMedia;
//   Gallary?: StrapiMedia[];
//   Location: string;
//   MapLink?: string;
//   Current_Status: string;
//   Description: RichTextBlock[];
//   Amenities?: RichTextBlock[];
//   Locality?: RichTextBlock[];
//   Brochure?: StrapiMedia[];
// };

// function ProjectDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [project, setProject] = useState<Project | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   /* 🔥 Gallery state */
//   const [showAllImages, setShowAllImages] = useState(false);

//   useEffect(() => {
//     fetchFromStrapi("projects")
//       .then((data: Project[]) => {
//         const found = data.find(
//           (item) => item.id === Number(id) || item.slug === id
//         );

//         if (!found) setError("Project not found");
//         else setProject(found);

//         setLoading(false);
//       })
//       .catch(() => {
//         setError("Failed to load project");
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) {
//     return (
//       <section className="project-detail-section">
//         <div className="project-detail-container">
//           <p>Loading project...</p>
//         </div>
//       </section>
//     );
//   }

//   if (error || !project) {
//     return (
//       <section className="project-detail-section">
//         <div className="project-detail-container">
//           <button className="back-btn" onClick={() => navigate(-1)}>
//             ← Back
//           </button>
//           <h2>{error}</h2>
//         </div>
//       </section>
//     );
//   }

//   const coverImage =
//     project.Cover_img.formats?.large?.url ||
//     project.Cover_img.formats?.medium?.url ||
//     project.Cover_img.url;

//   return (
//     <section className="project-detail-section">
//       <div className="project-detail-container">
//         <button className="back-btn" onClick={() => navigate(-1)}>
//           ← Back to Projects
//         </button>

//         <h1 className="project-detail-title">{project.Title}</h1>

//         {/* Cover Image */}
//         {coverImage && (
//           <img
//             src={coverImage} // ✅ DIRECT STRAPI CLOUD URL
//             alt={project.Cover_img.alternativeText || project.Title}
//             className="project-detail-image"
//           />
//         )}

//         <div className="project-meta">
//           <span>{project.Location}</span>
//           <span>{project.Current_Status}</span>
//         </div>

//         {/* Description */}
//         <section className="project-section">
//           <h2>Description</h2>
//           {project.Description.map((block, i) => (
//             <p key={i}>
//               {block.children.map((child, j) => (
//                 <span key={j}>{child.text}</span>
//               ))}
//             </p>
//           ))}
//         </section>

//         {/* Map */}
//         {project.MapLink && (
//           <section className="project-section">
//             <h2>Location Map</h2>
//             <div className="project-map-wrapper">
//               <iframe
//                 src={project.MapLink}
//                 loading="lazy"
//                 allowFullScreen
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title={`${project.Title} Location Map`}
//               />
//             </div>
//           </section>
//         )}

//         {/* Amenities */}
//         {project.Amenities && (
//           <section className="project-section">
//             <h2>Amenities</h2>
//             {project.Amenities.map((block, i) => (
//               <p key={i}>
//                 {block.children.map((child, j) => (
//                   <span key={j}>{child.text}</span>
//                 ))}
//               </p>
//             ))}
//           </section>
//         )}

//         {/* 🔥 Gallery */}
//         {project.Gallary && project.Gallary.length > 0 && (
//           <section className="project-section">
//             <h2>Gallery</h2>

//             <div className="project-gallery">
//               {(showAllImages
//                 ? project.Gallary
//                 : project.Gallary.slice(0, 4)
//               ).map((img) => {
//                 const galleryImg =
//                   img.formats?.medium?.url || img.url;

//                 return (
//                   <img
//                     key={img.id}
//                     src={galleryImg} // ✅ DIRECT URL
//                     alt={img.alternativeText || project.Title}
//                   />
//                 );
//               })}
//             </div>

//             {project.Gallary.length > 4 && !showAllImages && (
//               <button
//                 className="gallery-view-btn"
//                 onClick={() => setShowAllImages(true)}
//               >
//                 View all photos ({project.Gallary.length})
//               </button>
//             )}
//           </section>
//         )}

//         {/* Brochure */}
//         {project.Brochure && project.Brochure.length > 0 && (
//           <div className="project-brochure">
//             {project.Brochure.map((file) => (
//               <a
//                 key={file.id}
//                 href={file.url} // ✅ DIRECT STRAPI CLOUD FILE URL
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 Download Brochure
//               </a>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// export default ProjectDetail;
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import "./ProjectDetail.css";
import { fetchFromStrapi } from "../../api/strapi";

/* =========================
   TYPES (MATCH STRAPI CLOUD)
========================= */

type ImageFormat = {
  url: string;
};

type StrapiMedia = {
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

type Project = {
  id: number;
  Title: string;
  slug: string;
  isFeatured: boolean;
  Cover_img: StrapiMedia;
  Gallary?: StrapiMedia[];
  Location: string;
  MapLink?: string;
  Current_Status: string;

  // Allow full Strapi rich text structure
Description: unknown[];
Amenities?: unknown[];
Locality?: unknown[];

  Brochure?: StrapiMedia[];
};

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [showAllImages, setShowAllImages] = useState(false);

  useEffect(() => {
    fetchFromStrapi("projects")
      .then((data: Project[]) => {
        const found = data.find(
          (item) => item.id === Number(id) || item.slug === id
        );

        if (!found) {
          setError("Project not found");
        } else {
          setProject(found);
        }

        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load project");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <section className="project-detail-section">
        <div className="project-detail-container">
          <p>Loading project...</p>
        </div>
      </section>
    );
  }

  if (error || !project) {
    return (
      <section className="project-detail-section">
        <div className="project-detail-container">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>
          <h2>{error}</h2>
        </div>
      </section>
    );
  }

  const coverImage =
    project.Cover_img?.formats?.large?.url ||
    project.Cover_img?.formats?.medium?.url ||
    project.Cover_img?.url;

  return (
    <section className="project-detail-section">
      <div className="project-detail-container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back to Projects
        </button>

        <h1 className="project-detail-title">{project.Title}</h1>

        {/* Cover Image */}
        {coverImage && (
          <img
            src={coverImage}
            alt={project.Cover_img?.alternativeText || project.Title}
            className="project-detail-image"
          />
        )}

        <div className="project-meta">
          <span>{project.Location}</span>
          <span>{project.Current_Status}</span>
        </div>

        {/* Description */}
        {project.Description && project.Description.length > 0 && (
          <section className="project-section">
            <h2>Description</h2>
            <BlocksRenderer content={project.Description as never} />
          </section>
        )}

        {/* Map */}
        {project.MapLink && (
          <section className="project-section">
            <h2>Location Map</h2>
            <div className="project-map-wrapper">
              <iframe
                src={project.MapLink}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title={`${project.Title} Location Map`}
              />
            </div>
          </section>
        )}

        {/* Amenities */}
        {project.Amenities && project.Amenities.length > 0 && (
          <section className="project-section">
            <h2>Amenities</h2>
  <BlocksRenderer content={project.Amenities as never} />
          </section>
        )}

        {/* Locality */}
        {project.Locality && project.Locality.length > 0 && (
          <section className="project-section">
            <h2>Locality</h2>
  <button className="locality-btn">
  <BlocksRenderer content={project.Locality as never} />
</button>
          </section>
        )}

        {/* Gallery */}
        {project.Gallary && project.Gallary.length > 0 && (
          <section className="project-section">
            <h2>Gallery</h2>

            <div className="project-gallery">
              {(showAllImages
                ? project.Gallary
                : project.Gallary.slice(0, 4)
              ).map((img) => {
                const galleryImg =
                  img.formats?.medium?.url || img.url;

                return (
                  <img
                    key={img.id}
                    src={galleryImg}
                    alt={img.alternativeText || project.Title}
                  />
                );
              })}
            </div>

            {project.Gallary.length > 4 && !showAllImages && (
              <button
                className="gallery-view-btn"
                onClick={() => setShowAllImages(true)}
              >
                View all photos ({project.Gallary.length})
              </button>
            )}
          </section>
        )}

        {/* Brochure */}
        {project.Brochure && project.Brochure.length > 0 && (
          <div className="project-brochure">
            {project.Brochure.map((file) => (
              <a
                key={file.id}
                href={file.url}
                target="_blank"
                rel="noreferrer"
              >
                Download Brochure
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectDetail;
