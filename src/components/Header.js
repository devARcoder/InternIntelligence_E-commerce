import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-extrabold">
          <Link to="/"><span className="text-white text-4xl md:text-4xl">ARS</span></Link>
        </h1>
        <nav>
          <ul className="flex space-x-4 md:text-xl">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/products" className="hover:text-gray-300">Products</Link></li>
            <li><Link to="/cart" className="hover:text-gray-300">Cart</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
