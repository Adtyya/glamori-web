"use client";

import React, { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <div className="faq-q" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <span className="pl">+</span>
      </div>
      <div className="faq-a">
        {answer}
      </div>
    </div>
  );
}
