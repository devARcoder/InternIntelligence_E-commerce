import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "Credit Card",
  });

  const handleChange = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    navigate("/order-confirmation");
  };

  return (
    <div className="p-8 text-center">
      <h2 className="text-4xl font-bold">Checkout</h2>
      <p className="text-gray-700 mt-4">Securely complete your purchase.</p>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="border p-2 w-full"
          value={orderDetails.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 w-full"
          value={orderDetails.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Shipping Address"
          className="border p-2 w-full"
          value={orderDetails.address}
          onChange={handleChange}
          required
        />
        <select
          name="paymentMethod"
          className="border p-2 w-full"
          value={orderDetails.paymentMethod}
          onChange={handleChange}
        >
          <option value="Credit Card">Credit Card</option>
          <option value="PayPal">PayPal</option>
          <option value="Cash on Delivery">Cash on Delivery</option>
        </select>
        <button className="bg-green-600 text-white px-4 py-2 mt-4">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
