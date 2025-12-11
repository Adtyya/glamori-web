"use client";

import { Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/text";
import { CustomerReview } from "@/components/testimonial";
import Marquee from "react-fast-marquee";

const list_review = [
  {
    quote:
      "Tau tempat ini dari rekomen teman, ternyata pas pertama datang, baru masuk pintu aja uda nyaman, ruangan nya wangi dan bersih, pelayanan ramah, treatment pengerjaan nya sangat rapih dan bersih. Memuaskan sekali treatment disini. Bakal balik lg deh kesini. Thank you utk dokter dan perawat nya yang ramah2❤️",
    authorName: "Queena Ong",
    authorRole: "Customer Glamori",
    rating: 5,
  },
  {
    quote:
      "dari masuk uda feel kenyamanan tempatnya, ditambah profesional cara kerjanya. Totaly suka treatment facial di sana, langsung share pengalaman ke teman2.",
    authorName: "Poppy Wardani",
    authorRole: "Customer Glamori",
    rating: 5,
  },
  {
    quote:
      "Klinik paling nyaman, dan bagus. Dari segi pelayanan nya TOP banget🧡 Staff nya ramah”, dan baik. dan utk treatment nya juga bagus, benar” buat muka jadi cerah dan sehat.",
    authorName: "Yuni Sinurat",
    authorRole: "Customer Glamori",
    rating: 5,
  },
  {
    quote:
      "Kliniknya nyaman dan terlihat mewah, untuk para staf nya pun ramah-ramah sekali😍 ga nyesel berlangganan dan perawatan di Glamori Clinic hasilnya sangat memuaskan 🥰",
    authorName: "Fitri Isnaeni Nurunnisa",
    authorRole: "Customer Glamori",
    rating: 5,
  },
  {
    quote: `Creamnya bnr" bagus bgt, blm 1 bln pemakaian udah ada perubhn, wajah tmpak lebih cerah n flek memudar, jadi pgn ngaca terus, respon penjual cepat n ramah`,
    authorName: "Nery Asih",
    authorRole: "Customer Glamori",
    rating: 5,
  },
  {
    quote:
      "Tempat treatment paling cozy di Bandar Lampung. Pelayanannya oke banget, suster2 nya ramah semua, dokternya juga baik2 banget dan yg lebih penting selalu nyaranin treatment sesuai kebutuhan kita dan gak over. Paling suka dermahair disini hasilnya paling oke daripada tempat lain krna udah coba semua. Trs Pico lasernya mantap bgt buat yg punya flek sekali treatment lsg kelihatan hasilnya, skinboosternya juga bikin gamon.. aahhh semuanya sukaaa, apalagi kimbapnya yg selalu bikin kangen. Sukses terus Glamori 🤍🤍",
    authorName: "Venessa Ghea Azhari",
    authorRole: "Customer Glamori",
    rating: 5,
  },
];

export default function Testimonial() {
  return (
    <Container>
      <div className="py-12">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <Paragraph size="xl" className="font-semibold !text-glamorig-500">
              Testimonials
            </Paragraph>
            <Heading as={3} className="capitalize">
              Apa Kata Pelanggan Kami
            </Heading>
            <div className="flex items-center justify-center mt-3.5">
              <div className="w-2/4 bg-glamoris-900 h-0.5 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="relative hidden mt-5 lg:block">
          <Marquee pauseOnClick>
            {list_review.map((result) => {
              return (
                <div key={result.authorName} className="py-3.5 w-full max-w-lg">
                  <CustomerReview {...result} />
                </div>
              );
            })}
          </Marquee>
        </div>
        <div className="relative block mt-5 lg:hidden">
          <Marquee pauseOnHover>
            {list_review.map((result) => {
              return (
                <div key={result.authorName} className="py-3.5 w-full max-w-lg">
                  <CustomerReview {...result} />
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </Container>
  );
}
