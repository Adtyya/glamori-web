"use client";
import { Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/text";
import Image from "next/image";

export default function FollowInstagram() {
  return (
    <Container>
      <div className="py-12">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <Paragraph size="xl" className="font-semibold !text-glamorig-500">
              Follow Us
            </Paragraph>
            <Heading as={3} className="capitalize">
              Ikuti Kami di Instagram
            </Heading>
            <div className="flex items-center justify-center mt-3.5">
              <div className="w-2/4 bg-glamoris-900 h-0.5 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="relative mt-5">
          <div className="grid gap-3.5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="grid grid-cols-2 gap-3.5 order-1 lg:order-1">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>

            <div className="relative order-3 w-full h-64 overflow-hidden md:h-80 lg:h-full rounded-2xl md:order-2">
              <Image
                src="https://placehold.co/600x600.png"
                alt="test"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-3.5 order-2 lg:order-3">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

function Card() {
  return (
    <div className="relative w-full overflow-hidden h-52 lg:h-72 rounded-2xl">
      <Image
        src="https://placehold.co/600x600.png"
        alt="test"
        fill
        className="object-cover"
      />
    </div>
  );
}
