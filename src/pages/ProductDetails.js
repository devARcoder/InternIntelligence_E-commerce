import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, notification } = useContext(CartContext);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) return <p className="text-center">Loading...</p>;

  return (
    <div className="p-8 text-center relative">
      <h2 className="text-4xl font-bold">{product.title}</h2>
      <img src={product.image} alt={product.title} className="h-80 mx-auto mt-4" />
      <p className="text-gray-700 mt-4">{product.description}</p>
      <p className="text-xl font-semibold mt-4">Price: ${product.price}</p>
      
      <button
        onClick={() => addToCart(product)}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        Add to Cart
      </button>

      {/* ✅ Display Notification */}
      {notification && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg transition-opacity duration-500">
          {notification}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
