"use client";
import { Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/text";

export default function Subscribe() {
  return (
    <Container>
      <div className="py-12">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-2xl text-center">
            <Paragraph size="xl" className="font-semibold !text-glamorig-500">
              Subscribe
            </Paragraph>

            <Heading as={3} className="capitalize">
              Jangan Lewatkan{" "}
              <span className="!text-glamorig-500">Penawaran Terbaik Kami</span>
            </Heading>

            <Paragraph className="!text-glamoris-700" size="lg">
              Masukkan email Anda di bawah untuk mendapatkan berita terbaru,
              promo menarik, dan update berkala langsung ke inbox Anda.
            </Paragraph>
            <div className="flex items-center justify-center mt-3.5">
              <div className="w-2/4 bg-glamoris-900 h-0.5 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="relative mt-5">
          <div className="flex items-center justify-center">
            <div className="flex overflow-hidden rounded-full shadow-sm bg-glamoris-100">
              <input
                type="email"
                placeholder="sari@gmail.com"
                className="w-56 px-5 py-3 text-sm bg-transparent sm:w-72 lg:w-96 focus:outline-none"
              />
              <button className="px-6 py-3 font-medium text-white transition-all bg-glamorig-500 whitespace-nowrap hover:bg-glamorig-600">
                Berlangganan
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
