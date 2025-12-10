"use client";
import { Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/text";
import Image from "next/image";
import InstagramEmbed from "../component/instagram";
import {
  glamori_overview_1,
  glamori_overview_2,
  glamori_overview_3,
  glamori_overview_4,
} from "@/constant/image";

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
            <div className="grid grid-cols-1 gap-3.5 order-1 lg:order-1">
              <Card image={glamori_overview_1} />
              <Card image={glamori_overview_2} />
            </div>

            <div className="relative order-3 w-full h-full overflow-hidden md:h-80 lg:h-full rounded-2xl md:order-2">
              <InstagramEmbed url="https://www.instagram.com/reel/DPqJ71Zk-5N/" />
            </div>

            <div className="grid grid-cols-1 gap-3.5 order-2 lg:order-3">
              <Card image={glamori_overview_3} />
              <Card image={glamori_overview_4} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

function Card({ image }: { image: string }) {
  return (
    <div className="relative w-full overflow-hidden h-52 lg:h-[23rem] rounded-2xl">
      <Image src={image} alt="test" fill className="object-cover" />
    </div>
  );
}
