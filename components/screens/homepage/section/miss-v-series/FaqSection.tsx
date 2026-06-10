"use client";

import React from "react";
import FaqItem from "../../component/FaqItem";

const ppfaqs = [
  {
    question: "Apakah treatment Miss V aman?",
    answer: "Semua prosedur dikerjakan dokter berlisensi dengan alat steril dan metode medis yang teruji aman.",
  },
  {
    question: "Berapa lama hasilnya bertahan?",
    answer: "Tergantung jenis treatment — mulai dari beberapa minggu (PRP) hingga beberapa bulan (collagen stimulator). Dijelaskan saat konsultasi.",
  },
  {
    question: "Apakah ada downtime?",
    answer: "Beberapa treatment seperti V-Inject dan V-Shoot tanpa downtime sehingga bisa langsung beraktivitas.",
  },
  {
    question: "Apakah ditangani dokter wanita?",
    answer: "Ya, untuk kenyamanan dan privasi, treatment area intim ditangani tenaga medis wanita berlisensi.",
  },
];

export default function FaqSection() {
  const handleReservasi = () => {
    window.open(
      "https://wa.me/6285270010701?text=Halo%20Glamori%2C%20saya%20tertarik%20dengan%20Miss%20V%20Series%20treatment.",
      "_blank"
    );
  };

  return (
    <section className="section why" style={{ padding: "64px 0" }}>
      <div className="wrap">
        <p className="eyebrow">FAQ</p>
        <h2 className="h2" style={{ margin: "8px 0 24px" }}>
          Pertanyaan umum <span className="callout">FAQ SCHEMA</span>
        </h2>
        <div className="faq-grid">
          <div>
            <p style={{ color: "var(--ink-soft)", margin: "6px 0 22px" }}>
              Punya pertanyaan lain seputar Miss V Series? Tim dokter kami siap membantu secara privat lewat WhatsApp.
            </p>
            <a onClick={handleReservasi} className="btn btn-gold">
              Tanyakan Sekarang
            </a>
          </div>
          <div>
            {ppfaqs.map((faq, i) => (
              <FaqItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
