import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const details = JSON.parse(localStorage.getItem("orderDetails"));
    setOrderDetails(details);
  }, []);

  if (!orderDetails) return <p className="text-center">Loading...</p>;

  return (
    <div className="p-8 text-center">
      <h2 className="text-4xl font-bold text-green-600">Order Placed Successfully! 🎉</h2>
      <p className="text-gray-700 mt-4">Thank you for your purchase, {orderDetails.name}.</p>
      <p className="mt-2">An order confirmation has been sent to: <b>{orderDetails.email}</b></p>
      <p className="mt-2">Shipping to: <b>{orderDetails.address}</b></p>
      <p className="mt-2">Payment Method: <b>{orderDetails.paymentMethod}</b></p>
      <Link to="/" className="text-blue-500 mt-4 inline-block">Back to Home</Link>
    </div>
  );
};

export default OrderConfirmation;
