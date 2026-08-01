import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaCheckCircle,
  FaCode,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Hero() {
  const highlights = [
    "Ruby on Rails",
    "MERN Stack",
    "AI Integration",
    "Client Websites",
  ];

  const metrics = [
    { value: "20+", label: "Projects" },
    { value: "1+", label: "Years Exp." },
    { value: "10+", label: "Technologies" },
  ];

  return (
    <section
      id="home"
      aria-label="Muhammad Imran Hero Section"
      className="relative min-h-screen bg-[#F8FAFC] px-6 pb-16 pt-28 text-slate-900 md:px-12 md:pt-24 lg:px-20 overflow-hidden"
    >
      <div className="absolute left-[-8rem] top-20 h-80 w-80 rounded-full bg-blue-300/45 blur-3xl" />
      <div className="absolute right-[-7rem] top-28 h-96 w-96 rounded-full bg-emerald-300/35 blur-3xl" />
      <div className="absolute bottom-12 left-1/3 h-72 w-72 rounded-full bg-purple-300/25 blur-3xl" />
      <div className="absolute right-10 top-36 hidden h-44 w-44 bg-[radial-gradient(circle,#94a3b8_1px,transparent_1px)] [background-size:14px_14px] opacity-30 lg:block" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/85 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-blue-700 shadow-lg shadow-blue-100/70 backdrop-blur">
            <FaCode className="h-4 w-4 text-purple-600" />
            Full Stack Developer
          </span>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.02] text-slate-950 md:text-7xl">
            I build polished web products for{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 bg-clip-text text-transparent">
              teams and businesses.
            </span>
          </h1>

          <div className="mt-6 min-h-8 text-lg font-black text-slate-800 md:text-2xl">
            <TypeAnimation
              sequence={[
                "Muhammad Imran",
                1600,
                "Associate Software Engineer",
                1600,
                "Ruby on Rails & MERN Stack Developer",
                1600,
                "AI Integration Specialist",
                1600,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-blue-700"
            />
          </div>

          <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-slate-600 md:text-lg">
            Associate Software Engineer based in Faisalabad, Pakistan. I create production-ready apps, fast business websites, and AI-powered workflows with clean code and thoughtful user experience.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-slate-100 bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-sm"
              >
                <FaCheckCircle className="h-4 w-4 text-emerald-500" />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="/projects"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white shadow-xl shadow-blue-600/20 transition-transform hover:-translate-y-1"
            >
              View Projects
              <FaArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="/freelance"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-emerald-200 bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-emerald-700 shadow-sm transition-colors hover:bg-emerald-50"
            >
              Hire Me
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <div className="flex gap-3 text-xl">
              <a
                href="https://github.com/malikimran-khan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="grid h-12 w-12 place-items-center rounded-2xl border border-slate-100 bg-white text-slate-600 shadow-sm transition-all hover:-translate-y-1 hover:text-blue-700 hover:shadow-lg"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/malik-imran-598b96241/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="grid h-12 w-12 place-items-center rounded-2xl border border-slate-100 bg-white text-slate-600 shadow-sm transition-all hover:-translate-y-1 hover:text-blue-600 hover:shadow-lg"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:malikimranawan801@gmail.com"
                aria-label="Email Muhammad Imran"
                className="grid h-12 w-12 place-items-center rounded-2xl border border-slate-100 bg-white text-slate-600 shadow-sm transition-all hover:-translate-y-1 hover:text-emerald-600 hover:shadow-lg"
              >
                <FaEnvelope />
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
              <FaMapMarkerAlt className="text-orange-500" />
              Faisalabad, Pakistan
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[32rem] lg:ml-auto">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-blue-200/70 via-purple-200/40 to-emerald-200/70 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-4 shadow-2xl shadow-blue-950/10">
            <div className="absolute right-6 top-6 z-20 rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-emerald-700 shadow-lg backdrop-blur">
              Available
            </div>

            <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-blue-50 via-white to-emerald-50 pt-8">
              <div className="absolute left-6 top-8 h-20 w-20 rounded-full bg-blue-300/35 blur-2xl" />
              <div className="absolute bottom-8 right-8 h-28 w-28 rounded-full bg-purple-300/35 blur-2xl" />
              <img
                src="/imran.png"
                alt="Muhammad Imran portfolio"
                loading="eager"
                decoding="async"
                fetchpriority="high"
                width="460"
                height="560"
                className="relative z-10 mx-auto h-[30rem] w-full max-w-[23rem] object-cover object-top"
              />
            </div>

            <div className="grid gap-3 pt-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl bg-slate-50 px-4 py-4 text-center">
                  <p className="text-2xl font-black text-slate-950">{metric.value}</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-6 -left-4 hidden max-w-[14rem] rounded-2xl border border-blue-100 bg-white p-4 shadow-xl shadow-blue-950/10 md:block">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700">Current Focus</p>
            <p className="mt-2 text-sm font-bold leading-6 text-slate-700">
              Production apps, business websites, and AI integrations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
