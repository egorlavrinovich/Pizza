import React from 'react';
import Dough from '../../Dough/Dough';
import Button from '../../../../button/button';
import { useState } from 'react';
import PizzaPrice from '../PizzaPrice';
import Length from '../../Length/Length';
const PizzaBlockSelector = ({AddGood,item}) => {
    const [ChoosedProporties, SetChoosedProporties] = useState({ dough: "традиционное", length: 26, price:item.price[0] });
    function AddProperty(proportiers) {
        SetChoosedProporties({ ...ChoosedProporties, ...proportiers });
      }
    return (
        <>
        <div className="pizza-block__selector">
            <Dough AddDough={AddProperty} />
            <Length AddLength={AddProperty} />
          </div>
          <div className="pizza-block__bottom">
          <PizzaPrice item={item} ChoosedLength={ChoosedProporties} SetChoosedProporties={SetChoosedProporties}  />
            <div onClick={() => AddGood({...item,...ChoosedProporties})}>
              <Button add item={item} />
            </div>
          </div>
          </>
    );
};

export default PizzaBlockSelector;