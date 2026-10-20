import styled from "styled-components";

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .sub-heading {
    max-width: 560px;
    color: #64736c;
    font-size: 15px;
    line-height: 1.7;
  }

  .heading-1 {
    margin: 0;
  }

  .contact-container {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 8px 18px;
    background: #fff;
    border: 1px solid #dce2dc;
    border-radius: 7px;
    box-shadow: 0 10px 26px rgba(29, 41, 37, 0.06);
    width: min(100%, 560px);
    margin: 8px 0 0;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 14px;
    min-height: 58px;
    border-bottom: 1px solid #edf0ec;
    font-size: 14px;
  }

  .contact-item:last-child {
    border-bottom: 0;
  }

  .contact-item a {
    text-decoration: none;
    color: #40584a;
    overflow-wrap: anywhere;
    text-decoration: none;
    transition: color 180ms ease;
  }

  .contact-item a:hover {
    color: #bc4c35;
  }

  .icon {
    flex: 0 0 auto;
    color: #bc4c35;
    font-size: 17px;
  }
`;

export default StyledContact;
