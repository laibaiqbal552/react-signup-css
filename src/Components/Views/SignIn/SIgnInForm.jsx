import React from "react";

const SignUpForm = () => {
  return (
    <div className="right-section">
      <div className="right-inner-section">
        <h1 className="signup-title">Log In</h1>
        <form autoComplete="off">
          <input
            type="text"
            placeholder="Enter  Username"
            className="signUp-input"
          />
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            className="signUp-input"
          />
          <br />
          <button type="button" value="Sign In" className="signUp-btn">
            Sign In
          </button>
          <p className="forgot-pass">Forgot Password</p>
        </form>
        <p className="if-already-sigup">
          Dont have an account?
          <a href="/signup" className="sign-btn">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
