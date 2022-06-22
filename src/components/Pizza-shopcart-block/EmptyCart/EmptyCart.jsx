import React from 'react';
import { Link } from 'react-router-dom';
import EmptyShopCart from "../../../assets/img/EmptyShopCart.jpg";
const EmptyCart = () => {
    return (
        <div>
            <div className="emptycart">
            <h2>Ваша корзина пуста!</h2>
            <img src={EmptyShopCart} />
          </div>
          <Link to="/">
            <div className="button">За покупками</div>
          </Link>
        </div>
    );
};

export default EmptyCart;