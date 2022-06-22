import React from "react";
import { useSelector} from "react-redux";
import PizzaShopCartItem from "./PizzaShopcartItem.jsx/PizzaShopCartItem";
import DrinkCart from './DrinkCart/DrinkCart';
import EmptyCart from './EmptyCart/EmptyCart';
const PizzaShopcart = () => {
  const OrderedPizzes = useSelector((state) => state.shopcart.pizzas);
  const OrderedDrinks = useSelector((state)=>state.shopcart.drinks)
  return (
    <>
    <div className="shoppingcart">
      {OrderedPizzes.length>0&&OrderedPizzes.map((item, index) => (<PizzaShopCartItem key={item.id} item={item} index={index} />))
      }
      {
        OrderedDrinks.length>0&&OrderedDrinks.map((item,index)=> <DrinkCart key={item.id} item={item} index={index}/>)
      }
      {
        !OrderedPizzes.length&&!OrderedDrinks.length&&<EmptyCart/>
      }
        </div>
      </>
  );
};

export default PizzaShopcart;
