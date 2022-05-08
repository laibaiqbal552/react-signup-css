import React from "react";
import SIgnInForm from "./SIgnInForm";
import WelcomeSection from "./../../WelcomeSection";
import "./../../../App.css";

const SignIn = () => {
  return (
    <div className="inner-container">
      <WelcomeSection />
      <SIgnInForm />
    </div>
  );
};

export default SignIn;
