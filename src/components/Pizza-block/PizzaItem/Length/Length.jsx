import React, { useEffect } from 'react';
import classNames from "classnames";
import { useState } from "react";
const Length = React.memo(({AddLength,SetLength}) => {
    const [State, setstate] = useState({length: 26 });
    const sizes = [26, 30, 40];
    function addLength(params) {
        setstate({ ...State, length: params });
      }
      useEffect(()=>{AddLength(State)},[State])
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
});

export default Length;