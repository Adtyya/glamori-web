"use client";

import React from "react";

interface CtaBandProps {
  title: string;
  description: string;
  buttonText: string;
  whatsappUrl?: string;
}

export default function CtaBand({
  title,
  description,
  buttonText,
  whatsappUrl = "https://wa.me/6285270010701?text=Halo%20Glamori%2C%20saya%20ingin%20melakukan%20reservasi%20treatment.",
}: CtaBandProps) {
  const handleReservasi = () => {
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="cta-band">
          <h2>{title}</h2>
          <p>{description}</p>
          <a onClick={handleReservasi} className="btn btn-gold">
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
