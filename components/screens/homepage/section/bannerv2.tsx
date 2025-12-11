"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

const banner_list = [
  {
    path: "https://res.cloudinary.com/dmz19yaoz/image/upload/v1765429065/slide_1_uu3qu8.jpg",
  },
  {
    path: "https://res.cloudinary.com/dmz19yaoz/image/upload/v1765429072/slide_2_n1meds.jpg",
  },
];

export default function BannerV2() {
  return (
    <div className="w-full h-68 lg:h-[calc(100vh-4.5rem)]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="w-full h-full"
      >
        {banner_list.map((r, i) => (
          <SwiperSlide key={i} className="relative w-full h-full bg-black">
            <div className="relative w-full h-full">
              <Image
                src={r.path}
                alt={`banner-${i}`}
                fill
                priority
                quality={100}
                sizes="100vw"
                className="object-cover object-center w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
