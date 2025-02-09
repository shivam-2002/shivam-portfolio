import styled from "styled-components";

const StyledCertification = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    
    .sub-heading {
        font-size: 20px;
        color: #929fb3;
    }

    .heading-1 {
        font-size: 48px;
        font-weight: bold;
        margin: 10px 0px 20px 0px;
    }
    
    .slider {
        max-width: 90vw;
        width: 100%;
    }

    .image-container {
        max-width: 80vw; /* Parent takes full width */
        height: 100%; /* Adjust height as needed */
        display: flex; /* Ensures it behaves responsively */
        justify-content: center;
        align-items: center;
        overflow: hidden; /* Prevents overflow */
    }
    
    .img {
        max-width: 100vw;
        height: auto;
        object-fit: cover; /* Ensures the image fills the container */
    }
    
    `

export default StyledCertification;