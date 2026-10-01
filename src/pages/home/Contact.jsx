import React from "react";
import { ChevronDown } from "lucide-react";
import { portfolioContent } from "../../content/portfolioContent";
import OutlineButton from "../../components/OutlineButton";
import WaveBadge from "../../components/WaveBadge";
import AnimatedText from "../../components/animations/AnimatedText";
import ParallaxImage from "../../components/animations/ParallaxImage";
import Reveal from "../../components/animations/Reveal";

export default function Contact() {
  const { contact } = portfolioContent;

  return (
    <section id="contact" className="px-5 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(320px,0.9fr)_minmax(0,1.25fr)] lg:items-center">
        <div className="relative mx-auto w-full max-w-[470px] lg:mx-0">
          <div className="aspect-[0.82] overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-surface)] shadow-2xl shadow-black/35">
            <ParallaxImage
              src={contact.portrait}
              alt=""
              range={5}
              cover={1.1}
              className="h-full w-full object-cover grayscale-[12%]"
            />
          </div>
          <WaveBadge label={contact.bubble} className="absolute -bottom-8 -left-6 h-28 w-28" />
        </div>

        <div>
          <AnimatedText
            as="h2"
            text={contact.title}
            className="font-display text-5xl font-bold uppercase leading-none text-white md:text-7xl"
            direction="left"
            stagger={0.06}
          />
          <AnimatedText
            as="p"
            text={contact.description}
            className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-text-muted)]"
            direction="left"
            distance={20}
            stagger={0.02}
            delay={0.08}
          />

          <form className="mt-10 grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Reveal as="label" direction="up" distance={20} delay={0.05} className="grid gap-3">
                <span className="text-sm font-normal text-[var(--color-accent)]">{contact.fields.name}</span>
                <input className="contact-field" type="text" placeholder={contact.fields.namePlaceholder} />
              </Reveal>

              <Reveal as="label" direction="up" distance={20} delay={0.1} className="grid gap-3">
                <span className="text-sm font-normal text-[var(--color-accent)]">{contact.fields.email}</span>
                <input className="contact-field" type="email" placeholder={contact.fields.emailPlaceholder} />
              </Reveal>
            </div>

            <Reveal as="label" direction="up" distance={20} delay={0.15} className="grid gap-3">
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
            </Reveal>

            <Reveal as="label" direction="up" distance={20} delay={0.2} className="grid gap-3">
              <span className="text-sm font-normal text-[var(--color-accent)]">{contact.fields.message}</span>
              <textarea className="contact-field min-h-44 rounded-[var(--radius-card)] py-5" placeholder={contact.fields.messagePlaceholder} />
            </Reveal>

            <Reveal direction="up" distance={18} delay={0.25} className="w-fit">
              <OutlineButton type="button">
                {contact.fields.submit}
              </OutlineButton>
            </Reveal>
          </form>
        </div>
      </div>
    </section>
  );
}
