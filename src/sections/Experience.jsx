import { FaBriefcase, FaCode, FaLaptopCode } from "react-icons/fa";
import "./Experience.css";
import React from "react";

const Experience = () => {
    const experienceData = [
        {
            id: 1,
            icon: <FaBriefcase />,
            role: "Backend developer - Intern",
            company: "Samuel Gnanam IT centre.",
            duration: "Sep 2025 - Mar 2026",
            description: "Developing scalable web applications using React and Springboot. Coordinating with design teams to implement user-friendly interfaces.",
        },
        // {
        //     id: 2,
        //     icon: <FaLaptopCode />,
        //     role: "Junior Developer",
        //     company: "Startup Hub",
        //     duration: "2022 - 2023",
        //     description: "Assisted in the maintenance and development of various client projects. Focused on frontend optimization and responsive design.",
        // },
        // {
        //     id: 3,
        //     icon: <FaCode />,
        //     role: "Web Development Intern",
        //     company: "Digital Agency",
        //     duration: "2021 - 2022",
        //     description: "Supported the development team in building landing pages and integrating APIs for small business clients.",
        // },
    ];

    return (
        <article className="experience">
            <div className="experience-container">
                <header className="experience-header">
                    <h2 className="experience-heading">Experience</h2>
                </header>

                <div className="experience-grid">
                    {experienceData.map((exp) => (
                        <div className="experience-card" key={exp.id}>
                            <div className="experience-icon">{exp.icon}</div>
                            <div className="experience-info">
                                <h3 className="experience-role">{exp.role}</h3>
                                <p className="experience-company">{exp.company}</p>
                                <p className="experience-duration">{exp.duration}</p>
                                <p className="experience-description">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default Experience;
