import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import { CartContext } from '../App';
import CartCard from './CartCard';

function Modal() {
  let navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const { clearCart } = useContext(CartContext);

  const onCheckOut = () => {
    clearCart();
    navigate(-1);
    alert('Thanks for shopping with us');
  };

  function onDismiss() {
    navigate(-1);
  }

  const calculateGrandTotal = (cart) => {
    let individualPrices = [];
    cart.forEach((item) => individualPrices.push(item[0].price * item[1]));
    return individualPrices.reduce((prev, current) => prev + current, 0).toLocaleString();
  };

  return (
    <Dialog aria-labelledby="label" onDismiss={onDismiss}>
      <div className="modal-content">
        <h1>Your Shopping Cart</h1>
        <div>
          {cart.length
            ? cart.map(([card, count], index) => {
                return <CartCard card={card} count={count} key={index} id={card.id} />;
              })
            : null}
        </div>
        <h2>Total: ₦ {cart.length ? calculateGrandTotal(cart) : 0}</h2>
        <button onClick={onCheckOut}>Checkout</button>
        <button onClick={onDismiss}>Close</button>
      </div>
    </Dialog>
  );
}

export default Modal;
