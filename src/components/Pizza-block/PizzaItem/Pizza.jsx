import React from "react";
import classNames from "classnames";
import { useState } from "react";
import Button from '../../button/button';
import Dough from './Dough/Dough';
import Length from './Length/Length';

const Pizza = ({ pizza }) => {
  const [state, setstate] = useState({ dough: "традиционное", length: 26 });
  const [Price,SetPrice] = useState("0")
  const [Goods,SetGoods] = useState("")
  const [Count,SetCounts] = useState(0)
  console.log(Goods)
  function AddLength(params) {
    setstate({ ...state, length: params });
  }
  function AddGoods(good) {
    SetGoods(good)
  }
  return (
    <>
      {pizza.map((item, id) => (
        <div className="pizza-block" key={id}>
          <img className="pizza-block__image" src={item.url} alt="Pizza" />
          <h4 className="pizza-block__title">{item.name}</h4>
          <div className="pizza-block__selector">
            <Dough/>
            <Length/>
          </div>
          <div className="pizza-block__bottom">
            <div className="pizza-block__price">{item.price}</div>
            <Button add/>
          </div>
        </div>
      ))}
    </>
  );
};

export default Pizza;
