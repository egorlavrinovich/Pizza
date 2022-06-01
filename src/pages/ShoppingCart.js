import React from "react";
import Header from "../components/header/header";
import { useSelector, useDispatch } from "react-redux";
import "../scss/app.scss";
const ShoppingCart = () => {
  const OrderedPizzes = useSelector((state) => state.shopcart.pizzas);
  console.log(OrderedPizzes);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        {/* {OrderedPizzes.length &&
          OrderedPizzes.map((item) => (
            <ul>
              <li key={item.id}>{item.name}</li>
            </ul>
          ))} */}
      </div>
    </div>
  );
};

export default ShoppingCart;
