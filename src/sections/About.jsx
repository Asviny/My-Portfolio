import "./About.css";
import Resume from "../assets/pdf/Asviny Kunasingam (3).pdf";
import React from "react";

const About = () => {
    const aboutContent = {
        heading: "About Me",
        intro: `cd.`,
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
