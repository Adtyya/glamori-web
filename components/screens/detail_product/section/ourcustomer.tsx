"use client";

import { Container } from "@/components/layout";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Heading, Paragraph } from "@/components/text";

const videos = [
  "https://res.cloudinary.com/dmz19yaoz/video/upload/q_auto:good,f_auto/v1765424719/gram_glamoriaesthetic_2_egvxem.mov",
  "https://res.cloudinary.com/dmz19yaoz/video/upload/q_auto:good,f_auto/v1765424720/social-cat-instagram_glamoriaesthetic_hhydnd.mov",
  "https://res.cloudinary.com/dmz19yaoz/video/upload/q_auto:good,f_auto/v1765424732/SnapInsta.to_AQOQabw5FxuIcnkxBUfwD_zc6eSru_rP4wOkZ8tdZbnQCCsIF7CKdxQUuR4SHevZQVI7njFRMJMHrLep9uMNIZ_-DzAgktLDBUHvjEA_v7i3pt.mov",
  "https://res.cloudinary.com/dmz19yaoz/video/upload/q_auto:good,f_auto/v1765424742/SnapInsta.to_AQMTcidY9Iho5P1TUOWPOSw2JBZBuYu6N9wU8sgW_BKy-JEuICLBy3Q0pBgAfO4hdJC03p0KQLA1FgRRwVKvvCOhV4qC3hZqfodqW3c_y2qq7r.mov",
];

export default function WhatOurCustomerSay() {
  return (
    <Container>
      <div className="py-12">
        <div className="flex items-center justify-center mb-8">
          <div className="text-center">
            <Paragraph size="xl" className="font-semibold !text-glamorig-500">
              Testimonials
            </Paragraph>
            <Heading as={3} className="capitalize">
              Apa Kata Pelanggan Kami
            </Heading>
            <div className="flex items-center justify-center mt-3.5">
              <div className="w-2/4 bg-glamoris-900 h-0.5 rounded-full"></div>
            </div>
          </div>
        </div>
        <Swiper
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="w-full"
        >
          {videos.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="w-full rounded-xl overflow-hidden aspect-[9/16] bg-black">
                <video
                  src={src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="object-cover w-full h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
}
