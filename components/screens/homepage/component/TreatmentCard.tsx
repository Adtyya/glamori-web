import React from "react";

interface TreatmentCardProps {
  title: string;
  description: string;
  tag: string;
  image: string;
  onClick?: () => void;
}

export default function TreatmentCard({ title, description, tag, image, onClick }: TreatmentCardProps) {
  return (
    <article className="t-card" onClick={onClick}>
      <div className="ph">
        <span className="tag">{tag}</span>
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="body">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="more">Lihat Selengkapnya →</div>
      </div>
    </article>
  );
}
