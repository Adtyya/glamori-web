/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { ArticleProps } from "@/types/article";
import axios from "axios";

export function useArticles(perPage: number = 3, search: string = "") {
  const [articles, setArticles] = useState<ArticleProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchArticles() {
      try {
        setLoading(true);
        const res = await api.get(
          `/article?perPage=${perPage}&search=${search}`,
          {
            signal: controller.signal,
          }
        );
        setArticles(res.data.data.docs);
      } catch (err: any) {
        if (axios.isCancel(err)) return;
        setError(err?.message || "Gagal memuat artikel");
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
    return () => controller.abort();
  }, [perPage]);

  return { articles, loading, error };
}
