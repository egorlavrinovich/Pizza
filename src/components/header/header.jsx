import React, { useEffect, useMemo, useState } from "react";
import logo from "./pizza-logo.svg";
import Shopingcart from "../Shopingcart/Shopingcart";
import { Link } from "react-router-dom";
import Input from "../UI/input/Input";
import { useDispatch } from "react-redux";
import { filterSymbol } from "../../redux/Slice/FilterSlice";
const Header = () => {
  const dispatch = useDispatch();
  const [state, setstate] = useState("");
  useEffect(() => {
    dispatch(filterSymbol(state));
  }, [state]);
  return (
    <div>
      <div className="header">
        <div className="container">
          <Link to="/">
            <div className="header__logo">
              <img width="38" src={logo} alt="Pizza logo" />
              <div>
                <h1>Egor Pizza</h1>
                <p className="motto">Одна из лучших пицц в твоём городе!</p>
              </div>
            </div>
          </Link>
          <Input value={state} Change={setstate} />
          <Shopingcart></Shopingcart>
        </div>
      </div>
    </div>
  );
};

export default Header;
