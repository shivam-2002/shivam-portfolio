import styled from "styled-components";

const StyledAbout = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(250px, 0.8fr);
  align-items: center;
  column-gap: clamp(32px, 7vw, 92px);

  .eyebrow {
    grid-column: 1;
    display: flex;
    align-items: center;
    gap: 9px;
    margin-bottom: 20px;
    color: #bc4c35;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.6px;
  }

  .availability-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #639376;
    box-shadow: 0 0 0 4px #e1ece3;
  }

  .eyebrow-divider {
    color: #a9b4ac;
  }

  .heading-1 {
    grid-column: 1;
    max-width: 620px;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 72px;
    font-weight: 500;
    line-height: 0.98;
    letter-spacing: 0;
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
    grid-column: 1;
    max-width: 620px;
    color: #53635b;
    font-size: 16px;
    font-weight: 400;
    animation: fadeInUp 0.8s ease-out both;
    line-height: 1.75;
    margin-top: 24px;
  }

  .text p {
    margin: 0 0 14px;
  }

  .text p:last-child {
    margin-bottom: 0;
  }

  .text a {
    color: #bc4c35;
    font-weight: 600;
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;
  }

  .text a:hover {
    color: #8f3525;
  }

  .profile-container {
    grid-column: 2;
    grid-row: 1 / span 3;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: min(100%, 350px);
    justify-self: end;
    padding: 14px 14px 18px;
    background: #fff;
    border: 1px solid rgba(29, 41, 37, 0.08);
    box-shadow:
      18px 20px 0 #e7ece6,
      0 22px 55px rgba(29, 41, 37, 0.12);
    transform: rotate(2deg);
    animation: fadeInUp 0.8s 0.15s ease-out both;
  }

  .profile-picture {
    width: 100%;
    aspect-ratio: 0.9;
    border-radius: 2px;
    object-fit: cover;
    object-position: center 35%;
  }

  .portrait-caption {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 15px 5px 0;
    color: #1d2925;
  }

  .portrait-caption strong {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 18px;
    font-weight: 600;
  }

  .portrait-caption span {
    color: #64736c;
    font-size: 12px;
  }

  @media (max-width: 800px) {
    grid-template-columns: minmax(0, 1fr) minmax(190px, 0.65fr);
    column-gap: 32px;

    .profile-container {
      width: min(100%, 280px);
    }

    .text {
      font-size: 15px;
    }

    .heading-1 {
      font-size: 56px;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;

    .eyebrow,
    .heading-1,
    .text,
    .profile-container {
      grid-column: 1;
    }

    .profile-container {
      grid-row: auto;
      width: min(76%, 300px);
      margin: 38px auto 12px;
      justify-self: center;
    }

    .heading-1 {
      font-size: 48px;
    }
  }
`;

export default StyledAbout;
