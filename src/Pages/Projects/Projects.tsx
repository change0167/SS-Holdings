import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";
import { fetchFromStrapi } from "../../api/strapi";
import ProjectCard from "./ProjectCard";

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
    small?: ImageFormat;
    medium?: ImageFormat;
  };
};

type RichTextBlock = {
  children: { text: string }[];
};

type Project = {
  id: number;
  Title: string;
  slug: string;
  Current_Status: string; // "Ongoing" | "Completed"
  Cover_img?: StrapiImage;
  Description: RichTextBlock[];
};

/* =========================
   HELPERS
========================= */

function extractText(blocks?: RichTextBlock[]) {
  if (!blocks) return "";
  return blocks
    .map((b) => b.children.map((c) => c.text).join(" "))
    .join(" ");
}

function Projects() {
  const navigate = useNavigate();

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFromStrapi("projects")
      .then((data: Project[]) => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load projects");
        setLoading(false);
      });
  }, []);

  const ongoingProjects = projects.filter(
    (p) => p.Current_Status?.toLowerCase() === "ongoing"
  );

  const completedProjects = projects.filter(
    (p) => p.Current_Status?.toLowerCase() === "completed"
  );

  return (
    <section id="projects">
      <div className="projects-section">
        <div className="projects-container">
          <div className="projects-header">
            <h2>Our Projects</h2>
            <p>
              A selection of projects showcasing our experience and expertise.
            </p>
          </div>

          {loading && <p>Loading projects...</p>}
          {error && <p>{error}</p>}

          {/* Ongoing */}
          <h3 className="projects-subheading">Ongoing Projects</h3>
          <div className="projects-grid">
            {ongoingProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.Title}
                description={extractText(project.Description)}
                image={
                  project.Cover_img?.formats?.medium?.url ||
                  project.Cover_img?.url
                } // ✅ DIRECT STRAPI CLOUD URL
                status={project.Current_Status}
                onClick={() =>
                  navigate(`/project/${project.slug || project.id}`)
                }
              />
            ))}
          </div>

          {/* Completed */}
          <h3 className="projects-subheading">Completed Projects</h3>
          <div className="projects-grid">
            {completedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.Title}
                description={extractText(project.Description)}
                image={
                  project.Cover_img?.formats?.medium?.url ||
                  project.Cover_img?.url
                } // ✅ DIRECT STRAPI CLOUD URL
                status={project.Current_Status}
                onClick={() =>
                  navigate(`/project/${project.slug || project.id}`)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
