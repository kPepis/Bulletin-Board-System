import React from "react";

const Register = () => {
  return (
    <div>
      <form id="registration-form">
        <input type="email" name="email" placeholder="E-mail" />
        <input
          type="passwordnext-instance/Prisma/MongoDB"
          name="pass"
          placeholder="Password"
        />
        <input type="password" name="repass" placeholder="Repeat password" />
        <a href="#" className="login-btn" id="signup-btn">
          Sign Up
        </a>
      </form>
    </div>
  );
};

export default Register;
