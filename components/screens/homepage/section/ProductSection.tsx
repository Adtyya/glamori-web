"use client";

import React from "react";
import Link from "next/link";
import FaqItem from "../component/FaqItem";
import CtaBand from "../component/CtaBand";

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

export default function ProductSection() {
  const handleReservasi = () => {
    window.open("https://wa.me/6285270010701?text=Halo%20Glamori%2C%20saya%20tertarik%20dengan%20Miss%20V%20Series%20treatment.", "_blank");
  };

  const handlePriceDetail = () => {
    window.open("https://wa.me/6285270010701?text=Halo%20Glamori%2C%20boleh%20tanya%20detail%20harga%20untuk%20Miss%20V%20Series%3F", "_blank");
  };

  return (
    <div id="product-section">
      {/* Product Hero */}
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
                <a
                  onClick={() => {
                    document.getElementById("pilihan-treatment")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn btn-ghost"
                >
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

      {/* Intro Split Section */}
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

      {/* Service Rich Rows */}
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

      {/* How it works */}
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

      {/* FAQ Product Section */}
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

      {/* Related Treatments */}
      <section className="section" style={{ padding: "56px 0" }}>
        <div className="wrap">
          <p className="eyebrow">Treatment Lainnya</p>
          <h2 className="h2" style={{ marginTop: "8px" }}>
            Mungkin Anda juga tertarik
          </h2>
          <div className="rel-grid">
            <Link href="/#treatments" className="rel">
              <div className="ph">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&q=80"
                  alt="Skin Quality"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="bd">
                <h4>Skin Quality</h4>
                <p>Skin booster &amp; PRP untuk kulit cerah dan kenyal.</p>
              </div>
            </Link>
            <Link href="/#treatments" className="rel">
              <div className="ph">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80"
                  alt="Body Slimming"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="bd">
                <h4>Body Slimming</h4>
                <p>Slimming injection &amp; fat laser untuk tubuh ideal.</p>
              </div>
            </Link>
            <Link href="/#treatments" className="rel">
              <div className="ph">
                <img
                  src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&q=80"
                  alt="Bust Treatment"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="bd">
                <h4>Bust Treatment</h4>
                <p>B-Lift &amp; B-Fill untuk payudara lebih terangkat.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Reservation */}
      <CtaBand
        title="Konsultasikan kebutuhan Anda"
        description="Privasi terjaga. Ditangani dokter wanita berlisensi di cabang Jakarta &amp; Bandar Lampung."
        buttonText="Reservasi Sekarang"
      />
    </div>
  );
}
