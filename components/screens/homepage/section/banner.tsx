import Button from "@/components/button";
import { Container } from "@/components/layout";
import { Heading } from "@/components/text";
import { glamori_banner_homepage } from "@/constant/image";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Banner() {
  return (
    <div className="w-full min-h-[calc(100vh-4.5rem)] relative">
      <Image
        src={glamori_banner_homepage}
        alt="banner_homepage"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay konten */}
      <div className="absolute inset-0">
        <Container>
          <div className="grid items-start w-full h-full grid-cols-1 gap-6 lg:items-center">
            <div className="px-4 py-12 text-left lg:py-0 lg:px-0">
              <Heading as={1} className="capitalize text-glamorig-600">
                mari rawat kulit cantikmu
              </Heading>
              <Heading as={4} className="mt-2 font-medium">
                Jadwalkan treatmentmu sekarang juga
              </Heading>
              <Link href="/hubungi-kami">
                <Button
                  size="lg"
                  className="mx-auto mt-10 font-semibold lg:mx-0"
                >
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Kolom kanan dibiarkan kosong untuk komposisi gambar (desktop) */}
            <div className="items-end justify-end hidden lg:flex" />
          </div>
        </Container>
      </div>
    </div>
  );
}
