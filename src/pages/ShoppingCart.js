import React from "react";
import Header from "../components/header/header";
import { useSelector, useDispatch } from "react-redux";
import "../scss/app.scss";
import Svg from "../components/UI/svg/svg";
const ShoppingCart = () => {
  const OrderedPizzes = useSelector((state) => state.shopcart.pizzas);
  return (
    <div className="wrapper">
      <Header />
      <div className="shoppingcart">
        {OrderedPizzes.length && // подправить key
          OrderedPizzes.map((item) => (
            <ul>
              <li key={item.id}>
                <img src={item.url} />
                <div className="order">
                  <span className="title">{`Пицца: ${item.name}`}</span>
                  <span>{`Длина: ${item.length} см`}</span>
                  <span>{`Тесто: ${item.dough}`}</span>
                  <span>{`Наличие мяса: ${item.meet ? "да" : "нет"}`}</span>
                  <span>{`Наличие грибов: ${
                    item.mashrooms ? "да" : "нет"
                  }`}</span>
                  <span>{`Отсрая: ${item.peperoni ? "да" : "нет"}`}</span>
                  <div className="shoppricemobile">
                    {`Цена: ${item.price} ₽`}
                    <div className="counter">+</div>
                    <div className="trash">
                      <Svg svg="trash" />
                    </div>
                  </div>
                </div>
                <div className="shopprice">
                  {`Цена: ${item.price} ₽`}
                  <div className="counter">
                    <Svg svg="minus" />
                    {}
                    <Svg svg="plus" />
                  </div>
                  <div className="trash">
                    <Svg svg="trash" />
                  </div>
                </div>
              </li>
            </ul>
          ))}{" "}
      </div>
    </div>
  );
};

export default ShoppingCart;
