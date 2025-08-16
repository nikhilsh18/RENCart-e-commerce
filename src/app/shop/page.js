"use client";
import React, { useState } from "react";

// Sample Products
const products = [
  { id: 1, name: "Linen Shirt", category: "Men", price: 45, size: "M", image: "/img1.jpg" },
  { id: 2, name: "Denim Jacket", category: "Men", price: 90, size: "L", image: "/img2.jpg" },
  { id: 3, name: "Casual Chinos", category: "Men", price: 60, size: "S", image: "/img15.jpg" },
  { id: 4, name: "Silk Scarf", category: "Women", price: 25, size: "M", image: "/img17.jpg" },
  { id: 5, name: "Leather Handbag", category: "Women", price: 120, size: "M", image: "/img18.jpg" },
  { id: 6, name: "Sneakers", category: "Men", price: 70, size: "XL", image: "/img19.jpg" },
  { id: 7, name: "Heels", category: "Women", price: 95, size: "S", image: "/img20.jpg" },
  { id: 8, name: "Graphic Tee", category: "Men", price: 30, size: "M", image: "/img21.jpg" },
  { id: 9, name: "Summer Dress", category: "Women", price: 55, size: "L", image: "/img9.jpg" },
  { id: 10, name: "Wool Sweater", category: "Women", price: 80, size: "XL", image: "/img10.jpg" },
  { id: 11, name: "Formal Shirt", category: "Men", price: 50, size: "M", image: "/img11.jpg" },
  { id: 12, name: "Maxi Dress", category: "Women", price: 65, size: "L", image: "/img12.jpg" },
  { id: 13, name: "Track Pants", category: "Men", price: 40, size: "M", image: "/img13.jpg" },
  { id: 14, name: "Mini Skirt", category: "Women", price: 45, size: "S", image: "/img14.jpg" },
  { id: 15, name: "Suit Blazer", category: "Men", price: 150, size: "L", image: "/img22.jpg" },
  { id: 16, name: "Crop Top", category: "Women", price: 25, size: "S", image: "/img23.jpg" },
  { id: 17, name: "Joggers", category: "Men", price: 55, size: "XL", image: "/img24.jpg" },
  { id: 18, name: "Jumpsuit", category: "Women", price: 75, size: "M", image: "/img25.jpg" },
  { id: 19, name: "Polo Shirt", category: "Men", price: 35, size: "S", image: "/img26.jpg" },
  { id: 20, name: "Cardigan", category: "Women", price: 50, size: "L", image: "/img27.jpg" },
  { id: 21, name: "Leather Belt", category: "Men", price: 20, size: "M", image: "/img28.jpg" },
  { id: 22, name: "Ankle Boots", category: "Women", price: 110, size: "L", image: "/img29.jpg" },
  { id: 23, name: "Cargo Pants", category: "Men", price: 65, size: "XL", image: "/img30.jpg" },
  { id: 24, name: "Blouse", category: "Women", price: 40, size: "S", image: "/img31.jpg" },
  { id: 25, name: "Overcoat", category: "Men", price: 180, size: "L", image: "/img32.jpg" },
];

export default function Shop({ router }) {
  const [category, setCategory] = useState("All");
  const [size, setSize] = useState("All");
  const [maxPrice, setMaxPrice] = useState(200);

  const filteredProducts = products.filter((p) => {
    return (
      (category === "All" || p.category === category) &&
      (size === "All" || p.size === size) &&
      p.price <= maxPrice
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Filters */}
      <aside className="bg-white shadow-md rounded-lg p-6 h-fit">
        <h3 className="font-bold text-lg mb-4">Filters</h3>

        {/* Category */}
        <div className="mb-4">
          <label className="font-medium">Category</label>
          <select
            className="w-full mt-2 p-2 border rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>All</option>
            <option>Men</option>
            <option>Women</option>
          </select>
        </div>

        {/* Size */}
        <div className="mb-4">
          <label className="font-medium">Size</label>
          <select
            className="w-full mt-2 p-2 border rounded"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option>All</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="font-medium">Max Price: ${maxPrice}</label>
          <input
            type="range"
            min="10"
            max="200"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </aside>

      {/* Products */}
      <main className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-4 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover rounded-md"
            />
            <h4 className="font-semibold mt-3">{product.name}</h4>
            <p className="text-gray-600">${product.price}</p>
            <button
              onClick={() =>
                (window.location.href = `/order?id=${product.id}`)
              }
              className="mt-auto bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
            >
              Buy Now
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}
