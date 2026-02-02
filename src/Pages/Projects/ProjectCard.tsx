import "./ProjectCard.css";

/* =========================
   TYPES
========================= */

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
  status?: string;
  onClick?: () => void;
};

const STRAPI_URL = "http://localhost:1337";

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
        <img
          src={`${STRAPI_URL}${
            image.formats?.medium?.url || image.url
          }`}
          alt={image.alternativeText || title}
        />

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
