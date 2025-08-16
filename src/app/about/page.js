// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <section className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-20 px-6 md:px-12">
//       {/* Hero Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="max-w-4xl mx-auto text-center"
//       >
//         <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
//           About <span className="text-indigo-600">RENCart</span>
//         </h1>
//         <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
//           RENCart is your one-stop destination for trendy fashion and lifestyle
//           products. Our mission is simple: provide high-quality, affordable, and
//           stylish items that inspire confidence in everyone.
//         </p>
//       </motion.div>

//       {/* Mission / Vision Section */}
//       <div className="grid md:grid-cols-2 gap-10 mt-20 max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="bg-white rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-shadow"
//         >
//           <h2 className="text-3xl font-semibold text-indigo-700 mb-4">
//             Our Mission
//           </h2>
//           <p className="text-gray-600 leading-relaxed">
//             To make fashion accessible and enjoyable for everyone, blending
//             affordability, quality, and style while following sustainable and
//             ethical practices.
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="bg-white rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-shadow"
//         >
//           <h2 className="text-3xl font-semibold text-indigo-700 mb-4">
//             Our Vision
//           </h2>
//           <p className="text-gray-600 leading-relaxed">
//             To become the most trusted global e-commerce brand, empowering
//             people through timeless fashion and lifestyle products that inspire
//             individuality and confidence.
//           </p>
//         </motion.div>
//       </div>

//       {/* Gallery Section */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="mt-24 max-w-7xl mx-auto"
//       >
//         <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
//           Our <span className="text-indigo-600">Gallery</span>
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//           {Array.from({ length: 20 }, (_, i) => `/img${i + 1}.jpg`).map(
//             (src, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 whileInView={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 0.6, delay: i * 0.05 }}
//                 viewport={{ once: true }}
//                 className="overflow-hidden rounded-2xl shadow-md cursor-pointer group"
//               >
//                 <img
//                   src={src}
//                   alt={`Gallery ${i + 1}`}
//                   className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//               </motion.div>
//             )
//           )}
//         </div>
//       </motion.div>
//     </section>
//   );
// }

"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-20 px-6 md:px-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
          About <span className="text-indigo-600">RENCart</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          RENCart is your one-stop destination for trendy fashion and lifestyle
          products. Our mission is simple: provide high-quality, affordable, and
          stylish items that inspire confidence in everyone.
        </p>
      </motion.div>

      {/* Mission / Vision Section */}
      <div className="grid md:grid-cols-2 gap-10 mt-20 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-shadow"
        >
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To make fashion accessible and enjoyable for everyone, blending
            affordability, quality, and style while following sustainable and
            ethical practices.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-shadow"
        >
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To become the most trusted global e-commerce brand, empowering
            people through timeless fashion and lifestyle products that inspire
            individuality and confidence.
          </p>
        </motion.div>
      </div>

      {/* Gallery Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-24 max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Our <span className="text-indigo-600">Gallery</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {/* 20 Manually Added Images */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl shadow-md cursor-pointer group"
          >
            <img src="/img1.jpg" alt="Gallery 1" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
          </motion.div>

          <motion.div className="overflow-hidden rounded-2xl shadow-md cursor-pointer group">
            <img src="/img2.jpg" alt="Gallery 2" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
          </motion.div>

          <motion.div className="overflow-hidden rounded-2xl shadow-md cursor-pointer group">
            <img src="/img14.jpg" alt="Gallery 3" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
          </motion.div>

          <motion.div className="overflow-hidden rounded-2xl shadow-md cursor-pointer group">
            <img src="/img15.jpg" alt="Gallery 4" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
          </motion.div>

          <motion.div className="overflow-hidden rounded-2xl shadow-md cursor-pointer group">
            <img src="/img21.jpg" alt="Gallery 5" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
          </motion.div>

          <motion.div className="overflow-hidden rounded-2xl shadow-md cursor-pointer group">
            <img src="/img22.jpg" alt="Gallery 6" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
          </motion.div>

          <motion.div className="overflow-hidden rounded-2xl shadow-md cursor-pointer group">
            <img src="/img7.jpg" alt="Gallery 7" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
          </motion.div>

          <motion.div className="overflow-hidden rounded-2xl shadow-md cursor-pointer group">
            <img src="/img8.jpg" alt="Gallery 8" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
          </motion.div>

          <motion.div className="overflow-hidden rounded-2xl shadow-md cursor-pointer group">
            <img src="/img9.jpg" alt="Gallery 9" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
          </motion.div>

          <motion.div className="overflow-hidden rounded-2xl shadow-md cursor-pointer group">
            <img src="/img10.jpg" alt="Gallery 10" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
          </motion.div>

          <motion.div className="overflow-hidden rounded-2xl shadow-md cursor-pointer group">
            <img src="/img11.jpg" alt="Gallery 11" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
          </motion.div>

          <motion.div className="overflow-hidden rounded-2xl shadow-md cursor-pointer group">
            <img src="/img12.jpg" alt="Gallery 12" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
          </motion.div>

          <motion.div className="overflow-hidden rounded-2xl shadow-md cursor-pointer group">
            <img src="/img13.jpg" alt="Gallery 13" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
          </motion.div>

          <motion.div className="overflow-hidden rounded-2xl shadow-md cursor-pointer group">
            <img src="/img14.jpg" alt="Gallery 14" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
          </motion.div>

          <motion.div className="overflow-hidden rounded-2xl shadow-md cursor-pointer group">
            <img src="/img15.jpg" alt="Gallery 15" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
          </motion.div>

          <motion.div className="overflow-hidden rounded-2xl shadow-md cursor-pointer group">
            <img src="/img23.jpg" alt="Gallery 16" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
          </motion.div>

          <motion.div className="overflow-hidden rounded-2xl shadow-md cursor-pointer group">
            <img src="/img17.jpg" alt="Gallery 17" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
          </motion.div>

          <motion.div className="overflow-hidden rounded-2xl shadow-md cursor-pointer group">
            <img src="/img18.jpg" alt="Gallery 18" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
          </motion.div>

          <motion.div className="overflow-hidden rounded-2xl shadow-md cursor-pointer group">
            <img src="/img19.jpg" alt="Gallery 19" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
          </motion.div>

          <motion.div className="overflow-hidden rounded-2xl shadow-md cursor-pointer group">
            <img src="/img20.jpg" alt="Gallery 20" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
