import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  height: 627px;
  flex: 1;
  img {
    position: absolute;
    width: 160px;
    height: 100px;
    top: 10px;
    left: 30px;
  }
  div {
    width: 642px;
    height: 470px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin: 0 auto;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    h1 {
      font-family: "Raleway", sans-serif;
      font-size: 46px;
      font-weight: 800;
      line-height: 54px;
      text-align: center;
      color: #fff;
      margin-top: 30px;
    }
    p {
      font-family: "Raleway", sans-serif;
      font-size: 23px;
      line-height: 27px;
      text-align: center;
      margin-top: 30px;
      color: #fff;
    }
  }
`;

export const LoginForm = styled.form`
  height: 285px;
  width: 450px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  input {
    width: 450px;
    height: 50px;
    font-family: "Raleway", sans-serif;
    font-size: 18px;
    border: 1px solid #b6b6b6;
    border-radius: 5px;
    background: #fff;
    color: #3a3a3a;
    margin-bottom: 30px;
    padding: 0px 10px 0px 10px;
  }
  h4 {
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #fff;
    text-align: center;
    margin-bottom: 35px;
    cursor: pointer;
  }
  button {
    width: 180px;
    height: 45px;
    border: 0;
    border-radius: 10px;
    color: #fff;
    font-weight: bold;
    font-family: "Raleway", sans-serif;
    font-size: 22px;
    background-color: #282e00;
    text-decoration: none;
    align-self: center;
  }
`;
