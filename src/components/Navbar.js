import "./Navbar.css"; // Make sure to import the new Navbar.css file

const Navbar = () => {
    return (
        <header className="header">
            <div className="container">
                <a className="title-text">
                    <a href="#home" className="text-xl">
                        Home
                    </a>   
                </a>

                <nav className="nav">
                    <a href="#about" className="nav-item">
                    About me
                    </a> 
                    <a href="#skills" className="nav-item">
                        Skills
                    </a>
                    <a href="#projects" className="nav-item">
                        Projects
                    </a>
                    <a href="#contact" className="nav-item">
                        Contact Me
                    </a>
                </nav>
            </div>
        </header>
    );
}
 
export default Navbar;