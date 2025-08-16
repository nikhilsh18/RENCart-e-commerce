"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const products = [
  { id: 1, name: "Linen Shirt", price: 45, image: "/img1.jpg" },
  { id: 2, name: "Denim Jacket", price: 90, image: "/img2.jpg" },
  { id: 3, name: "Casual Chinos", price: 60, image: "/img3.jpg" },
  { id: 4, name: "Silk Scarf", price: 25, image: "/img4.jpg" },
  // ... add the rest
];

function OrderContent() {
  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id"));
  const product = products.find((p) => p.id === id);

  if (!product) return <div className="p-10">Product not found</div>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
        <p className="text-gray-600 text-lg">${product.price}</p>

        <button
          onClick={() => alert("✅ Order Placed Successfully!")}
          className="mt-6 w-full bg-black text-white py-3 rounded-lg text-lg font-medium hover:bg-gray-900 transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default function OrderPage() {
  return (
    <Suspense fallback={<div className="p-10">Loading Order...</div>}>
      <OrderContent />
    </Suspense>
  );
}
