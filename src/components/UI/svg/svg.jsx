import React from "react";

const Svg = ({ svg }) => {
  switch (svg) {
    case "trash":
      return (
        <svg
          width="30"
          height="30"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 5H4.16667H17.5"
            stroke="black"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
            stroke="black"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.33337 9.16667V14.1667"
            stroke="black"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.6666 9.16667V14.1667"
            stroke="black"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "plus":
      return (
        <svg
          width="24"
          height="24"
          fill="black"
          data-name="Livello 1"
          id="Livello_1"
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <path d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z" />
          <path d="M90,61H67V38a3,3,0,0,0-6,0V61H38a3,3,0,0,0,0,6H61V90a3,3,0,0,0,6,0V67H90a3,3,0,0,0,0-6Z" />
        </svg>
      );
    case "minus":
      return (
        <svg
          width="24"
          height="24"
          fill="black"
          data-name="Livello 1"
          id="Livello_1"
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <path d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z" />
          <path d="M90,61H38a3,3,0,0,0,0,6H90a3,3,0,0,0,0-6Z" />
        </svg>
      );
    case "shopcart":
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "find":
      return (
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <title />
          <g id="search">
            <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
          </g>
        </svg>
      );
    case "cross":
      return (
        <svg
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
      );
    default:
      return 2;
  }
  return <div></div>;
};

export default Svg;
