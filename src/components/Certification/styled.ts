import styled from "styled-components";

const StyledCertification = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  .sub-heading {
    color: #64736c;
    font-size: 15px;
    line-height: 1.7;
    text-align: center;
  }

  .heading-1 {
    margin: 0;
  }

  .slider {
    max-width: 760px;
    width: 100%;
    margin-top: 14px;
    overflow: hidden;
  }

  .image-container {
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .img {
    display: block;
    width: 100%;
    max-height: 470px;
    object-fit: contain;
    border: 1px solid #dce2dc;
    border-radius: 6px;
    background: #fff;
  }
`;

export default StyledCertification;
