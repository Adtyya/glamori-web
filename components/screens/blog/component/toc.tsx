"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { Heading } from "@/components/text";

type TocItem = {
  id: string;
  text: string;
  level: number;
};

interface Props {
  items: TocItem[];
}

export default function TableOfContents({ items }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observers = items.map((item) => {
      const el = document.getElementById(item.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(item.id);
        },
        { rootMargin: "0px 0px -70% 0px" }
      );

      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, [items]);

  return (
    <aside className="space-y-2 sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto p-2">
      <Heading as={6}>Daftar Isi</Heading>

      <nav className="flex flex-col gap-1">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={clsx(
              "block text-base transition-colors hover:text-glamorig-500",
              activeId === item.id
                ? "text-glamorig-500 font-semibold"
                : "text-slate-500",
              item.level === 2 && "ml-3",
              item.level === 3 && "ml-6"
            )}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </aside>
  );
}
