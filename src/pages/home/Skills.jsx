import React, { useState } from "react";
import { FaBolt, FaBrain, FaCode, FaCreditCard, FaDatabase, FaDocker, FaFileAlt, FaGitAlt, FaGithub, FaNodeJs, FaPython, FaReact, FaServer } from "react-icons/fa";
import { SiExpress, SiFirebase, SiJenkins, SiLangchain, SiMongodb, SiMui, SiNextdotjs, SiPostgresql, SiPostman, SiRedux, SiRuby, SiRubyonrails, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";
import AnimatedText from "../../components/animations/AnimatedText";
import Reveal from "../../components/animations/Reveal";

const categories = {
  Frontend: [
    { name: "React.js", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Material UI", icon: SiMui },
    { name: "Redux Toolkit", icon: SiRedux },
  ],
  Backend: [
    { name: "Ruby on Rails", icon: SiRubyonrails },
    { name: "Ruby", icon: SiRuby },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express.js", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Firebase", icon: SiFirebase },
    { name: "REST APIs", icon: FaServer },
  ],
  Integrations: [
    { name: "Secucard API", icon: FaCreditCard },
    { name: "ChargeCloud", icon: FaBolt },
    { name: "OCR", icon: FaFileAlt },
    { name: "Payment Flows", icon: FaDatabase },
    { name: "Multi-Env", icon: FaServer },
  ],
  Tools: [
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "Docker", icon: FaDocker },
    { name: "Jenkins", icon: SiJenkins },
    { name: "Vercel", icon: SiVercel },
    { name: "Postman", icon: SiPostman },
  ],
  AI: [
    { name: "LangChain.js", icon: SiLangchain },
    { name: "OpenAI / RAG", icon: FaBrain },
    { name: "Python AI", icon: FaPython },
    { name: "AI Agents", icon: FaCode },
  ],
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Frontend");
  const skills = categories[activeTab];

  return (
    <section id="skills" className="relative overflow-hidden px-5 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-35" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:68px_68px]" />
        <div className="absolute left-[9%] top-28 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
        <div className="absolute right-[14%] bottom-32 h-3 w-3 rounded-full bg-[var(--color-accent)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedText
            as="span"
            text="Arsenal & Technologies"
            className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]"
            distance={16}
          />
          <AnimatedText
            as="h2"
            text="Technical Skills"
            className="mt-4 font-display text-6xl font-bold leading-none text-white md:text-8xl"
            stagger={0.06}
            delay={0.08}
          />
          <AnimatedText
            as="p"
            text="A focused stack for full-stack development, product engineering, integrations, and AI-powered workflows."
            className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--color-text-muted)]"
            distance={18}
            stagger={0.02}
            delay={0.16}
          />
        </div>

        <Reveal group stagger={0.05} className="mt-10 flex flex-wrap justify-center gap-3">
          {Object.keys(categories).map((tab) => (
            <Reveal
              as="button"
              inherit
              direction="up"
              distance={16}
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-[var(--radius-pill)] border px-5 py-2 text-sm font-bold transition-colors ${
                activeTab === tab
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-on-accent)]"
                  : "border-white/12 bg-white/[0.03] text-white/78 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              }`}
            >
              {tab}
            </Reveal>
          ))}
        </Reveal>

        <Reveal group stagger={0.06} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <Reveal
                as="article"
                inherit
                direction="up"
                key={skill.name}
                className="group rounded-[var(--radius-card)] border border-white/10 bg-[var(--color-surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/60 hover:shadow-[0_24px_90px_rgba(212,255,79,0.08)]"
              >
                <div className="mb-8 flex items-center justify-between gap-4">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">{activeTab}</span>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] transition-colors group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-on-accent)]">
                    <Icon className="h-6 w-6" />
                  </span>
                </div>
                <h3 className="font-display text-3xl font-bold leading-none text-white">{skill.name}</h3>
                <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-2/3 rounded-full bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
                </div>
              </Reveal>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
