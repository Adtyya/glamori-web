"use client";

import React from "react";

const treatmentsList = [
  {
    title: "V-Rejuvenation",
    sub: "Ozone + Injeksi",
    description: "Kombinasi teknologi ozone dan injeksi untuk menjaga kebersihan, kesehatan, serta kekencangan area intim. Membantu membersihkan bakteri patogen dan menstimulasi kolagen.",
    chips: ["Membersihkan bakteri", "Meremajakan jaringan", "Stimulasi kolagen"],
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=500&q=80",
  },
  {
    title: "V-FEMILIFT (PRP)",
    sub: "PRP Injection",
    description: "Injeksi PRP untuk memperbaiki tekstur kulit, meningkatkan kekencangan, dan sensitivitas area intim. Direkomendasikan satu bulan sekali untuk hasil optimal.",
    chips: ["Perbaiki kualitas kulit", "Kencangkan otot", "Tingkatkan kenyamanan"],
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80",
  },
  {
    title: "V-Shoot",
    sub: "Non-invasif · Ultrasound",
    description: "Treatment ultrasound non-invasif untuk meningkatkan elastisitas tanpa rasa sakit dan tanpa masa pemulihan. Memperkuat otot panggul dan saluran kemih.",
    chips: ["Tanpa downtime", "Elastisitas otot", "Perkuat panggul"],
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=500&q=80",
  },
  {
    title: "V-Inject",
    sub: "Injeksi Khusus",
    description: "Injeksi dengan formula khusus untuk mengencangkan area panggul dan jaringan intim. Prosedur cepat tanpa downtime sehingga bisa langsung beraktivitas.",
    chips: ["Prosedur cepat", "Tanpa downtime", "Kencangkan panggul"],
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=500&q=80",
  },
  {
    title: "V-Lift",
    sub: "Collagen Stimulator",
    description: "Penyuntikan collagen stimulator pada area labia untuk merangsang produksi kolagen alami, mengembalikan bentuk labia, dan memberikan tampilan lebih sehat.",
    chips: ["Bentuk natural", "Stimulasi kolagen", "Tampilan lebih sehat"],
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=500&q=80",
  },
  {
    title: "V-Fill",
    sub: "Filler Area Intim",
    description: "Perawatan untuk mengoreksi dan memperindah bentuk area intim sehingga tampak lebih simetris dan proporsional, dengan efek kencang dan lebih terawat.",
    chips: ["Lebih simetris", "Memperindah kontur", "Prosedur medis aman"],
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80",
  },
];

export default function TreatmentsListSection() {
  return (
    <section className="pp-body" id="pilihan-treatment" style={{ padding: "64px 0 30px" }}>
      <div className="wrap">
        <p className="eyebrow">Pilihan Treatment</p>
        <h2 className="h2" style={{ margin: "8px 0 6px" }}>
          6 perawatan dalam Miss V Series
        </h2>
        <p style={{ color: "var(--ink-soft)", marginBottom: "32px", maxWidth: "560px" }}>
          Setiap perawatan diformulasikan aman dan disesuaikan dengan kebutuhan Anda.
        </p>

        {treatmentsList.map((svc, i) => (
          <div className="svc-rich" key={i}>
            <div className="ph">
              <img src={svc.image} alt={svc.title} loading="lazy" />
            </div>
            <div className="bd">
              <div className="sub">{svc.sub}</div>
              <h3>{svc.title}</h3>
              <p>{svc.description}</p>
              <div className="chips">
                {svc.chips.map((chip, idx) => (
                  <span key={idx}>{chip}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
