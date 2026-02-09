import { FaCode, FaServer, FaLightbulb, FaRocket, FaPaintRoller, FaProjectDiagram, FaGit, FaGithub, FaBusinessTime, FaPaintBrush, FaJava, FaJs, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiMongodb } from "react-icons/si";
import "./Skills.css";
import React from "react";

const Skills = () => {
    const skillsData = [

        {
            icon: <FaServer />,
            title: "Backend Development",
            description: "Building robust REST APIs and server-side applications with Java, Spring Boot, and databases like MongoDB and MySQL.",
        },
        {
            icon: <FaCode />,
            title: "Frontend Development",
            description: "Creating responsive, accessible, and performant user interfaces with React, TypeScript, and modern CSS.",
        },
        {
            icon: <FaGithub />,
            title: "Version Control",
            description: "Experienced in using Git and GitHub to manage code, track changes, and collaborate effectively.",
        },
        {
            icon: <FaBusinessTime />,
            title: "Management",
            description: "Understanding of HR, project, and marketing management concepts gained through academic research.",
        },

        {
            icon: <FaPaintBrush />,
            title: "Canva Design",
            description: "Creating simple and effective visual designs for academic and research presentations using Canva.",
        },
    ];

    const techStackData = [
        { icon: <FaJava />, name: "Java", color: "#007396" },
        { icon: <SiSpringboot />, name: "Spring Boot", color: "#6DB33F" },
        { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <SiMysql />, name: "MySQL", color: "#4479A1" },
        { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
        { icon: <FaReact />, name: "React", color: "#61DAFB" },
        { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
        { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
    ];

    return (
        <article className="skills">
            <div className="skills-container">
                <header className="skills-header">
                    <h2 className="skills-heading">My Skills</h2>
                </header>

                <div className="skills-grid">
                    {skillsData.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <div className="skill-icon">{skill.icon}</div>
                            <h3 className="skill-title">{skill.title}</h3>
                            <p className="skill-description">{skill.description}</p>
                        </div>
                    ))}
                </div>

                <header className="skills-header tech-stack-header">
                    <h2 className="skills-heading">Tech Stacks</h2>
                </header>

                <div className="tech-stack-grid">
                    {techStackData.map((tech, index) => (
                        <div className="tech-icon-wrapper" key={index} style={{ color: tech.color }}>
                            <div className="tech-icon">{tech.icon}</div>
                            <span className="tech-name">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default Skills;
