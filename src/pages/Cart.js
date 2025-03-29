import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const totalAmount = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div className="p-8 text-center">
      <h2 className="text-4xl font-bold">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="mt-4">Your cart is empty.</p>
      ) : (
        <div className="mt-6">
          {cart.map((item) => (
            <div key={item.id} className="border p-4 rounded shadow mb-4 flex flex-col justify-center md:flex md:flex-row md:justify-between md:items-center">
              <div className="flex flex-col  items-center md:flex md:flex-row space-x-3">
                <img className="w-24 h-24 object-cover" src={item.image} alt="" />
                <div className="flex flex-col md:flex md:flex-col md:justify-center md:items-start md:space-y-3">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-700 text-xl">${item.price}</p>
                </div>
              </div>
              <button
                className="bg-red-500 text-white h-12 px-4 py-2 rounded "
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <p className="mt-4 text-lg">Total: <span className="font-bold">${totalAmount}</span></p>

          <Link to="/checkout">
            <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
