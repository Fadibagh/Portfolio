import {
  SparklesIcon,
  LightningBoltIcon,
  UserGroupIcon,
  CogIcon,
} from "@heroicons/react/solid";
import "./CurrentProject.css";

const CurrentProject = () => {
  // Set this to true when you have a video file, and update the videoFileName
  const hasVideo = true; // Change to true when you add your video
  const videoFileName = "OwemDemo.mov"; // Change to your actual video filename

  const features = [
    {
      icon: <SparklesIcon className="feature-icon" />,
      title: "AI-Powered OCR",
      description:
        "GPT-4 Vision automatically scans and parses receipts with intelligent item extraction",
    },
    {
      icon: <LightningBoltIcon className="feature-icon" />,
      title: "Swipe-to-Split",
      description:
        "Card-stack interface - swipe left (friends), right (me), up (split), down (skip)",
    },
    {
      icon: <UserGroupIcon className="feature-icon" />,
      title: "Social-First Design",
      description:
        "Friend-based tabs with real-time expense tracking and transparent debt management",
    },
    {
      icon: <CogIcon className="feature-icon" />,
      title: "Item-Level Control",
      description:
        "Split individual receipt items with granular control - not just bill totals",
    },
  ];

  const techStack = [
    "Flutter",
    "Dart",
    "Supabase",
    "PostgreSQL",
    "OpenAI GPT-4",
    "Material 3",
    "Provider Pattern",
    "Real-time WebSockets",
  ];

  return (
    <section id="current-project">
      <div className="current-project-container">
        <div className="current-project-header">
          <div className="status-badge">
            <span className="status-dot"></span>
            Currently Building
          </div>
          <h2 className="current-project-title">
            OWEM - Expense Splitting App
          </h2>
          <p className="current-project-subtitle">
            Flutter app that transforms expense splitting through AI-powered
            receipt scanning and an intuitive card-swipe interface for
            item-level allocation
          </p>
        </div>

        <div className="current-project-content">
          <div className="project-overview">
            <div className="overview-text">
              <h3 className="section-title">The Problem I'm Solving</h3>
              <p className="overview-description">
                Current expense splitting apps are frustratingly limited - they
                only split by total amounts, have poor UX, and lack granular
                control. OWEM aims to improve this with{" "}
                <strong>item-level splitting</strong>,
                <strong>AI-powered receipt scanning</strong>, and a{" "}
                <strong>social-first design</strong> that makes expense
                management elegant and transparent.
              </p>

              <div className="key-innovation">
                <h4 className="innovation-title">💡 Core Feature</h4>
                <p className="innovation-text">
                  Intuitive <strong>swipe-to-allocate system</strong> - swipe
                  receipt items left for friends, right for yourself, up to
                  split, or down to skip. No complex forms, just simple gestures
                  that feel natural.
                </p>
              </div>

              <div className="features-section">
                <h3 className="section-title">Key Features</h3>
                <div className="features-grid">
                  {features.map((feature, index) => (
                    <div key={index} className="feature-card">
                      {feature.icon}
                      <h4 className="feature-title">{feature.title}</h4>
                      <p className="feature-description">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="demo-section">
              {hasVideo ? (
                <div className="video-container">
                  <video
                    className="demo-video"
                    controls
                    poster={`${process.env.PUBLIC_URL}/OwemPoster.jpg`}
                    preload="metadata"
                  >
                    <source
                      src={`${process.env.PUBLIC_URL}/${videoFileName}`}
                      type="video/quicktime"
                    />
                    <source
                      src={`${process.env.PUBLIC_URL}/${videoFileName}`}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className="video-caption">
                    <h4>OWEM Live Demo</h4>
                    <p>See the swipe-to-split interface in action</p>
                  </div>
                </div>
              ) : (
                <div className="demo-placeholder">
                  <div className="demo-content">
                    <div className="demo-icon">📱</div>
                    <h4>Demo Video</h4>
                    <p>Coming Soon</p>
                    <div className="demo-note">
                      Interactive demo showcasing the swipe-to-split interface
                      and AI receipt scanning
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="tech-and-progress">
            <div className="tech-stack-section">
              <h3 className="section-title">Technology Stack</h3>
              <div className="tech-stack">
                {techStack.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="progress-section">
              <h3 className="section-title">Development Progress</h3>
              <div className="progress-items">
                <div className="progress-item completed">
                  <div className="progress-icon">✅</div>
                  <div className="progress-content">
                    <h4>MVP Foundation</h4>
                    <p>
                      Authentication, friendship system, tab management,
                      transaction CRUD
                    </p>
                  </div>
                </div>
                <div className="progress-item current">
                  <div className="progress-icon">🔄</div>
                  <div className="progress-content">
                    <h4>Receipt Integration</h4>
                    <p>
                      Connecting receipt flow to backend, transaction generation
                    </p>
                  </div>
                </div>
                <div className="progress-item upcoming">
                  <div className="progress-icon">📋</div>
                  <div className="progress-content">
                    <h4>AI Integration</h4>
                    <p>
                      OpenAI API integration, image processing, premium features
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentProject;
