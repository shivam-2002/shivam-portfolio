import React from 'react';
import StyledProject from "./styled";
import ProjectCard from "../ProjectCard";
import {projectAssets} from "../../constants/assets";

const Project = () => {
    const projects = [
        {
            title: "Online Compiler",
            description: "Built a dynamic compiler allowing users to write code, receive suggestions, and translate it into 5+ programming languages, achieving a 99.5% uptime",
            videoUrl: projectAssets.polyglotVideo, // Replace with actual video link
            demoLink: "https://polyglot.shivam-tech.in/",
            githubLink: "https://github.com/shivam-2002/polyglot-code-runner-frontend",
            techStack: ["React", "FastAPI", "Google Gemini", "AWS"],
        },
        {
            title: "Online Compiler (Android APP)",
            description: "Developed an Android app using Flutter, integrated with the same backend, providing a consistent user experience across platforms and hosted on Amazon App Store",
            videoUrl: projectAssets.polyglotGif, // Replace with actual video link
            demoLink: "https://www.amazon.com/dp/B0DDMYNDHG/ref=apps_sf_sta",
            githubLink: "",
            techStack: ["Flutter", "Fastapi", "Google Gemini", "AWS"],
        },
        {
            title: "Real-Time Chat Application ",
            description: "Built a real-time messaging platform using WebSocket, supporting concurrent users with zero downtime during testing and deployment.\n" +
                "Integrated Google SMTP for secure email verification and enabled seamless Google account login/signup functionality.",
            videoUrl: projectAssets.chatVideo, // Replace with actual video link
            demoLink: "https://chat.shivam-tech.in/",
            githubLink: "https://github.com/shivam-2002/chat",
            techStack: ["React", "Fastapi", "SMTP", "AWS"],
        },
        {
            title: "Ecommerce Website",
            description: "Developed a responsive website that allows users search products, filter it based on brand and price.",
            videoUrl: projectAssets.ecommerceVideo, // Replace with actual video link
            demoLink: "https://demoecommerce-ce0d9.web.app/",
            githubLink: "https://github.com/shivam-2002/Ecommerce/tree/master/ecommerce",
            techStack: ["Angular", "Tailwind", "Material UI", "Firebase",],
        },
    ];

    return (
        <StyledProject>
            <div className="sub-heading">MY WORKS...</div>
            <div className="heading-1">PROJECTS</div>
            <div className="sub-heading">
                The following projects showcase my skills and experience through real-world examples of my work.
                Each project is briefly described, with links to demos and source code.
                They highlight my ability to solve complex problems, work with various technologies, and manage projects
                effectively.
            </div>

            <div className="projects-container">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>

        </StyledProject>
    )
}

export default Project;
