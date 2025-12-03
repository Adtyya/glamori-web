import Button from "@/components/button";
import { Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/text";
import { FaWhatsapp } from "react-icons/fa";

export default function Maps() {
  return (
    <Container>
      <div className="py-12">
        <Heading as={1} className="fixed top-0 hidden">
          Lokasi Glamori
        </Heading>
        <div
          id="location-1"
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3.5 mb-20"
        >
          <div className="space-y-3.5">
            <Heading as={3} className="capitalize text-start">
              Glamori cabang jakarta
            </Heading>
            <Paragraph size="lg" className="text-justify">
              Jl. Muara Karang Bar., RT.1/RW.2, Pluit, Kecamatan Penjaringan,
              Jkt Utara, Daerah Khusus Ibukota Jakarta 14450, Indonesia
            </Paragraph>
            <a
              href="https://wa.me/6285270010701?text=Hallo Admin, Aku mau konsultasi Treatment."
              target="_blank"
            >
              <Button className="py-2 font-semibold">
                <FaWhatsapp className="w-7 h-7" />
                <span className="block">Reservasi Sekarang</span>
              </Button>
            </a>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.1080774356515!2d106.77225277498948!3d-6.116150693870475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1d0036c8f731%3A0xde7c81f9d83e6dd5!2sGlamori%20Aesthetic%20Clinic%20Jakarta!5e0!3m2!1sid!2sid!4v1764228170520!5m2!1sid!2sid"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-64 border-none lg:h-96"
            ></iframe>
          </div>
        </div>
        <div
          id="location-2"
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3.5"
        >
          <div className="space-y-3.5">
            <Heading as={3} className="capitalize text-start">
              Glamori cabang lampung
            </Heading>
            <Paragraph size="lg" className="text-justify">
              Jl. Diponegoro No.156, Enggal, Engal, Kota Bandar Lampung, Lampung
              35118
            </Paragraph>
            <a
              href="https://wa.me/6289606000101?text=Hallo Admin, Aku mau konsultasi Treatment."
              target="_blank"
            >
              <Button className="py-2 font-semibold">
                <FaWhatsapp className="w-7 h-7" />
                <span className="block">Reservasi Sekarang</span>
              </Button>
            </a>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.953879474643!2d105.2559779757887!3d-5.423978554149122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40db2897a0398f%3A0x9e2689ab973bd88a!2sGlamori%20Aesthetic%20Clinic!5e0!3m2!1sid!2sid!4v1764228407685!5m2!1sid!2sid"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-64 border-none lg:h-96"
            ></iframe>
          </div>
        </div>
      </div>
    </Container>
  );
}
