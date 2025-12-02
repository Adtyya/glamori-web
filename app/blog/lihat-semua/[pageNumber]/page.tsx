import PaginationBlogPage from "@/components/screens/blog/pagination";
import api from "@/lib/axios";
import { ArticleProps } from "@/types/article";
import { RootResponseProps } from "@/types/response";
import { Metadata } from "next";

type PageNumberProps = {
  params: {
    pageNumber: string;
  };
};

export async function generateMetadata({
  params,
}: PageNumberProps): Promise<Metadata> {
  const { pageNumber } = await params;
  const page = parseInt(pageNumber || "1");
  const baseUrl = `${process.env.NEXT_PUBLIC_APP_URL}/blog/lihat-semua`;

  const title =
    page > 1
      ? `Artikel Kecantikan & Aesthetic — Halaman ${page}`
      : "Artikel Kecantikan & Aesthetic — Lihat Semua";

  const description = `
    Kumpulan artikel seputar skincare, tubuh, perawatan wajah & teknologi aesthetic modern.
    Halaman ${page} dari arsip artikel Glamori.
  `.trim();

  const meta: Metadata = {
    title: {
      default: title,
      template: "%s | Glamori App",
    },
    description,

    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_URL}/blog`,
      languages: {
        "id-ID": `${process.env.NEXT_PUBLIC_APP_URL}/blog`,
      },
    },

    openGraph: {
      type: "website",
      url: `${baseUrl}/${page}`,
      title,
      description,
      siteName: "Glamori App",
      locale: "id_ID",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@GlamoriApp",
      creator: "@GlamoriApp",
    },

    other: {},
  };

  if (page > 1) {
    meta.other!["link:prev"] = `${baseUrl}/${page - 1}`;
  }

  meta.other!["link:next"] = `${baseUrl}/${page + 1}`;

  return meta;
}

async function fetchAllArticle(
  page: number = 1
): Promise<RootResponseProps<ArticleProps>> {
  try {
    const res = await api.get(`/article?perPage=15&page=${page}`);
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

export default async function PaginationPage({ params }: PageNumberProps) {
  const { pageNumber } = await params;

  const articleList = await fetchAllArticle(parseInt(pageNumber || "1"));

  return <PaginationBlogPage {...{ articleList }} />;
}
