import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import { CartContext } from '../App';
import CartCard from './CartCard';

function Modal() {
  let navigate = useNavigate();

  const onCheckOut = () => {
    // Remove all the products in the array.
    // Close the modal
  };

  function onDismiss() {
    navigate(-1);
  }

  const { cart } = useContext(CartContext);

  return (
    <Dialog aria-labelledby="label" onDismiss={onDismiss}>
      <div className="modal-content">
        <h1>Your Shopping Cart</h1>
        <div>
          {cart.length
            ? cart.map(([card, count]) => {
                return <CartCard card={card} count={count} />;
              })
            : null}
        </div>
        <h2>Total: ₦ {5000}</h2>
        <button onClick={onCheckOut}>Checkout</button>
        <button onClick={onDismiss}>Close</button>
      </div>
    </Dialog>
  );
}

export default Modal;
