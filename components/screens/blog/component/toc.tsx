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
    <aside className="p-4 space-y-4 overflow-y-auto bg-white border shadow-sm max-h-96 rounded-xl border-slate-200 w-fit">
      <Heading
        as={6}
        className="text-sm font-bold tracking-wide text-slate-700"
      >
        Daftar Isi
      </Heading>

      <nav className="flex flex-col gap-1.5">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={clsx(
              "relative block text-[15px] py-1.5 pl-3 rounded-lg transition-all duration-200 group",
              activeId === item.id
                ? "text-[#E3AC14] font-semibold bg-[#E3AC141A]"
                : "text-slate-600 hover:text-[#E3AC14] hover:bg-[#E3AC140F]",
              item.level === 2 && "ml-3",
              item.level === 3 && "ml-6"
            )}
          >
            {/* Indicator bar di kiri */}
            <span
              className={clsx(
                "absolute left-0 top-0 h-full w-1 rounded-r-full transition-all duration-200",
                activeId === item.id
                  ? "bg-[#E3AC14] opacity-100"
                  : "opacity-0 group-hover:opacity-60 bg-[#E3AC14]"
              )}
            />
            {item.text}
          </a>
        ))}
      </nav>
    </aside>
  );
}
