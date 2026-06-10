"use client";

import React from "react";

export default function IntroSection() {
  return (
    <section className="section why" style={{ padding: "64px 0" }}>
      <div className="wrap">
        <div className="split">
          <div className="ph">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
              alt="Konsultasi dokter Glamori"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="bd">
            <p className="eyebrow">Kenapa perawatan area intim</p>
            <h3>Kesehatan area intim, bagian dari kepercayaan diri Anda</h3>
            <p style={{ color: "var(--ink-soft)" }}>
              Tidak hanya wajah dan tubuh, area intim juga memerlukan perhatian khusus agar tetap bersih, sehat, kencang, dan terawat — mendukung kenyamanan sekaligus rasa percaya diri.
            </p>
            <ul>
              <li>✓ Ditangani tenaga medis wanita berlisensi</li>
              <li>✓ Prosedur steril dengan privasi penuh</li>
              <li>✓ Teknologi ozone, PRP, ultrasound &amp; collagen stimulator</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
