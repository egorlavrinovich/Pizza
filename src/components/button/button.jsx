import React from "react";
import classNames from "classnames";

const Button = ({ also, children }) => {
  return (
    <div
      className={classNames("button", {
        "button--outline": also,
      })}
    >
      {children}
    </div>
  );
};

export default Button;
