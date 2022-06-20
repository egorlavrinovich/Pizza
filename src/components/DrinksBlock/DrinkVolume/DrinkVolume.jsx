import React from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import Button from '../../button/button';
const DrinkVolume = ({AddSize,volume, price}) => {
    const AllSize = [...volume]
    const [Size,SetSize] = useState(volume[0])
    const [Price,SetPrice] = useState(price[0])
    function AddProperty(size) {
        SetPrice(price[AllSize.indexOf(size)])
        SetSize(size)
        AddSize(Size)
    }
    return (
        <div>
        <div className="pizza-block__selector">
          <ul>
            {AllSize.map((item, index) => (
              <li
                key={index}
                className={classNames("", {
                  active: Size == item,
                })}
                onClick={() => AddProperty(item)}
              >
                {`${item} л`}
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
        <div className="pizza-block__price">{`${Price} руб`}</div>
        <div>
          <Button add />
        </div>
      </div>
      </div>
    );
};

export default DrinkVolume;
