import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const personalInfo = {
        name: 'Asviny Kunasingam',
        role: 'BackendDeveloper',
    };

    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/Asviny', icon: <FaGithub /> },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/asviny-kunasingam-?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BpVlnEcniR7CecBE9yfcG%2Fg%3D%3D', icon: <FaLinkedin /> },
        { name: 'Email', url: 'mailto:asvinyksingam@gmail.com', icon: <FaEnvelope /> },
    ];

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Left: Brand */}
                <div className="footer-brand">
                    <span className="footer-name">{personalInfo.name}</span>
                    <span className="footer-divider">|</span>
                    <span className="footer-role">{personalInfo.role}</span>
                </div>

                {/* Center: Copyright */}
                <p className="footer-copyright">
                    © {currentYear} All rights reserved.
                </p>

                {/* Right: Social Icons */}
                <div className="footer-social-icons">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            className="footer-social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
