import React from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/store";
import { Provider } from "react-redux";
import Main from "./pages/Main";
import ShoppingCart from "./pages/ShoppingCart";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="*" element={<Main />}></Route>
        <Route path="shopcart" element={<ShoppingCart />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
