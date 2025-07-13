import "./About.css";
import {
  BookOpenIcon,
  AcademicCapIcon,
  CodeIcon,
  HeartIcon,
} from "@heroicons/react/solid";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-header">
          <BookOpenIcon className="about-icon" />
          <h2 className="about-title">About Me</h2>
        </div>

        <div className="about-content">
          <p className="about-text">
            As a Computer Science student at Memorial University of Newfoundland
            with a Business minor, I've immersed myself in the intersection
            where technology meets practical problem-solving. Driven by a
            passion for tackling complex challenges, I chose computer science to
            sharpen my analytical mind across diverse domains.
          </p>

          <p className="about-text">
            Beyond coding and algorithms, I maintain a balanced lifestyle
            through soccer, music, and culinary experimentation. These diverse
            interests fuel my creativity and problem-solving approach. I believe
            in learning through experience, exploring different paths, and
            continuously evolving both personally and professionally.
          </p>

          <div className="about-highlights">
            <div className="highlight-card">
              <AcademicCapIcon className="highlight-icon" />
              <h3 className="highlight-title">Education</h3>
              <p className="highlight-text">
                Computer Science Major with a Minor in Business at Memorial
                University
              </p>
            </div>

            <div className="highlight-card">
              <CodeIcon className="highlight-icon" />
              <h3 className="highlight-title">Passion</h3>
              <p className="highlight-text">
                Full-stack development and innovative problem-solving
              </p>
            </div>

            <div className="highlight-card">
              <HeartIcon className="highlight-icon" />
              <h3 className="highlight-title">Interests</h3>
              <p className="highlight-text">
                Soccer, music, cooking, and continuous learning
              </p>
            </div>

            <div className="highlight-card">
              <BookOpenIcon className="highlight-icon" />
              <h3 className="highlight-title">Approach</h3>
              <p className="highlight-text">
                Learning by doing and exploring diverse solutions
              </p>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Learning</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects Built</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
