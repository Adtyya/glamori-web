"use client";

import React from "react";
import FaqItem from "../../component/FaqItem";

const faqs = [
  {
    question: "Apa itu Glamori?",
    answer: "Klinik kecantikan modern dengan perawatan kulit & tubuh menggunakan teknologi terkini dan tenaga profesional berlisensi.",
  },
  {
    question: "Apakah perlu konsultasi sebelum treatment?",
    answer: "Ya, setiap treatment diawali konsultasi gratis dengan dokter untuk menentukan perawatan yang sesuai.",
  },
  {
    question: "Bagaimana cara membuat janji?",
    answer: "Reservasi mudah lewat WhatsApp, aplikasi Glamori, atau langsung ke cabang Jakarta dan Lampung.",
  },
  {
    question: "Apakah Glamori memiliki cabang?",
    answer: "Ya, saat ini Glamori hadir di Jakarta (Pluit) dan Bandar Lampung.",
  },
  {
    question: "Apakah ada efek samping setelah treatment?",
    answer: "Sebagian besar treatment aman dengan minimal downtime. Detail dijelaskan saat konsultasi.",
  },
];

export default function FaqSection() {
  const handleReservasi = () => {
    window.open(
      "https://wa.me/6285270010701?text=Halo%20Glamori%2C%20saya%20ingin%20melakukan%20reservasi%20treatment.",
      "_blank"
    );
  };

  return (
    <section className="section">
      <div className="wrap">
        <p className="eyebrow">FAQ</p>
        <h2 className="h2" style={{ marginTop: "8px" }}>
          Tanya jawab seputar layanan
        </h2>
        <div className="faq-grid">
          <div>
            <p style={{ color: "var(--ink-soft)", margin: "18px 0 22px" }}>
              Belum menemukan jawaban yang Anda cari? Tim kami siap membantu lewat WhatsApp.
            </p>
            <a onClick={handleReservasi} className="btn btn-gold">
              Tanyakan Sekarang
            </a>
          </div>
          <div>
            {faqs.map((faq, i) => (
              <FaqItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
