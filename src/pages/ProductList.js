import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="p-8 text-center">
      <h2 className="text-4xl font-bold">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.image} alt={product.title} className="h-40 mx-auto" />
            <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
            <p className="text-gray-700">${product.price}</p>
            <div className="mt-4">
              <button
                className="bg-green-500 text-sm text-white px-4 py-2 rounded mr-2"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              <Link to={`/product/${product.id}`} className="text-blue-500 text-sm">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
