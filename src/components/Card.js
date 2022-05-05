import React, { useState, useContext } from 'react';
import { CartContext } from '../App';

function Card(props) {
  const [count, setCount] = useState(1);
  const { addToCart } = useContext(CartContext);
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

  const handleAddToCart = (event) => {
    addToCart(event, count);
  };

  return (
    <div className="card" id={props.card.id}>
      <img src={process.env.PUBLIC_URL + props.card.url} alt={props.card.alt} />
      <span className="product-title">{props.card.title}</span>
      <span className="product-price">{`₦${props.card.price.toLocaleString()}`}</span>
      <div>
        <button onClick={decrement}>-</button>
        <input type="number" min="1" step="1" value={count} onChange={inputCount} />
        <button onClick={increment}>+</button>
      </div>
      <button className="add-to-cart" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default Card;
