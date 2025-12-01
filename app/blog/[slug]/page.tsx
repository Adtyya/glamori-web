import ReadBlog from "@/components/screens/blog/read";
import api from "@/lib/axios";
import { ArticleProps } from "@/types/article";
import { RootResponseByIdProps } from "@/types/response";
import { Metadata } from "next";

type ReadProps = {
  params: {
    slug: string;
  };
};

export const revalidate = 0;

async function fetchArticleBySlug(
  slug: string
): Promise<RootResponseByIdProps<ArticleProps>> {
  try {
    const res = await api.get(`/article/slug/${slug}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching blog data !");
    return {
      status: 500,
      message: `Failed to fetch article ! ${error}`,
      data: {
        totalView: 0,
        _id: "",
        title: "",
        slug: "",
        image: "",
        imageId: "",
        description: "",
        spoiler: "",
        isActive: false,
        category: "",
        date: "",
        createdAt: "",
        updatedAt: "",
        __v: 0,
      },
    };
  }
}

export async function generateMetadata({
  params,
}: ReadProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await fetchArticleBySlug(slug);

  if (!article?.data?._id) {
    return {
      title: "Artikel tidak ditemukan — Glamori App",
      description: "Artikel yang Anda cari tidak tersedia atau telah dihapus.",
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${slug}`,
      },
    };
  }

  return {
    title: `${article.data.title} | Glamori App`,
    description: article.data.spoiler,
    keywords: [
      article.data.title,
      article.data.category,
      "Artikel Glamori",
      "Blog Glamori",
      "Beauty Aesthetic",
    ],
    openGraph: {
      type: "article",
      url: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${slug}`,
      title: article.data.title,
      description: article.data.spoiler,
      siteName: "Glamori App",
      locale: "id_ID",
      images: article.data.image
        ? [
            {
              url: article.data.image,
              width: 1200,
              height: 630,
              alt: article.data.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: article.data.title,
      description: article.data.spoiler,
      images: article.data.image ? [article.data.image] : [],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${slug}`,
    },
  };
}

export default async function Read({ params }: ReadProps) {
  const { slug } = await params;
  const articleDetails = await fetchArticleBySlug(slug);
  return <ReadBlog {...{ articleDetails }} />;
}
