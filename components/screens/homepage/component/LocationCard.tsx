import React from "react";

interface LocationCardProps {
  title: string;
  address: string;
  daysOpen: string;
  hoursOpen: string;
  reservasiUrl: string;
  reservasiText: string;
}

export default function LocationCard({
  title,
  address,
  daysOpen,
  hoursOpen,
  reservasiUrl,
  reservasiText,
}: LocationCardProps) {
  const handleReservasi = () => {
    window.open(reservasiUrl, "_blank");
  };

  return (
    <div className="loc-card">
      <div className="ph"></div>
      <div className="body">
        <h4>{title}</h4>
        <p className="addr">{address}</p>
        <div className="meta">
          <span>
            <b>Buka</b> {daysOpen}
          </span>
          <span>
            <b>Jam</b> {hoursOpen}
          </span>
        </div>
        <a onClick={handleReservasi} className="btn btn-gold" style={{ fontSize: ".85rem" }}>
          {reservasiText}
        </a>
      </div>
    </div>
  );
}
