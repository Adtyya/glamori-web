"use client";

import React, { useState, useRef, useEffect } from "react";

interface BeforeAfterSliderProps {
  title: string;
  subtitle: string;
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfterSlider({
  title,
  subtitle,
  beforeImage,
  afterImage,
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    percentage = Math.max(0, Math.min(100, percentage));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const stopDrag = () => {
    isDragging.current = false;
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", stopDrag);
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("touchend", stopDrag);
  };

  const startDrag = (clientX: number) => {
    isDragging.current = true;
    handleMove(clientX);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", stopDrag);
  };

  useEffect(() => {
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", stopDrag);
    };
  }, []);

  return (
    <div className="ba-card">
      <div
        className="ba-slider"
        ref={containerRef}
        onMouseDown={(e) => {
          e.preventDefault();
          startDrag(e.clientX);
        }}
        onTouchStart={(e) => {
          startDrag(e.touches[0].clientX);
        }}
      >
        <img className="ba-before" src={beforeImage} alt={`${title} sebelum`} />
        <img
          className="ba-after"
          src={afterImage}
          alt={`${title} sesudah`}
          style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
        />
        <span className="ba-tag bef">Before</span>
        <span className="ba-tag aft">After</span>
        <div className="ba-handle" style={{ left: `${sliderPos}%` }}></div>
        <div className="ba-knob" style={{ left: `${sliderPos}%` }}>
          ⇄
        </div>
      </div>
      <div className="ba-label">
        <h4>{title}</h4>
        <span>{subtitle}</span>
      </div>
    </div>
  );
}
