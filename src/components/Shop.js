import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Shop() {
  return (
    <div>
      <div className="nav-bar">
        <span>Sort by categories</span>
        <nav>
          <Link to="/shop">All Products</Link>
          <Link to="accessories">Accessories</Link>
          <Link to="shirts">Shirts</Link>
          <Link to="jeans">Jeans</Link>
          <Link to="sneakers">Sneakers</Link>
          <Link to="perfume">Perfume</Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default Shop;
