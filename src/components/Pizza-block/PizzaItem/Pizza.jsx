import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import Button from "../../button/button";
import Dough from "./Dough/Dough";
import Length from "./Length/Length";
import { useSelector, useDispatch } from "react-redux";
import { AddPizza } from "../../../redux/Slice/PriceSlice";
import PizzaPrice from './Price/PizzaPrice'
import PizzaBlockSelector from './Price/PizzaBlockSelector/PizzaBlockSelector';

const Pizza = React.memo(({ pizza }) => {
  const dispatch = useDispatch();
  function AddGood(item) {
    dispatch(AddPizza(item));
  }
  return (
    <>
      {pizza.map((item, id) => (
        <div className="pizza-block" key={id}>
          <img className="pizza-block__image" src={item.url} alt="Pizza" />
          <h4 className="pizza-block__title">{item.name}</h4>
          <PizzaBlockSelector item={item} AddGood={AddGood}/>
        </div>
      ))}
    </>
  );
});

export default Pizza;
