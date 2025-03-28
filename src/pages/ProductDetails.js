import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  const handleFilter = (category) => {
    setCategory(category);
    if (category === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };

  const handleSort = (option) => {
    setSort(option);
    let sortedProducts = [...filteredProducts];
    if (option === "price-low-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === "price-high-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(sortedProducts);
  };

  return (
    <div className="p-8 text-center">
      <h2 className="text-4xl font-bold">Products</h2>

      {/* Filter & Sorting Options */}
      <div className="flex justify-center gap-4 mt-4">
        <select value={category} onChange={(e) => handleFilter(e.target.value)} className="border p-2">
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelry</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>

        <select value={sort} onChange={(e) => handleSort(e.target.value)} className="border p-2">
          <option value="">Sort By</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.image} alt={product.title} className="h-40 mx-auto" />
            <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
            <p className="text-gray-700">${product.price}</p>
            <Link to={`/product/${product.id}`} className="text-blue-500">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
