import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState("");

  // ✅ Add Product to Cart
  const addToCart = (product) => {
    setCart([...cart, product]);
    setNotification("Item added to cart ✅");

    setTimeout(() => {
      setNotification("");
    }, 2000);
  };

  // ✅ Remove Product from Cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
    setNotification("Item removed from cart ❌");

    setTimeout(() => {
      setNotification("");
    }, 2000);
  };

  // ✅ Clear Cart after Checkout
  const clearCart = () => {
    setCart([]);
    setNotification("Cart cleared 🛒");

    setTimeout(() => {
      setNotification("");
    }, 2000);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, notification }}>
      {children}
    </CartContext.Provider>
  );
};
