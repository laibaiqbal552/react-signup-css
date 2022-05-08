import React from "react";

const SignUpForm = () => {
  return (
    <div className="right-section">
      <div className="right-inner-section">
        <h1 className="signup-title">Sign Up</h1>
        <form autoComplete="off">
          <input
            type="text"
            placeholder="Enter  Username"
            className="signUp-input"
          />
          <br />
          <input
            type="email"
            placeholder="manpreetkaur0699@gmail.com"
            className="signUp-input"
          />
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            className="signUp-input"
          />
          <br />
          <input
            type="password"
            placeholder="Re-Enter Password"
            className="signUp-input"
          />
          <br />
          <button type="button" value="Sign Up" className="signUp-btn">
            Sign Up
          </button>
          <p className="forgot-pass">Forgot Password</p>
        </form>
        <p className="if-already-sigup">
          Having an account?{" "}
          <a href="/" className="sign-btn">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
