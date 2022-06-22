import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import Button from "../../button/button";
import Dough from "./Dough/Dough";
import Length from "./Length/Length";
import { useSelector, useDispatch } from "react-redux";
import { AddPizza } from "../../../redux/Slice/PriceSlice";

const Pizza = React.memo(({ pizza }) => {
  const [state, setstate] = useState({ dough: "традиционное", length: 26 });
  const dispatch = useDispatch();
  function AddProperty(item) {
    setstate({ ...state, ...item });
  }
  function AddGood(item) {
    // Добавляем с помощью диспатча кол-во товара в корзину, отправляем данные на store
    dispatch(AddPizza({ ...item, ...state }));
  }
  const AllPizzes = useSelector((state) => state.shopcart.pizzas);
  function Counter(finditem) {
    return AllPizzes.find((item) => item.id == finditem.id)?.count;
  }
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
              <Button add item={item} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
});

export default Pizza;
