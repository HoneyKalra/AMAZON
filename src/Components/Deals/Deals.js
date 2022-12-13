import React from "react";
import Stars from "../Reviews/Stars";
import "./Deals.css";
import { deals } from "../../Shared/Constants";
import { Link } from "react-router-dom";

function Deals(props) {
  return (
    <div className="Deals-container">
      {deals.map((dealItem) => (
        <Link to={`/ProductsDetialsItem/ ${dealItem.id}`}>
          <div className="Deals-info">
            <img
              className="Deal-img"
              src={dealItem.image}
              alt="products pictures"
            ></img>

            <div
              style={{
                height: "65px",
                paddingLeft: "5px",
                paddingTop: "5px",
              }}
            >
              <h3>{dealItem.description}</h3>
            </div>

            <Stars numStars={dealItem.stars} reviews={dealItem.reviews} />
            <div
              style={{
                height: "45px",
                display: "flex",
                paddingTop: "10px",
                marginBottom: "15px",
              }}
            >
              <div className="Discount-info">{dealItem.off}</div>
              <span
                style={{
                  color: "red",
                  paddingTop: "11px",
                  fontWeight: "bolder",
                }}
              >
                {dealItem.dealDay}
              </span>
            </div>
            <span
              style={{
                fontSize: "21px",
                color: "black",
                marginRight: "5px",
                marginLeft: "-101px",
              }}
            >
              <i class="fa fa-rupee"></i> {dealItem.discountedPrice}
              <sup>00</sup>
            </span>
            <span
              style={{
                fontSize: "12px",
                color: "black",
                marginRight: "5px",
              }}
            >
              M.R.P:
            </span>
            <span
              style={{
                fontSize: "12px",
                color: "black",
                textDecoration: "line-through",
              }}
            >
              {dealItem.MRP}
              <sup>00</sup>
            </span>
            <p className="Delivery">{dealItem.delivery}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default Deals;
