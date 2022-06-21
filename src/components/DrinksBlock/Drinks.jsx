import React from "react";
import Button from "../button/button";
import Length from "../Pizza-block/PizzaItem/Length/Length";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { useState } from "react";
import DrinkVolume from './Amount/DrinkVolume';
const Drinks = ({ drinks }) => {
  const dispatch = useDispatch();
  function AddGoods(item) {
    console.log(item)
  }

return (
  <>{drinks.map((item) => (
    <div className="pizza-block" key={item.id}>
      <img className="pizza-block__image" src={item.url} alt="Pizza" />
      <h4 className="pizza-block__title">{item.name}</h4>
        <DrinkVolume volume={item.volume} price={item.price} AddGoods={AddGoods} item={item}/>
    </div>
  ))}</>
);
  }

export default Drinks;
