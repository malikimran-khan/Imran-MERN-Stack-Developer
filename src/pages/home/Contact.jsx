import React from "react";
import { ChevronDown } from "lucide-react";
import { portfolioContent } from "../../content/portfolioContent";
import OutlineButton from "../../components/OutlineButton";
import WaveBadge from "../../components/WaveBadge";

export default function Contact() {
  const { contact } = portfolioContent;

  return (
    <section id="contact" className="px-5 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(320px,0.9fr)_minmax(0,1.25fr)] lg:items-center">
        <div className="relative mx-auto w-full max-w-[470px] lg:mx-0">
          <div className="aspect-[0.82] overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-surface)] shadow-2xl shadow-black/35">
            <img src={contact.portrait} alt="" className="h-full w-full object-cover grayscale-[12%]" />
          </div>
          <WaveBadge label={contact.bubble} className="absolute -bottom-8 -left-6 h-28 w-28" />
        </div>

        <div>
          <h2 className="font-display text-5xl font-bold uppercase leading-none text-white md:text-7xl">
            {contact.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-text-muted)]">{contact.description}</p>

          <form className="mt-10 grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="grid gap-3">
                <span className="text-sm font-normal text-[var(--color-accent)]">{contact.fields.name}</span>
                <input className="contact-field" type="text" placeholder={contact.fields.namePlaceholder} />
              </label>

              <label className="grid gap-3">
                <span className="text-sm font-normal text-[var(--color-accent)]">{contact.fields.email}</span>
                <input className="contact-field" type="email" placeholder={contact.fields.emailPlaceholder} />
              </label>
            </div>

            <label className="grid gap-3">
              <span className="text-sm font-normal text-[var(--color-accent)]">{contact.fields.service}</span>
              <span className="relative block">
                <select className="contact-field appearance-none pr-12" defaultValue="">
                  <option value="" disabled>{contact.fields.servicePlaceholder}</option>
                  {contact.fields.services.map((service) => (
                    <option key={service}>{service}</option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--color-text-muted)]" />
              </span>
            </label>

            <label className="grid gap-3">
              <span className="text-sm font-normal text-[var(--color-accent)]">{contact.fields.message}</span>
              <textarea className="contact-field min-h-44 rounded-[var(--radius-card)] py-5" placeholder={contact.fields.messagePlaceholder} />
            </label>

            <OutlineButton type="button" className="w-fit">
              {contact.fields.submit}
            </OutlineButton>
          </form>
        </div>
      </div>
    </section>
  );
}
