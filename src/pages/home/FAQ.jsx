import React, { useState } from "react";
import { ChevronUp } from "lucide-react";
import { portfolioContent } from "../../content/portfolioContent";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);
  const { faq } = portfolioContent;

  return (
    <section className="px-5 py-24">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.45fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-display max-w-md text-5xl font-bold uppercase leading-none text-white md:text-7xl">
            {faq.title}
          </h2>
          <p className="mt-6 max-w-md text-base leading-8 text-[var(--color-text-muted)]">{faq.description}</p>
        </div>

        <div className="border-t border-white/14">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={item.question} className="border-b border-white/14">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-start gap-5 py-8 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display w-12 shrink-0 text-3xl font-bold leading-none text-white md:text-4xl">
                    {index + 1}.
                  </span>
                  <span className="font-display flex-1 text-3xl font-bold uppercase leading-none text-white md:text-5xl">
                    {item.question}
                  </span>
                  <ChevronUp className={`mt-1 h-6 w-6 shrink-0 text-white/80 transition-transform ${isOpen ? "" : "rotate-180"}`} />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <p className="overflow-hidden pb-8 pl-[4.25rem] pr-10 text-base leading-8 text-[var(--color-text-muted)]">
                    {item.answer}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
