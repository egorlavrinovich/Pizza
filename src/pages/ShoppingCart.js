import React from "react";
import Header from "../components/header/header";
import "../scss/app.scss";
import PizzaShopcart from '../components/Pizza-shopcart-block/PizzaShopcart';
const ShoppingCart = () => {
  return (
    <div className="wrapper">
      <Header />
      <PizzaShopcart/>
    </div>
  );
};

export default ShoppingCart;
