import HomePageScreen from "@/components/screens/homepage/homepage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Glamori App — Klinik Kecantikan & Aesthetic Treatment Terlengkap",
    template: "%s | Glamori App",
  },
  description:
    "Glamori App adalah platform kecantikan modern untuk pemesanan Face Treatment, Eyes Treatment, Lips Treatment, Body Treatment, Slimming, Whitening, Filler, dan Miss V Treatment. Hadir dengan teknologi digital dan tim profesional untuk membantu Anda tampil percaya diri dengan kulit sehat, cerah, dan awet muda.",
  keywords: [
    "Glamori App",
    "Glamori Clinic",
    "klinik kecantikan",
    "klinik aesthetic",
    "face treatment",
    "eyes treatment",
    "lips treatment",
    "body treatment",
    "slimming",
    "whitening",
    "filler",
    "miss v treatment",
    "perawatan wajah",
    "perawatan tubuh",
    "klinik suntik filler",
    "skincare clinic",
    "beauty clinic booking",
    "aesthetic treatment",
  ],
  authors: [
    {
      name: "Glamori Aesthetic Clinic",
      url: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://glamori.app"),
    },
  ],
  creator: "Glamori App",
  publisher: "Glamori Aesthetic Clinic",
  category: "Beauty & Aesthetic",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://glamori.app"
  ),

  alternates: {
    canonical: new URL(
      process.env.NEXT_PUBLIC_APP_URL || "https://glamori.app"
    ),
    languages: {
      "id-ID": new URL(
        process.env.NEXT_PUBLIC_APP_URL || "https://glamori.app"
      ),
    },
  },

  openGraph: {
    type: "website",
    url: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://glamori.app"),
    title: "Glamori App — Klinik Kecantikan & Aesthetic Treatment Terlengkap",
    description:
      "Booking treatment kecantikan kini lebih mudah. Pilihan lengkap dari Face Treatment, Eyes Treatment, Lips Treatment, Body Treatment, Slimming, Whitening, Filler, sampai Miss V Treatment.",
    siteName: "Glamori App",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    images: [
      {
        url: `${
          process.env.NEXT_PUBLIC_APP_URL || "https://glamori-web.vercel.app"
        }/assets/logo/glamori_white_square.png`,
        alt: "Glamori Aesthetic Clinic",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Glamori App — Klinik Kecantikan & Aesthetic Treatment Modern",
    description:
      "Platform pemesanan treatment kecantikan terlengkap: wajah, tubuh, contouring, dan perawatan premium lain.",
    images: [
      `${
        process.env.NEXT_PUBLIC_APP_URL || "https://glamori-web.vercel.app"
      }/assets/logo/glamori_white_square.png`,
    ],
    site: "@GlamoriApp",
    creator: "@GlamoriApp",
  },
};

export default function Home() {
  return <HomePageScreen />;
}
