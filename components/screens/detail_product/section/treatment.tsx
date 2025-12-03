"use client";
import Button from "@/components/button";
import { Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/text";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { useParams } from "next/navigation";
import Link from "next/link";
import { treatment_list } from "@/constant/treatment";

export default function Treatment() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const params = useParams();

  return (
    <Container>
      <div className="py-12">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <Paragraph size="xl" className="font-semibold !text-glamorig-500">
              Treatments
            </Paragraph>
            <Heading as={3} className="capitalize">
              Apa yang Bisa Kami Lakukan untuk Anda
            </Heading>
            <div className="flex items-center justify-center mt-3.5">
              <div className="w-2/4 bg-glamoris-900 h-0.5 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="relative mt-5">
          <button
            onClick={() => swiperInstance?.slidePrev()}
            className="absolute left-0 z-10 items-center justify-center hidden w-12 h-12 text-white transition-colors -translate-y-1/2 rounded-full shadow-lg cursor-pointer 2xl:-left-20 top-1/2 bg-glamorig-500 lg:flex hover:bg-glamorig-600 disabled:opacity-50 disabled:cursor-not-allowed"
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
            className="absolute right-0 z-10 items-center justify-center hidden w-12 h-12 text-white transition-colors -translate-y-1/2 rounded-full shadow-lg cursor-pointer 2xl:-right-20 top-1/2 bg-glamorig-500 lg:flex hover:bg-glamorig-600 disabled:opacity-50 disabled:cursor-not-allowed"
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
            {treatment_list
              .filter((r) => r.slug !== params.slug)
              .map((treatment) => {
                return (
                  <SwiperSlide className="py-3.5" key={treatment.title}>
                    <Card {...treatment} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </Container>
  );
}

type CardProps = {
  title: string;
  spoiler?: string;
  slug: string;
};

function Card({ title, spoiler, slug }: CardProps) {
  return (
    <div className="w-full border-2 border-glamorig-500 rounded-2xl overflow-hidden hover:-translate-y-3.5 hover:drop-shadow-md duration-300">
      <div className="px-1.5 py-5 border-b-2 border-glamorig-500 text-center">
        <Paragraph size="lg" className="font-semibold !text-glamorig-500">
          {title}
        </Paragraph>
      </div>
      <div className="relative w-full h-96">
        <Image
          src="https://placehold.co/600x600.png"
          alt="test"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-2.5">
        <Paragraph className="font-medium text-justify line-clamp-3">
          {spoiler}
        </Paragraph>
      </div>
      <div className="px-2.5 pb-5 flex items-center justify-center">
        <Link href={`/product/${slug}`}>
          <Button>Lihat Selengkapnya</Button>
        </Link>
      </div>
    </div>
  );
}
