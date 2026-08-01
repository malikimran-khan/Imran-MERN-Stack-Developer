import React from "react";
import { motion } from "framer-motion";
import {
  FaAward,
  FaBriefcase,
  FaCheckCircle,
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaRocket,
} from "react-icons/fa";
import { SiRubyonrails } from "react-icons/si";

const MotionDiv = motion.div;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const metrics = [
  { icon: FaBriefcase, value: "1+", label: "Years Experience", color: "text-emerald-600", bg: "bg-emerald-50" },
  { icon: FaAward, value: "20+", label: "Projects Built", color: "text-blue-600", bg: "bg-blue-50" },
  { icon: FaCode, value: "10+", label: "Tech Skills", color: "text-purple-600", bg: "bg-purple-50" },
  { icon: FaDatabase, value: "5+", label: "Databases & APIs", color: "text-orange-600", bg: "bg-orange-50" },
];

const capabilities = [
  {
    title: "Product Engineering",
    text: "Building maintainable full-stack applications with clear architecture and production-ready delivery.",
    icon: FaLaptopCode,
    color: "from-blue-600 to-sky-400",
    iconBox: "bg-blue-50 text-blue-600",
    badge: "bg-blue-50 text-blue-700 border-blue-100",
    ring: "ring-blue-100",
  },
  {
    title: "Ruby on Rails",
    text: "Working on product-based Rails systems, payment flows, OCR modules, and multi-environment branches.",
    icon: SiRubyonrails,
    color: "from-rose-500 to-orange-400",
    iconBox: "bg-rose-50 text-rose-600",
    badge: "bg-rose-50 text-rose-700 border-rose-100",
    ring: "ring-rose-100",
  },
  {
    title: "AI Integration",
    text: "Connecting LangChain, OpenAI, RAG flows, and automation into practical user-facing products.",
    icon: FaRocket,
    color: "from-purple-600 to-fuchsia-500",
    iconBox: "bg-purple-50 text-purple-600",
    badge: "bg-purple-50 text-purple-700 border-purple-100",
    ring: "ring-purple-100",
  },
];

const highlights = [
  "Associate Software Engineer at Techbolic Solutions",
  "Former MERN Stack Developer at BroshTech",
  "Experienced with Secucard, ChargeCloud, OCR, LangChain, and OpenAI",
  "Focused on performance, clean UX, and scalable product structure",
];

export default function About() {
  return (
    <section
      id="About"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-[#F8FAFC] px-6 py-24 font-['Poppins'] text-slate-950 md:px-12 lg:px-20"
    >
      <div className="absolute left-[-7rem] top-24 h-80 w-80 rounded-full bg-blue-300/35 blur-3xl" />
      <div className="absolute right-[-8rem] top-44 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl" />
      <div className="absolute bottom-20 left-1/3 h-72 w-72 rounded-full bg-purple-300/25 blur-3xl" />
      <div className="absolute right-12 top-32 hidden h-44 w-44 bg-[radial-gradient(circle,#94a3b8_1px,transparent_1px)] [background-size:14px_14px] opacity-25 lg:block" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <MotionDiv
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"
        >
          <MotionDiv variants={fadeUp}>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/85 px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-blue-700 shadow-lg shadow-blue-100/70 backdrop-blur">
              <FaCheckCircle className="h-4 w-4 text-emerald-600" />
              About Me
            </span>

            <h2 id="about-heading" className="max-w-4xl text-5xl font-black leading-tight text-slate-950 md:text-7xl">
              I turn ideas into{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 bg-clip-text text-transparent">
                useful web products.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-slate-600">
              I'm Muhammad Imran, an Associate Software Engineer from Faisalabad, Pakistan. I build scalable web and SaaS products with Ruby on Rails, MERN Stack, and AI-powered integrations that help teams ship faster and businesses work smarter.
            </p>
          </MotionDiv>

          <MotionDiv variants={fadeUp} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div key={metric.label} className="rounded-[1.25rem] border border-slate-100 bg-white/90 p-5 shadow-xl shadow-slate-200/70">
                  <span className={`mb-4 grid h-11 w-11 place-items-center rounded-2xl ${metric.bg}`}>
                    <Icon className={`h-5 w-5 ${metric.color}`} />
                  </span>
                  <p className="text-2xl font-black text-slate-950">{metric.value}</p>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.18em] text-slate-500">{metric.label}</p>
                </div>
              );
            })}
          </MotionDiv>
        </MotionDiv>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <MotionDiv
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-6 shadow-2xl shadow-blue-950/10 lg:sticky lg:top-28 lg:self-start"
          >
            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500" />
            <div className="absolute right-8 top-12 h-28 w-28 rounded-full bg-blue-200/45 blur-3xl" />
            <div className="absolute bottom-8 left-8 h-28 w-28 rounded-full bg-emerald-200/45 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-7 flex items-start justify-between gap-5">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-3xl bg-blue-50 text-blue-600 ring-8 ring-blue-100">
                  <FaCode className="h-7 w-7" />
                </span>
                <span className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-blue-700">
                  Profile
                </span>
              </div>

              <h3 className="text-3xl font-black leading-tight text-slate-950 md:text-4xl">
                Muhammad Imran
              </h3>
              <p className="mt-2 text-xl font-black text-blue-700">Associate Software Engineer</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-600">
                  <FaMapMarkerAlt className="text-orange-500" />
                  Faisalabad, Pakistan
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-600">
                  <SiRubyonrails className="text-rose-600" />
                  Rails + MERN
                </div>
              </div>

              <div className="mt-7 space-y-3">
                {highlights.map((highlight) => (
                  <div key={highlight} className="flex gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3">
                    <FaCheckCircle className="mt-1 h-4 w-4 shrink-0 text-emerald-500" />
                    <p className="text-sm font-semibold leading-6 text-slate-600">{highlight}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Ruby on Rails", "React", "Node.js", "MongoDB", "LangChain", "OpenAI"].map((tech) => (
                  <span key={tech} className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-black text-blue-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </MotionDiv>

          <MotionDiv
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            <div className="absolute bottom-8 left-6 top-8 hidden w-px bg-gradient-to-b from-blue-200 via-rose-200 to-purple-200 md:block" />

            <div className="space-y-6">
              {capabilities.map((capability) => {
                const Icon = capability.icon;
                return (
                  <MotionDiv key={capability.title} variants={fadeUp} className="relative md:pl-16">
                    <div className={`absolute left-0 top-8 hidden h-12 w-12 place-items-center rounded-2xl border border-white bg-white shadow-lg ring-8 ${capability.ring} md:grid`}>
                      <Icon className={`h-5 w-5 ${capability.iconBox.split(" ")[1]}`} />
                    </div>

                    <article className="group relative overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white/90 p-6 shadow-xl shadow-slate-200/70 transition-transform duration-300 hover:-translate-y-1">
                      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${capability.color}`} />
                      <div className="mb-5 flex items-start justify-between gap-4">
                        <div>
                          <span className={`mb-3 inline-flex rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] ${capability.badge}`}>
                            Capability
                          </span>
                          <h3 className="text-2xl font-black text-slate-950">{capability.title}</h3>
                        </div>
                        <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${capability.iconBox} md:hidden`}>
                          <Icon className="h-5 w-5" />
                        </span>
                      </div>
                      <p className="text-sm font-semibold leading-7 text-slate-600">{capability.text}</p>
                    </article>
                  </MotionDiv>
                );
              })}
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
