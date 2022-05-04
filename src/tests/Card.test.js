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

  it('renders correct image', () => {
    render(
      <CartContext.Provider value={{ addToCart }}>
        <Card card={card} />
      </CartContext.Provider>,
    );
    const image = screen.getByAltText('black and white bucket hat');
    expect(image).toHaveAttribute('src', 'http://localhost/catalogue/bucket-hat.jpg');
  });

  it('renders the correct price', () => {
    render(
      <CartContext.Provider value={{ addToCart }}>
        <Card card={card} />
      </CartContext.Provider>,
    );
    const price = screen.getByText(/2,899/i);
    expect(price).toBeInTheDocument();
  });

  it('callback called when add to cart button is clicked', async () => {
    render(
      <CartContext.Provider value={{ addToCart }}>
        <Card card={card} />
      </CartContext.Provider>,
    );

    const submitItemButton = screen.getByText(/Add to Cart/i);

    await userEvent.click(submitItemButton);
    expect(addToCart).toHaveBeenCalled();
  });
});
