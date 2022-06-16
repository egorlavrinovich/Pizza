import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import PizzaShopCartItem from "./PizzaShopcartItem.jsx/PizzaShopCartItem";
import EmptyShopCart from "../../assets/img/EmptyShopCart.jpg";
const PizzaShopcart = () => {
  const OrderedPizzes = useSelector((state) => state.shopcart.pizzas);
  return (
    <div className="shoppingcart">
      {OrderedPizzes.length ? (
        OrderedPizzes.map((item, index) => (
          <PizzaShopCartItem key={index} item={item} index={index} />
        ))
      ) : (
        <div className="emptycart">
          <img src={EmptyShopCart} />
          <div>
            <h3>Корзина пуста</h3>
            <h4>Наши акции на сегодня</h4>
            <div className="sale"></div>
            <div>
              Доставка работает круглосуточно, без выходных. Время доставки 30
              минут или пицца бесплатно.
            </div>
            <div className="PS">
              P.S Не разбивай сердце девушки, сделай заказ
            </div>
            <div className="button">За покупками</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PizzaShopcart;
