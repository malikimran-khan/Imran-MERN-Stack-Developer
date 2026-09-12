import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaCheckCircle,
  FaCodeBranch,
  FaGem,
  FaLaptopCode,
  FaLayerGroup,
  FaMapMarkerAlt,
  FaRocket,
} from "react-icons/fa";
import { GiNetworkBars, GiRocketThruster } from "react-icons/gi";

const MotionDiv = motion.div;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "Techbolic Solutions",
    duration: "Jan 2026 - Present",
    location: "Faisalabad, Pakistan",
    type: "Current Role",
    icon: FaGem,
    accent: "blue",
    gradient: "from-blue-600 via-purple-600 to-emerald-500",
    iconBox: "bg-blue-50 text-blue-600",
    iconText: "text-blue-600",
    badge: "bg-blue-50 text-blue-700 border-blue-100",
    ring: "ring-blue-100",
    highlights: [
      "Working on product-based projects using Ruby on Rails.",
      "Integrated Secucard for card, voucher, and payment processing.",
      "Implemented OCR functionality and ChargeCloud API integration.",
      "Managing multiple branches with different deployment environments.",
    ],
    stack: ["Ruby on Rails", "Secucard", "OCR", "ChargeCloud"],
  },
  {
    role: "MERN Stack Developer",
    company: "BroshTech",
    duration: "Feb 2025 - Jan 2026",
    location: "Faisalabad, Pakistan",
    type: "Full-Time",
    icon: GiRocketThruster,
    accent: "emerald",
    gradient: "from-emerald-500 to-teal-400",
    iconBox: "bg-emerald-50 text-emerald-600",
    iconText: "text-emerald-600",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-100",
    ring: "ring-emerald-100",
    highlights: [
      "Developed scalable full-stack web apps using React.js, Node.js, and MongoDB.",
      "Built AI-powered Electron.js desktop tools and PWAs.",
      "Collaborated with teams to deliver high-performance solutions.",
    ],
    stack: ["React", "Node.js", "MongoDB", "Electron.js"],
  },
  {
    role: "MERN Stack Intern",
    company: "Nexo Mark",
    duration: "Oct 2024 - Jan 2025",
    location: "Faisalabad, Pakistan",
    type: "Internship",
    icon: FaLaptopCode,
    accent: "purple",
    gradient: "from-purple-600 to-fuchsia-500",
    iconBox: "bg-purple-50 text-purple-600",
    iconText: "text-purple-600",
    badge: "bg-purple-50 text-purple-700 border-purple-100",
    ring: "ring-purple-100",
    highlights: [
      "Assisted in designing and debugging modern MERN applications.",
      "Integrated REST APIs using Express.js and MongoDB.",
      "Enhanced front-end responsiveness with Tailwind CSS.",
    ],
    stack: ["MERN", "REST APIs", "Tailwind CSS"],
  },
  {
    role: "Front-End Developer Intern",
    company: "EMAK Solution",
    duration: "Jul 2023 - Oct 2023",
    location: "Faisalabad, Pakistan",
    type: "Internship",
    icon: GiNetworkBars,
    accent: "orange",
    gradient: "from-orange-500 to-amber-400",
    iconBox: "bg-orange-50 text-orange-600",
    iconText: "text-orange-600",
    badge: "bg-orange-50 text-orange-700 border-orange-100",
    ring: "ring-orange-100",
    highlights: [
      "Created interactive and mobile-friendly UIs using React.js.",
      "Improved performance and accessibility of existing codebases.",
      "Worked closely with designers to refine user experience.",
    ],
    stack: ["React", "Responsive UI", "Accessibility"],
  },
];

const summaryCards = [
  { label: "Current Focus", value: "Product Engineering", icon: FaLayerGroup, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Experience", value: "1+ Years", icon: FaBriefcase, color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Delivery Style", value: "Clean & Scalable", icon: FaRocket, color: "text-purple-600", bg: "bg-purple-50" },
];

export default function Experience() {
  const currentExperience = experiences[0];
  const CurrentIcon = currentExperience.icon;

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#F8FAFC] px-6 py-24 font-['Poppins'] text-slate-950 md:px-12 lg:px-20"
      aria-labelledby="experience-heading"
    >
      <div className="absolute left-[-8rem] top-24 h-80 w-80 rounded-full bg-blue-300/35 blur-3xl" />
      <div className="absolute right-[-8rem] top-52 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl" />
      <div className="absolute bottom-20 left-1/4 h-80 w-80 rounded-full bg-purple-300/25 blur-3xl" />
      <div className="absolute left-8 top-32 hidden h-40 w-40 bg-[radial-gradient(circle,#94a3b8_1px,transparent_1px)] [background-size:14px_14px] opacity-25 lg:block" />
      <div className="absolute bottom-24 right-12 hidden h-44 w-44 bg-[radial-gradient(circle,#94a3b8_1px,transparent_1px)] [background-size:14px_14px] opacity-25 lg:block" />

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
              <FaBriefcase className="h-4 w-4 text-purple-600" />
              Career Journey
            </span>
            <h2 id="experience-heading" className="text-5xl font-black leading-tight text-slate-950 md:text-7xl">
              Practical experience building{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 bg-clip-text text-transparent">
                real products.
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-slate-600">
              A focused path through full-stack engineering, API integrations, AI-powered tools, and responsive product interfaces.
            </p>
          </MotionDiv>

          <MotionDiv variants={fadeUp} className="grid gap-4 sm:grid-cols-3">
            {summaryCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.label} className="rounded-[1.25rem] border border-slate-100 bg-white/90 p-5 shadow-xl shadow-slate-200/70">
                  <span className={`mb-4 grid h-11 w-11 place-items-center rounded-2xl ${card.bg}`}>
                    <Icon className={`h-5 w-5 ${card.color}`} />
                  </span>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">{card.label}</p>
                  <p className="mt-2 text-lg font-black text-slate-950">{card.value}</p>
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
            <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${currentExperience.gradient}`} />
            <div className="absolute right-8 top-12 h-28 w-28 rounded-full bg-blue-200/45 blur-3xl" />
            <div className="absolute bottom-8 left-8 h-28 w-28 rounded-full bg-emerald-200/45 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-7 flex items-start justify-between gap-5">
                <span className={`grid h-16 w-16 shrink-0 place-items-center rounded-3xl ${currentExperience.iconBox} ring-8 ${currentExperience.ring}`}>
                  <CurrentIcon className="h-7 w-7" />
                </span>
                <span className={`rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.18em] ${currentExperience.badge}`}>
                  {currentExperience.type}
                </span>
              </div>

              <h3 className="text-3xl font-black leading-tight text-slate-950 md:text-4xl">
                {currentExperience.role}
              </h3>
              <p className="mt-2 text-xl font-black text-blue-700">{currentExperience.company}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-600">
                  <FaCalendarAlt className="text-emerald-600" />
                  {currentExperience.duration}
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-600">
                  <FaMapMarkerAlt className="text-orange-500" />
                  {currentExperience.location}
                </div>
              </div>

              <div className="mt-7 space-y-3">
                {currentExperience.highlights.slice(0, 3).map((point) => (
                  <div key={point} className="flex gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3">
                    <FaCheckCircle className="mt-1 h-4 w-4 shrink-0 text-emerald-500" />
                    <p className="text-sm font-semibold leading-6 text-slate-600">{point}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {currentExperience.stack.map((tech) => (
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
            <div className="absolute bottom-8 left-6 top-8 hidden w-px bg-gradient-to-b from-blue-200 via-emerald-200 to-purple-200 md:block" />

            <div className="space-y-6">
              {experiences.map((experience) => {
                const Icon = experience.icon;
                return (
                  <MotionDiv
                    key={`${experience.company}-${experience.role}`}
                    variants={fadeUp}
                    className="relative md:pl-16"
                  >
                    <div className={`absolute left-0 top-8 hidden h-12 w-12 place-items-center rounded-2xl border border-white bg-white shadow-lg ring-8 ${experience.ring} md:grid`}>
                      <Icon className={`h-5 w-5 ${experience.iconText}`} />
                    </div>

                    <article className="group relative overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white/90 p-6 shadow-xl shadow-slate-200/70 transition-transform duration-300 hover:-translate-y-1">
                      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${experience.gradient}`} />
                      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <div className="mb-3 flex flex-wrap items-center gap-2">
                            <span className={`rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] ${experience.badge}`}>
                              {experience.type}
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-slate-500">
                              <FaCalendarAlt className="h-3 w-3" />
                              {experience.duration}
                            </span>
                          </div>
                          <h3 className="text-2xl font-black text-slate-950">{experience.role}</h3>
                          <p className="mt-1 text-base font-black text-slate-600">{experience.company}</p>
                        </div>
                        <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${experience.iconBox} md:hidden`}>
                          <Icon className="h-5 w-5" />
                        </span>
                      </div>

                      <ul className="grid gap-3">
                        {experience.highlights.map((point) => (
                          <li key={point} className="flex gap-3 text-sm font-semibold leading-6 text-slate-600">
                            <FaCodeBranch className={`mt-1 h-4 w-4 shrink-0 ${experience.iconText}`} />
                            {point}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {experience.stack.map((tech) => (
                          <span key={tech} className="rounded-full border border-slate-100 bg-slate-50 px-3 py-1.5 text-xs font-black text-slate-600">
                            {tech}
                          </span>
                        ))}
                      </div>
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
