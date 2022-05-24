import React from 'react';
import { useState } from 'react';
import classNames from "classnames";

const Dough = ({AddDough}) => {
  const [State, SetState] = useState({ dough: "традиционное"});
  const typeNames = ["тонкое", "традиционное"];
  function Dough(param) {
    SetState({...State,dough:param});
    AddDough(State)
  }
    return (
        <div>
            <ul>
              {typeNames.map((item, index) => (
                <li
                  onClick={() => Dough(item)}
                  key={index}
                  className={classNames("", {
                    active: State.dough === item,
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