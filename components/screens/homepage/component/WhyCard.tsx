import React from "react";

interface WhyCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function WhyCard({ icon, title, description }: WhyCardProps) {
  return (
    <div className="why-card">
      <div className="ic">{icon}</div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
