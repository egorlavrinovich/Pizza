import React from "react";
import Header from "../components/header/header";
import { useSelector, useDispatch } from "react-redux";
import "../scss/app.scss";
import Svg from "../components/UI/svg/svg";
import { AddPizza, DeletePizza, ReducePizza } from "../redux/Slice/Price";
import PizzaShopcart from '../components/Pizza-shopcart-block/PizzaShopcart';
const ShoppingCart = () => {
  const OrderedPizzes = useSelector((state) => state.shopcart.pizzas);
  const dispatch = useDispatch();
  const AvailablePiezzes = useSelector((state) => state.shopcart.counterPizzes);
  return (
    <div className="wrapper">
      <Header />
      <PizzaShopcart/>
    </div>
  );
};

export default ShoppingCart;
