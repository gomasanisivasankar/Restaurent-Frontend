import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export  const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((i) => i.id === item.id);
      if (existing) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) =>
    setCartItems((prevItems) => prevItems.filter((i) => i.id !== id));

  const updateQuantity = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((i) =>
        i.id === id ? { ...i, quantity: Math.max(1, i.quantity + amount) } : i
      )
    );
  };

  const getTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, getTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;