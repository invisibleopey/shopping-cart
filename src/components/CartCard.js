import React from 'react';

function CartCard(props) {
  const calculateItemPrice = (price, count) => {
    const totalPrice = price * count;
    return `₦${totalPrice.toLocaleString()}`;
  };
  return (
    <div className="cart-item" id={props.card.id}>
      <img src={window.location.origin + props.card.url} alt={props.card.alt} />
      <span className="cart-item-title">{props.card.title}</span>
      <span className="cart-item-price">{calculateItemPrice(props.card.price, props.count)}</span>
      <div>
        {/* Implement the functionalities of these buttons */}
        <button>-</button>
        <span>{props.count}</span>
        <button>+</button>
      </div>
    </div>
  );
}

export default CartCard;
