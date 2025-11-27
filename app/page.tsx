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
      url: "https://glamori.app",
    },
  ],
  creator: "Glamori App",
  publisher: "Glamori Aesthetic Clinic",
  category: "Beauty & Aesthetic",
  metadataBase: new URL("https://glamori.app"),

  alternates: {
    canonical: "https://glamori.app",
    languages: {
      "id-ID": "https://glamori.app",
    },
  },

  openGraph: {
    type: "website",
    url: "https://glamori.app",
    title: "Glamori App — Klinik Kecantikan & Aesthetic Treatment Terlengkap",
    description:
      "Booking treatment kecantikan kini lebih mudah. Pilihan lengkap dari Face Treatment, Eyes Treatment, Lips Treatment, Body Treatment, Slimming, Whitening, Filler, sampai Miss V Treatment.",
    siteName: "Glamori App",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    // images: [
    //   {
    //     url: "https://glamori.app/og-banner.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Glamori Aesthetic Clinic",
    //   },
    // ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Glamori App — Klinik Kecantikan & Aesthetic Treatment Modern",
    description:
      "Platform pemesanan treatment kecantikan terlengkap: wajah, tubuh, contouring, dan perawatan premium lain.",
    // images: ["https://glamori.app/og-banner.jpg"],
    site: "@GlamoriApp",
    creator: "@GlamoriApp",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_CODE",
  //   bing: "YOUR_BING_VERIFICATION_CODE",
  //   yandex: "YOUR_YANDEX_VERIFICATION_CODE",
  // },

  generator: "Next.js",
  referrer: "origin",
  applicationName: "Glamori App",
};

export default function Home() {
  return <HomePageScreen />;
}
