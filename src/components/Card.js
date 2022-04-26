import React, { useState } from 'react';

function Card(props) {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  const decrement = () => {
    if (!(count <= 1))
      setCount((prevCount) => {
        return prevCount - 1;
      });
  };

  const inputCount = (event) => {
    setCount(Number(event.target.value));
  };

  return (
    <div className="card" id={props.id}>
      <img src={window.location.origin + props.card.url} alt={props.card.alt} />
      <span className="product-title">{props.card.title}</span>
      <span className="product-price">{`₦${props.card.price.toLocaleString()}`}</span>
      <div>
        <button onClick={decrement}>-</button>
        <input type="number" min="1" step="1" value={count} onChange={inputCount} />
        <button onClick={increment}>+</button>
      </div>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
}

export default Card;
