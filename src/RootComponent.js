import React from "react";
import Navbar from "./Components/Nav/Navbar";
import SubNav from "./Components/Nav/SubNav";
import Offers from "./Components/ProductsInfo/Offers";
import Deals from "./Components/Deals/Deals";
import {
  products,
  yourLists,
  yourAccount,
  navItems,
  langOptions,
  deals,
} from "./Shared/Constants";
import ProductsBox from "./Components/ProductsInfo/ProductsBox";

function RootComponent(props) {
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
      <Offers />
      <ProductsBox products={products} />
      <Deals />
    </div>
  );
}
export default RootComponent;
