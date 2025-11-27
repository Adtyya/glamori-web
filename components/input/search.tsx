"use client";

import { InputHTMLAttributes } from "react";
import clsx from "clsx";

type SearchInputProps = InputHTMLAttributes<HTMLInputElement> & {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
};

export default function SearchInput({
  value,
  onChange,
  className,
  ...props
}: SearchInputProps) {
  return (
    <div className="relative">
      <input
        type="search"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={props.placeholder ?? "Search here"}
        className={clsx(
          "w-full h-10 px-4 pr-12 text-sm transition-all border rounded outline-none",
          "border-slate-200 text-slate-600",
          "focus:border-glamorig-500",
          "invalid:border-pink-500 invalid:text-pink-500 invalid:focus:border-pink-500",
          "disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400",
          className
        )}
        {...props}
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-2.5 right-4 h-5 w-5 cursor-pointer stroke-slate-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </div>
  );
}
