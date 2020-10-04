import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px 0 30px;
  img {
    width: 160px;
    height: 100px;
  }
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    margin-left: 100px;
    width: 920px;
    height: 70px;
    li {
      margin-right: 100px;
      font-size: 21px;
      text-align: center;
      font-family: "Raleway", sans-serif;
      color: #fff;
      font-weight: 600;
      letter-spacing: 0.055em;

      &:last-child {
        margin-right: 0;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
