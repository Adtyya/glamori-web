import { Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/text";
import { glamori_team_sample } from "@/constant/image";
import Image from "next/image";

export default function OurTeam() {
  return (
    <Container>
      <div className="py-12">
        <div className="flex items-center justify-center">
          <Heading as={3} className="capitalize text-glamorig-500">
            bertemu dengan tim kami
          </Heading>
        </div>
        <div className="w-full max-w-5xl mx-auto mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
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
    <div className="overflow-hidden rounded-t-full drop-shadow-xl">
      <div
        className="relative w-full h-96"
        style={{
          background:
            "linear-gradient(180.24deg, #FFFFFF 12.52%, #FCEBA0 81.03%, #EEC74B 99.82%)",
        }}
      >
        <Image
          src={glamori_team_sample}
          alt="sample"
          fill
          className="object-contain"
        />
      </div>
      <div className="bg-glamorig-100 p-3.5 flex items-center justify-center">
        <Paragraph className="!text-glamorig-500 font-semibold" size="lg">
          Name
        </Paragraph>
      </div>
      <div className="bg-glamorig-500 p-3.5 flex items-center justify-center rounded-b-2xl">
        <a href="">
          <Paragraph size="lg" className="font-semibold !text-white">
            Mulai Konsultasi
          </Paragraph>
        </a>
      </div>
    </div>
  );
}
