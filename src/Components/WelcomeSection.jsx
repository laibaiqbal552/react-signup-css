import React from "react";
import Logo from "./../images/logo.png";
import ELFS from "./../images/ELFS.png";
const WelcomeSection = () => {
  return (
    <div className="left-section">
      <div>
        <div>
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <h2 className="Signup-heading ">Hello Again!</h2>
        <p className="signup-subHeading">Welcome back you’ve been missed</p>
        <div>
          <img src={ELFS} alt="logo" className="w-100 welcome-img" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
