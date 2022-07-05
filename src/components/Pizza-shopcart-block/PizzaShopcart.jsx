import React from "react";
import { useSelector} from "react-redux";
import PizzaShopCartItem from "./PizzaShopcartItem.jsx/PizzaShopCartItem";
import DrinkCart from './DrinkCart/DrinkCart';
import EmptyCart from './EmptyCart/EmptyCart';
import { Link } from 'react-router-dom';
import Svg from '../UI/svg/svg';
import Input from '../UI/input/Input';
import { useState } from 'react';
const PizzaShopcart = () => {
  const OrderedPizzes = useSelector((state) => state.shopcart.pizzas);
  const OrderedDrinks = useSelector((state)=>state.shopcart.drinks)
  const [PersonalData,SetPersonalData] = useState ({Name:'',phone:''})
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
      {
        (OrderedDrinks.length||OrderedPizzes.length)>0&&<div className='but'><div className='phone'><Input value={PersonalData.Name} Change={(e)=>SetPersonalData({...PersonalData,Name:e})} type='text' placeholder='Введите ваше имя'/><Input value={PersonalData.phone} type='tel' Change={(e)=>SetPersonalData({...PersonalData,phone:e})} placeholder='Введите ваш номер телефона'/></div>
        <div className='butt'><Link to='/' className='button'><Svg svg={'arrowleft'}/>На главную</Link><a href='#' className='button'>Перейти к оплате<Svg svg={'shopcart'}/></a></div></div>
        
      }
        </div>
      </>
  );
};

export default PizzaShopcart;
