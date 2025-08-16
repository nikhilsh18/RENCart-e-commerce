"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

export default function HeroSwiper() {
  const slides = [
    {
      id: 1,
      title: "Redefine Your Wardrobe",
      subtitle: "Timeless pieces designed for modern living",
      ctaPrimary: "Shop Collection",
      ctaSecondary: "Discover More",
      img: "/img4b.webp",
    },
    {
      id: 2,
      title: "Effortless Everyday Style",
      subtitle: "Minimal looks that make a bold statement",
      ctaPrimary: "Shop New Arrivals",
      ctaSecondary: "View Lookbook",
      img: "/img5b.jpg",
    },
    {
      id: 3,
      title: "Crafted for Every Season",
      subtitle: "Sustainable fashion built for comfort & durability",
      ctaPrimary: "Shop Now",
      ctaSecondary: "Explore Essentials",
      img: "/img6b.jpg",
    },
  ];

  return (
    <section className="relative w-full">
      <Swiper
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        slidesPerView={1}
        className="h-[70vh] sm:h-[75vh] md:h-[85vh] lg:h-[90vh]"
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <div className="relative w-full h-[70vh] sm:h-[75vh] md:h-[85vh] lg:h-[90vh] bg-gray-100">
              {/* Background image */}
              <Image
                src={s.img}
                alt={s.title}
                fill
                priority={s.id === 1}
                className="object-cover object-center"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
                  <div className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 text-white">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-snug sm:leading-tight drop-shadow-lg">
                      {s.title}
                    </h2>
                    <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-lg text-white/90">
                      {s.subtitle}
                    </p>

                    <div className="mt-4 sm:mt-6 flex flex-wrap gap-3">
                      <a
                        href="#"
                        className="inline-block bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md text-xs sm:text-sm md:text-base font-medium shadow-lg hover:opacity-95 transition"
                        aria-label={s.ctaPrimary}
                      >
                        {s.ctaPrimary}
                      </a>
                      <a
                        href="#"
                        className="inline-block border border-white/70 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-md text-xs sm:text-sm md:text-base font-medium hover:bg-white/10 transition"
                        aria-label={s.ctaSecondary}
                      >
                        {s.ctaSecondary}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 md:left-12 md:bottom-8 bg-white/10 text-white px-2 sm:px-3 py-1 rounded-md text-[10px] sm:text-xs">
                Free Shipping on All Orders Above ₹1999
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
