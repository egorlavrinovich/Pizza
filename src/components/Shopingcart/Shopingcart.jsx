import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Svg from "../UI/svg/svg";
const Shopingcart = () => {
  const ArrayPizzas = useSelector((state) => state.shopcart.pizzas); // отображаем стоимость товара
  const TotalCountGoods = useSelector((state) => state.shopcart.pizzas); // отображаем количество товара
  const TotalSum = ArrayPizzas.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.price;
  }, 0);
  return (
    <Link to="shopcart">
      <div className="header__cart">
        <div className="button button--cart">
          <span>{`${TotalSum || 0} ₽`}</span>
          <div className="button__delimiter"></div>
          <Svg svg={"shopcart"} />
          <span>{TotalCountGoods.length}</span>
        </div>
      </div>
    </Link>
  );
};

export default Shopingcart;
