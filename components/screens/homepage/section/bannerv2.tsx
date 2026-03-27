"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import { Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/text";
import { useEffect, useState } from "react";

const banner_list = [
  {
    path: "/assets/homepage/desktop_1.png",
  },
  {
    path: "/assets/homepage/desktop_2.png",
  },
  {
    path: "/assets/homepage/desktop_3.jpg",
  },
];

const banner_list_mobile = [
  {
    path: "/assets/homepage/mobile_1.png",
  },
  {
    path: "/assets/homepage/mobile_2.png",
  },
  {
    path: "/assets/homepage/mobile_3.png",
  },
];

export default function BannerV2() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const banners = isMobile ? banner_list_mobile : banner_list;

  return (
    <div className="w-full h-[calc(100vh-4.5rem)] relative">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {banners.map((r, i) => (
          <SwiperSlide key={i} className="relative w-full h-full bg-black">
            <Image
              src={r.path}
              alt={`banner-${i}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1905px"
              className="object-cover object-center opacity-90"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-0 z-10 w-full h-full">
        <Container>
          <div className="w-full h-full py-12">
            <div className="flex items-start justify-start w-full h-full lg:items-center">
              <div className="bg-black/40 p-3.5 rounded-xl space-y-5">
                <Heading
                  as={1}
                  className="w-full max-w-xl uppercase text-glamorig-200"
                >
                  Timeless beauty, perfected with glamori
                </Heading>
                <Paragraph size="xl" className="w-full max-w-xl text-white">
                  Setiap perawatan dirancang untuk menyempurnakan kecantikan
                  alami kulit Anda.
                </Paragraph>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
