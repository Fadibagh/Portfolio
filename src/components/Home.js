import "./Home.css"

const Home = () => {
  return (
  <section id="home">
    <div>
      <h1>Welcome To My Portfolio</h1>
      <h2><b>My name is Fadi Baghdadi</b> 👋</h2>
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
