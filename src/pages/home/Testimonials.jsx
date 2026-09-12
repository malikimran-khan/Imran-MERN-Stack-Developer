import React from "react";
import { BadgeCheck, Code2, Cpu, Rocket, Sparkles, Star } from "lucide-react";
import { portfolioContent } from "../../content/portfolioContent";
import { useCountUp } from "../../utils/useCountUp";

const workIcons = [Rocket, Code2, Cpu, BadgeCheck];

function Rating() {
  return (
    <div className="flex gap-1 text-[var(--color-accent)]">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

function WorkCard({ item, index }) {
  const Icon = workIcons[index] || Sparkles;

  return (
    <article className="group flex min-h-[300px] flex-col justify-between rounded-[var(--radius-card)] border border-white/10 bg-[var(--color-surface)] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/60 hover:shadow-[0_24px_90px_rgba(212,255,79,0.08)]">
      <div>
        <div className="mb-6 flex items-start justify-between gap-4">
          <span className="rounded-[var(--radius-pill)] border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
            Highlight
          </span>
          <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] transition-colors group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-on-accent)]">
            <Icon className="h-5 w-5" />
          </span>
        </div>
        <Rating />
        <p className="mt-5 text-lg leading-8 text-white">{item.quote}</p>
      </div>

      <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
        <img src={item.avatar} alt="" className="h-12 w-12 rounded-full border border-white/10 object-cover" />
        <div>
          <strong className="block text-sm font-bold text-white">{item.name}</strong>
          <span className="text-sm text-[var(--color-text-muted)]">{item.role}</span>
        </div>
      </div>
    </article>
  );
}

function MetricCard({ item }) {
  const [value, ref] = useCountUp(item.value);

  return (
    <article ref={ref} className="flex min-h-[300px] flex-col justify-between rounded-[var(--radius-card)] bg-[var(--color-accent)] p-6 text-[var(--color-on-accent)] shadow-[0_24px_90px_rgba(212,255,79,0.16)] transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-[var(--radius-pill)] border border-black/10 bg-black/5 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em]">
          Metric
        </span>
        <Sparkles className="h-6 w-6" />
      </div>
      <div>
        <p className="mb-7 max-w-xs text-base leading-7 text-black/68">{item.intro}</p>
        <strong className="font-display block text-7xl font-bold leading-none text-[var(--color-on-accent)] md:text-8xl">
          {value}
          {item.suffix}
        </strong>
        <span className="mt-3 block text-sm font-bold uppercase tracking-[0.16em] text-black/70">{item.label}</span>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const { testimonials } = portfolioContent;
  const gridItems = [
    { type: "work", data: testimonials.cards[0] },
    { type: "work", data: testimonials.cards[1] },
    { type: "metric", data: testimonials.highlights[0] },
    { type: "work", data: testimonials.cards[2] },
    { type: "metric", data: testimonials.highlights[1] },
    { type: "work", data: testimonials.cards[3] },
  ];

  return (
    <section className="relative overflow-hidden px-5 py-24">
      <div className="pointer-events-none absolute inset-0 opacity-35" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:70px_70px]" />
        <div className="absolute left-[11%] top-24 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
        <div className="absolute right-[16%] bottom-24 h-3 w-3 rounded-full bg-[var(--color-accent)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="font-display text-6xl font-bold leading-none text-white md:text-8xl">{testimonials.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--color-text-muted)]">{testimonials.description}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {gridItems.map((item, index) =>
            item.type === "metric" ? (
              <MetricCard key={item.data.label} item={item.data} />
            ) : (
              <WorkCard key={item.data.name} item={item.data} index={index} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
