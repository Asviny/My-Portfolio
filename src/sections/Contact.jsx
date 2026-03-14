import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import Twemoji from "../components/Twemoji";
import "./Contact.css";
import React from "react";

const Contact = () => {
    const contactInfo = [
        {
            id: 1,
            icon: <SiGmail style={{ color: '#EA4335' }} />,
            label: "Email",
            value: "asvinyksingam@gmail.com",
            link: "mailto:asvinyksingam@gmail.com",
        },
        {
            id: 2,
            icon: <FaPhoneAlt style={{ color: '#25D366' }} />,
            label: "Phone",
            value: "+94 74 117 6343",
            link: "tel:+94741176343",
        },
        {
            id: 3,
            icon: "📍",
            isEmoji: true,
            label: "Location",
            value: "Jaffna, Sri Lanka",
            link: "https://maps.google.com/?q=Jaffna,Sri+Lanka",
        },
    ];

    return (
        <article className="contact">
            <div className="contact-container">
                <header className="contact-header">
                    <h2 className="contact-heading">Get In Touch</h2>
                    <p className="contact-subtext">
                        Feel free to reach out for collaborations or just a friendly hello!
                    </p>
                </header>

                <div className="contact-grid">
                    {contactInfo.map((info) => (
                        <a
                            href={info.link}
                            key={info.id}
                            className="contact-card"
                            target={info.id === 3 ? "_blank" : undefined}
                            rel={info.id === 3 ? "noopener noreferrer" : undefined}
                        >
                            <div className="contact-icon">
                                {info.isEmoji ? <Twemoji emoji={info.icon} size="2.2rem" /> : info.icon}
                            </div>
                            <div className="contact-info-text">
                                <span className="contact-label">{info.label}</span>
                                <p className="contact-value">{info.value}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default Contact;
