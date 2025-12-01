import Blog from "@/components/screens/blog/blog";
import api from "@/lib/axios";
import { Metadata } from "next";
import type { RootResponseProps } from "@/types/response";
import type { ArticleProps } from "@/types/article";

export const revalidate = 0;

export const metadata: Metadata = {
  title: {
    default: "Blog Glamori — Artikel Kecantikan, Aesthetic & Perawatan Kulit",
    template: "%s | Glamori App",
  },
  description:
    "Blog Glamori menyajikan artikel seputar dunia kecantikan, aesthetic treatment, skincare, anti-aging, body care, dan tips perawatan kulit berbasis sains dan teknologi medis modern.",
  keywords: [
    "Blog Glamori",
    "artikel kecantikan",
    "tips perawatan kulit",
    "aesthetic blog",
    "beauty blog indonesia",
    "skin treatment blog",
    "anti aging",
    "perawatan wajah",
    "perawatan tubuh",
    "filler dan botox",
    "skincare routine",
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
    canonical: "https://glamori.app/blog",
    languages: {
      "id-ID": "https://glamori.app/blog",
    },
  },

  openGraph: {
    type: "website",
    url: "https://glamori.app/blog",
    title: "Blog Glamori — Artikel Kecantikan & Aesthetic Treatment",
    description:
      "Kumpulan artikel informatif seputar skincare, facial treatment, contouring, anti-aging, dan panduan memilih perawatan kecantikan yang tepat.",
    siteName: "Glamori App",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    // images: [
    //   {
    //     url: "https://glamori.app/og-blog.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Blog Glamori — Artikel Kecantikan & Aesthetic",
    //   },
    // ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Blog Glamori — Artikel Kecantikan & Aesthetic Treatment",
    description:
      "Sumber informasi seputar dunia kecantikan, skincare, anti-aging, dan perawatan estetika berbasis teknologi modern.",
    // images: ["https://glamori.app/og-blog.jpg"],
    site: "@GlamoriApp",
    creator: "@GlamoriApp",
  },
};

async function fetchAllArticle(): Promise<RootResponseProps<ArticleProps>> {
  try {
    const res = await api.get("/article");
    return res.data;
  } catch (error) {
    console.error("Error fetching blog data !");
    return {
      status: 500,
      message: `Failed to fetch article ! ${error}`,
      data: {
        docs: [],
        totalDocs: 0,
        limit: 0,
        totalPages: 0,
        page: 0,
        pagingCounter: 0,
        hasPrevPage: false,
        hasNextPage: false,
        prevPage: false,
        nextPage: false,
      },
    };
  }
}

export default async function BlogPage() {
  const articleList = await fetchAllArticle();

  return <Blog {...{ articleList }} />;
}
