import React from 'react';
import StyledContact from "./styled";

import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <StyledContact>
            <div className="heading-1">Get in Touch</div>
            <div className="sub-heading">Feel free to reach out for collaborations or just a friendly chat! 🚀</div>
            <div className="contact-container">
                <div className="contact-item">
                    <FaEnvelope className="icon"/>
                    <a href="mailto:rahul.shivam64@gmail.com">rahul.shivam64@gmail.com</a>
                </div>
                <div className="contact-item">
                    <FaPhone className="icon"/>
                    <a href="tel:+917737722736">+91 7737722736</a>
                </div>
                <div className="contact-item">
                    <FaLinkedin className="icon"/>
                    <a
                        href="https://www.linkedin.com/in/shivam-kumar-4a7227192/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://www.linkedin.com/in/shivam-kumar-4a7227192/
                    </a>
                </div>
            </div>
        </StyledContact>
    )
}

export default Contact;
