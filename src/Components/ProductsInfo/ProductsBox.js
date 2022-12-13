import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductsBox.css";

function ProductsBox(props) {
  const navigate = useNavigate();
  //Row 1st Products filtered//
  const filteredRow1 = props.products.filter((item) => {
    return item.id <= 3;
  });
  //Row 2nd Products filtered//
  const filteredRow2 = props.products.filter((item) => {
    return item.id > 3;
  });
  //Function which can Map any array//
  function boxShow(arrayToMap) {
    return arrayToMap.map((product) =>
      product.categoryImage1 ? (
        <div className="product-box" key={product.id}>
          <h2 class="box-h2">{product.title}</h2>
          <div className="short-images">
            <img src={product.categoryImage1} className="short-square-imgs" />
            <p className="image-description">{product.categoryDescription1}</p>
          </div>
          <div className="short-images">
            <img src={product.categoryImage2} className="short-square-imgs " />
            <p className="image-description">{product.categoryDescription2}</p>
          </div>
          <div className="short-images">
            <img src={product.categoryImage3} className="short-square-imgs" />
            <p className="image-description">{product.categoryDescription3}</p>
          </div>
          <div className="short-images">
            <img src={product.categoryImage4} className=" short-square-imgs" />
            <p className="image-description">{product.categoryDescription4}</p>
          </div>
          <a href="#" className="anchorOfProducts">
            {product.link}
          </a>
        </div>
      ) : (
        <div className="product-box" key={product.id}>
          <h2 class="box-h2">{product.title}</h2>
          <img src={product.image} className="big-image" />
          <a href="#" className="anchorOfProducts">
            {product.link}
          </a>
        </div>
      )
    );
  }
  return (
    <>
      <div className="products-show1">
        {boxShow(filteredRow1)}
        <div className="signin-laptop">
          <div className="sign-in">
            <h2>Sign in for your best </h2>
            <h2>experience</h2>
            <button onClick={() => navigate("/SignIn")} className="sign-btn">
              Sign in securely
            </button>
          </div>
          <img
            src="./images/Laptops.jpg"
            style={{ height: "201px", width: "281px", marginTop: "13px" }}
          />
        </div>
      </div>
      <div className="products-show2">{boxShow(filteredRow2)}</div>
    </>
  );
}
export default ProductsBox;
