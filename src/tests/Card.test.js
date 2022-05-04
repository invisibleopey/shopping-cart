import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../components/Card';
import { CartContext } from '../App';
import userEvent from '@testing-library/user-event';

// Set up
const addToCart = jest.fn();
const card = {
  id: 1,
  url: '/catalogue/bucket-hat.jpg',
  alt: 'black and white bucket hat',
  title: 'Unisex Double-Sided Reersible Bucket Hat Black-White',
  price: 2899,
};

describe('shop card component', () => {
  it('renders correct item tittle', () => {
    render(
      <CartContext.Provider value={{ addToCart }}>
        <Card card={card} />
      </CartContext.Provider>,
    );
    const tittle = screen.getByText(/Unisex Double-Sided Reersible Bucket Hat Black-White/i);
    expect(tittle).toBeInTheDocument();
  });
});
