import React from "react";
import { useDispatch } from "react-redux";
import { AddPizza } from "../../../redux/Slice/PriceSlice";
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
