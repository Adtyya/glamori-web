"use client";

import React from "react";
import Link from "next/link";

export default function RelatedSection() {
  return (
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
  );
}
