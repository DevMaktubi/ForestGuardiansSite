import React, { useState } from "react";

import { LoginContainer, LoginForm } from "./styles";
import logo from "../../assets/logo.png";

import api from "../../services/api";
const Homepage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const submitData = async (e) => {
    e.preventDefault();
    try {
      console.log(formData.username, formData.password);
      await api.post("/login", {
        loginName: formData.username,
        password: formData.password,
      });
      alert("Logado com sucesso!");
    } catch (err) {
      alert("erro: " + err.message);
    }
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
  };
  return (
    <LoginContainer>
      <img src={logo} alt="Forest Guardians Logo" />
      <div>
        <h1>Welcome back</h1>
        <p>Together, we will create a better future.</p>
        <LoginForm onSubmit={(e) => submitData(e)}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={onChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={onChange}
          />
          <h4 name="fpass">forgot password</h4>
          <button type="submit">Login</button>
        </LoginForm>
      </div>
    </LoginContainer>
  );
};

export default Homepage;
