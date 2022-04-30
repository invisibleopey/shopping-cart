import React, { useState, createContext, useMemo, useCallback } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Shop from './components/Shop';
import NotFound from './components/NotFound';
import Catalogue from './components/Catalogue';
import Shirts from './components/Shirts';
import Jeans from './components/Jeans';
import Sneakers from './components/Sneakers';
import Perfume from './components/Perfume';
import Accessories from './components/Accessories';
import Modal from './components/Modal';
import data from './assets/Catalogue.json';

export const CartContext = createContext();

const App = () => {
  const location = useLocation();
  const background = location.state && location.state.background;
  const [cart, setCart] = useState([]);

  const addToCart = (event, count) => {
    const targetId = Number(event.target.parentNode.id);
    const targetItem = data.customCatalogue.filter((card) => {
      return card.id === Number(targetId);
    });
    // Check if the cart contains the item. if yes, Remove it.
    setCart((prev) => prev.filter(([item]) => item.id !== targetId));
    const newItem = [targetItem[0], count];
    setCart((prev) => [...prev, newItem]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const modifyCount = useCallback(
    (event, action) => {
      const targetId = Number(event.target.parentNode.parentNode.id);
      let newCount;
      let prevCount;
      let targetElement;
      // Select the item with the corresponding id. Modify the count. The return the whole array.
      targetElement = cart.filter((item) => {
        return item[0].id === targetId;
      });
      prevCount = targetElement[0][1];
      switch (action) {
        case 'increase':
          newCount = prevCount + 1;
          break;

        case 'decrease':
          newCount = prevCount - 1;
          break;
        default:
          newCount = prevCount;
          break;
      }
      // Remove the first version of the item
      setCart((prev) => prev.filter(([item]) => item.id !== targetId));
      // If the count is reduced to zero. remove the item totally from cart
      if (newCount <= 0) return;
      const newItem = [targetElement[0][0], newCount];
      setCart((prev) => [...prev, newItem]);
    },
    [cart],
  );

  const contextValue = useMemo(
    () => ({ cart, addToCart, clearCart, modifyCount }),
    [cart, modifyCount],
  );

  return (
    <div className="App">
      <CartContext.Provider value={contextValue}>
        <Routes location={background || location}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />}>
              <Route index element={<Catalogue />} />
              <Route path="shirts" element={<Shirts />} />
              <Route path="jeans" element={<Jeans />} />
              <Route path="sneakers" element={<Sneakers />} />
              <Route path="perfume" element={<Perfume />} />
              <Route path="accessories" element={<Accessories />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>

        {background && (
          <Routes>
            <Route path="/modal" element={<Modal />} />
          </Routes>
        )}
      </CartContext.Provider>
    </div>
  );
};

export default App;
