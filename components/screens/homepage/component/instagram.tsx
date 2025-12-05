"use client";

import Spinner from "@/components/spinner";
import { useEffect, useState } from "react";

export default function InstagramEmbed({ url }: { url: string }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;

    script.onload = () => {
      setTimeout(() => setLoading(false), 400);
    };

    script.onerror = () => {
      console.error("Failed to load Instagram embed script");
      setLoading(false);
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full">
      {loading && (
        <div className="flex items-center justify-center h-64">
          <Spinner />
        </div>
      )}

      <blockquote
        className="w-full instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#fff",
          border: 0,
          borderRadius: "8px",
          boxShadow: "0 0 1px rgba(0,0,0,0.5), 0 1px 10px rgba(0,0,0,0.15)",
          padding: 0,
        }}
      />
    </div>
  );
}
