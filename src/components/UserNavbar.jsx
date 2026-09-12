import React, { useState } from "react";
import { motion as Motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { portfolioContent } from "../content/portfolioContent";

export default function UserNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { nav } = portfolioContent;
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.025, 0.06], [1, 0.75, 0]);
  const y = useTransform(scrollYProgress, [0, 0.06], [0, -24]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsHidden(latest > 0.065);
  });

  const goTo = (link) => {
    if (link.to !== location.pathname) {
      navigate(link.to);
      window.setTimeout(() => {
        if (link.to === "/" && link.target) document.getElementById(link.target)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    } else if (link.target) {
      document.getElementById(link.target)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const goContact = () => {
    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 80);
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <Motion.header style={{ opacity, y }} className={`fixed inset-x-0 top-4 z-50 px-4 ${isHidden && !isOpen ? "pointer-events-none" : ""}`}>
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 rounded-[var(--radius-pill)] border border-white/10 bg-[var(--color-nav-bg)] px-3 py-2 shadow-2xl shadow-black/25 backdrop-blur-xl">
        <button type="button" onClick={() => goTo(nav.links[0])} className="flex min-w-0 items-center gap-2">
          <img src={nav.avatar} alt="" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/15" />
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.links.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => goTo(link)}
              className={`rounded-[var(--radius-pill)] px-4 py-2 text-sm font-semibold transition-colors ${
                location.pathname === link.to ? "bg-white/10 text-white" : "text-white/78 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button type="button" onClick={goContact} className="hidden rounded-[var(--radius-pill)] bg-white px-5 py-2.5 text-sm font-bold text-black transition-transform hover:-translate-y-0.5 md:inline-flex">
            {nav.contactLabel}
          </button>
          <button type="button" onClick={() => setIsOpen((value) => !value)} className="grid h-10 w-10 place-items-center rounded-full bg-white text-black md:hidden" aria-label="Toggle menu">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mx-auto mt-3 max-w-3xl rounded-[24px] border border-white/10 bg-[var(--color-nav-bg)] p-3 shadow-xl backdrop-blur-xl md:hidden">
          {nav.links.map((link) => (
            <button key={link.label} type="button" onClick={() => goTo(link)} className="block w-full rounded-[var(--radius-pill)] px-4 py-3 text-left font-semibold text-white">
              {link.label}
            </button>
          ))}
          <button type="button" onClick={goContact} className="mt-2 w-full rounded-[var(--radius-pill)] bg-white px-5 py-3 font-bold text-black">
            {nav.contactLabel}
          </button>
        </div>
      )}
    </Motion.header>
  );
}
