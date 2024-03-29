import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import './Skills.css'
import { skills } from "./skills_array";


const Skills = () => {
    return (
        <section id="skills" classname="container">
            
            <ChipIcon className="icon" />
            <h2 className="title">
            Skills & Technologies
            </h2>
                
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