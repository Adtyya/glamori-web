import { useEffect, useState } from "react";
import { extractToc } from "@/lib/toc_extractor";

export type TocItem = {
  id: string;
  text: string;
  level: number;
};

export function useToc(markdown: string) {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!markdown) {
      setToc([]);
      return;
    }

    let isMounted = true;

    async function generate() {
      try {
        setLoading(true);
        const result = await extractToc(markdown);

        const raw =
          result && typeof result.values === "function"
            ? result.values()
            : Array.isArray(result)
            ? result
            : [];

        const items = Array.from(raw) as TocItem[];

        if (isMounted) setToc(items);
      } catch (err) {
        console.error("Failed to generate TOC", err);
        if (isMounted) setToc([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    generate();
    return () => {
      isMounted = false;
    };
  }, [markdown]);

  return { toc, loading };
}
