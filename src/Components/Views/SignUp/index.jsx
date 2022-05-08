import React from "react";
import SignUpForm from "./SignUpForm";
import WelcomeSection from "../../WelcomeSection";
import "./../../../App.css";
import PopUp from "./PopUp";

const SignUp = () => {
  return (
    <div>
      <div className="inner-container">
        <WelcomeSection />
        <SignUpForm />
      </div>
      <div>
        <PopUp />
      </div>
    </div>
  );
};

export default SignUp;
