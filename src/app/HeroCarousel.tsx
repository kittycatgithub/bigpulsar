"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroCarousel() {
  return (
    <div className="relative">
      <Swiper
        modules={[Keyboard, Navigation, Pagination]}
        keyboard={{ enabled: true }}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-green-500 opacity-50",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-green-600 opacity-100",
        }}
        loop={false} // Disabled since we have only one slide
        slidesPerView={1}
        spaceBetween={0}
        className="relative"
      >
        <SwiperSlide>
          <section className="relative overflow-hidden">
            {/* Video Slide - No Overlay or Text */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[85vh] object-cover"
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </section>
        </SwiperSlide>
      </Swiper>

      {/* Custom Arrows - Optional for single slide */}
      <div className="custom-swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white text-3xl font-bold">
        &#10094;
      </div>
      <div className="custom-swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white text-3xl font-bold">
        &#10095;
      </div>
    </div>
  );
}