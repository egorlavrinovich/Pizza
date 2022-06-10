import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PizzaShopCartItem from "./PizzaShopcartItem.jsx/PizzaShopCartItem";
const PizzaShopcart = () => {
  const OrderedPizzes = useSelector((state) => state.shopcart.pizzas);

  return (
    <div className="shoppingcart">
      {OrderedPizzes.length &&
        OrderedPizzes.map((item, index) => (
          <PizzaShopCartItem key={index} item={item} index={index} />
        ))}{" "}
    </div>
  );
};

export default PizzaShopcart;
