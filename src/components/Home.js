import "./Home.css"


const Home = () => {
  return (
  <section id="home">
    <div className="intro">
      <h1 className="Welcome">Welcome To My Portfolio</h1>
      <h2 className="name"><b>My name is Fadi Baghdadi</b> 👋</h2>
      <a href={`${process.env.PUBLIC_URL}/resumeMarch2024.pdf`} download>
        <button className="resume">
          Download CV
        </button>
      </a>
    </div>
    <div className="Image-section">
      <img 
        className="guy-coding"
        alt = "guy-coding"
        src={`${process.env.PUBLIC_URL}/guycoding4.jpg`}
      />
    </div>
  </section>
  )
};

export default Home;