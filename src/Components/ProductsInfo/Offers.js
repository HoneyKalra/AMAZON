import React, { useState } from "react";
import "./Offers.css";
function Offers() {
  return (
    <>
      <div className="products-offers">
        <div className="offers-info">
          <h2>
            Under
            <sup>
              <i className="fa fa-rupee"></i>
            </sup>
            1999
          </h2>
          <h2>Top rated Electronics </h2>
          <h2>& accessories</h2>
          <h4>Extra up to 10% off via coupons</h4>
          <div className="money-return">
            <div className="money">
              <i className="fa fa-money" style={{ fontSize: "24px" }}></i>{" "}
              <h5>PAY ON DELIVERY</h5>
            </div>
            <div className="return">
              <i className="fa fa-retweet" style={{ fontSize: "24px" }}></i>{" "}
              <h5>EASY RETURNS</h5>
            </div>
          </div>
        </div>
        <img
          src="./images/Gadgets.png"
          style={{
            width: "245px",
            height: "209px",
            marginLeft: "-74px",
            marginTop: "-75px",
          }}
        />
      </div>
    </>
  );
}
export default Offers;
