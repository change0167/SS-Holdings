import "./ProjectCard.css";

/* =========================
   TYPES
========================= */

type ProjectCardProps = {
  title: string;
  description: string;
  image?: string; // ✅ DIRECT IMAGE URL
  status?: string;
  onClick?: () => void;
};

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
        {image && (
          <img
            src={image} // ✅ STRAPI CLOUD CDN URL
            alt={title}
          />
        )}

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
