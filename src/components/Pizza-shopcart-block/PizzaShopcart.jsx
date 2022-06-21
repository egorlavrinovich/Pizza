import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import PizzaShopCartItem from "./PizzaShopcartItem.jsx/PizzaShopCartItem";
import EmptyShopCart from "../../assets/img/EmptyShopCart.jpg";
import { Link } from "react-router-dom";
const PizzaShopcart = () => {
  const OrderedPizzes = useSelector((state) => state.shopcart.pizzas);
  const OrderedDrinks = useSelector((state)=>state.shopcart.drinks)
  return (
    <div className="shoppingcart">
      {OrderedPizzes.length||OrderedDrinks.length ? (
        OrderedPizzes.map((item, index) => (
          <PizzaShopCartItem key={index} item={item} index={index} />
        ))
        // Тут написать ф-цию map для DrinkCart
        
      ) : (
        <>
          <div className="emptycart">
            <h2>Ваша корзина пуста!</h2>
            <img src={EmptyShopCart} />
          </div>
          <Link to="/">
            <div className="button">За покупками</div>
          </Link>
          </>
      )}
    </div>
  );
};

export default PizzaShopcart;
