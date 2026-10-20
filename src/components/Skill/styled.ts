import styled from "styled-components";

const StyledSkill = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .sub-heading {
    color: #64736c;
    font-size: 15px;
    line-height: 1.7;
  }

  .heading-1 {
    margin: 0;
  }

  .skills-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
    margin-top: 14px;
  }

  .skill-card {
    padding: 22px;
    background: #fff;
    border: 1px solid #dce2dc;
    border-radius: 7px;
    box-shadow: 0 8px 24px rgba(29, 41, 37, 0.05);
    min-width: 0;
    color: #1d2925;
  }

  .skill-card h3 {
    margin: 0 0 16px;
    color: #1d2925;
    font-size: 16px;
    font-weight: 700;
  }

  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .skill-tag {
    padding: 7px 10px;
    border: 1px solid #dce7dd;
    border-radius: 4px;
    background: #f1f5f0;
    color: #40584a;
    font-size: 13px;
    font-weight: 600;
    line-height: 1.2;
  }

  @media (max-width: 520px) {
    .skills-container {
      grid-template-columns: 1fr;
    }
  }
`;

export default StyledSkill;
