"use client";

import React from "react";
import { useRouter } from "next/navigation";
import TreatmentCard from "../../component/TreatmentCard";

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

export default function TreatmentsSection() {
  const router = useRouter();

  const handleReservasi = () => {
    window.open(
      "https://wa.me/6285270010701?text=Halo%20Glamori%2C%20saya%20ingin%20melakukan%20reservasi%20treatment.",
      "_blank"
    );
  };

  const handleCardClick = (slug: string) => {
    router.push(`/product/${slug}`);
  };

  return (
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
          <a onClick={handleReservasi} className="btn btn-ghost">
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
  );
}
