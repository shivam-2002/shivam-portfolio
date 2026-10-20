import styled from "styled-components";

const StyledExperience = styled.div`
  .sub-heading {
    margin-bottom: 12px;
    color: #bc4c35;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.6px;
  }

  .heading-1 {
    margin-bottom: 34px;
  }

  ul {
    display: flex;
    flex-direction: column; /* Ensures items stack vertically */
    gap: 10px; /* Adjust spacing between list items */
  }

  .company-name {
    margin-top: 5px;
    font-weight: 400;
  }

  .timeline-logo {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: transparent;
    background: repeating-linear-gradient(
      to bottom,
      #1f70c1 0,
      #1f70c1 2px,
      transparent 2px,
      transparent 3px
    );
    background-clip: text;
    -webkit-background-clip: text;
    font-family: Arial, sans-serif;
    font-size: 18px;
    font-weight: 900;
    letter-spacing: -1px;
    line-height: 1;
  }

  .vertical-timeline::before {
    background: #dce2dc;
  }

  .vertical-timeline-element-content {
    border: 1px solid rgba(29, 41, 37, 0.08);
    border-radius: 8px;
    box-shadow: 0 12px 30px rgba(29, 41, 37, 0.08);
  }

  .vertical-timeline-element-date {
    color: #53635b !important;
    opacity: 1;
  }

  .vertical-timeline-element-content p,
  .vertical-timeline-element-content li {
    line-height: 1.65;
  }

  @media (max-width: 800px) {
    .vertical-timeline-element-content {
      margin-left: 55px;
    }
  }
`;

export default StyledExperience;
