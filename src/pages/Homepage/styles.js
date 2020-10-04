import styled from "styled-components";

export const TextContainer = styled.div`
  display: flex;
  height: 517px;
  flex: 1;
  justify-content: center;
  align-items: center;
  div {
    width: 800px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-family: "Raleway";
      font-weight: 800;
      text-align: center;
      line-height: 83px;
      font-size: 70px;
      color: #fff;
    }
    p {
      font-family: "Raleway";
      font-weight: 600;
      width: 634px;
      height: 130px;
      text-align: center;
      color: #fff;
      font-size: 22px;
      letter-spacing: 0.055em;
    }
  }
`;
