// const categories = [
//   { name: "Tops", image: "/img11.jpg" },
//   { name: "Dresses", image: "/img12.jpg" },
//   { name: "Outerwear", image: "/img13.jpg" },
//   { name: "Accessories", image: "/img14.jpg" }
// ];

// export default function Categories() {
//   return (
//     <section className="max-w-7xl mx-auto px-6 py-10">
//       <h2 className="text-2xl font-bold mb-6">Shop by Categories</h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {categories.map((cat, idx) => (
//           <div key={idx} className="relative group overflow-hidden rounded-lg shadow-lg">
//             <img src={cat.image} alt={cat.name} className="w-full h-60 object-cover group-hover:scale-110 transition-transform" />
//             <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
//               <p className="text-white text-xl font-bold">{cat.name}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";
import { useRouter } from "next/navigation";

const categories = [
  { name: "Tops", image: "/img11.jpg" },
  { name: "Dresses", image: "/img12.jpg" },
  { name: "Outerwear", image: "/img13.jpg" },
  { name: "Accessories", image: "/img14.jpg" },
];

export default function Categories() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/shop"); // ✅ Redirect to Shop page
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Shop by Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            onClick={handleClick}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-60 object-cover group-hover:scale-110 transition-transform"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <p className="text-white text-xl font-bold">{cat.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
