import React from 'react';
import classNames from "classnames";
import { useState } from "react";


const Length = () => {
    const [state, setstate] = useState({ dough: "традиционное", length: 26 });
    const sizes = [26, 30, 40];
    function AddLength(params) {
        setstate({ ...state, length: params });
      }
    return (
        <div>
            <ul>
              {sizes.map((item, index) => (
                <li
                  key={index}
                  className={classNames("", {
                    active: state.length === item,
                  })}
                  onClick={() => AddLength(item)}
                >
                  {`${item} см`}
                </li>
              ))}
            </ul>
        </div>
    );
};

export default Length;