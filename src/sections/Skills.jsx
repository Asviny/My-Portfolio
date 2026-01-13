import { FaCode, FaServer, FaLightbulb, FaRocket, FaPaintRoller, FaProjectDiagram, FaGit, FaGithub } from "react-icons/fa";
import "./Skills.css";

const Skills = () => {
    const skillsData = [
       
        {
            icon: <FaServer />,
            title: "Backend Development",
            description: "Building robust REST APIs and server-side applications with JAVA ,Spring Boot, and databases like MongoDB and MySQL.",
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
            icon: <FaProjectDiagram />,
            title: "Management",
            description: "Understanding of HR, project, and marketing management concepts gained through academic research.",
        },
        
        {
            icon: <FaPaintRoller/>,
            title: "Canva Design",
            description: "Creating simple and effective visual designs for academic and research presentations using Canva.",
        },
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
            </div>
        </article>
    );
};

export default Skills;
