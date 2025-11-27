import Button from "@/components/button";
import { Container } from "@/components/layout";
import { Heading } from "@/components/text";
import { glamori_banner_homepage } from "@/constant/image";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Banner() {
  return (
    <div className="w-full min-h-[calc(100vh-4.5rem)] relative">
      <Image
        src={glamori_banner_homepage}
        alt="banner_homepage"
        fill
        className="object-cover brightness-75"
        priority
      />

      {/* Overlay konten */}
      <div className="absolute inset-0">
        <Container>
          <div className="grid items-center w-full h-full grid-cols-1 gap-6">
            <div className="px-4 text-center lg:text-left lg:px-0">
              <Heading as={1} className="capitalize text-glamorig-500">
                mari rawat kulit cantikmu
              </Heading>
              <Heading as={3} className="mt-2 font-thin">
                Jadwalkan treatmentmu sekarang juga
              </Heading>

              <Button size="lg" className="mx-auto mt-10 font-semibold lg:mx-0">
                Book Now
              </Button>
            </div>

            {/* Kolom kanan dibiarkan kosong untuk komposisi gambar (desktop) */}
            <div className="items-end justify-end hidden lg:flex" />
          </div>
        </Container>
      </div>
    </div>
  );
}
