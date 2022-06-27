import React, { useEffect } from 'react';

const PizzaPrice = ({item,ChoosedLength,SetChoosedProporties}) => {
    useEffect(()=>{
        SetChoosedProporties(ChoosedLength=>({...ChoosedLength,price:map[ChoosedLength.length]}))
    },[ChoosedLength])
    const map = {
        26:item.price[0],
        30:item.price[1],
        40:item.price[2]
    }
    return (
        <div className="pizza-block__price">{`${map[ChoosedLength]} руб`}</div>
    );
};

export default PizzaPrice;