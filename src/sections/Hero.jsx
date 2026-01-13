import "./Hero.css";
import heroImg from "../assets/images/as.jpg"

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <p className="hero-greeting">Hello, I'm</p>
                    <h1 className="hero-name">Asviny Kunasingam</h1>
                    <h2 className="hero-title">Backend Developer</h2>
                    <p className="hero-description">
                        I build modern, scalable web applications with passion and precision. 
                        I’m a backend developer specializing in REST API development using Spring Boot, with secure authentication and authorization powered by JWT and Spring Security
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="hero-btn primary">View Projects</a>
                        <a href="#contact" className="hero-btn secondary">Contact Me</a>
                    </div>
                </div>
                <div className="hero-image-container">
                    <div className="hero-image-wrapper">
                        <img src={heroImg} alt="Asviny Kunasingam" className="hero-image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
