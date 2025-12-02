import AboutUsScreen from "@/components/screens/aboutus/about_us";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Tentang Kami — Glamori App",
    template: "%s | Glamori App",
  },
  description:
    "Halaman About Us Glamori App menjelaskan visi, misi, nilai, dan perjalanan Glamori Aesthetic Clinic dalam menghadirkan layanan kecantikan premium berbasis teknologi untuk membantu setiap individu tampil percaya diri.",
  keywords: [
    "About Glamori App",
    "Tentang Glamori Clinic",
    "profil klinik kecantikan",
    "clinic aesthetic profile",
    "visi misi klinik kecantikan",
    "beauty clinic indonesia",
    "aesthetic clinic modern",
    "digital beauty platform",
  ],
  authors: [
    {
      name: "Glamori Aesthetic Clinic",
      url: new URL(
        `${process.env.NEXT_PUBLIC_APP_URL}/tentang-glamori` ||
          "https://glamori.app/tentang-glamori"
      ),
    },
  ],
  creator: "Glamori App",
  publisher: "Glamori Aesthetic Clinic",
  category: "Beauty & Aesthetic",
  metadataBase: new URL(
    `${process.env.NEXT_PUBLIC_APP_URL}` || "https://glamori.app"
  ),

  alternates: {
    canonical: new URL(
      `${process.env.NEXT_PUBLIC_APP_URL}/tentang-glamori` ||
        "https://glamori.app/tentang-glamori"
    ),
    languages: {
      "id-ID": new URL(
        `${process.env.NEXT_PUBLIC_APP_URL}/tentang-glamori` ||
          "https://glamori.app/tentang-glamori"
      ),
    },
  },

  openGraph: {
    type: "website",
    url: new URL(
      `${process.env.NEXT_PUBLIC_APP_URL}/tentang-glamori` ||
        "https://glamori.app/tentang-glamori"
    ),
    title: "Tentang Kami — Glamori App",
    description:
      "Kenali lebih dekat Glamori Aesthetic Clinic: tim profesional, inovasi teknologi kecantikan, dan komitmen memberikan pengalaman perawatan berkualitas premium.",
    siteName: "Glamori App",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    images: [
      {
        url: `${
          process.env.NEXT_PUBLIC_APP_URL || "https://glamori-web.vercel.app"
        }/assets/logo/glamori_white_square.png`,
        alt: "Glamori Aesthetic Clinic — About Us",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tentang Kami — Glamori App",
    description:
      "Profil Glamori Aesthetic Clinic, platform kecantikan modern dengan layanan treatment berkualitas tinggi untuk wajah, tubuh, dan estetika premium.",
    images: [
      `${
        process.env.NEXT_PUBLIC_APP_URL || "https://glamori-web.vercel.app"
      }/assets/logo/glamori_white_square.png`,
    ],
    site: "@GlamoriApp",
    creator: "@GlamoriApp",
  },
};

export default function AboutUs() {
  return <AboutUsScreen />;
}
