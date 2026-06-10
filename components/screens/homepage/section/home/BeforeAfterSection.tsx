"use client";

import React from "react";
import BeforeAfterSlider from "../../component/BeforeAfterSlider";

const beforeAfters = [
  {
    title: "Skin Booster",
    subtitle: "Kulit lebih cerah & kenyal",
    beforeImage: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80",
    afterImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
  },
  {
    title: "Acne Treatment",
    subtitle: "Jerawat & bekas berkurang",
    beforeImage: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80",
    afterImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
  },
  {
    title: "Glow Facial",
    subtitle: "Wajah tampak lebih segar",
    beforeImage: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80",
    afterImage: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
  },
];

export default function BeforeAfterSection() {
  return (
    <section className="section ba-wrap">
      <div className="wrap">
        <div className="ba-head">
          <p className="eyebrow">Hasil Nyata</p>
          <h2 className="h2" style={{ marginTop: "8px" }}>
            Before &amp; After
          </h2>
          <p>Geser untuk melihat perbedaan sebelum dan sesudah perawatan di Glamori. Hasil dapat bervariasi pada setiap individu.</p>
        </div>
        <div className="ba-grid">
          {beforeAfters.map((ba, i) => (
            <BeforeAfterSlider
              key={i}
              title={ba.title}
              subtitle={ba.subtitle}
              beforeImage={ba.beforeImage}
              afterImage={ba.afterImage}
            />
          ))}
        </div>
        <p className="ba-note">*Foto pasien asli, dipublikasikan atas persetujuan. Hasil setiap orang dapat berbeda.</p>
      </div>
    </section>
  );
}
