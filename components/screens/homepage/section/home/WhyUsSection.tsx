"use client";

import React from "react";
import WhyCard from "../../component/WhyCard";

const whyCards = [
  {
    icon: "⚕️",
    title: "Ditangani Dokter",
    description: "Setiap prosedur dikerjakan tenaga medis berlisensi dengan konsultasi terlebih dahulu.",
  },
  {
    icon: "✨",
    title: "Teknologi Terkini",
    description: "Pico Laser, Sylfirm X, HIFU, hingga skin booster premium dengan alat original.",
  },
  {
    icon: "💛",
    title: "Pengalaman Nyaman",
    description: "Ruang treatment privat dan suasana klinik yang tenang serta higienis.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="section why" id="why-us">
      <div className="wrap">
        <p className="eyebrow" style={{ textAlign: "center" }}>
          Kenapa Glamori
        </p>
        <h2 className="h2" style={{ textAlign: "center", marginTop: "8px" }}>
          Perawatan yang aman, hasil yang nyata
        </h2>
        <div className="why-grid">
          {whyCards.map((w, i) => (
            <WhyCard key={i} icon={w.icon} title={w.title} description={w.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
