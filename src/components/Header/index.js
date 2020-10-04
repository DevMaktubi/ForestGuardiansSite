import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "../LoginButton";
import { HeaderContainer } from "./styles";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Forest Guardians Logo" />
      <ul>
        <li>
          <Link to="/panel" style={{ textDecoration: "none", color: "#FFF" }}>
            Fire Panel
          </Link>
        </li>
        <li>
          <Link
            to="environment"
            style={{ textDecoration: "none", color: "#FFF" }}
          >
            Environmental impact
          </Link>
        </li>
        <li>
          <Link to="about" style={{ textDecoration: "none", color: "#FFF" }}>
            About us
          </Link>
        </li>
      </ul>
      <LoginButton />
    </HeaderContainer>
  );
};

export default Header;
