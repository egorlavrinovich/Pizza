import React, { useState } from "react";
import classNames from "classnames";

const SortTaste = ({ Categories }) => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Острые",
    "С грибами",
    "С ананасами",
    "Акции%",
  ];
  const [active, setactive] = useState("");
  function ChooseItem(item) {
    setactive(item);
    const result = (item) => {
      const obj = {
        Все: "all",
        Мясные: "meet",
        Вегетарианские: "vegetarian",
        Острые: "peperoni",
        "С грибами": "mashrooms",
        "С ананасами": "pineapple",
        "Акции%": "sale",
      };
      return obj[item];
    };
    return Categories(result(item));
  }
  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            onClick={() => ChooseItem(item)}
            key={index}
            className={classNames("", {
              active: active == item,
            })}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortTaste;
