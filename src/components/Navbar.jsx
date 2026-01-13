import { useState, useEffect } from "react";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {


    const navLinks = [
        { name: "Home", url: "#home" },
        { name: "About", url: "#about" },
        { name: "Experience", url: "#experience" },
        { name: "Education", url: "#education" },
        { name: "Skills", url: "#skills" },
        { name: "Projects", url: "#projects" },
        { name: "Contact", url: "#contact" },
    ];


    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };



    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#home" className="navbar-logo" onClick={closeMobileMenu}>
                    <div className="navbar-logo-hexagon">
                        <FaCode className="navbar-logo-icon" />
                    </div>
                    <span>Portfolio</span>
                </a>

                <div className="navbar-right">
                    <ul className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.url} className="navbar-link" onClick={closeMobileMenu}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>






                    <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
