import { CodeIcon } from "@heroicons/react/solid";
import './Projects.css'

const Projects = () => {
    return (
        <section id="projects">
            <div className="projects">
                <CodeIcon className="code-icon" />
                <h2 className="title">Projects</h2>
                <p className="descirption">All of my past work and projects will be posted here soon.</p>
            </div>
        </section>
    );
}
 
export default Projects;