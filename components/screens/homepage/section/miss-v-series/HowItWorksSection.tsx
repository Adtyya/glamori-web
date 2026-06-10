"use client";

import React from "react";

export default function HowItWorksSection() {
  return (
    <section className="section" style={{ padding: "56px 0" }}>
      <div className="wrap">
        <p className="eyebrow">Alur Treatment</p>
        <h2 className="h2" style={{ marginTop: "8px" }}>
          Bagaimana prosesnya
        </h2>
        <div className="steps">
          <div className="step">
            <div className="n">1</div>
            <h4>Konsultasi</h4>
            <p>Dokter menilai kondisi Anda dan merekomendasikan treatment yang sesuai — gratis.</p>
          </div>
          <div className="step">
            <div className="n">2</div>
            <h4>Persiapan</h4>
            <p>Area dibersihkan and disterilkan. Dijelaskan setiap tahap prosedurnya.</p>
          </div>
          <div className="step">
            <div className="n">3</div>
            <h4>Treatment</h4>
            <p>Prosedur dikerjakan dokter wanita berlisensi, 15–45 menit tergantung jenis.</p>
          </div>
          <div className="step">
            <div className="n">4</div>
            <h4>Pemulihan</h4>
            <p>Panduan perawatan pasca-treatment dan jadwal kontrol bila diperlukan.</p>
          </div>
        </div>
        <div className="note" style={{ marginTop: "36px" }}>
          <span>💡</span>
          <div>
            <b>Tidak yakin treatment mana yang cocok?</b> Konsultasi gratis dengan dokter kami untuk rekomendasi sesuai kondisi Anda — tanpa biaya, tanpa komitmen.
          </div>
        </div>
      </div>
    </section>
  );
}
