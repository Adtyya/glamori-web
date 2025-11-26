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
          <div className="grid grid-cols-1 gap-6 w-full h-full items-center">
            <div className="text-center lg:text-left px-4 lg:px-0">
              <Heading as={1} className="capitalize text-glamorig-500">
                mari rawat kulit cantikmu
              </Heading>
              <Heading as={3} className="font-thin mt-2">
                Jadwalkan treatmentmu sekarang juga
              </Heading>

              <Button size="lg" className="font-semibold mt-10 mx-auto lg:mx-0">
                Book Now
              </Button>
            </div>

            {/* Kolom kanan dibiarkan kosong untuk komposisi gambar (desktop) */}
            <div className="hidden lg:flex items-end justify-end" />
          </div>
        </Container>
      </div>

      {/* Tombol Chat WhatsApp */}
      <div className="absolute right-4 bottom-4 lg:right-10 lg:bottom-10 hidden lg:block">
        <Button className="font-semibold !py-5 lg:!py-2">
          <FaWhatsapp className="w-7 h-7" />
          <span className="hidden lg:block">Chat WhatsApp</span>
        </Button>
      </div>
    </div>
  );
}
