/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@/lib/axios";
import { getServerSideSitemap } from "next-sitemap";
import type { ISitemapField } from "next-sitemap";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

export async function GET() {
  try {
    const response = await api.get("/article", {
      params: { page: 1, perPage: 15 },
    });

    const totalPages = response?.data?.data?.totalPages || 1;
    const pages: ISitemapField[] = [];

    for (let page = 1; page <= totalPages; page++) {
      pages.push({
        loc:
          page === 1
            ? `${APP_URL}/blog`
            : `${APP_URL}/blog/lihat-semua/${page}`,
        lastmod: new Date().toISOString(),
        changefreq: "daily" as any,
        priority: page === 1 ? 1 : 0.8,
      });
    }

    const sitemap = await getServerSideSitemap(pages);

    sitemap.headers.set("Cache-Control", "no-cache, no-store, must-revalidate");

    return sitemap;
  } catch (error) {
    console.error("Error generating sitemap pagination:", error);

    const sitemap = await getServerSideSitemap([
      {
        loc: `${APP_URL}/blog`,
        lastmod: new Date().toISOString(),
        changefreq: "daily" as any,
        priority: 1,
      },
    ]);

    sitemap.headers.set("Cache-Control", "no-cache, no-store, must-revalidate");

    return sitemap;
  }
}
