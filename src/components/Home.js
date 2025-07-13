import "./Home.css";

const Home = () => {
  return (
    <section id="home">
      {/* Floating background elements */}
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>

      <div className="home-container">
        <div className="intro">
          <img
            className="small-profile-pic"
            alt="Fadi Baghdadi"
            src={`${process.env.PUBLIC_URL}/personalPhoto2.jpg`}
          />
          <span className="greeting">Hello, I'm</span>
          <h1 className="name">Fadi Baghdadi</h1>
          <h2 className="title">Full Stack Developer & Software Engineer</h2>
          <p className="description">
            I create innovative web solutions and build exceptional digital
            experiences. Passionate about clean code, user experience, and
            cutting-edge technologies.
          </p>
          <div className="cta-buttons">
            <a
              href={`${process.env.PUBLIC_URL}/resumeFadiBaghdadi.pdf`}
              download
            >
              <button className="resume">📄 Download Resume</button>
            </a>
            <a href="#contact">
              <button className="contact-btn">💬 Get In Touch</button>
            </a>
          </div>
        </div>

        <div className="image-section">
          <img
            className="personal-photo"
            alt="Fadi Baghdadi - Full Stack Developer"
            src={`${process.env.PUBLIC_URL}/personalPhoto2.jpg`}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
