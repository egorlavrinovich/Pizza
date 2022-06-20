import React from "react";
import Button from "../button/button";
import Length from "../Pizza-block/PizzaItem/Length/Length";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { AddDrinks } from "../../redux/Slice/AllDrinksSlice";
import { useState } from "react";
import DrinkVolume from './DrinkVolume/DrinkVolume';
const Drinks = ({ drinks }) => {
  const [Product, SetProduct] = useState({})
  const dispatch = useDispatch();
  function AddProperty(item) {
  }
  function AddGood(item) {
    // Добавляем с помощью диспатча кол-во товара в корзину, отправляем данные на store
    dispatch(AddDrinks({ ...item, ...Product }));
  }
  return drinks.map((item) => (
    <div className="pizza-block" key={item.id}>
      <img className="pizza-block__image" src={item.url} alt="Pizza" />
      <h4 className="pizza-block__title">{item.name}</h4>
        <DrinkVolume volume={item.volume} price={item.price}/>
    </div>
  ));
};

export default Drinks;
