import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Svg from "../../UI/svg/svg";

import {
  AddPizza,
  DeletePizza,
  ReducePizza,
} from "../../../redux/Slice/PriceSlice";

const PizzaShopCartItem = ({ index, item }) => {
  const dispatch = useDispatch();
  const AvailablePiezzes = useSelector((state) => state.shopcart.pizzas);
  return (
    <div>
      <ul key={index}>
        <li>
          <img src={item.url} />
          <div className="order">
            <span className="title">{`Пицца: ${item.name}`}</span>
            <span>{`Длина: ${item.length} см`}</span>
            <span>{`Тесто: ${item.dough}`}</span>
            <span>{`Наличие мяса: ${item.meet ? "да" : "нет"}`}</span>
            <span>{`Наличие грибов: ${item.mashrooms ? "да" : "нет"}`}</span>
            <span>{`Острая: ${item.peperoni ? "да" : "нет"}`}</span>
            <div className="shoppricemobile">
              {`Цена: ${item.price} ₽`}
              <div className="counter">
                <div className="minus">
                  <Svg svg="minus" />
                </div>
                <div className="count">1</div>
                <div className="plus">
                  <Svg svg="plus" />
                </div>
                <div className="trash">
                  <Svg svg="trash" />
                </div>
              </div>
            </div>
          </div>
          <div className="shopprice">
            {`Цена: ${item.price} ₽`}
            <div className="counter">
              <div
                className="minus"
                onClick={() => dispatch(ReducePizza({ ...item, index: index }))}
              >
                <Svg svg="minus" />
              </div>
              <div className="count">{AvailablePiezzes[index].count}</div>
              <div className="plus" onClick={() => dispatch(AddPizza(item))}>
                <Svg svg="plus" />
              </div>
            </div>
            <div
              className="trash"
              onClick={() => dispatch(DeletePizza({ ...item, index: index }))}
            >
              <Svg svg="trash" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PizzaShopCartItem;
