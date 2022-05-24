import React from 'react';
import classNames from "classnames";
import { useState } from "react";


const Length = ({AddLength}) => {
    const [State, setstate] = useState({length: 26 });
    const sizes = [26, 30, 40];
    function addLength(params) {
        setstate({ ...State, length: params });
        AddLength(null,State)
      }
    return (
        <div>
            <ul>
              {sizes.map((item, index) => (
                <li
                  key={index}
                  className={classNames("", {
                    active: State.length === item,
                  })}
                  onClick={() => addLength(item)}
                >
                  {`${item} см`}
                </li>
              ))}
            </ul>
        </div>
    );
};

export default Length;