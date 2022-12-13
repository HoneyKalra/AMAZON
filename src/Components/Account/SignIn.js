import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
function SignIn(props) {
  return (
    <>
      <Link to="/">
        <img
          src="./images/amazon-logo.png"
          alt="amazon logo"
          style={{
            margin: "-65px auto",
            height: "173px",
            width: "250px",
            display: "block",
          }}
        ></img>
      </Link>
      <div className="sign-in-container">
        <h1 style={{ fontWeight: "300", fontSize: "38px" }}>Sign in</h1>
        <br />
        <label htmlFor="email-number">Email or Mobile Phone Number</label>
        <br />
        <input
          type="text"
          name="input-search"
          style={{
            border: props.inpFocus ? "5px solid #e77600" : "1px solid #a6a6a6",
            width: "368px",
            height: "23px",
            padding: "3px 7px",
            borderRadius: "7px",
            borderTopColor: "#949494",
            outline: "0px",
            marginTop: "5px",
          }}
        ></input>
        <br />
        <button className="continue-btn">Continue</button>
        <h4 style={{ marginBottom: "25px" }}>
          By continuing you agree to Amazon's
          <span>Terms and Conditions of Use </span> and
          <span>Privacy Notice</span>
        </h4>
        <i className="fa fa-caret-right" style={{ fontSize: "24px" }}></i>
        <span>Need Help ?</span>
      </div>
      <div className="new-to-join">
        <hr></hr>
        <span style={{ color: "GrayText", marginTop: "-11px" }}>
          New to Amazon
        </span>
        <hr></hr>
      </div>
      <button className="create-account-btn">Create Your Amazon Accont</button>
    </>
  );
}
export default SignIn;
