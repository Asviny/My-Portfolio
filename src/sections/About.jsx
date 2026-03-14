import "./About.css";
import Resume from "../assets/pdf/Asviny_Kunasingam.pdf";
import React from "react";

const About = () => {
    const aboutContent = {
        heading: "About Me",
        intro: `I’m an Information Technology undergraduate and a passionate Full Stack Developer with experience in building modern web applications using React, Java, and Spring Boot. I enjoy developing responsive user interfaces and designing efficient backend systems that power scalable and reliable applications.

                I am interested in solving real-world problems through technology and continuously improving my skills in modern web development. I enjoy learning new tools and frameworks and building end-to-end applications that combine strong backend logic with intuitive user experiences.`,
        ctaText: "Download CV",
        ctaLink: {Resume},
    };

    
    return (
        <article className="about">
            <div className="about-container">
                <header className="about-header">
                    <h2 className="about-heading">{aboutContent.heading}</h2>
                </header>

                <div className="about-content-centered">
                    <p className="about-intro-text">{aboutContent.intro}</p>
                    <p className="about-background-text">{aboutContent.background}</p>

                    <div className="about-buttons">
                        <a href={Resume} className="about-btn primary" download>
                            Download CV
                        </a>
                        <a href={Resume}className="about-btn secondary" target="_blank" rel="noopener noreferrer">
                            View CV
                        </a>
                        
                    </div>
                </div>
            </div>
        </article>
    );
};

export default About;
