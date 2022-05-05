import React from 'react';
import { render, screen } from '@testing-library/react';
import CartCard from '../components/CartCard';
import { CartContext } from '../App';

// Set up
const addToCart = jest.fn();
const card = {
  id: 1,
  url: '/catalogue/bucket-hat.jpg',
  alt: 'black and white bucket hat',
  title: 'Unisex Double-Sided Reersible Bucket Hat Black-White',
  price: 2899,
};
const count = 3;

describe('Cart Card Component', () => {
  it('renders correct item title', () => {
    render(
      <CartContext.Provider value={{ addToCart }}>
        <CartCard card={card} count={count} />
      </CartContext.Provider>,
    );
    const tittle = screen.getByText(/Unisex Double-Sided Reersible Bucket Hat Black-White/i);
    expect(tittle).toBeInTheDocument();
  });
});
