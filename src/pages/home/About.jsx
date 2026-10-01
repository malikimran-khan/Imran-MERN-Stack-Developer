import React from "react";
import { Github, Instagram, Linkedin, Mail, MailIcon, Phone } from "lucide-react";
import { portfolioContent } from "../../content/portfolioContent";
import { useCountUp } from "../../utils/useCountUp";
import OutlineButton from "../../components/OutlineButton";
import AnimatedText from "../../components/animations/AnimatedText";
import Reveal from "../../components/animations/Reveal";

function Stat({ stat }) {
  const [value, ref] = useCountUp(stat.value);

  return (
    <div ref={ref}>
      <strong className="font-display block text-6xl leading-none text-[var(--color-accent)] md:text-7xl">
        {value}
        {stat.suffix}
      </strong>
      <span className="mt-3 block max-w-32 text-sm leading-5 text-[var(--color-text-muted)]">{stat.label}</span>
    </div>
  );
}

export default function About() {
  const { about, socials } = portfolioContent;
  const icons = [Github, Linkedin, Instagram, MailIcon];

  return (
    <section id="about" className="min-h-screen px-5 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,650px)_minmax(320px,430px)] lg:justify-between">
        <div>
          <AnimatedText
            as="h2"
            text={about.title}
            className="font-display text-5xl font-bold leading-none text-white md:text-7xl"
            direction="left"
            stagger={0.06}
          />
          <AnimatedText
            as="p"
            text={about.intro}
            className="mt-6 max-w-2xl text-xl leading-9 text-white md:text-2xl"
            direction="left"
            distance={20}
            stagger={0.025}
            delay={0.08}
          />

          <Reveal group stagger={0.1} className="mt-12 grid gap-8 sm:grid-cols-3">
            {about.stats.map((stat) => (
              <Reveal as="div" inherit direction="up" key={stat.label}>
                <Stat stat={stat} />
              </Reveal>
            ))}
          </Reveal>

          <Reveal group stagger={0.12} className="mt-12 grid gap-6 border-y border-white/14 py-7 sm:grid-cols-2">
            <Reveal as="div" inherit direction="left" distance={22}>
              <p className="text-sm font-bold text-white">{about.contact.phoneLabel}</p>
              <a href={`tel:${about.contact.phone}`} className="mt-2 flex items-center gap-2 font-semibold text-[var(--color-text-muted)]">
                <Phone className="h-4 w-4 text-[var(--color-accent)]" />
                {about.contact.phone}
              </a>
            </Reveal>
            <Reveal as="div" inherit direction="right" distance={22}>
              <p className="text-sm font-bold text-white">{about.contact.emailLabel}</p>
              <a href={`mailto:${about.contact.email}`} className="mt-2 flex items-center gap-2 break-all font-semibold text-[var(--color-accent)]">
                <Mail className="h-4 w-4 text-[var(--color-accent)]" />
                {about.contact.email}
              </a>
            </Reveal>
          </Reveal>

          <Reveal group stagger={0.07} className="mt-8 flex flex-wrap items-center gap-5">
            {socials.map((social, index) => {
              const Icon = icons[index] || MailIcon;
              return (
                <Reveal
                  as="a"
                  inherit
                  direction="up"
                  distance={14}
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="text-xl text-white transition-colors hover:text-[var(--color-accent)]"
                >
                  <Icon className="h-5 w-5" />
                </Reveal>
              );
            })}
            <Reveal as="span" inherit direction="up" distance={14} className="sm:ml-3">
              <OutlineButton to={about.storyTarget}>
                {about.storyCta}
              </OutlineButton>
            </Reveal>
          </Reveal>
        </div>

        <div className="hidden h-[520px] lg:block" aria-hidden="true" />
      </div>
    </section>
  );
}
