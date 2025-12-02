import OurLocation from "@/components/screens/our_location/ourlocation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Lokasi Glamori — Alamat & Cabang Glamori Aesthetic Clinic",
    template: "%s | Glamori App",
  },
  description:
    "Informasi lokasi Glamori Aesthetic Clinic lengkap dengan alamat, cabang, rute, jam operasional, dan akses transportasi untuk memudahkan Anda melakukan kunjungan dan treatment kecantikan.",
  keywords: [
    "Lokasi Glamori",
    "Alamat Glamori Clinic",
    "cabang Glamori",
    "lokasi klinik kecantikan",
    "alamat klinik aesthetic",
    "beauty clinic terdekat",
    "lokasi treatment kecantikan",
    "petunjuk arah Glamori",
    "jam operasional Glamori",
  ],
  authors: [
    {
      name: "Glamori Aesthetic Clinic",
      url: `${process.env.NEXT_PUBLIC_APP_URL}/hubungi-kami`,
    },
  ],
  creator: "Glamori App",
  publisher: "Glamori Aesthetic Clinic",
  category: "Beauty & Aesthetic",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://glamori-web.vercel.app"
  ),

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/hubungi-kami`,
    languages: {
      "id-ID": `${process.env.NEXT_PUBLIC_APP_URL}/hubungi-kami`,
    },
  },

  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/hubungi-kami`,
    title: "Lokasi Glamori — Alamat & Cabang Glamori Aesthetic Clinic",
    description:
      "Temukan alamat dan cabang Glamori Aesthetic Clinic beserta rute, detail lokasi, dan jam layanan untuk pengalaman kunjungan yang nyaman.",
    siteName: "Glamori App",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    // images: [
    //   {
    //     url: "https://glamori.app/og-lokasi.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Lokasi Glamori Aesthetic Clinic",
    //   },
    // ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lokasi Glamori — Alamat & Cabang Glamori Aesthetic Clinic",
    description:
      "Detail lokasi Glamori Aesthetic Clinic lengkap dengan alamat, jam operasional, dan informasi akses bagi pengunjung.",
    // images: ["https://glamori.app/og-lokasi.jpg"],
    site: "@GlamoriApp",
    creator: "@GlamoriApp",
  },
};

export default function GlamoriLocation() {
  return <OurLocation />;
}
