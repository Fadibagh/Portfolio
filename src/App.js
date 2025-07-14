import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import CurrentProject from "./components/CurrentProject";

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <CurrentProject />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
