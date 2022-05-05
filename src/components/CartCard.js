import React, { useContext } from 'react';
import { CartContext } from '../App';

function CartCard(props) {
  const calculateItemPrice = (price, count) => {
    const totalPrice = price * count;
    return `₦${totalPrice.toLocaleString()}`;
  };
  const { modifyCount } = useContext(CartContext);

  const handleIncrement = (event) => {
    modifyCount(event, 'increase');
  };

  const handleDecrement = (event) => {
    modifyCount(event, 'decrease');
  };

  return (
    <div className="cart-item" id={props.card.id}>
      <img src={process.env.PUBLIC_URL + props.card.url} alt={props.card.alt} />
      <span className="cart-item-title">{props.card.title}</span>
      <span className="cart-item-price">{calculateItemPrice(props.card.price, props.count)}</span>
      <div>
        <button onClick={handleDecrement}>-</button>
        <span>{props.count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

export default CartCard;
