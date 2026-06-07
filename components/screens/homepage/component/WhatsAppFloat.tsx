"use client";

import React from "react";

interface WhatsAppFloatProps {
  url?: string;
}

export default function WhatsAppFloat({
  url = "https://wa.me/6285270010701?text=Halo%20Glamori%2C%20saya%20ingin%20tanya%20mengenai%20treatment%20di%20sini.",
}: WhatsAppFloatProps) {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div className="wa" onClick={handleClick}>
      💬 Chat WhatsApp
    </div>
  );
}
