import React from 'react';
import { Outlet } from 'react-router-dom';

function Shop() {
  return (
    <div>
      Shop
      <Outlet />
    </div>
  );
}

export default Shop;
