import React from 'react';
import Svg from '../../UI/svg/svg';
import { useDispatch, useSelector } from 'react-redux';
import { ReducePizza, AddPizza, DeletePizza } from '../../../redux/Slice/PriceSlice';
const DrinkCart = ({item,index}) => {
    const dispatch = useDispatch()
    const OrderedDrinks = useSelector((state)=>state.shopcart.drinks)
    return (
        <div>
      <ul key={index}>
        <li>
          <img src={item.url} />
          <div className="order">
            <span className="title">{`Напиток: ${item.name}`}</span>
            <span>{`Объём: ${item.volume} л`}</span>
            <div className="shoppricemobile">
              {`Цена: ${item.price} ₽`}
              <div className="counter">
                <div className="minus">
                  <Svg svg="minus" />
                </div>
                <div className="count">1</div>
                <div className="plus">
                  <Svg svg="plus" />
                </div>
                <div className="trash">
                  <Svg svg="trash" />
                </div>
              </div>
            </div>
          </div>
          <div className="shopprice">
            {`Цена: ${item.price} ₽`}
            <div className="counter">
              <div
                className="minus"
                onClick={() => dispatch(ReducePizza({ ...item, index: index }))}
              >
                <Svg svg="minus" />
              </div>
              <div className="count">{OrderedDrinks[index].count}</div>
              <div className="plus" onClick={() => dispatch(AddPizza(item))}>
                <Svg svg="plus" />
              </div>
            </div>
            <div
              className="trash"
              onClick={() => dispatch(DeletePizza({ ...item, index: index }))}
            >
              <Svg svg="trash" />
            </div>
          </div>
        </li>
      </ul>
    </div>
    );
};

export default DrinkCart;