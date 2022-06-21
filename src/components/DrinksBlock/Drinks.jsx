import React from "react";
import { useDispatch } from "react-redux";
import { AddPizza } from '../../redux/Slice/PriceSlice';
import DrinkVolume from './Volume/DrinkVolume'
const Drinks = ({ drinks }) => {
  const dispatch = useDispatch();
  function AddGoods(item) {
    dispatch(AddPizza(item))
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
