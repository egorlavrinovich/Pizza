import React from "react";
import classNames from "classnames";
import { useState } from "react";

const Pizza = ({ pizza }) => {
  const [state, setstate] = useState({ dough: "традиционное", length: 26 });
  const typeNames = ["тонкое", "традиционное"];
  const sizes = [26, 30, 40];
  const [Price,SetPrice] = useState("0")
  const [Goods,SetGoods] = useState(0)
  function AddDough(param) {
    setstate({ ...state, dough: param });
  }
  function AddLength(params) {
    setstate({ ...state, length: params });
  }
  function AddGoods() {
    SetGoods((x)=>x+1)
  }
  console.log(Goods)
  return (
    <>
      {pizza.map((item, id) => (
        <div className="pizza-block" key={id}>
          <img className="pizza-block__image" src={item.url} alt="Pizza" />
          <h4 className="pizza-block__title">{item.name}</h4>
          <div className="pizza-block__selector">
            <ul>
              {typeNames.map((item, index) => (
                <li
                  onClick={() => AddDough(item)}
                  key={index}
                  className={classNames("", {
                    active: state.dough === item,
                  })}
                >
                  {item}
                </li>
              ))}
            </ul>
            <ul>
              {sizes.map((item, index) => (
                <li
                  key={index}
                  className={classNames("", {
                    active: state.length === item,
                  })}
                  onClick={() => AddLength(item)}
                >
                  {`${item} см`}
                </li>
              ))}
            </ul>
          </div>
          <div className="pizza-block__bottom">
            <div className="pizza-block__price">{item.price}</div>
            <div className="button button--outline button--add" onClick={AddGoods}>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="white"
                />
              </svg>
              <span >Добавить</span>
              <i>{Goods}</i>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Pizza;
