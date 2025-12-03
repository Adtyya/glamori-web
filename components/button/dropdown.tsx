"use client";

import { useState, useRef, useEffect } from "react";
import Button from ".";

export type DropdownItem = {
  label: string;
  value: string;
};

type DropdownProps = {
  children: React.ReactNode;
  items: DropdownItem[];
  onSelect?: (value: string) => void;
  className?: string;
  direction?: "up" | "down";
};

export default function Dropdown({
  children,
  items,
  onSelect,
  className = "",
  direction = "down",
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const positionClass =
    direction === "up" ? "bottom-full mb-1" : "top-full mt-1";

  return (
    <div className={`relative inline-flex ${className}`} ref={dropdownRef}>
      {/* Trigger */}
      <Button onClick={() => setOpen((p) => !p)}>{children}</Button>

      {/* Menu Items */}
      {open && (
        <ul
          className={`absolute z-20 flex flex-col py-2 list-none bg-white rounded shadow-md w-fit shadow-slate-500/10 ${positionClass}`}
        >
          {items.map((item) => (
            <li key={item.value}>
              <button
                className="flex items-start justify-start w-full gap-2 p-2 px-5 text-left transition-colors duration-300 text-slate-500 hover:bg-glamorig-100 hover:text-glamorig-600"
                onClick={() => {
                  onSelect?.(item.value);
                  setOpen(false);
                }}
              >
                <span className="flex flex-col gap-1 overflow-hidden whitespace-nowrap">
                  <span className="leading-5 truncate">{item.label}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
