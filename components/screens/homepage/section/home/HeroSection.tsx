"use client";

import React from "react";

export default function HeroSection() {
  const handleReservasi = () => {
    window.open(
      "https://wa.me/6285270010701?text=Halo%20Glamori%2C%20saya%20ingin%20melakukan%20reservasi%20treatment.",
      "_blank"
    );
  };

  const handleScrollToTreatments = () => {
    document.getElementById("treatments")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="hero-loc">
            📍 <b>Jakarta&nbsp;(Pluit)</b> &amp; <b>Bandar&nbsp;Lampung</b>
          </div>
          <h1>
            Klinik kecantikan &amp; <em>aesthetic</em> tepercaya
          </h1>
          <p className="lead">
            Facial, laser, filler, skin booster, slimming hingga Miss V — ditangani dokter berlisensi dengan teknologi terkini. Tampil percaya diri dengan kulit sehat dan awet muda.
          </p>
          <div className="hero-cta">
            <a onClick={handleReservasi} className="btn btn-gold">
              Reservasi via WhatsApp
            </a>
            <a onClick={handleScrollToTreatments} className="btn btn-ghost">
              Lihat Treatment
            </a>
          </div>
          <div className="trust-row">
            <div className="ti">
              <b>12.000+</b>
              <span>Treatment dilakukan</span>
            </div>
            <div className="ti">
              <b>4.9★</b>
              <span>Rating pelanggan</span>
            </div>
            <div className="ti">
              <b>2</b>
              <span>Cabang aktif</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo">
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80"
              alt="Perawatan wajah di Glamori Aesthetic Clinic"
            />
          </div>
          <div className="hero-badge b1">
            <span className="stars">★★★★★</span>
            <br />
            Klinik ternyaman
          </div>
          <div className="hero-badge b2">
            <span className="av">
              <i></i>
              <i></i>
              <i></i>
            </span>
            <span>
              Dokter
              <br />
              berlisensi
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
