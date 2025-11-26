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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <div className="relative w-full h-64">
        <Image
          src="https://placehold.co/600x600.png"
          alt="test"
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5 flex flex-col gap-3">
        <Heading
          as={3}
          className="font-semibold leading-snug hover:text-glamorig-500 transition-colors"
        >
          Lorem, ipsum.
        </Heading>

        <Paragraph className="text-gray-600 leading-relaxed line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti a
          odit assumenda laboriosam in similique.
        </Paragraph>

        <div className="flex items-center gap-2 pt-1">
          <span className="text-sm text-gray-500">10 Nov 2025</span>
          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
          <span className="text-sm text-gray-500">Skincare</span>
        </div>
      </div>
    </div>
  );
}
