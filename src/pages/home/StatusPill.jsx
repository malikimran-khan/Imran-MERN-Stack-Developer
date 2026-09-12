import React from "react";
import { portfolioContent } from "../../content/portfolioContent";

export default function StatusPill() {
  const { stickyVisual } = portfolioContent;

  return (
    <div className="sticky top-5 z-40 mx-auto flex w-fit items-center gap-2 rounded-[var(--radius-pill)] border border-white/10 bg-[var(--color-nav-bg)] px-3 py-2 shadow-xl shadow-black/25">
      <img src={stickyVisual.avatar} alt="" className="h-9 w-9 rounded-full object-cover ring-2 ring-white/15" />
      <span className="flex items-center gap-2 pr-2 text-sm font-semibold text-white">
        <span className="pulse-dot h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
        {stickyVisual.statusText}
      </span>
    </div>
  );
}
