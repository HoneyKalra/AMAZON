import Stars from "../Reviews/Stars";
import Navbar from "../Nav/Navbar";
import SubNav from "../Nav/SubNav";
import FAQ from "./FAQ";
import "./ProductsDetialsItem.css";
import { CiDiscount1 } from "react-icons/ci";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  yourLists,
  yourAccount,
  langOptions,
  navItems,
} from "../../Shared/Constants";

import { useParams } from "react-router-dom";
import { productsData } from "../../Shared/Constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductsDetialsItem(props) {
  const [productDetail, setProductDetail] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    let product = productsData.filter((product) => {
      return product.id == id;
    });

    setProductDetail(product[0]);
  });
  console.log(productDetail);

  function countUpdater() {
    console.log("function called");
    props.getCount();
  }

  return (
    <div>
      <Navbar
        yourLists={yourLists}
        yourAccount={yourAccount}
        langOptions={langOptions}
        cartCount={props.cartCount}
        inpFocus={props.inpFocus}
      />
      <SubNav navItems={navItems} />
      <div className="contanier">
        <div className="mainImg">
          <img src={productDetail.img}></img>
        </div>
        <div className="products_Info">
          <h1>{productDetail.heading}</h1>

          <a className=" links">{productDetail.links}</a>
          <br />
          <br />

          <Stars
            numStars={productDetail.stars}
            reviews={productDetail.reviews}
          />
          <div id="item_price">
            <span id="discount">{productDetail.discount}</span>
            <sup>{productDetail.rupee}</sup>
            <span id="price_rate">{productDetail.item_Price}</span>
            <sup>00</sup>
            <br />
            <span id="mrp">{productDetail.mrp}</span>
            <br />
            <span id="mrp_sub">{productDetail.mrp_sub}</span>
          </div>
          <div className="offers">
            <div className="first_offer">
              <CiDiscount1 id="discount_icon" />
              <span id="subtitles">
                <b>Save Extra </b>
                with 3 offers
              </span>
            </div>
            <div className="second_offer">
              <span id="subtitles">
                <b>No Cost EMI:</b>
              </span>
              Avail No Cost EMI on select cards for orders above ₹3000
            </div>
            <div className="second_offer">
              <span id="subtitles">
                <b>Bank Offer:</b>
                <b>5% Instant Discount up to INR 250 on HSBC Credit Card</b>
              </span>
            </div>
            <div className="third_offer">
              <a>See 1 more</a>
            </div>
          </div>
          <div className="return_icon_img">
            <div className=" icons">
              <center>
                <img src="/images/amazonDelivery.png" />
              </center>
              <span className="delivery_sub">Free Delivery</span>
            </div>
            <div className=" icons_2">
              <center>
                <img src="/images/return.png" />
              </center>
              <span className="delivery_sub">10 days Returns & Exchange</span>
            </div>
            <div className=" icons_3">
              <center>
                <img src="/images/warranty.png" />
              </center>
              <span className="delivery_sub">1 Year Warranty</span>
            </div>
          </div>
          <div className="size_Detials">
            <h2 style={{ margin: "10px auto" }}>About this item :</h2>
            {productDetail.about && (
              <ul>
                {productDetail.about.map((item) => (
                  <li
                    style={{
                      color: "black",
                      listStyleType: "disc",
                      maxWidth: "100%",
                      fontSize: "17px",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="cart_Box">
          <span id="price_rate">
            <sup>{productDetail.rupee}</sup>
            {productDetail.item_Price}
            <sup>00</sup>
          </span>
          <div className="delivery_Date">
            <span>
              <a className="links">Free Delivery</a> <b>Monday,21 November</b>.
              Order within <span id="green_char">18 hrs 8 mins.</span>
            </span>
          </div>
          <span>
            <HiOutlineLocationMarker />
            <a href="#" className="links">
              Select Your Location
            </a>
          </span>
          <br />
          <br />

          <span id="green_char1">In stock.</span>
          <div href="#" className="delivery_Date">
            <span>
              Sold by
              <a href="#" className="links">
                SXV STYLE®
              </a>
              and
              <a href="#" className="links">
                Fulfilled by Amazon.
              </a>
            </span>
          </div>
          <span>Quantity:</span>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <div className=" btn_buy">
            <button id="btn_add" onClick={countUpdater}>
              Add to Cart
            </button>
            <Link to="/CheckOut">
              <button id="btn_buy">Buy Now</button>
            </Link>
          </div>
          <div id="input_check">
            <input type="checkbox" />
            Add gift options
          </div>
          <button id="add_wish">Add to Wish List</button>
        </div>
      </div>
      <FAQ />
    </div>
  );
}
