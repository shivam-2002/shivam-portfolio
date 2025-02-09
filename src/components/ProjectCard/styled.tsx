import styled from "styled-components";

const StyledProjectCart = styled.div`
    .project-card {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(15px);
        border-radius: 12px;
        box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    }

    .project-card:hover {
        transform: translateY(-8px);
        box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.3);
    }
    
    .responsive-video {
        width: 100%;
    }
    
    .gif {
        height: 100%;
    }

    .video-container {
        width: 100%;
        height: 200px;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;

        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .project-details {
        padding: 20px;
        text-align: center;
    }

    .project-title {
        font-size: 1.4rem;
        font-weight: bold;
        color: #fff;
        margin-bottom: 10px;
    }

    .project-description {
        font-size: 1rem;
        color: #ccc;
        margin-bottom: 15px;
    }

    .tech-stack {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        margin-bottom: 15px;
    }

    .tech-badge {
        background: #ff6b6b;
        color: white;
        padding: 6px 12px;
        border-radius: 6px;
        font-size: 0.9rem;
        font-weight: bold;
    }

    .project-links {
        display: flex;
        justify-content: space-around;
        margin-top: 10px;
    }

    .project-links a {
        display: flex;
        align-items: center;
        gap: 5px;
        color: #fff;
        text-decoration: none;
        font-size: 1rem;
        font-weight: bold;
        padding: 8px 12px;
        border-radius: 6px;
        transition: background 0.3s ease-in-out, transform 0.2s ease-in-out;
    }

    .demo-link {
        background: #4CAF50;
    }

    .github-link {
        background: #333;
    }

    .project-links a:hover {
        transform: scale(1.1);
    }
`;

export default StyledProjectCart;