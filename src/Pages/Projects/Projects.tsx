import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";
import { fetchFromStrapi } from "../../api/strapi";
import ProjectCard from "./ProjectCard";

/* =========================
<<<<<<< HEAD
   TYPES (MATCH STRAPI CLOUD)
=======
   TYPES
>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb
========================= */

type ImageFormat = {
  url: string;
<<<<<<< HEAD
=======
  width: number;
  height: number;
>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb
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
<<<<<<< HEAD
  Cover_img?: StrapiImage;
=======
  Cover_img: StrapiImage;
>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb
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
<<<<<<< HEAD
    (p) => p.Current_Status?.toLowerCase() === "ongoing"
  );

  const completedProjects = projects.filter(
    (p) => p.Current_Status?.toLowerCase() === "completed"
=======
    (p) => p.Current_Status.toLowerCase() === "ongoing"
  );

  const completedProjects = projects.filter(
    (p) => p.Current_Status.toLowerCase() === "completed"
>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb
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
<<<<<<< HEAD
                image={
                  project.Cover_img?.formats?.medium?.url ||
                  project.Cover_img?.url
                } // ✅ DIRECT STRAPI CLOUD URL
=======
                image={project.Cover_img}
>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb
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
<<<<<<< HEAD
                image={
                  project.Cover_img?.formats?.medium?.url ||
                  project.Cover_img?.url
                } // ✅ DIRECT STRAPI CLOUD URL
=======
                image={project.Cover_img}
>>>>>>> eea6b952463a57d7961d540f011ea1c291d971bb
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
