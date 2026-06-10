"use client";

import React from "react";
import LocationCard from "../../component/LocationCard";

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

export default function LocationsSection() {
  return (
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
  );
}
