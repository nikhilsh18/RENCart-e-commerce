// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// const products = [
//   { id: 1, name: "Summer Linen Shirt", price: "$45", image: "/img7.jpg" },
//   { id: 2, name: "Classic Denim Jacket", price: "$90", image: "/img8.jpg" },
//   { id: 3, name: "Casual Chinos", price: "$60", image: "/img9.jpg" },
//   { id: 4, name: "Silk Scarf", price: "$25", image: "/img10.jpg" }
// ];

// export default function ProductSlider() {
//   return (
//     <section className="max-w-7xl mx-auto px-6 py-12">
//       <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
//         Recommended Products
//       </h2>

//       <Swiper
//         spaceBetween={24}
//         breakpoints={{
//           320: { slidesPerView: 1.2 }, // Mobile
//           640: { slidesPerView: 2 },   // Tablet
//           1024: { slidesPerView: 3 },  // Desktop
//         }}
//         className="pb-10"
//       >
//         {products.map((product) => (
//           <SwiperSlide key={product.id}>
//             <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group cursor-pointer">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
//               />
//               <div className="p-5">
//                 <h3 className="font-semibold text-lg text-gray-800">
//                   {product.name}
//                 </h3>
//                 <p className="text-gray-600 mt-1">{product.price}</p>
//                 <button className="mt-4 w-full bg-black text-white py-2 rounded-md text-sm font-medium hover:bg-gray-900 transition">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";   // ✅ fix: import from swiper/modules
import "swiper/css";
import "swiper/css/navigation";                // ✅ keeps default arrow styles

const products = [
  { id: 1, name: "Summer Linen Shirt", price: "$45", image: "/img7.jpg" },
  { id: 2, name: "Classic Denim Jacket", price: "$90", image: "/img8.jpg" },
  { id: 3, name: "Casual Chinos", price: "$60", image: "/img9.jpg" },
  { id: 4, name: "Silk Scarf", price: "$25", image: "/img10.jpg" }
];

export default function ProductSlider() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Recommended Products
      </h2>

      <Swiper
        modules={[Navigation]}       // ✅ enable module
        navigation={true}            // ✅ show default prev/next buttons
        spaceBetween={24}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group cursor-pointer">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 mt-1">{product.price}</p>
                <button className="mt-4 w-full bg-black text-white py-2 rounded-md text-sm font-medium hover:bg-gray-900 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
