import styled from "styled-components";

const StyledProjectCart = styled.div`
  .project-card {
    height: 100%;
    background: #fff;
    border: 1px solid #dce2dc;
    border-radius: 8px;
    box-shadow: 0 10px 28px rgba(29, 41, 37, 0.06);
    overflow: hidden;
    transition:
      transform 220ms ease,
      box-shadow 220ms ease;
  }

  .project-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 34px rgba(29, 41, 37, 0.11);
  }

  .responsive-video {
    width: 100%;
  }

  .gif {
    height: 100%;
  }

  .video-container {
    width: 100%;
    height: 220px;
    background: #e8ece8;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .responsive-video,
  .gif {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .project-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    text-align: left;
  }

  .project-title {
    font-size: 1.4rem;
    font-weight: bold;
    color: #1d2925;
    margin-bottom: 10px;
  }

  .project-description {
    font-size: 1rem;
    color: #64736c;
    line-height: 1.6;
    white-space: pre-line;
    margin-bottom: 15px;
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 8px;
    margin-bottom: 15px;
  }

  .tech-badge {
    background: #edf1ec;
    color: #40584a;
    padding: 5px 9px;
    border-radius: 4px;
    font-size: 0.78rem;
    font-weight: 600;
  }

  .project-links {
    display: flex;
    justify-content: flex-start;
    gap: 9px;
    margin-top: 10px;
  }

  .project-links a {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #1d2925;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    padding: 8px 12px;
    border-radius: 5px;
    transition:
      background 180ms ease,
      transform 180ms ease;
  }

  .demo-link {
    background: #e7efe8;
  }

  .github-link {
    background: #f0efeb;
  }

  .project-links a:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    .video-container {
      height: 190px;
    }
  }
`;

export default StyledProjectCart;
