import { Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/text";
import Image from "next/image";
import { dokter_cahyani, dokter_rista, dokter_nabila } from "@/constant/image";

const list_team = [
  {
    name: "dr. Nabila Chintia Putri",
    branch: "Jakarta",
    image: dokter_nabila,
    cta: "https://wa.me/6285270010701?text=Hallo Admin, Aku mau konsultasi Treatment.",
  },
  {
    name: "dr. Rista Febriana",
    branch: "Lampung",
    image: dokter_rista,
    cta: "https://wa.me/6289606000101?text=Hallo Admin, Aku mau konsultasi Treatment.",
  },
  {
    name: "dr. Cahyani Putry",
    branch: "Lampung",
    image: dokter_cahyani,
    cta: "https://wa.me/6289606000101?text=Hallo Admin, Aku mau konsultasi Treatment.",
  },
];

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
            {list_team.map((team) => {
              return <Card key={team.name} {...team} />;
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}

type CardProps = {
  image: string;
  name: string;
  branch: string;
  cta: string;
};

function Card({ image, name, branch, cta }: CardProps) {
  return (
    <div className="overflow-hidden rounded-xl drop-shadow-xl">
      {/* IMAGE */}
      <div
        className="relative w-full h-96"
        style={{
          background:
            "linear-gradient(180.24deg, #FFFFFF 12.52%, #FCEBA0 81.03%, #EEC74B 99.82%)",
        }}
      >
        <Image src={image} alt="sample" fill className="object-cover" />
      </div>

      <div className="bg-glamorig-100 px-4 py-2 flex flex-col items-center justify-center gap-0.5">
        <Paragraph className="!text-glamorig-600 font-semibold" size="lg">
          {name}
        </Paragraph>
        <Paragraph className="!text-glamorig-500 font-semibold" size="sm">
          Klinik Glamori {branch}
        </Paragraph>
      </div>

      {/* CTA */}
      <div className="bg-glamorig-500 p-3.5 flex items-center justify-center">
        <a href={cta}>
          <Paragraph size="lg" className="font-semibold !text-white">
            Mulai Konsultasi
          </Paragraph>
        </a>
      </div>
    </div>
  );
}
