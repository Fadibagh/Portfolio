import { CodeIcon } from "@heroicons/react/solid";
import './Projects.css'
import { projects } from "./Projects_array";

const Projects = () => {
    return (
        <section id="projects">
           
            <div className="container">

                <div className="intro">
                    <CodeIcon className="code-icon" />
                    <h2 className="title">Projects</h2>
                </div>

                <div className="display">

                    {projects.map((project) => (
                        <a
                            href={project.link}
                            key={project.image}
                            className="project">

                            <div className="section">
                                <img 
                                    alt="gallery"
                                    className="image-section"
                                    // src={project.image}
                                    src={`${process.env.PUBLIC_URL}/${project.image}`}
                                />
                                <div className="info-section">
                                    <h2 className="title-of-project">
                                        {project.title}
                                    </h2>
                                    <p className="description">{project.desctiption}</p>
                                </div>
                            </div>
                        </a>
                    ))}

                </div>

                <div>
                    <h2>More projects included in my Github: <a href="https://github.com/Fadibagh">https://github.com/Fadibagh</a></h2>
                </div>

            </div>
        </section>
    );
}
 
export default Projects;