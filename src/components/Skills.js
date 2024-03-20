import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import './Skills.css'
import { skills } from "./skills_array";


const Skills = () => {
    return (
        <section id="skills" classname="container">
            <div>
                <ChipIcon className="icon mb-4" />
                <h1 className="title mb-4">
                Skills & Technologies
                </h1>
                {/* <p className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
                ipsa delectus eum quo voluptas aspernatur accusantium distinctio
                possimus est.
                </p> */}
            </div>
            <div className="skills-wrapper">
                {skills.map((skill, index) => (
                <div key={index} className="skill">
                    <BadgeCheckIcon className="skill-icon" />
                    <span className="skill-text">
                    {skill}
                    </span>
                </div>
                ))}
            </div>
        </section>
    );
}
 
export default Skills;