import React, { useEffect, useMemo, useState } from "react";
import { Github } from "lucide-react";
import { portfolioContent } from "../content/portfolioContent";
import { revealScale } from "../utils/motion";
import AnimatedText from "../components/animations/AnimatedText";
import Reveal from "../components/animations/Reveal";

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

function ProjectShowcase({ project, index, total }) {
  const [imageFailed, setImageFailed] = useState(false);
  const isReversed = index % 2 === 1;
  // Rows alternate: text enters from one side, the image from the opposite side.
  const textDirection = isReversed ? "right" : "left";
  const imageDirection = isReversed ? "left" : "right";
  const href = project.link || project.github;
  const initials = project.title
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Reveal
      as="article"
      group
      stagger={0.14}
      className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
    >
      <Reveal
        as="div"
        inherit
        group
        stagger={0.09}
        className={`flex flex-col justify-center ${isReversed ? "lg:order-2" : ""}`}
      >
        <Reveal
          as="span"
          inherit
          direction={textDirection}
          distance={20}
          className="font-display mb-2 text-2xl font-bold leading-none text-white sm:text-4xl md:text-5xl"
        >
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </Reveal>
        <AnimatedText
          as="h3"
          inherit
          text={project.title}
          direction={textDirection}
          distance={30}
          stagger={0.05}
          className="font-display mb-3 text-3xl font-bold uppercase leading-none text-white sm:text-4xl md:text-6xl lg:text-7xl"
        />
        <Reveal
          as="p"
          inherit
          direction={textDirection}
          distance={22}
          className="max-w-xl text-sm leading-6 text-[var(--color-text-muted)] sm:text-lg sm:leading-8 md:text-xl md:leading-9"
        >
          {project.description}
        </Reveal>
        {project.tech && (
          <Reveal
            as="p"
            inherit
            direction={textDirection}
            distance={18}
            className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-white/55 sm:text-sm"
          >
            {project.tech}
          </Reveal>
        )}
        {href && (
          <Reveal
            as="div"
            inherit
            direction={textDirection}
            distance={18}
            className="mt-4 flex flex-wrap gap-3 sm:mt-8"
          >
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-[var(--radius-pill)] border border-[var(--color-accent)] bg-black/55 px-4 py-2 text-sm font-bold text-[var(--color-accent)] backdrop-blur-md transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-on-accent)] sm:px-7 sm:py-3 sm:text-base"
            >
              Explore Project
            </a>
            {project.link && project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-white/15 px-4 py-2 text-sm font-bold text-white/75 transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] sm:px-7 sm:py-3 sm:text-base"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            )}
          </Reveal>
        )}
      </Reveal>

      <Reveal
        as="div"
        inherit
        variants={revealScale({ from: 1.04, direction: imageDirection, distance: 28, duration: 0.8 })}
        className={`relative aspect-[16/11] overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-[var(--color-surface)] p-3 shadow-2xl shadow-black/30 sm:p-5 ${isReversed ? "lg:order-1" : ""}`}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,255,79,0.10),transparent_60%)]"
          aria-hidden="true"
        />
        {project.image && !imageFailed ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
            className="relative h-full w-full object-contain object-center"
          />
        ) : (
          <div className="relative flex h-full w-full flex-col items-center justify-center gap-3">
            <span className="font-display text-6xl font-bold leading-none text-[var(--color-accent)]">{initials}</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">Preview coming soon</span>
          </div>
        )}
      </Reveal>
    </Reveal>
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

  useEffect(() => {
    document.title = "Projects | Muhammad Imran";
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <main className="px-5 pt-28 pb-24 text-white">
      <section className="mx-auto max-w-7xl">
        <div className="section-heading">
          <AnimatedText
            as="h2"
            text={portfolioContent.projects.title}
            className="!text-white"
            stagger={0.06}
          />
          <AnimatedText
            as="p"
            text={portfolioContent.projects.description}
            className="!text-[var(--color-text-muted)]"
            distance={18}
            stagger={0.02}
            delay={0.1}
          />
        </div>

        <Reveal group stagger={0.05} className="mx-auto mb-16 flex max-w-4xl flex-wrap justify-center gap-3">
              {filters.map((filter) => {
                const isActive = activeFilter === filter;
                const count = filter === "All" ? projects.length : projects.filter((project) => project.category === filter).length;

                return (
                  <Reveal
                    as="button"
                    inherit
                    direction="up"
                    distance={16}
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
                  </Reveal>
                );
              })}
        </Reveal>

        <div className="flex flex-col gap-20 lg:gap-28">
          {filteredProjects.map((project, index) => (
            <ProjectShowcase
              key={project.title}
              project={project}
              index={index}
              total={filteredProjects.length}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
