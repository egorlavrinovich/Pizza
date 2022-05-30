import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import Button from "../../button/button";
import Dough from "./Dough/Dough";
import Length from "./Length/Length";
import { useSelector, useDispatch } from "react-redux";
import { Price, Count, AddPizza } from "../../../redux/Slice/Price";

const Pizza = React.memo(({ pizza }) => {
  const [state, setstate] = useState({ dough: "традиционное", length: 26 });
  const [Goods, SetGoods] = useState();
  const AvailablePizza = useSelector((state) => state.shopcart.pizzas);
  const dispatch = useDispatch();
  function AddProperty(item) {
    setstate({ ...state, ...item });
  }
  function AddGood(item) {
    // Добавляем с помощью диспатча кол-во товара в корзину, отправляем данные на store
    dispatch(Price(item.price));
    dispatch(Count());
    SetGoods({ ...item, ...state });
  }
  useEffect(() => {
    dispatch(AddPizza(Goods)); // ??? Возможно ошибка, в массив залетатет undefind
  }, [Goods]);
  console.log(AvailablePizza);
  return (
    <>
      {pizza.map((item, id) => (
        <div className="pizza-block" key={id}>
          <img className="pizza-block__image" src={item.url} alt="Pizza" />
          <h4 className="pizza-block__title">{item.name}</h4>
          <div className="pizza-block__selector">
            <Dough AddDough={AddProperty} />
            <Length AddLength={AddProperty} />
          </div>
          <div className="pizza-block__bottom">
            <div className="pizza-block__price">{item.price}</div>
            <div onClick={() => AddGood(item)}>
              <Button add />
            </div>
          </div>
        </div>
      ))}
    </>
  );
});

export default Pizza;
