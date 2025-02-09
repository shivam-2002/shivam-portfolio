import styled from "styled-components";

const StyledProject = styled.div`
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

    .projects-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 25px;
    }
    
    `

export default StyledProject;