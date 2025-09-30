"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

export default function ClientsCarousel() {
  const clients = [
    "https://probuztech.in/Content/assets/images/clients/1.png",
    "https://probuztech.in/Content/assets/images/clients/2.png",
    "https://probuztech.in/Content/assets/images/clients/3.png",
    "https://probuztech.in/Content/assets/images/clients/4.png",
    "https://probuztech.in/Content/assets/images/clients/5.png",
    "https://probuztech.in/Content/assets/images/clients/6.png",
    "https://probuztech.in/Content/assets/images/clients/7.png",
  ];

  return (
    <div className="client-carousel">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={20}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          992: { slidesPerView: 3 },
          767: { slidesPerView: 2 },
          480: { slidesPerView: 2 },
        }}
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="client">
              <Image
                src={client}
                alt={`Client ${index + 1}`}
                width={150}
                height={80}
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
