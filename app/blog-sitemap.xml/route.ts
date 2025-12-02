import api from "@/lib/axios";
import { getServerSideSitemap } from "next-sitemap";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

export async function GET() {
  const allPosts = [];
  let page = 1;
  const pageSize = 100;
  let hasMore = true;

  while (hasMore) {
    const response = await api.get(`/article`, {
      params: {
        page: page,
        perPage: pageSize,
      },
    });

    const data = response?.data?.data?.docs;
    allPosts.push(...data);

    hasMore = data.length === pageSize;
    page++;
  }

  const sitemap = await getServerSideSitemap(
    allPosts.map((item) => {
      return {
        loc: `${APP_URL}/blog/${item?.slug}`,
        lastmod: item?.updatedAt || item?.date,
        priority: 1,
        changefreq: "daily",
      };
    })
  );

  // Set Cache-Control header
  sitemap.headers.set("Cache-Control", "no-cache, no-store, must-revalidate");

  return sitemap;
}
