import React from "react";
import { useState } from "react";
import Button from '../../button/button';
import Dough from './Dough/Dough';
import Length from './Length/Length';

const Pizza = ({ pizza }) => {
  const [state, setstate] = useState({ dough: "традиционное", length: 26 });
  const [Goods,SetGoods] = useState("")
  function AddParams(dough,length) {
    setstate({...state,dough:dough,length:length}) // Посмотреть функцию, она работает с запозданием
  }
  console.log(state)
  return (
    <>
      {pizza.map((item, id) => (
        <div className="pizza-block" key={id}>
          <img className="pizza-block__image" src={item.url} alt="Pizza" />
          <h4 className="pizza-block__title">{item.name}</h4>
          <div className="pizza-block__selector">
            <Dough AddDough={AddParams}/>
            <Length AddLength={AddParams}/>
          </div>
          <div className="pizza-block__bottom">
            <div className="pizza-block__price">{item.price}</div>
            <div onClick={()=>SetGoods({item})}>
            <Button add/>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Pizza;
