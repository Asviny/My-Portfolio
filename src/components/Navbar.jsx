import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaCode, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

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

    // Toggle theme
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Apply theme class to document
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.remove("light-theme");
            document.documentElement.classList.add("dark-theme");
        } else {
            document.documentElement.classList.remove("dark-theme");
            document.documentElement.classList.add("light-theme");
        }
    }, [isDarkMode]);

    // Load saved theme on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light") {
            setIsDarkMode(false);
        }
    }, []);

    // Save theme preference
    useEffect(() => {
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

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

                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                    >
                        {isDarkMode ? <FaSun /> : <FaMoon />}
                    </button>

                    <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
