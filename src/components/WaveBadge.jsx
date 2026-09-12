import React from "react";

export default function WaveBadge({ label, className = "" }) {
  return (
    <div className={`grid place-items-center rounded-full bg-[var(--color-accent)] text-[var(--color-on-accent)] shadow-2xl shadow-black/30 ${className}`}>
      <span className="hero-hand-wave font-display text-3xl font-bold leading-none md:text-4xl">{label}</span>
    </div>
  );
}
