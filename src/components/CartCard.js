import React from 'react';

function CartCard(props) {
  return (
    <div className="cart-item">
      <img src={window.location.origin + props.card.url} alt={props.card.alt} />
      <span className="cart-item-title">{props.card.title}</span>
      <span className="cart-item-price">{`₦${props.card.price.toLocaleString()}`}</span>
      {/* Calculate the real price from indicidual price x count */}
      <div>
        {/* Implement the functionalities of these buttons */}
        <button>-</button>
        <span>{props.count}</span>
        <button>+</button>
      </div>
      <button className="cart-item-delete-btn">X</button>
    </div>
  );
}

export default CartCard;
