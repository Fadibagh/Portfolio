import { CodeIcon } from "@heroicons/react/solid";
import "./Projects.css";
import { projects } from "./Projects_array";

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <CodeIcon className="projects-icon" />
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">
            A showcase of my recent work, demonstrating my skills in full-stack
            development, UI/UX design, and problem-solving abilities
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              href={project.link}
              key={project.image}
              className="project-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt={project.title}
                className="project-image"
                src={`${process.env.PUBLIC_URL}/${project.image}`}
              />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.desctiption}</p>

                <div className="project-tech">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <span className="project-link">🔗 View Project</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="github-section">
          <h3 className="github-title">More Projects on GitHub</h3>
          <a
            href="https://github.com/Fadibagh"
            className="github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            📁 Explore My GitHub Repository
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
