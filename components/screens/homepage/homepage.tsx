"use client";

import React from "react";
import HomeSection from "./section/HomeSection";
import WhatsAppFloat from "./component/WhatsAppFloat";

export default function HomePageScreen() {
  return (
    <>
      {/* Landing Page Content */}
      <HomeSection />

      {/* Floating WhatsApp Action */}
      <WhatsAppFloat />
    </>
  );
}
