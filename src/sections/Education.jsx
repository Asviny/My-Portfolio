import { FaGraduationCap, FaSchool, FaCertificate } from "react-icons/fa";
import "./Education.css";

const Education = () => {
    const educationData = [
        {
            id: 1,
            icon: <FaGraduationCap />,
            degree: "Bachelor of Information Technology",
            institution: "University of Colombo School of Computing",
            duration: "2023 -Present(2027)",
            description: "UCSC undergraduate passionate about backend development and web technologies.",
        },
        {
            id: 2,
            icon: <FaCertificate />,
            degree: "Higher National Diploma in Business Management",
            institution: "Esoft University Jaffna",
            duration: "2025 - Present(2027)",
            description: "Currently pursuing Pearson BTEC Level 5 HND in Business Management.",
        },
        // {
        //     id: 3,
        //     icon: <FaCertificate />,
        //     degree: "Full Stack Web Development Boot Camp",
        //     institution: "Online Academy",
        //     duration: "2022",
        //     description: "Intensive training in modern web development frameworks and practices.",
        // },
    ];

    return (
        <article className="education">
            <div className="education-container">
                <header className="education-header">
                    <h2 className="education-heading">Education</h2>
                </header>

                <div className="education-grid">
                    {educationData.map((edu) => (
                        <div className="education-card" key={edu.id}>
                            <div className="education-icon">{edu.icon}</div>
                            <div className="education-info">
                                <h3 className="education-degree">{edu.degree}</h3>
                                <p className="education-institution">{edu.institution}</p>
                                <p className="education-duration">{edu.duration}</p>
                                <p className="education-description">{edu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default Education;
