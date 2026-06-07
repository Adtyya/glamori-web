import React from "react";

interface TestimonialCardProps {
  quote: string;
  ratingStars: string;
  authorName: string;
  authorTitle: string;
}

export default function TestimonialCard({
  quote,
  ratingStars,
  authorName,
  authorTitle,
}: TestimonialCardProps) {
  return (
    <div className="testi">
      <div className="q">"</div>
      <p>{quote}</p>
      <div className="stars">{ratingStars}</div>
      <div className="who">
        {authorName}
        <span>{authorTitle}</span>
      </div>
    </div>
  );
}
