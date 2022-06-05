import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Svg from "../UI/svg/svg";
const Shopingcart = () => {
  const TotalSum = useSelector((state) => state.shopcart.price); // отображаем стоимость товара
  const TotalCountGoods = useSelector((state) => state.shopcart.count); // отображаем количество товара
  return (
    <Link to="shopcart">
      <div className="header__cart">
        <div className="button button--cart">
          <span>{`${TotalSum || 0} ₽`}</span>
          <div className="button__delimiter"></div>
          <Svg svg={"shopcart"} />
          <span>{TotalCountGoods}</span>
        </div>
      </div>
    </Link>
  );
};

export default Shopingcart;
