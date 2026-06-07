"use client";

import React from "react";
import { useRouter } from "next/navigation";
import MarqueeStrip from "../component/MarqueeStrip";
import TreatmentCard from "../component/TreatmentCard";
import BeforeAfterSlider from "../component/BeforeAfterSlider";
import WhyCard from "../component/WhyCard";
import LocationCard from "../component/LocationCard";
import TestimonialCard from "../component/TestimonialCard";
import FaqItem from "../component/FaqItem";
import CtaBand from "../component/CtaBand";

const treatments = [
  {
    title: "Facial Treatment",
    description: "Acne, whitening, glowing, hingga aqua facial untuk kulit bersih & sehat.",
    tag: "Wajah",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
    slug: "facial-treatment",
  },
  {
    title: "Skin Quality",
    description: "Sylfirm X, PRP, Glow Stamp & skin booster untuk kulit cerah dan kenyal.",
    tag: "Injeksi",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
    slug: "skin-quality",
  },
  {
    title: "Laser Face & Body",
    description: "Pico Laser & DPL untuk pigmentasi, bekas jerawat, dan flek.",
    tag: "Laser",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80",
    slug: "laser-face-and-body",
  },
  {
    title: "Face Contouring",
    description: "ThreadLift, Botox, Filler & HIFU untuk membentuk fitur wajah.",
    tag: "Contour",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
    slug: "face-contouring",
  },
  {
    title: "Body Slimming",
    description: "Slimming injection & fat laser untuk tubuh lebih ideal.",
    tag: "Tubuh",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    slug: "body-slimming",
  },
  {
    title: "Miss V Series",
    description: "Perawatan intim wanita untuk kebersihan & kekencangan.",
    tag: "Intim",
    image: "https://images.unsplash.com/photo-1591343395082-e120087004b4?w=600&q=80",
    slug: "miss-v-series",
  },
  {
    title: "Eyes Treatment",
    description: "Eye booster, eyebag removal & korean double eyelid.",
    tag: "Mata",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&q=80",
    slug: "eyes-treatment",
  },
  {
    title: "Lips Treatment",
    description: "Lips booster, cherry lips & filler untuk bibir merona.",
    tag: "Bibir",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80",
    slug: "lips-treatment",
  },
];

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

const locations = [
  {
    title: "Glamori Jakarta — Pluit",
    address: "Jl. Muara Karang Bar., Pluit, Penjaringan, Jakarta Utara 14450",
    daysOpen: "Tiap hari",
    hoursOpen: "09.30–18.00",
    reservasiUrl: "https://wa.me/6285270010701?text=Halo%20Glamori%20Pluit%2C%20saya%20ingin%20reservasi%20treatment.",
    reservasiText: "Reservasi Pluit",
  },
  {
    title: "Glamori Bandar Lampung",
    address: "Jl. Diponegoro No.156, Enggal, Bandar Lampung 35118",
    daysOpen: "Tiap hari",
    hoursOpen: "09.30–18.00",
    reservasiUrl: "https://wa.me/6289606000101?text=Halo%20Glamori%20Lampung%2C%20saya%20ingin%20reservasi%20treatment.",
    reservasiText: "Reservasi Lampung",
  },
];

const testimonials = [
  {
    quote: "Dari masuk uda feel kenyamanan tempatnya, ditambah profesional cara kerjanya. Totally suka treatment facial di sana.",
    ratingStars: "★★★★★",
    authorName: "Poppy Wardani",
    authorTitle: "Customer Glamori",
  },
  {
    quote: "Klinik paling nyaman dan bagus. Dari segi pelayanannya TOP banget, staff-nya ramah. Treatment-nya bikin muka cerah & sehat.",
    ratingStars: "★★★★★",
    authorName: "Yuni Sinurat",
    authorTitle: "Customer Glamori",
  },
  {
    quote: "Kliniknya nyaman dan terlihat mewah, para staf-nya pun ramah sekali. Nggak nyesel perawatan di Glamori, hasilnya memuaskan.",
    ratingStars: "★★★★★",
    authorName: "Fitri Isnaeni",
    authorTitle: "Customer Glamori",
  },
];

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

export default function HomeSection() {
  const router = useRouter();

  const handleReservasi = () => {
    window.open("https://wa.me/6285270010701?text=Halo%20Glamori%2C%20saya%20ingin%20melakukan%20reservasi%20treatment.", "_blank");
  };

  const handleCardClick = (slug: string) => {
    router.push(`/product/${slug}`);
  };

  return (
    <div id="home-section">
      {/* Hero Section */}
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
              <a
                onClick={() => {
                  document.getElementById("treatments")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn btn-ghost"
              >
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
              <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80" alt="Perawatan wajah di Glamori Aesthetic Clinic" />
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

      {/* Marquee Trust Strip */}
      <MarqueeStrip />

      {/* Treatments Section */}
      <section className="section" id="treatments">
        <div className="wrap">
          <div className="t-head">
            <div>
              <p className="eyebrow">Treatments</p>
              <h2 className="h2" style={{ marginTop: "8px" }}>
                Apa yang bisa kami
                <br />
                lakukan untuk Anda
              </h2>
              <p>13 kategori perawatan wajah, tubuh, dan area intim — semua dalam satu klinik.</p>
            </div>
            <a onClick={() => handleReservasi()} className="btn btn-ghost">
              Semua Treatment
            </a>
          </div>
          <div className="t-grid">
            {treatments.map((t, i) => (
              <TreatmentCard
                key={i}
                title={t.title}
                description={t.description}
                tag={t.tag}
                image={t.image}
                onClick={() => handleCardClick(t.slug)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
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

      {/* Why Us Section */}
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

      {/* Locations Section */}
      <section className="section" id="locations">
        <div className="wrap">
          <p className="eyebrow">Lokasi</p>
          <h2 className="h2" style={{ marginTop: "8px" }}>
            Kunjungi cabang terdekat
          </h2>
          <div className="loc-grid">
            {locations.map((loc, i) => (
              <LocationCard
                key={i}
                title={loc.title}
                address={loc.address}
                daysOpen={loc.daysOpen}
                hoursOpen={loc.hoursOpen}
                reservasiUrl={loc.reservasiUrl}
                reservasiText={loc.reservasiText}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section why">
        <div className="wrap">
          <p className="eyebrow" style={{ textAlign: "center" }}>
            Testimonials
          </p>
          <h2 className="h2" style={{ textAlign: "center", marginTop: "8px" }}>
            Apa kata pelanggan kami
          </h2>
          <div className="testi-grid">
            {testimonials.map((testi, i) => (
              <TestimonialCard
                key={i}
                quote={testi.quote}
                ratingStars={testi.ratingStars}
                authorName={testi.authorName}
                authorTitle={testi.authorTitle}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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

      {/* CTA Band */}
      <CtaBand
        title="Siap memulai perawatan pertama Anda?"
        description="Konsultasi gratis dengan dokter kami. Reservasi kini lebih mudah lewat WhatsApp atau aplikasi Glamori."
        buttonText="Reservasi Sekarang"
      />
    </div>
  );
}
