import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import StyledProjectCart from "./styled";
import {projectAssets} from "../../constants/assets";

interface ProjectCardProps {
    title: string;
    description: string;
    videoUrl: string;
    demoLink: string;
    githubLink: string;
    techStack: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
                                                     title,
                                                     description,
                                                     videoUrl,
                                                     demoLink,
                                                     githubLink,
                                                     techStack,
                                                 }) => {
    const isGif = videoUrl.toLowerCase().endsWith(".gif");

    // Check if the media is a video
    const isVideo = /\.(mp4|mov|webm)$/i.test(videoUrl);

    return (
        <StyledProjectCart>
            <div className="project-card">
                <div className="video-container">
                    {isGif ? (
                        <iframe
                            src={videoUrl}
                            className="gif"
                            frameBorder="0"
                            scrolling="no"
                            allowFullScreen
                        ></iframe>
                    ) : isVideo ? (
                        <video className="responsive-video" muted autoPlay loop playsInline>
                            <source src={videoUrl} type="video/mp4" />
                            <source src={videoUrl} type="video/quicktime" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <p>Unsupported media format</p>
                    )}
                </div>
                <div className="project-details">
                    <h3 className="project-title">{title}</h3>
                    <p className="project-description">{description}</p>
                    <div className="tech-stack">
                        {techStack.map((tech, index) => (
                            <span key={index} className="tech-badge">{tech}</span>
                        ))}
                    </div>
                    <div className="project-links">
                        <a href={demoLink} target="_blank" rel="noopener noreferrer" className="demo-link">
                            <FaExternalLinkAlt/> Live Demo
                        </a>
                        {githubLink &&
                            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                                <FaGithub/> GitHub
                            </a>}
                    </div>
                </div>
            </div>
        </StyledProjectCart>
    );
};

export default ProjectCard;