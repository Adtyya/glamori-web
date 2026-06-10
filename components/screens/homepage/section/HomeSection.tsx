"use client";

import React from "react";
import MarqueeStrip from "../component/MarqueeStrip";
import CtaBand from "../component/CtaBand";

// Sections
import HeroSection from "./home/HeroSection";
import TreatmentsSection from "./home/TreatmentsSection";
import BeforeAfterSection from "./home/BeforeAfterSection";
import WhyUsSection from "./home/WhyUsSection";
import LocationsSection from "./home/LocationsSection";
import TestimonialsSection from "./home/TestimonialsSection";
import FaqSection from "./home/FaqSection";

export default function HomeSection() {
  return (
    <div id="home-section">
      {/* Hero Section */}
      <HeroSection />

      {/* Marquee Trust Strip */}
      <MarqueeStrip />

      {/* Treatments Section */}
      <TreatmentsSection />

      {/* Before & After Section */}
      <BeforeAfterSection />

      {/* Why Us Section */}
      <WhyUsSection />

      {/* Locations Section */}
      <LocationsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* CTA Band */}
      <CtaBand
        title="Siap memulai perawatan pertama Anda?"
        description="Konsultasi gratis dengan dokter kami. Reservasi kini lebih mudah lewat WhatsApp atau aplikasi Glamori."
        buttonText="Reservasi Sekarang"
      />
    </div>
  );
}
