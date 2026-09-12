import React from "react";
import { Github, Instagram, Linkedin, Mail, MailIcon, Phone } from "lucide-react";
import { portfolioContent } from "../content/portfolioContent";

export default function Footer() {
  const { about, footer, socials } = portfolioContent;
  const icons = [Github, Linkedin, Instagram, MailIcon];

  return (
    <footer className="border-t border-white/10 bg-[var(--color-bg)] px-5 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-5 md:grid-cols-3">
          <a href={`mailto:${about.contact.email}`} className="flex items-center gap-3 rounded-[var(--radius-card)] bg-[var(--color-surface)] p-5 text-white transition-colors hover:text-[var(--color-accent)]">
            <Mail className="h-5 w-5 text-[var(--color-accent)]" />
            <span className="break-all">{about.contact.email}</span>
          </a>
          <a href={`tel:${about.contact.phone}`} className="flex items-center gap-3 rounded-[var(--radius-card)] bg-[var(--color-surface)] p-5 text-white transition-colors hover:text-[var(--color-accent)]">
            <Phone className="h-5 w-5 text-[var(--color-accent)]" />
            <span>{about.contact.phone}</span>
          </a>
          <div className="flex items-center gap-3 rounded-[var(--radius-card)] bg-[var(--color-surface)] p-5 md:justify-end">
            {socials.map((social, index) => {
              const Icon = icons[index] || MailIcon;
              return (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className="grid h-11 w-11 place-items-center rounded-full border border-white/12 text-white transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-on-accent)]">
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
        <div className="my-8 h-px bg-white/12" />
        <div className="flex flex-col justify-between gap-3 text-sm text-[var(--color-text-muted)] md:flex-row">
          <p>© {new Date().getFullYear()} {footer.copyright}</p>
          <p>{footer.credit}</p>
        </div>
      </div>
    </footer>
  );
}
