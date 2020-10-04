import { createGlobalStyle } from "styled-components";
import Background from "../assets/Background.png";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    --webkit-font-smoothing: antialiased;
    background: rgba(0,0,0,0.8) url(${Background}) no-repeat  ;
    background-size: 100% 768px
  }
  button,input {
    cursor: pointer;
    font-family: 'Raleway', sans-serif;
  }
`;

export default GlobalStyle;
