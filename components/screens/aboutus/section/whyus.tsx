import { Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/text";
import { PiHandSoapBold } from "react-icons/pi";
import {
  PiShieldCheckBold,
  PiArmchairBold,
  PiSparkleBold,
  PiStethoscopeBold,
  PiGraduationCapBold,
  PiLockKeyBold,
} from "react-icons/pi";

const why_us = [
  {
    title: "Terpercaya",
    subtitle:
      "Berpengalaman di bidang estetika membuat kami dipercaya oleh setiap pasien kami",
    icon: PiShieldCheckBold,
  },
  {
    title: "Nyaman",
    subtitle: "Memberikan kenyamanan bagi setiap pasien",
    icon: PiArmchairBold,
  },
  {
    title: "Hasil Nyata",
    subtitle:
      "Berbagai perawatan non-bedah tersedia untuk memberikan hasil yang nyata",
    icon: PiSparkleBold,
  },
  {
    title: "Dokter Profesional",
    subtitle:
      "Tim dokter berpengalaman di bidang estetika berkomitmen melayani kamu dengan maksimal",
    icon: PiStethoscopeBold,
  },
  {
    title: "Terapis yang Terlatih",
    subtitle:
      "Seluruh terapis kami telah menjalani pelatihan kecantikan agar dapat memberikan pelayanan terbaik",
    icon: PiGraduationCapBold,
  },
  {
    title: "Prosedur yang Aman",
    subtitle:
      "Keamanan dan kenyamanan pasien adalah prioritas utama dalam setiap tindakan",
    icon: PiLockKeyBold,
  },
];

export default function WhyGlamori() {
  return (
    <div className="py-12 bg-glamorig-100">
      <Container>
        <div className="flex items-center justify-center">
          <Heading as={2} className="text-center text-glamorig-500">
            Mengapa memilih Glamori ?
          </Heading>
        </div>
        <div className="w-full max-w-4xl mx-auto mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {why_us.map((item) => {
              return <Card key={item.title} {...item} />;
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}

type CardProps = {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

function Card({ title, subtitle, icon: Icon }: CardProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-3.5 rounded-2xl bg-glamorig-300 lg:aspect-square gap-3.5">
      <div>
        <Icon size={48} />
      </div>
      <h2 className="text-2xl font-semibold capitalize">{title}</h2>
      <Paragraph className="px-5 text-center">{subtitle}</Paragraph>
    </div>
  );
}
