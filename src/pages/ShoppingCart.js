import React from "react";
import Header from "../components/header/header";
import { useSelector, useDispatch } from "react-redux";
import "../scss/app.scss";
import EmptyShopcart from "../assets/img/empty-cart.png";
import trash from "../assets/img/trash.svg";
import Svg from "../components/UI/svg/svg";
const ShoppingCart = () => {
  const OrderedPizzes = useSelector((state) => state.shopcart.pizzas);
  console.log(OrderedPizzes);
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
                  <span>{`Пицца: ${item.name}`}</span>
                  <span>{`Длина: ${item.length} см`}</span>
                  <span>{`Тесто: ${item.dough}`}</span>
                  <span>{`Содержание мяса: ${item.meet ? "да" : "нет"}`}</span>
                  <span>{`Содержание грибов: ${
                    item.mashrooms ? "да" : "нет"
                  }`}</span>
                  <span>{`Отсрая: ${item.peperoni ? "да" : "нет"}`}</span>
                </div>
                <div className="actionpart">
                  <div className="shopprice">{`Цена: ${item.price}`}</div>
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
