import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaChevronUp, FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { Briefcase, Code, GraduationCap, Home, Layout, MessageSquare, Sparkles, User } from "lucide-react";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (item) => {
    const routeMap = {
      Projects: "/projects",
      Freelance: "/freelance",
    };

    if (routeMap[item]) {
      navigate(routeMap[item]);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => {
        const element = document.getElementById(item.toLowerCase());
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 90;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 80);
    } else {
      const element = document.getElementById(item.toLowerCase());
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const footerLinks = [
    { name: "Home", icon: Home },
    { name: "About", icon: User },
    { name: "Experience", icon: Briefcase },
    { name: "Skills", icon: Code },
    { name: "Projects", icon: Layout },
    { name: "Freelance", icon: Sparkles },
    { name: "Education", icon: GraduationCap },
    { name: "Contact", icon: MessageSquare },
  ];

  const socialLinks = [
    { name: "GitHub", link: "https://github.com/malikimranawan", icon: FaGithub, color: "hover:text-slate-950" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/malik-imran-598b96241/", icon: FaLinkedin, color: "hover:text-blue-600" },
    { name: "Instagram", link: "#", icon: FaInstagram, color: "hover:text-pink-600" },
    { name: "Email", link: "mailto:malikimranawan801@gmail.com", icon: FaEnvelope, color: "hover:text-emerald-600" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#F8FAFC] px-6 pb-10 pt-24 font-['Poppins'] text-slate-950 md:px-12 lg:px-20">
      <div className="absolute left-[-8rem] top-16 h-80 w-80 rounded-full bg-blue-300/35 blur-3xl" />
      <div className="absolute right-[-8rem] bottom-10 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl" />
      <div className="absolute bottom-20 left-1/3 h-72 w-72 rounded-full bg-purple-300/25 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-6 shadow-2xl shadow-blue-950/10 md:p-8">
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500" />
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-blue-700">
                <Sparkles className="h-4 w-4 text-purple-600" />
                Available for Hire
              </span>
              <h2 className="max-w-3xl text-4xl font-black leading-tight text-slate-950 md:text-6xl">
                Let’s build something{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 bg-clip-text text-transparent">
                  useful together.
                </span>
              </h2>
              <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-slate-600">
                Full-stack applications, business websites, AI integrations, and clean product experiences.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a href="mailto:malikimranawan801@gmail.com" className="rounded-[1.25rem] border border-slate-100 bg-slate-50 p-5 transition-transform hover:-translate-y-1">
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-600">
                  <FaEnvelope />
                </span>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Email</p>
                <p className="mt-2 break-words text-sm font-black text-slate-700">malikimranawan801@gmail.com</p>
              </a>
              <a href="tel:+923085029266" className="rounded-[1.25rem] border border-slate-100 bg-slate-50 p-5 transition-transform hover:-translate-y-1">
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <FaPhoneAlt />
                </span>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Phone</p>
                <p className="mt-2 text-sm font-black text-slate-700">+92 308 5029266</p>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr_0.8fr]">
          <div className="rounded-[1.5rem] border border-slate-100 bg-white/90 p-6 shadow-xl shadow-slate-200/70">
            <button onClick={scrollToTop} className="group flex items-center gap-3">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-500 text-2xl font-black text-white shadow-lg shadow-blue-600/20">I</span>
              <span className="text-left">
                <span className="block text-3xl font-black leading-none text-slate-950">IMRAN<span className="text-blue-600">.</span></span>
                <span className="mt-1 block text-[10px] font-black uppercase tracking-[0.24em] text-slate-500">Full-Stack Developer</span>
              </span>
            </button>
            <p className="mt-5 text-sm font-semibold leading-7 text-slate-600">
              Building polished digital products with clean code, modern UI, and practical engineering.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-slate-100 bg-white/90 p-6 shadow-xl shadow-slate-200/70">
            <h3 className="mb-5 text-sm font-black uppercase tracking-[0.2em] text-slate-950">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {footerLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.name)}
                    className="flex items-center gap-2 rounded-2xl bg-slate-50 px-3 py-3 text-left text-xs font-black uppercase tracking-[0.12em] text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-700"
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-100 bg-white/90 p-6 shadow-xl shadow-slate-200/70">
            <h3 className="mb-5 text-sm font-black uppercase tracking-[0.2em] text-slate-950">Social</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`grid h-12 w-12 place-items-center rounded-2xl border border-slate-100 bg-slate-50 text-xl text-slate-500 transition-all hover:-translate-y-1 ${social.color}`}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
            <button
              onClick={scrollToTop}
              className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-emerald-500 px-5 py-4 text-xs font-black uppercase tracking-[0.18em] text-white shadow-lg shadow-blue-600/20"
            >
              Back to Top
              <FaChevronUp />
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-center md:flex-row md:text-left">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
            © {new Date().getFullYear()} Muhammad Imran. All rights reserved.
          </p>
          <span className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Available for projects
          </span>
        </div>
      </div>
    </footer>
  );
}
