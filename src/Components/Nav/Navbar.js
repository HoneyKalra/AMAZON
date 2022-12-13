import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import SignIn from "../Account/SignIn";
import "./Navbar.css";

function Navbar(props) {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [enteredInput, setEnteredInput] = useState("");
  const [signInMsg, setSignInMsg] = useState(false);
  const [langSelector, setLangSelector] = useState(false);

  function handleSelectChange(event) {
    setCategory(event.target.value);
  }
  function handleInputChange(event) {
    setEnteredInput(event.target.value);
  }

  function showSignInMsg() {
    setSignInMsg(true);
  }
  function hideSignInMsg() {
    setSignInMsg(false);
  }
  function languageSelector() {
    setLangSelector(true);
  }

  return (
    <>
      <div className="order-searchbar">
        <Link to="/">
          <div className="amazon-logo">
            <img
              src="/images/logo.svg"
              className="amz-logo"
              alt="amazon logo"
            ></img>
            <span className="ind">.in</span>
          </div>
        </Link>
        <a href="#">
          <div className="location">
            <i
              className="fa fa-map-marker loc-icon"
              style={{ color: "white" }}
            ></i>
            <span className="hello">Hello</span>
            <span className="address">Select your address</span>
          </div>
        </a>
        <div
          className="select-items"
          style={{ backgroundColor: props.inpFocus && "#f90" }}
        >
          <select
            className="custom-select"
            value={category}
            onChange={handleSelectChange}
          >
            <option value="All">All</option>
            <option value="Apps">Apps</option>
            <option value="Games">Games</option>
            <option value="Clothes">Clothes</option>
            <option value="A-pay">A-pay</option>
          </select>
          <input
            className="search-input"
            name="input-search"
            type="text"
            value={enteredInput}
            onChange={handleInputChange}
          ></input>
          <button type="button" className="srch-btn">
            <i
              className="fa fa-search"
              style={{ fontSize: "24px", color: "black" }}
            ></i>
          </button>
        </div>
        <a href="#">
          <div
            className="flag-lang"
            onMouseLeave={() => setLangSelector(false)}
            onMouseOver={languageSelector}
            style={{ position: "relative" }}
          >
            <img
              src="/images/in.svg"
              style={{
                width: "35px",
                height: "28px",
                paddingLeft: "7px",
                marginTop: "17px",
              }}
              alt="indian flag"
            />
            <i
              className="fa fa-angle-down arrow-position"
              style={{ fontSize: "15px", color: "white" }}
            ></i>
            {langSelector && (
              <div className="lang-shower">
                {props.langOptions.map((language) => (
                  <div style={{ marginBottom: "20px", display: "flex" }}>
                    <input
                      className="radio-btn"
                      type="radio"
                      name="language"
                    ></input>
                    <span style={{ color: "black", fontSize: "18px" }}>
                      {language}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </a>

        <a href="#">
          <div onMouseLeave={hideSignInMsg} style={{ position: "relative" }}>
            <div className="acc-signin" onMouseOver={showSignInMsg}>
              <p>Hello,sign in </p>
              <p className="p-bold">
                Acconts & Lists
                <i
                  className="fa fa-angle-down"
                  style={{ fontSize: "15px", color: "white" }}
                ></i>
              </p>
            </div>

            {signInMsg && (
              <div className="sign-in-box">
                <div style={{ margin: "20px auto" }}>
                  <button
                    onClick={() => navigate("/SignIn")}
                    className="sign-in-btn"
                  >
                    Sign in
                  </button>

                  <div>
                    <h4 style={{ color: "black", marginTop: "5px" }}>
                      New Customer ?
                      <Link to="/SignUp">
                        <span style={{ color: "blue", marginLeft: "5px" }}>
                          start here
                        </span>
                      </Link>
                    </h4>
                  </div>
                  <div className="list-account">
                    <div className="your-list">
                      <h2 style={{ color: "black", marginLeft: "-184px" }}>
                        Your Lists
                      </h2>

                      {props.yourLists.map((item) => (
                        <ul
                          style={{
                            paddingLeft: "5px",
                            marginBottom: "5px",
                            height: "32px",
                            width: "100%",
                          }}
                        >
                          <a href="#">
                            <li
                              style={{
                                color: "black",
                                paddingLeft: "3px",
                                fontSize: "18px",
                                maxWidth: "157px",
                              }}
                            >
                              {item}
                            </li>
                          </a>
                        </ul>
                      ))}
                    </div>

                    <div className="your-account">
                      <h2 style={{ marginLeft: "7px" }}>Your Account</h2>

                      {props.yourAccount.map((item) => (
                        <ul
                          style={{
                            paddingLeft: "5px",
                            marginBottom: "5px",
                            height: "32px",
                            width: "100%",
                          }}
                        >
                          <a href="#">
                            <li
                              style={{
                                color: "black",
                                paddingLeft: "3px",
                                fontSize: "18px",
                                maxWidth: "300px",
                              }}
                            >
                              {item}
                            </li>
                          </a>
                        </ul>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </a>

        <a href="#">
          <div>
            <p>Returns</p>
            <p className="p-bold">& Orders</p>
          </div>
        </a>
        <div className="cart">
          <img
            src="/images/amz-shopping-cart.png"
            style={{ height: "34px", width: "55px", marginTop: "7px" }}
            alt="cart"
          />
          <p className="cart-num">{props.cartCount}</p>
          <p className="p-cart">Cart</p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
