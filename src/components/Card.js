import React from 'react';

function Card(props) {
  return (
    <div className="card">
      <img src={window.location.origin + props.card.url} alt={props.card.alt} id={props.index} />
      <span className="product-title">{props.card.title}</span>
      <span className="product-price">{`₦${props.card.price.toLocaleString()}`}</span>
      <div>
        <button>-</button>
        <input type="number" min="1" step="1" value="1" />
        <button>+</button>
      </div>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
}

export default Card;
