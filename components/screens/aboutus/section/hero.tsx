import { Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/text";
import Image from "next/image";
import { glamori_team } from "@/constant/image";

export default function Hero() {
  return (
    <Container>
      <div className="py-12">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="flex items-center col-span-full lg:col-span-1">
            <div className="relative w-full overflow-hidden border border-gray-200 rounded-lg shadow-md aspect-square">
              <Image
                src={glamori_team}
                alt="glamori_logo"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-span-full lg:col-span-2 space-y-3.5">
            <Heading as={1} className="capitalize text-glamorig-500">
              clinic story
            </Heading>
            <Paragraph size="lg" className="text-justify">
              Selamat datang di Glamori, klinik kecantikan modern dengan Nomer 1
              Derma V Laser yang hadir di Sumatera dan Jakarta sebagai solusi
              lengkap untuk perawatan kulit dan kecantikan Anda. Kami percaya
              bahwa setiap orang berhak merasakan kulit sehat, tampak muda, dan
              penuh percaya diri melalui perawatan yang aman, profesional, dan
              berbasis teknologi terkini. Glamori menghadirkan layanan estetika
              berkualitas tinggi mulai dari perawatan wajah, perawatan jerawat,
              anti aging, skin rejuvenation, hingga tindakan laser menggunakan
              teknologi Derma V Laser yang dikenal efektif dan minim downtime.
              Setiap layanan ditangani oleh tim dokter estetik berpengalaman
              serta terapis bersertifikat yang selalu mengutamakan kenyamanan
              dan keamanan pasien. Sebagai klinik yang berkembang di Sumatera
              dan Jakarta, Glamori mengusung standar pelayanan premium dengan
              pendampingan personal pada setiap pasien. Kami memberikan
              konsultasi mendalam untuk memahami kondisi kulit Anda, sehingga
              setiap perawatan dapat disesuaikan dan memberikan hasil terbaik.
              Dengan perpaduan teknologi modern dan sentuhan layanan yang
              hangat, Glamori berkomitmen menjadi destinasi kecantikan paling
              terpercaya. Misi kami adalah menghadirkan pengalaman perawatan
              yang bukan hanya mempercantik, tetapi juga memberikan rasa tenang,
              percaya diri, dan kepuasan menyeluruh.
            </Paragraph>
          </div>
        </div>
      </div>
    </Container>
  );
}
