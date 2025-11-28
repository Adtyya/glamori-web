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
      url: "https://glamori.app",
    },
  ],
  creator: "Glamori App",
  publisher: "Glamori Aesthetic Clinic",
  category: "Beauty & Aesthetic",
  metadataBase: new URL("https://glamori.app"),

  alternates: {
    canonical: "https://glamori.app/about-us",
    languages: {
      "id-ID": "https://glamori.app/about-us",
    },
  },

  openGraph: {
    type: "website",
    url: "https://glamori.app/about-us",
    title: "Tentang Kami — Glamori App",
    description:
      "Kenali lebih dekat Glamori Aesthetic Clinic: tim profesional, inovasi teknologi kecantikan, dan komitmen memberikan pengalaman perawatan berkualitas premium.",
    siteName: "Glamori App",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    // images: [
    //   {
    //     url: "https://glamori.app/og-about-us.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Glamori Aesthetic Clinic — About Us",
    //   },
    // ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tentang Kami — Glamori App",
    description:
      "Profil Glamori Aesthetic Clinic, platform kecantikan modern dengan layanan treatment berkualitas tinggi untuk wajah, tubuh, dan estetika premium.",
    // images: ["https://glamori.app/og-about-us.jpg"],
    site: "@GlamoriApp",
    creator: "@GlamoriApp",
  },
};

export default function AboutUs() {
  return <AboutUsScreen />;
}
