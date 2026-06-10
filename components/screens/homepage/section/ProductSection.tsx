"use client";

import React from "react";
import CtaBand from "../component/CtaBand";

// Sections
import HeroSection from "./miss-v-series/HeroSection";
import IntroSection from "./miss-v-series/IntroSection";
import TreatmentsListSection from "./miss-v-series/TreatmentsListSection";
import HowItWorksSection from "./miss-v-series/HowItWorksSection";
import FaqSection from "./miss-v-series/FaqSection";
import RelatedSection from "./miss-v-series/RelatedSection";

export default function ProductSection() {
  return (
    <div id="product-section">
      {/* Product Hero */}
      <HeroSection />

      {/* Intro Split Section */}
      <IntroSection />

      {/* Service Rich Rows */}
      <TreatmentsListSection />

      {/* How it works */}
      <HowItWorksSection />

      {/* FAQ Product Section */}
      <FaqSection />

      {/* Related Treatments */}
      <RelatedSection />

      {/* CTA Reservation */}
      <CtaBand
        title="Konsultasikan kebutuhan Anda"
        description="Privasi terjaga. Ditangani dokter wanita berlisensi di cabang Jakarta &amp; Bandar Lampung."
        buttonText="Reservasi Sekarang"
      />
    </div>
  );
}
