import React from "react";
import Button from "../button/button";
import Length from "../Pizza-block/PizzaItem/Length/Length";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { AddDrinks } from "../../redux/Slice/AllDrinksSlice";
import { useState } from "react";
const Drinks = ({ drinks }) => {
  const sizes = [0.5, 1];
  const [State, SetState] = useState(0.5);
  const dispatch = useDispatch();
  function AddGood(item) {
    // Добавляем с помощью диспатча кол-во товара в корзину, отправляем данные на store
    dispatch(AddDrinks({ ...item, ...State }));
  }
  return drinks.map((item) => (
    <div className="pizza-block" key={item.id}>
      <img className="pizza-block__image" src={item.url} alt="Pizza" />
      <h4 className="pizza-block__title">{item.name}</h4>
      <div className="pizza-block__selector">
        <div>
          <ul>
            {sizes.map((item, index) => (
              <li
                key={index}
                className={classNames("", {
                  active: State.length === item,
                })}
                onClick={() => SetState(item)}
              >
                {`${item} л`}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{item.price}</div>
        <div onClick={() => AddGood(item)}>
          <Button add />
        </div>
      </div>
    </div>
  ));
};

export default Drinks;
