"use client";
import { Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/text";
import Image from "next/image";

export default function LatestBlog() {
  return (
    <Container>
      <div className="py-12">
        <div className="flex items-center justify-start">
          <div className="text-start">
            <Paragraph size="xl" className="font-semibold !text-glamorig-500">
              News & Blog
            </Paragraph>
            <Heading as={3} className="capitalize">
              our latest news & blog
            </Heading>
            <div className="flex items-center justify-start mt-3.5">
              <div className="w-2/4 bg-glamoris-900 h-0.5 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Card() {
  return (
    <div className="overflow-hidden transition-all duration-300 bg-white shadow-lg cursor-pointer rounded-2xl hover:shadow-2xl hover:-translate-y-1 group">
      <div className="relative w-full h-64">
        <Image
          src="https://placehold.co/600x600.png"
          alt="test"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-3 p-5">
        <Heading
          as={4}
          className="font-semibold leading-snug transition-colors group-hover:text-glamorig-500"
        >
          Lorem, ipsum.
        </Heading>

        <Paragraph className="leading-relaxed text-gray-600 line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti a
          odit assumenda laboriosam in similique.
        </Paragraph>

        <div className="flex items-center gap-2 pt-1">
          <span className="text-sm text-gray-500">10 Nov 2025</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span className="text-sm text-gray-500">Skincare</span>
        </div>
      </div>
    </div>
  );
}
