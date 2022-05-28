import React from "react";
import logo from "./pizza-logo.svg";
import Shopingcart from "../Shopingcart/Shopingcart";
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="header__logo">
            <img width="38" src={logo} alt="Pizza logo" />
            <div>
              <h1>Egor Pizza</h1>
              <p className="motto">Одна из лучших пицц в твоём городе!</p>
            </div>
          </div>
          <Shopingcart></Shopingcart>
        </div>
      </div>
    </div>
  );
};

export default Header;
