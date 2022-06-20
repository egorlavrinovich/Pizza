import React from 'react';
import { useState } from 'react';
import classNames from 'classnames';
const DrinkVolume = ({AddSize}) => {
    const AllSize = [0.5,1]
    const [Size,SetSize] = useState(0.5)
    function AddProperty(size) {
        SetSize(size)
        AddSize(Size)
    }
    return (
        <div>
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
    );
};

export default DrinkVolume;