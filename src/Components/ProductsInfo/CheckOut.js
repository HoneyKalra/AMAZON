import "./CheckOut.css";
import Collapsible from "react-collapsible";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import {
  atmCardDetails,
  needHelpPara,
  personalInfo,
  savedAdress,
} from "../../Shared/Constants.js";
import { Link } from "react-router-dom";

export default function Checkout() {
  return (
    <div className="check-out">
      <div className="check-out-nav">
        <div className="check-out-logo">
          <Link to="/">
            <img
              src="./images/amazon-logo.png"
              alt="amazon logo"
              style={{
                marginTop: "-72px",
                marginLeft: "-143px",
                width: "250px",
              }}
            ></img>
          </Link>
        </div>
        <h1>Check Out</h1>
      </div>

      <Collapsible
        trigger={
          <>
            <div className="personal-info">
              <div className="check-out-head">
                <h3>1 Delivery Address</h3>
              </div>
              <div className="check-out-p-i">
                {personalInfo.map((value) => {
                  return <h3 id="p-i-adress">{value}</h3>;
                })}

                <p id="p-i-adress">
                  <a href="#" className="blue-text">
                    Add delivery instructions
                  </a>
                </p>
              </div>
              <div className="collapsible blue-text">
                <Collapsible trigger="Change"></Collapsible>
              </div>
            </div>
          </>
        }
      >
        {savedAdress.map((value) => {
          return (
            <>
              <div className="hidden-adress">
                <h3>{value.heading}</h3>
              </div>
              <div className="saved-adress">
                <input type="radio" />
                <h3>
                  {value.fullAdress}
                  <a className="blue-text">{value.link1}</a>|
                  <a className="blue-text">{value.link2}</a>
                </h3>
              </div>
            </>
          );
        })}
        <div style={{ margin: "30px 0px 0px 4px" }}>
          <AiOutlinePlus />
          <a className="blue-text">Add a new address</a>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <>
            <div className="personal-info">
              <div className="check-out-head">
                <h3>2 Payment method</h3>
              </div>
              <div className="check-out-p-i">
                <h3>
                  <MdOutlineKeyboardArrowDown />
                  Add a gift card or promotion code
                  <br />
                  <input type="text" placeholder="Enter Code" id="code-input" />
                  <button id="code-btn">Apply</button>
                </h3>
              </div>
              <div className="collapsible blue-text">
                <Collapsible trigger="Change"></Collapsible>
              </div>
            </div>
          </>
        }
      >
        <div className="hidden-adress">
          <h3>Your available balance</h3>

          <div style={{ marginTop: "5px" }}>
            <input type="checkbox"></input>
            <span style={{ color: "black", fontSize: "17px" }}>
              Use your 8060.70 Amazon Pay balance
            </span>
          </div>
        </div>
        <div style={{ margin: "15px 0px 20px 4px" }}>
          <AiOutlinePlus />
          <input type="text" id="payment-input" placeholder="Enter Code" />
          <button id="code-btn">Apply</button>
        </div>
        <div className="hidden-adress">
          <h3>Another payment method</h3>
        </div>
        {atmCardDetails.map((value, i) => {
          return (
            <>
              <div className="saved-adress">
                <input type="radio" />
                <h3>{value.heading}</h3>
              </div>
              <h3>
                {value.sub}
                <a className="blue-text">{value.link}</a>
              </h3>
              <img src={value.img} className="payment-img" />
            </>
          );
        })}
      </Collapsible>
      <div className="personal-info" style={{ height: "50px" }}>
        <h3>3 Offers</h3>
      </div>
      <div className="personal-info">
        <h3>4 Review items and delivery</h3>
      </div>
      <div
        className="personal-info"
        style={{
          height: "200px",
          width: "700px",
          display: "inline-block",
          fontSize: "12px",
          border: "none",
          textAlign: "left",
        }}
      >
        {needHelpPara.map((value) => (
          <h3>{value}</h3>
        ))}
      </div>
      <div className="place-order">
        <div className="down-border">
          <button id="place-order-btn">Place your Order</button>
          <h3
            id="p-i-adress"
            style={{ fontSize: "12px", textAlign: "center", marginTop: "10px" }}
          >
            By placing your order, you agree to Amazon's
          </h3>
          <h3 id="p-i-adress" style={{ fontSize: "12px", textAlign: "center" }}>
            privacy notice and conditions of use.
          </h3>
        </div>
        <div className="down-border">
          <h3>Order Summary</h3>
          <h3 id="p-i-adress">
            <div className="order-details">
              <h4>items:</h4>

              <h4 id="float-price">₹799.00</h4>
            </div>
          </h3>
          <h3 id="p-i-adress">
            <div className="order-details">
              <h4>Delivery:</h4>
              <h4 id="float-price">₹40.00</h4>
            </div>
          </h3>
          <h3 id="p-i-adress">
            <div className="order-details">
              <h4>Total:</h4>
              <h4 id="float-price">₹799.00</h4>
            </div>
          </h3>
          <h3 id="p-i-adress">
            <div className="order-details">
              <h4>Promotion Applied:</h4>
              <h4 id="float-price">₹-40.00</h4>
            </div>
          </h3>
        </div>
        <div className="down-border">
          <p style={{ margin: "0px", paddingTop: "20px", color: "#cc0c39" }}>
            <div className="order-details">
              <h2 style={{ color: "brown" }}> Order Total: </h2>
              <h2 style={{ color: "brown" }} id="float-price">
                ₹799.00
              </h2>
            </div>
          </p>
        </div>

        <div className="cost-div">
          <p>
            <a href="#">How are delivery costs calculated?</a>
          </p>
        </div>
      </div>
    </div>
  );
}
