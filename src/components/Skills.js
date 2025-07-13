import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import "./Skills.css";
import { skills } from "./skills_array";

const Skills = () => {
  // Categorized skills for clearer organization
  const skillCategories = {
    "Programming Languages": [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C",
    ],
    "Frontend Development": [
      "React",
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
    ],
    "Backend Development": ["Node.js", "Express", "Django", "Spring Boot"],
    "Mobile Development": ["Flutter", "Angular"],
    Databases: ["MongoDB", "MySQL", "PostgreSQL"],
    "Cloud & DevOps": ["AWS", "Supabase", "Heroku", "Vercel", "Docker"],
    Tools: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
  };

  return (
    <section id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <ChipIcon className="skills-icon" />
          <h2 className="skills-title">Skills & Technologies</h2>
          <p className="skills-subtitle">
            A comprehensive overview of my technical expertise and the tools I
            use to bring ideas to life
          </p>
        </div>

        <div className="skills-grid">
          {Object.entries(skillCategories).map(
            ([category, skillList], index) => (
              <div key={category} className="skill-category">
                <h3 className="category-title">
                  <BadgeCheckIcon className="category-icon" />
                  {category}
                </h3>
                <div className="skills-list">
                  {skillList.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <BadgeCheckIcon className="skill-icon" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        <div className="skills-stats">
          <div className="stat-card">
            <div className="stat-number">3+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">6+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">10+</div>
            <div className="stat-label">Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
