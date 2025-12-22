"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import { Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/text";
import { useEffect, useState } from "react";

const banner_list = [
  {
    path: "https://res.cloudinary.com/dmz19yaoz/image/upload/v1765776627/Banner_1_BG_r2wdfc.png",
  },
  {
    path: "https://res.cloudinary.com/dmz19yaoz/image/upload/v1765776615/Banner_2_BG_smi7au.png",
  },
  {
    path: "https://res.cloudinary.com/dmz19yaoz/image/upload/v1765776622/Banner_3_BG_fuuacw.jpg",
  },
];

const banner_list_mobile = [
  {
    path: "https://res.cloudinary.com/dmz19yaoz/image/upload/v1765776611/Banner_1_BG_mobile_s7yach.png",
  },
  {
    path: "https://res.cloudinary.com/dmz19yaoz/image/upload/v1765776610/Banner_2_BG_mobile_dlvhyl.png",
  },
  {
    path: "https://res.cloudinary.com/dmz19yaoz/image/upload/v1765776614/Banner_3_BG_mobile_ekmqm9.png",
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
              priority
              quality={100}
              sizes="100vw"
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
