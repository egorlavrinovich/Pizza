import classNames from 'classnames';
import React from "react";
import styl from "./input.module.scss";
const Input = ({ value, Change, placeholder='Введите название пиццы',find=false, type }) => {
  return (
    <div className={styl.root}>
      <svg
        className={classNames(find&&styl.find||styl.none)}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title />
        <g id="search">
          <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
        </g>
      </svg>
      <svg
        onClick={() => Change("")}
        className={styl.cross}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
      <input
        value={value}
        type={type}
        onChange={(e) => Change(e.target.value)}
        className={styl.input}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
