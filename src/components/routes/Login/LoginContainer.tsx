import React from "react";
import Login from "./Login";

const LoginContainer = () => {
  const handleLoginSubmit = (e: any) => {
    e.preventDefault();
    alert("Logged in!");
  };

  return <Login handleLoginSubmit={handleLoginSubmit}></Login>;
};

export default LoginContainer;
