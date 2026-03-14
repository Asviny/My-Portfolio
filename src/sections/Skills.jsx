import { FaJava, FaJs, FaReact, FaHtml5, FaCss3Alt, FaPhp, FaWordpress, FaNodeJs } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiMongodb } from "react-icons/si";
import Twemoji from "../components/Twemoji";
import "./Skills.css";
import React from "react";

const Skills = () => {
    const skillsData = [

        {
            icon: "💻",
            title: "Backend Development",
            description: "Building robust REST APIs and server-side applications with Java, Spring Boot, Node.js and databases like MongoDB and MySQL.",
        },
        {
            icon: "⚛️",
            title: "Frontend Development",
            description: "Creating responsive, accessible, and performant user interfaces with React, TypeScript, and modern CSS.",
        },
        {
            icon: "🔀",
            title: "Version Control",
            description: "Experienced in using Git and GitHub to manage code, track changes, and collaborate effectively.",
        },
        {
            icon: "📊",
            title: "Management",
            description: "Understanding of HR, project, and marketing management concepts gained through academic research.",
        },

        {
            icon: "🎨",
            title: "Web Design",
            description: "Creating simple and effective visual designs for academic and research presentations using Wordpress and Canva .",
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
        { icon: <FaPhp />, name: "PHP", color: "#777BB4" },
        { icon: <FaWordpress />, name: "WordPress", color: "#21759B" },
        { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
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
                            <div className="skill-icon">
                                <Twemoji emoji={skill.icon} size="2.5rem" />
                            </div>
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
