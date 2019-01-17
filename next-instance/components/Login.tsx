import React from "react";

const Login = () => {
  return (
    <>
      <form id="login-form">
        <input type="email" name="email" placeholder="E-mail" />
        <input type="password" name="pass" placeholder="Password" />
        <a href="#" className="login-btn">
          Log in
        </a>
      </form>
    </>
  );
};


export default Login;
