import React from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaCalendarAlt, FaCheckCircle, FaGraduationCap, FaMedal, FaUniversity } from "react-icons/fa";

const MotionDiv = motion.div;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Government College University, Faisalabad (GCUF)",
    duration: "2021 - 2025",
    scoreTitle: "CGPA",
    score: "3.24 / 4.00",
    type: "Degree",
    icon: FaGraduationCap,
    gradient: "from-blue-600 via-purple-600 to-emerald-500",
    iconBox: "bg-blue-50 text-blue-600",
    iconText: "text-blue-600",
    badge: "bg-blue-50 text-blue-700 border-blue-100",
    ring: "ring-blue-100",
    highlights: [
      "Studied computer networks, database management, and software engineering.",
      "Gained expertise in programming, web technologies, and information security.",
      "Engaged in research and practical projects emphasizing innovation in IT.",
    ],
  },
  {
    degree: "FSc Pre-Engineering",
    institution: "Akhuwat College, Kasur",
    duration: "2019 - 2021",
    scoreTitle: "Marks",
    score: "1060 / 1100",
    type: "College",
    icon: FaBookOpen,
    gradient: "from-emerald-500 to-teal-400",
    iconBox: "bg-emerald-50 text-emerald-600",
    iconText: "text-emerald-600",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-100",
    ring: "ring-emerald-100",
    highlights: [
      "Focused on mathematics, physics, and chemistry to develop analytical skills.",
      "Built strong problem-solving and logical reasoning foundations.",
      "Prepared for advanced studies in computing and information systems.",
    ],
  },
];

const summaryCards = [
  { label: "Primary Field", value: "Information Technology", icon: FaUniversity, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Academic Focus", value: "Software Engineering", icon: FaGraduationCap, color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Strong Result", value: "1060 / 1100", icon: FaMedal, color: "text-orange-600", bg: "bg-orange-50" },
];

export default function Education() {
  const featured = education[0];
  const FeaturedIcon = featured.icon;

  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#F8FAFC] px-6 py-24 font-['Poppins'] text-slate-950 md:px-12 lg:px-20"
      aria-label="Education section"
    >
      <div className="absolute left-[-8rem] top-24 h-80 w-80 rounded-full bg-blue-300/35 blur-3xl" />
      <div className="absolute right-[-8rem] top-52 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl" />
      <div className="absolute bottom-20 left-1/4 h-80 w-80 rounded-full bg-purple-300/25 blur-3xl" />
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
              <FaGraduationCap className="h-4 w-4 text-purple-600" />
              Academic Journey
            </span>
            <h2 className="text-5xl font-black leading-tight text-slate-950 md:text-7xl">
              Academic foundations for{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 bg-clip-text text-transparent">
                practical engineering.
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-slate-600">
              My education built the technical foundation behind my software engineering, product thinking, and problem-solving approach.
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
            <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${featured.gradient}`} />
            <div className="absolute right-8 top-12 h-28 w-28 rounded-full bg-blue-200/45 blur-3xl" />
            <div className="absolute bottom-8 left-8 h-28 w-28 rounded-full bg-emerald-200/45 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-7 flex items-start justify-between gap-5">
                <span className={`grid h-16 w-16 shrink-0 place-items-center rounded-3xl ${featured.iconBox} ring-8 ${featured.ring}`}>
                  <FeaturedIcon className="h-7 w-7" />
                </span>
                <span className={`rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.18em] ${featured.badge}`}>
                  Featured
                </span>
              </div>

              <h3 className="text-3xl font-black leading-tight text-slate-950 md:text-4xl">{featured.degree}</h3>
              <p className="mt-2 text-xl font-black text-blue-700">{featured.institution}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-600">
                  <FaCalendarAlt className="text-emerald-600" />
                  {featured.duration}
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-600">
                  <FaMedal className="text-orange-500" />
                  {featured.scoreTitle}: {featured.score}
                </div>
              </div>

              <div className="mt-7 space-y-3">
                {featured.highlights.map((point) => (
                  <div key={point} className="flex gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3">
                    <FaCheckCircle className="mt-1 h-4 w-4 shrink-0 text-emerald-500" />
                    <p className="text-sm font-semibold leading-6 text-slate-600">{point}</p>
                  </div>
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
              {education.map((edu) => {
                const Icon = edu.icon;
                return (
                  <MotionDiv key={edu.degree} variants={fadeUp} className="relative md:pl-16">
                    <div className={`absolute left-0 top-8 hidden h-12 w-12 place-items-center rounded-2xl border border-white bg-white shadow-lg ring-8 ${edu.ring} md:grid`}>
                      <Icon className={`h-5 w-5 ${edu.iconText}`} />
                    </div>
                    <article className="group relative overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white/90 p-6 shadow-xl shadow-slate-200/70 transition-transform duration-300 hover:-translate-y-1">
                      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${edu.gradient}`} />
                      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <div className="mb-3 flex flex-wrap items-center gap-2">
                            <span className={`rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] ${edu.badge}`}>
                              {edu.type}
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-slate-500">
                              <FaCalendarAlt className="h-3 w-3" />
                              {edu.duration}
                            </span>
                          </div>
                          <h3 className="text-2xl font-black text-slate-950">{edu.degree}</h3>
                          <p className="mt-1 text-base font-black text-slate-600">{edu.institution}</p>
                        </div>
                        <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${edu.iconBox} md:hidden`}>
                          <Icon className="h-5 w-5" />
                        </span>
                      </div>
                      <p className="inline-flex rounded-2xl bg-slate-50 px-4 py-2 text-sm font-black text-slate-700">
                        {edu.scoreTitle}: {edu.score}
                      </p>
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
