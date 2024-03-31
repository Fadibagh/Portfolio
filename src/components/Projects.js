import { CodeIcon } from "@heroicons/react/solid";
import './Projects.css'
import { projects } from "./Projects_array";

const Projects = () => {
    return (
        <section id="projects">

           <div className="intro-Projects">
                    <CodeIcon className="code-icon-Projects" />
                    <h2 className="title-Projects">Projects</h2>
            </div>

            <div className="container-Projects">

                

                <div className="display-Projects">

                    {projects.map((project) => (
                        <a
                            href={project.link}
                            key={project.image}
                            className="project-Projects">

                            <div className="section-Projects">
                                <img
                                    alt="gallery"
                                    className="image-section-Projects"
                                    src={`${process.env.PUBLIC_URL}/${project.image}`}
                                />
                                <div className="info-section-Projects">
                                    <h2 className="title-of-project-Projects">
                                        {project.title}
                                    </h2>
                                    <p className="description-Projects">{project.desctiption}</p>
                                </div>
                            </div>
                        </a>
                    ))}

                </div>

                <div>
                    <h3 className="GitHub-link-Projects">More projects included in my Github: <a href="https://github.com/Fadibagh">https://github.com/Fadibagh</a></h3>
                </div>

            </div>
        </section>
    );
}
 
export default Projects;