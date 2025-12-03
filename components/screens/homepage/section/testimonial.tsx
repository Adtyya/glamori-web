"use client";
import { Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/text";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";

export default function Testimonial() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <Container>
      <div className="py-12">
        <div className="flex items-center justify-center">
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
        <div className="relative mt-5">
          <button
            onClick={() => swiperInstance?.slidePrev()}
            className="absolute z-10 items-center justify-center hidden w-12 h-12 text-white transition-colors -translate-y-1/2 rounded-full shadow-lg cursor-pointer -left-20 top-1/2 bg-glamorig-500 lg:flex hover:bg-glamorig-600 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous slide"
            disabled={!swiperInstance}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            onClick={() => swiperInstance?.slideNext()}
            className="absolute z-10 items-center justify-center hidden w-12 h-12 text-white transition-colors -translate-y-1/2 rounded-full shadow-lg cursor-pointer -right-20 top-1/2 bg-glamorig-500 lg:flex hover:bg-glamorig-600 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next slide"
            disabled={!swiperInstance}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            onSwiper={setSwiperInstance}
            spaceBetween={30}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
          >
            <SwiperSlide className="py-3.5">
              <Card />
            </SwiperSlide>
            <SwiperSlide className="py-3.5">
              <Card />
            </SwiperSlide>
            <SwiperSlide className="py-3.5">
              <Card />
            </SwiperSlide>
            <SwiperSlide className="py-3.5">
              <Card />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Container>
  );
}

function Card() {
  return (
    <div className="relative w-full h-96">
      <Image
        src="https://placehold.co/600x600.png"
        alt="test"
        fill
        className="object-cover"
      />
    </div>
  );
}
