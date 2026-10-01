import React, { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { portfolioContent } from "../../content/portfolioContent";
import AnimatedText from "../../components/animations/AnimatedText";
import Reveal from "../../components/animations/Reveal";

export default function Services() {
  const [openIndex, setOpenIndex] = useState(-1);
  const { services } = portfolioContent;

  return (
    <section id="services" className="min-h-screen px-5 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,560px)_minmax(320px,430px)] lg:justify-between">
        <div>
          <AnimatedText
            as="h2"
            text={services.title}
            className="font-display text-5xl font-bold leading-none text-white md:text-7xl"
            direction="left"
            stagger={0.05}
          />
          <AnimatedText
            as="p"
            text={services.description}
            className="mt-5 max-w-md text-base leading-7 text-[var(--color-text-muted)]"
            direction="left"
            distance={20}
            stagger={0.02}
            delay={0.08}
          />

          <Reveal group stagger={0.08} className="mt-12 border-t border-white/14">
            {services.items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <Reveal
                  as="article"
                  inherit
                  direction="left"
                  distance={24}
                  key={item.title}
                  className="border-b border-white/14"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-2xl font-bold uppercase leading-none text-white md:text-4xl">
                      {index + 1}. {item.title}
                    </span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-white transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <ul className="grid gap-3 pb-6 text-[var(--color-text-muted)] sm:grid-cols-2">
                        {item.points.map((point) => (
                          <li key={point} className="flex items-center gap-3">
                            <Check className="h-4 w-4 text-[var(--color-accent)]" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </Reveal>
        </div>

        <div className="hidden h-[520px] lg:block" aria-hidden="true" />
      </div>
    </section>
  );
}
