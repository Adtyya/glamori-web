"use client";

import React from "react";
import Link from "next/link";

export default function HeroSection() {
  const handleReservasi = () => {
    window.open(
      "https://wa.me/6285270010701?text=Halo%20Glamori%2C%20saya%20tertarik%20dengan%20Miss%20V%20Series%20treatment.",
      "_blank"
    );
  };

  const handlePriceDetail = () => {
    window.open(
      "https://wa.me/6285270010701?text=Halo%20Glamori%2C%20boleh%20tanya%20detail%20harga%20untuk%20Miss%20V%20Series%3F",
      "_blank"
    );
  };

  const handleScrollToTreatment = () => {
    document.getElementById("pilihan-treatment")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pp-hero">
      <div className="wrap">
        <div className="crumb">
          <Link href="/">Beranda</Link> /{" "}
          <Link href="/#treatments">Treatment</Link> / Miss V Series
        </div>
        <div className="pp-grid">
          <div>
            <p className="eyebrow">Perawatan Area Intim Wanita</p>
            <h1>
              Miss V Series <span className="callout">SEO H1</span>
            </h1>
            <p className="intro">
              Rangkaian perawatan intim wanita untuk menjaga kebersihan, kesehatan, dan kekencangan area kewanitaan — dikerjakan dokter berlisensi dengan prosedur medis yang aman dan nyaman.
            </p>
            <div className="hero-cta">
              <a onClick={handleReservasi} className="btn btn-gold">
                Konsultasi Gratis
              </a>
              <a onClick={handleScrollToTreatment} className="btn btn-ghost">
                Lihat Harga
              </a>
            </div>
            <div className="pp-stats">
              <div className="pp-stat">
                <b>6</b>
                <span>Pilihan treatment</span>
              </div>
              <div className="pp-stat">
                <b>
                  15–45<small style={{ fontSize: ".8rem" }}> mnt</small>
                </b>
                <span>Durasi prosedur</span>
              </div>
              <div className="pp-stat">
                <b>Minimal</b>
                <span>Downtime</span>
              </div>
              <div className="pp-stat">
                <b>Dokter ♀</b>
                <span>Tenaga wanita</span>
              </div>
            </div>
          </div>
          <aside className="pp-side">
            <span className="price-label">Mulai dari</span>
            <div className="price">
              Rp 850.000 <small>/ sesi</small>
            </div>
            <ul>
              <li>✓ Konsultasi dokter sebelum treatment</li>
              <li>✓ Prosedur medis aman &amp; steril</li>
              <li>✓ Tersedia di Jakarta &amp; Lampung</li>
              <li>✓ Sebagian treatment tanpa downtime</li>
            </ul>
            <a onClick={handleReservasi} className="btn btn-gold">
              Reservasi via WhatsApp
            </a>
            <a onClick={handlePriceDetail} className="btn btn-ghost">
              Tanya Detail Harga
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
