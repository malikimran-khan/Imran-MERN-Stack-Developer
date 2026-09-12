import React, { useEffect, useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import { ArrowUpRight, Github, Layers3, Sparkles } from "lucide-react";
import { portfolioContent } from "../content/portfolioContent";

const introSequence = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.08,
    },
  },
};

const revealUp = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function normalizeProject(project) {
  return {
    category: project.category || "Project",
    title: project.title,
    description: project.description || project.excerpt,
    tech: project.tech || project.date || "",
    image: project.image,
    github: project.github,
    link: project.link,
  };
}

function getUniqueProjects() {
  const { projects, blogs } = portfolioContent;
  const source = projects.libraryItems || [...projects.items, ...blogs.featured, ...blogs.items];

  return source.reduce((items, project) => {
    if (items.some((item) => item.title === project.title)) return items;
    return [...items, normalizeProject(project)];
  }, []);
}

function ProjectAction({ href, icon, children, primary = false }) {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-[var(--radius-pill)] px-4 py-2 text-sm font-bold transition-all ${
        primary
          ? "bg-[var(--color-accent)] text-[var(--color-on-accent)] hover:-translate-y-0.5"
          : "border border-white/12 text-white/82 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
      }`}
    >
      {icon}
      {children}
    </a>
  );
}

function FeaturedProject({ project }) {
  return (
    <Motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-accent)]/20 bg-[#202020] shadow-[0_30px_90px_rgba(0,0,0,0.26)]"
    >
      <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="flex flex-col justify-between p-6 md:p-9">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-[var(--color-accent)] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-on-accent)]">
              <Sparkles className="h-4 w-4" />
              Current Spotlight
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">{project.category}</p>
            <h2 className="mt-4 font-display text-5xl font-bold leading-none text-white md:text-7xl">{project.title}</h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-text-muted)] md:text-lg">{project.description}</p>
          </div>

          <div className="mt-8">
            <div className="mb-6 flex flex-wrap gap-2">
              {project.tech.split(",").slice(0, 6).map((tech) => (
                <span key={tech.trim()} className="rounded-[var(--radius-pill)] border border-white/10 px-3 py-1.5 text-xs text-white/72">
                  {tech.trim()}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <ProjectAction href={project.link || project.github} icon={<ArrowUpRight className="h-4 w-4" />} primary>
                Explore Project
              </ProjectAction>
              <ProjectAction href={project.github} icon={<Github className="h-4 w-4" />}>
                GitHub
              </ProjectAction>
            </div>
          </div>
        </div>
        <div className="relative min-h-[300px] overflow-hidden bg-black/20 lg:min-h-[520px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,255,79,0.18),transparent_34%)]" />
          <img
            src={project.image}
            alt={project.title}
            className="relative h-full w-full object-cover brightness-110 saturate-125 contrast-105 transition-transform duration-500 group-hover:scale-[1.035]"
          />
        </div>
      </div>
    </Motion.article>
  );
}

function MasonryProjectCard({ project, index }) {
  const isLarge = index % 7 === 0 || index % 7 === 5;
  const isTall = index % 5 === 2;

  return (
    <Motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`group overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-[#202020] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/45 hover:shadow-[0_0_45px_rgba(212,255,79,0.08)] ${
        isLarge ? "lg:col-span-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden bg-black/20 ${isLarge ? "h-[430px]" : isTall ? "h-[380px]" : "h-72"}`}>
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover brightness-110 saturate-125 contrast-105 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/20 to-transparent opacity-85" />
        <span className="absolute left-5 top-5 rounded-[var(--radius-pill)] bg-[var(--color-accent)] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-on-accent)]">
          {project.category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
          <div className="min-w-0">
            <h3 className="font-display text-4xl font-bold leading-none text-white md:text-5xl">{project.title}</h3>
            <p className="mt-3 line-clamp-2 text-sm leading-7 text-[var(--color-text-muted)]">{project.description}</p>
          </div>
          <ProjectAction href={project.link || project.github} icon={<ArrowUpRight className="h-4 w-4" />} primary>
            View
          </ProjectAction>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.split(",").slice(0, isLarge ? 6 : 4).map((tech) => (
            <span key={tech.trim()} className="rounded-[var(--radius-pill)] border border-white/10 px-3 py-1 text-[11px] text-white/64">
              {tech.trim()}
            </span>
          ))}
        </div>
      </div>
    </Motion.article>
  );
}

export default function ProjectsPage() {
  const filters = ["All", ...portfolioContent.blogs.filters];
  const [activeFilter, setActiveFilter] = useState("All");
  const projects = useMemo(() => getUniqueProjects(), []);
  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter, projects]
  );
  const featured = filteredProjects[0];
  const remainingProjects = filteredProjects.slice(1);

  useEffect(() => {
    document.title = "Projects | Muhammad Imran";
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <main className="relative overflow-hidden px-5 pt-32 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-35" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute left-[8%] top-40 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
        <div className="absolute right-[12%] top-[22rem] h-3 w-3 rounded-full bg-[var(--color-accent)]" />
        <div className="absolute bottom-44 left-[18%] h-2 w-2 rounded-full bg-[var(--color-accent)]" />
      </div>

      <section className="relative z-10 mx-auto max-w-7xl pb-24">
        <Motion.div
          variants={introSequence}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl text-center"
        >
          <Motion.div variants={revealUp} className="mx-auto mb-6 inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-[var(--color-accent)]/35 bg-[var(--color-accent)]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            <Layers3 className="h-4 w-4" />
            Full Portfolio
          </Motion.div>
          <Motion.h1 variants={revealUp} className="font-display text-6xl font-bold leading-none text-white md:text-8xl lg:text-9xl">
            SELECTED PROJECTS
          </Motion.h1>
          <Motion.p variants={revealUp} className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-muted)] md:text-lg">
            A clear look at the web apps, AI tools, automation systems, and business websites I have built.
          </Motion.p>
        </Motion.div>

        <Motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3"
          >
              {filters.map((filter) => {
                const isActive = activeFilter === filter;
                const count = filter === "All" ? projects.length : projects.filter((project) => project.category === filter).length;

                return (
                  <button
                    type="button"
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                  className={`inline-flex items-center gap-3 rounded-[var(--radius-pill)] border px-5 py-2.5 text-sm font-bold transition-all ${
                      isActive
                        ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-on-accent)]"
                        : "border-white/10 bg-white/[0.035] text-white/74 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                    }`}
                  >
                    <span>{filter}</span>
                    <span className={isActive ? "text-black/70" : "text-white/40"}>{count}</span>
                  </button>
                );
              })}
        </Motion.div>

        <Motion.div
          key={`stats-${activeFilter}`}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 grid gap-4 md:grid-cols-3"
        >
          {[
            { label: activeFilter === "All" ? "Visible Projects" : activeFilter, value: `${filteredProjects.length}+` },
            { label: "AI Powered", value: `${projects.filter((project) => project.category === "AI Powered").length}+` },
            { label: "Project Types", value: "3" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-[var(--radius-card)] border border-white/10 bg-white/[0.035] p-5 text-center">
              <strong className="font-display text-5xl font-bold leading-none text-[var(--color-accent)]">{stat.value}</strong>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/52">{stat.label}</p>
            </div>
          ))}
        </Motion.div>

        {featured && (
          <div key={`featured-${activeFilter}`} className="mt-14">
            <FeaturedProject project={featured} />
          </div>
        )}

        <Motion.div
              key={`library-title-${activeFilter}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 flex flex-col justify-between gap-4 md:flex-row md:items-end"
            >
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  {remainingProjects.length} more {activeFilter === "All" ? "projects" : activeFilter.toLowerCase()}
                </span>
                <h2 className="mt-3 font-display text-5xl font-bold leading-none text-white md:text-7xl">
              Case Study Gallery
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-[var(--color-text-muted)] md:text-right">
            Visual project cards with short context, stack highlights, and direct links.
              </p>
            </Motion.div>

        <Motion.div layout className="mt-8 grid auto-rows-auto gap-6 lg:grid-cols-3">
              {remainingProjects.map((project, index) => (
            <MasonryProjectCard key={project.title} project={project} index={index} />
              ))}
            </Motion.div>
      </section>
    </main>
  );
}
