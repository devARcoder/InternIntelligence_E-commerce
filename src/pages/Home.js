import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=4") // Fetch only 4 products
      .then(response => setFeaturedProducts(response.data))
      .catch(error => console.error("Error fetching featured products:", error));
  }, []);

  return (
    <div className="p-8 text-center">
      {/* 🔥 Hero Section */}
      <section className="bg-green-500 text-white p-16 rounded-lg">
        <h1 className="text-5xl font-bold">Welcome to Our Store</h1>
        <p className="text-lg mt-2">Best deals on top-quality products</p>
        <Link to="/products" className="mt-4 inline-block bg-green-600 text-white hover:text-white hover:border hover:bg-green-600 px-6 py-3 rounded-lg font-semibold">Shop Now</Link>
      </section>

      {/* 🛍️ Categories Section */}
      <section className="mt-12">
        <h2 className="text-4xl font-bold">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          <Link to="/products?category=electronics" className="bg-gray-200 p-6 rounded-lg hover:bg-gray-300">Electronics</Link>
          <Link to="/products?category=jewelery" className="bg-gray-200 p-6 rounded-lg hover:bg-gray-300">Jewelry</Link>
          <Link to="/products?category=men's clothing" className="bg-gray-200 p-6 rounded-lg hover:bg-gray-300">Men's Clothing</Link>
          <Link to="/products?category=women's clothing" className="bg-gray-200 p-6 rounded-lg hover:bg-gray-300">Women's Clothing</Link>
        </div>
      </section>

      {/* 🌟 Featured Products */}
      <section className="mt-12">
        <h2 className="text-4xl font-bold">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          {featuredProducts.map(product => (
            <div key={product.id} className="border p-4 rounded shadow">
              <img src={product.image} alt={product.title} className="h-40 mx-auto" />
              <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
              <p className="text-gray-700">${product.price}</p>
              
            </div>
          ))}
        </div>
      </section>

      {/* 🎉 Promotions */}
      <section className="mt-12 bg-green-400 p-8 rounded-lg">
        <h2 className="text-3xl font-bold">Limited Time Offer!</h2>
        <p className="mt-2 text-lg">Get up to 50% off on selected items.</p>
        <Link to="/products" className="mt-4 inline-block bg-transparent border border-black hover:bg-green-500 hover:border-green-500 text-black px-6 py-3 rounded-lg font-semibold">Shop Now</Link>
      </section>
    </div>
  );
};

export default Home;
