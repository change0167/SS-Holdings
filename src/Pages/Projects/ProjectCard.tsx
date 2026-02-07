import "./ProjectCard.css";

/* =========================
   TYPES
========================= */

<<<<<<< HEAD
type ProjectCardProps = {
  title: string;
  description: string;
  image?: string; // ✅ DIRECT IMAGE URL
=======
type ImageFormat = {
  url: string;
  width: number;
  height: number;
};

type StrapiImage = {
  url: string;
  alternativeText: string | null;
  formats?: {
    small?: ImageFormat;
    medium?: ImageFormat;
  };
};

type ProjectCardProps = {
  title: string;
  description: string;
  image: StrapiImage;
>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb
  status?: string;
  onClick?: () => void;
};

<<<<<<< HEAD
=======
const STRAPI_URL = "http://localhost:1337";

>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb
function ProjectCard({
  title,
  description,
  image,
  status,
  onClick,
}: ProjectCardProps) {
  return (
    <div
      className="project-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
    >
      <div className="project-card-image">
<<<<<<< HEAD
        {image && (
          <img
            src={image} // ✅ STRAPI CLOUD CDN URL
            alt={title}
          />
        )}
=======
        <img
          src={`${STRAPI_URL}${
            image.formats?.medium?.url || image.url
          }`}
          alt={image.alternativeText || title}
        />
>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb

        {status && (
          <span className={`project-badge ${status.toLowerCase()}`}>
            {status}
          </span>
        )}
      </div>

      <div className="project-card-body">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
