import styled from "styled-components";

const StyledSkill = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    .sub-heading {
        font-size: 20px;
        color: #929fb3;
    }

    .heading-1 {
        font-size: 48px;
        font-weight: bold;
        margin: 10px 0px 20px 0px;
    }

    .skills-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 25px;
    }

    .skill-card {
        padding: 10px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(15px);
        border-radius: 12px;
        box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 280px;
    }

    .skill-card:hover {
        transform: translateY(-8px);
        box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.3);
    }

    /* styles.css */
    .skill-bar-container {
        position: relative;
        width: 100%;
        height: 14px;
        background-color: #e2e8f0; /* Light gray */
        border-radius: 9999px;
        overflow: hidden;
    }

    .skill-bar {
        height: 100%;
        background: linear-gradient(to right, #3b82f6, #2563eb); /* Blue gradient */
        border-radius: 9999px;
        transition: width 1s ease-in-out;
    }

    .skill-name {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 5px;
        color: #FFF; /* Dark Gray */
    }
    
    .mb-4 {
        width: 100%;
    }
    `

export default StyledSkill;