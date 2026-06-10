"use client";

import React from "react";
import TestimonialCard from "../../component/TestimonialCard";

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

export default function TestimonialsSection() {
  return (
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
  );
}
