import styled from "styled-components";

const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .sub-heading {
    max-width: 720px;
    color: #64736c;
    font-size: 15px;
    line-height: 1.7;
  }

  .heading-1 {
    margin: 0 0 2px;
  }

  .projects-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 22px;
    margin-top: 14px;
  }

  @media (max-width: 680px) {
    .projects-container {
      grid-template-columns: 1fr;
    }
  }
`;

export default StyledProject;
