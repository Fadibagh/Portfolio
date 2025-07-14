import "./Navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <a href="#home" className="title-text" onClick={closeMenu}>
          Fadi Baghdadi
        </a>

        <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
          <a href="#about" className="nav-item" onClick={closeMenu}>
            About me
          </a>
          <a href="#skills" className="nav-item" onClick={closeMenu}>
            Skills
          </a>
          <a href="#current-project" className="nav-item" onClick={closeMenu}>
            Current Project
          </a>
          <a href="#projects" className="nav-item" onClick={closeMenu}>
            Projects
          </a>
          <a href="#contact" className="nav-item" onClick={closeMenu}>
            Contact Me
          </a>
        </nav>

        <div
          className={`mobile-menu-btn ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
