import styled from "styled-components";

const StyledContact = styled.div`
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

    .contact-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        padding: 15px;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        width: 300px;
        margin: auto;
    }

    .contact-item {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 18px;
    }

    .contact-item a {
        text-decoration: none;
        color: #FFFFFF;
        transition: color 0.3s ease-in-out;
    }

    .contact-item a:hover {
        color: #FFFFFF; /* LinkedIn blue */
    }

    .icon {
        font-size: 20px;
    }
    
    `

export default StyledContact;