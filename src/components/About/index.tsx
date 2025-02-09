import React from 'react';
import StyledAbout from "./styled";
import {aboutAssets} from "../../constants/assets";

const About = () => {
    return (
        <StyledAbout>
            <div className="heading-1">Hello, I'm Shivam</div>
            <div className="text">
                Passionate and results-driven Software Developer with expertise in building
                scalable and high-performance web applications. Proficient in modern technologies
                like ReactJS, FastAPI, Angular, NodeJS, and SQL, with a strong focus on optimizing
                performance and delivering seamless user experiences. <br/><br/>

                With hands-on experience at Vatic AI and Amazon, I have contributed to projects
                that improved API efficiency, enhanced campaign management, and built innovative
                solutions for millions of users. I thrive in collaborative environments, solving
                complex problems, and continuously expanding my technical skill set. <br/><br/>

                I hold a B.Tech in Computer Science & Engineering from Lovely Professional University
                (2023), where I gained a strong foundation in software development through academic
                projects and real-world applications. Always eager to innovate, I am committed to
                leveraging technology to create meaningful impact.
            </div>

            <div className="profile-container">
                <img src={aboutAssets.profile} alt="Profile" className="profile-picture"/>
            </div>

        </StyledAbout>
    )
}

export default About;
