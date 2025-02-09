import styled from "styled-components";

const StyledExperience =  styled.div`
    .sub-heading {
        font-size: 20px;
        color: #929fb3;
    }

    .heading-1 {
        font-size: 48px;
        font-weight: bold;
        margin: 10px 0px 20px 0px;
    }

    ul {
        display: flex;
        flex-direction: column; /* Ensures items stack vertically */
        gap: 10px; /* Adjust spacing between list items */
    }
    
    .company-name {
        margin-top: 5px;
        font-weight: 300;
    }
    
    `;

export default StyledExperience;