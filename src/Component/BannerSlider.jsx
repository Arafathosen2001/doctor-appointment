"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const BannerSlider = () => {
  const banners = [
    {
      id: 1,
      image: "/assets/banner1.png",
      title: "Find the Best Doctors Near You",
      subtitle:
        "Book appointments instantly with trusted healthcare professionals.",
    },
    {
      id: 2,
      image: "/assets/banner2.png",
      title: "Quality Healthcare Services",
      subtitle:
        "Connect with experienced specialists and receive the best care.",
    },
    
  ];

  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="rounded-xl overflow-hidden"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px]">
              {/* Background Image */}
              <Image
                src={banner.image}
                alt={banner.title}
                        fill
                        priority
                        sizes="100vw"
                        className="object-center object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                    {banner.title}
                  </h1>

                  <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl">
                    {banner.subtitle}
                  </p>

                  <button className="mt-6 px-6 py-3 rounded-lg bg-white text-black font-semibold hover:scale-105 transition">
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerSlider;