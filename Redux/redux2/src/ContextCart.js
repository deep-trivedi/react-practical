import React, { createContext, useEffect, useState } from 'react'
import Cart from './Cart';

export const cartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('cart');
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (err) {
      console.error("Invalid cart data, resetting to empty array:", err);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addtocart = (product) => {
    setCart((prev) => {
      const item = prev.find((p) => p.id === product.id);
      if (item) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
  setCart((prev) => prev.filter((item) => item.id !== id));
};

  return (
    <cartContext.Provider value={{ addtocart, removeFromCart ,cart }}>
      {children}
    </cartContext.Provider>
  );
}


export default CartProvider