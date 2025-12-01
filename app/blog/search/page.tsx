import SearchPage from "@/components/screens/blog/search";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Pencarian Blog — Glamori App",
    template: "%s | Glamori App",
  },
  description:
    "Hasil pencarian artikel di Blog Glamori. Temukan informasi seputar kecantikan, skincare, perawatan estetika, anti-aging, dan tips perawatan kulit berbasis teknologi modern.",
  keywords: [
    "Blog Glamori",
    "pencarian artikel",
    "artikel kecantikan",
    "tips perawatan kulit",
    "aesthetic blog",
    "skincare",
    "anti aging",
    "perawatan wajah",
    "perawatan tubuh",
    "filler dan botox",
    "beauty blog",
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
    canonical: "https://glamori.app/blog/search",
    languages: {
      "id-ID": "https://glamori.app/blog/search",
    },
  },

  openGraph: {
    type: "website",
    url: "https://glamori.app/blog/search",
    title: "Pencarian Blog — Glamori App",
    description:
      "Hasil pencarian artikel terbaru di Blog Glamori seputar dunia kecantikan, skincare, anti-aging, dan perawatan estetika berbasis teknologi medis modern.",
    siteName: "Glamori App",
    locale: "id_ID",
    alternateLocale: ["en_US"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pencarian Blog — Glamori App",
    description:
      "Temukan artikel kecantikan, aesthetic treatment, dan tips perawatan kulit di Blog Glamori melalui fitur pencarian.",
    site: "@GlamoriApp",
    creator: "@GlamoriApp",
  },
};

export default function BlogSearchPage() {
  return <SearchPage />;
}
