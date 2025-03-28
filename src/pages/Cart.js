import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-4xl font-bold">Your Cart is Empty</h2>
        <Link to="/products" className="text-blue-500 mt-4 inline-block">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8 text-center">
      <h2 className="text-4xl font-bold">Shopping Cart</h2>
      <div className="mt-6">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center border p-4 mt-2">
            <img src={item.image} alt={item.title} className="h-20" />
            <p className="text-lg">{item.title}</p>
            <p className="font-semibold">${item.price}</p>
            <button className="text-red-500" onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <button className="bg-red-600 text-white px-4 py-2 mt-4" onClick={clearCart}>
        Clear Cart
      </button>
      <Link to="/checkout" className="bg-green-600 text-white px-4 py-2 mt-4 ml-4">
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default Cart;
