import React from "react";
import mailbox from "./../../../images/Group 1.png";

const PopUp = () => {
  return (
    <div>
      <div className="popup-box">
        <div className="inner-box">
          <div>
            <img src={mailbox} alt="" className="box-img" />
          </div>
          <p className="verification">
            We have sent you a verification code on your entered email address.
            In case you can't find the code, be sure to check your spam box
          </p>
          <div id="form">
            <input
              type="text"
              maxLength="1"
              size="1"
              min="0"
              max="9"
              pattern="[0-9]{1}"
            />
            <input
              type="text"
              maxLength="1"
              size="1"
              min="0"
              max="9"
              pattern="[0-9]{1}"
            />
            <input
              type="text"
              maxLength="1"
              size="1"
              min="0"
              max="9"
              pattern="[0-9]{1}"
            />
            <input
              type="text"
              maxLength="1"
              size="1"
              min="0"
              max="9"
              pattern="[0-9]{1}"
            />
            <input
              type="text"
              maxLength="1"
              size="1"
              min="0"
              max="9"
              pattern="[0-9]{1}"
            />
            <input
              type="text"
              maxLength="1"
              size="1"
              min="0"
              max="9"
              pattern="[0-9]{1}"
            />
          </div>
          <a href="/">
            <div className="verify-btn ">Verify the code</div>
          </a>
          <p className="did-not-recive">Did not receive the code?</p>
          <a href="/" className="resend">
            Resend Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
