"use client";

import Link from "next/link";
import clsx from "clsx";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export default function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        className={clsx(
          "flex h-14 items-stretch gap-2 list-none rounded bg-white px-4",
          className
        )}
      >
        {items.map((item, index) => {
          const isFirst = index === 0;
          const isLast = index === items.length - 1;

          return (
            <li
              key={index}
              className={clsx(
                isFirst && "flex items-center gap-2",
                !isFirst && !isLast && "hidden items-center gap-2 md:flex",
                index === items.length - 2 && "flex items-center gap-2",
                isLast && "flex flex-1 items-center"
              )}
            >
              {/* Konten link / label */}
              {isLast ? (
                <span className="max-w-[20ch] truncate whitespace-nowrap text-slate-400 pointer-events-none font-semibold">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href ?? "#"}
                  className="flex max-w-[20ch] items-center gap-1 truncate whitespace-nowrap text-slate-700 transition-colors hover:text-glamorig-500 font-semibold"
                >
                  {isFirst ? (
                    // Icon Home
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  ) : (
                    item.label
                  )}
                </Link>
              )}

              {/* Icon arrow jika bukan terakhir */}
              {!isLast && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-none w-4 h-4 transition-transform stroke-slate-700 md:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
