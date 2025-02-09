import styled from "styled-components";

const StyledAbout = styled.div`
    .heading-1 {
        font-size: 48px;
        font-weight: bold;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .text {
        font-family: "Poppins", sans-serif;
        font-size: 20px;
        font-weight: 500;
        animation: fadeInUp 0.8s ease-in-out;
        line-height: 150%;
        margin-top: 10px;
    }

    .profile-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .profile-picture {
        width: 250px; /* Adjust size as needed */
        height: 250px;
        border-radius: 10px; /* Makes it circular */
        overflow: hidden; /* Ensures the image doesn't spill out */
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Optional shadow */
        object-fit: cover; /* Ensures image covers the container without distortion */
    }
    `

export default StyledAbout;