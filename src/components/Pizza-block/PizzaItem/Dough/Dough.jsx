import React from 'react';
import { useState } from 'react';
import classNames from "classnames";


const Dough = () => {
  const [state, setstate] = useState({ dough: "традиционное", length: 26 });
  const typeNames = ["тонкое", "традиционное"];
  function AddDough(param) {
    setstate({ ...state, dough: param });
  }
    return (
        <div>
            <ul>
              {typeNames.map((item, index) => (
                <li
                  onClick={() => AddDough(item)}
                  key={index}
                  className={classNames("", {
                    active: state.dough === item,
                  })}
                >
                  {item}
                </li>
              ))}
            </ul>
        </div>
    );
};

export default Dough;