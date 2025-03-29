import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [isProcessing, setIsProcessing] = useState(false); // Loading state

  const handleOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setIsProcessing(true); // Start processing

    setTimeout(() => {
      alert("✅ Order placed successfully!");
      clearCart(); // Clear the cart after order is placed
      setIsProcessing(false); // Stop processing
    }, 2000); // Simulate delay (2 seconds)
  };

  return (
    <div className="p-8 text-center">
      <h2 className="text-4xl font-bold">Checkout</h2>
      <p className="text-gray-700 mt-4">Review your order before placing it.</p>

      <button
        onClick={handleOrder}
        className={`px-6 py-2 rounded mt-4 ${
          isProcessing ? "bg-gray-400" : "bg-blue-500"
        } text-white`}
        disabled={isProcessing} // Disable button when processing
      >
        {isProcessing ? "Processing Order..." : "Place Order"}
      </button>
    </div>
  );
};

export default Checkout;
