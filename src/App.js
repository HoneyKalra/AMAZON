import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootComponent from "./RootComponent";
import SignIn from "./Components/Account/SignIn";
import ProductsDetialsItem from "./Components/ProductsInfo/ProductsDetialsItem";
import Checkout from "./Components/ProductsInfo/CheckOut";

function App(props) {
  const [cartCount, setCartCount] = useState(0);
  const [inpFocus, setInpFocus] = useState(false);

  function getCount() {
    setCartCount((prevCount) => prevCount + 1);
  }

  function outsideInputclickHandler(event) {
    console.log(event.target.name);
    event.target.name === "input-search"
      ? setInpFocus(true)
      : setInpFocus(false);
  }

  return (
    <div
      className="App"
      name="App-container"
      onClick={outsideInputclickHandler}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RootComponent cartCount={cartCount} inpFocus={inpFocus} />
            }
          ></Route>
          <Route
            path="/SignIn"
            element={<SignIn inpFocus={inpFocus} />}
          ></Route>
          <Route
            path="/ProductsDetialsItem/:id"
            element={
              <ProductsDetialsItem
                getCount={getCount}
                cartCount={cartCount}
                inpFocus={inpFocus}
              />
            }
          ></Route>
          <Route path="/CheckOut" element={<Checkout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
