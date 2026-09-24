import React, { useRef } from "react";
import { motion as Motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { portfolioContent } from "../../content/portfolioContent";

function ProjectImageCard({ project, index, total, scrollYProgress }) {
  const enterStart = Math.max((index - 1) / total, 0);
  const enterEnd = index / total;
  const exitStart = index / total;
  const exitEnd = Math.min((index + 1) / total, 1);

  const rawY = useTransform(scrollYProgress, [enterStart, enterEnd], index === 0 ? ["0%", "0%"] : ["112%", "0%"]);
  const rawScale = useTransform(scrollYProgress, [exitStart, exitEnd], [1, index === total - 1 ? 1 : 0.86]);
  const rawOpacity = useTransform(scrollYProgress, [exitStart, exitEnd], [1, index === total - 1 ? 1 : 0.58]);
  const spring = { stiffness: 70, damping: 24, mass: 0.9 };
  const y = useSpring(rawY, spring);
  const scale = useSpring(rawScale, spring);
  const opacity = useSpring(rawOpacity, spring);
  return (
    <Motion.article
      className="absolute inset-0 overflow-hidden rounded-[var(--radius-card)]"
      style={{ y, scale, opacity, zIndex: index + 1 }}
    >
      <img src={project.image} alt="" className="relative mx-auto h-full max-h-full w-full max-w-full object-contain object-center" />
        {/* button moved to text block for better layout */}
    </Motion.article>
  );
}

function ProjectTextBlock({ project, index, total, scrollYProgress }) {
  const enterStart = Math.max((index - 1) / total, 0);
  const enterEnd = index / total;
  const exitStart = index / total;
  const exitEnd = Math.min((index + 1) / total, 1);

  const rawOpacity = useTransform(
    scrollYProgress,
    index === 0
      ? [exitStart, exitEnd]
      : index === total - 1
      ? [enterStart, enterEnd]
      : [enterStart, enterEnd, exitStart, exitEnd],
    index === 0 ? [1, 0] : index === total - 1 ? [0, 1] : [0, 1, 1, 0]
  );
  const rawY = useTransform(
    scrollYProgress,
    index === 0 ? [exitStart, exitEnd] : [enterStart, enterEnd],
    index === 0 ? ["0%", "-16%"] : ["16%", "0%"]
  );
  const spring = { stiffness: 70, damping: 24, mass: 0.9 };
  const opacity = useSpring(rawOpacity, spring);
  const y = useSpring(rawY, spring);

  return (
    <Motion.div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-0" style={{ opacity, y }}>
      <span className="font-display mb-2 text-2xl font-bold leading-none text-white sm:text-4xl md:text-5xl">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
      <h3 className="font-display mb-3 text-2xl font-bold uppercase leading-none text-white sm:text-4xl md:text-6xl lg:text-7xl">{project.title}</h3>
      <p className="max-w-xl text-sm leading-6 text-[var(--color-text-muted)] sm:text-lg sm:leading-8 md:text-xl md:leading-9">{project.description}</p>
      {project.tech && (
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-white/55 sm:text-sm">
          {project.tech}
        </p>
      )}
      <div className="mt-4 sm:mt-8">
        <a
          href={project.link || project.github || "/projects"}
          target={project.link?.startsWith("http") ? "_blank" : undefined}
          rel={project.link?.startsWith("http") ? "noreferrer" : undefined}
          className="inline-flex rounded-[var(--radius-pill)] border border-[var(--color-accent)] bg-black/55 px-4 py-2 text-sm font-bold text-[var(--color-accent)] backdrop-blur-md transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-on-accent)] sm:px-7 sm:py-3 sm:text-base"
        >
          Explore Project
        </a>
      </div>
      {Array.isArray(project.tags) && project.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2 sm:mt-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[var(--radius-pill)] border border-white/15 px-3 py-1 text-sm font-medium text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Motion.div>
  );
}

export default function Projects() {
  const { projects } = portfolioContent;
  const visibleProjects = projects.items.slice(0, 3).map((project, index) => ({
    ...project,
    image: ["/projects-image1.png", "/project-image2.png", "/project-image3.png"][index],
  }));
  const stackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="projects" className="px-5 py-24 text-white">
      <div className="section-heading">
        <h2 className="!text-white">{projects.title}</h2>
        <p className="!text-[var(--color-text-muted)]">{projects.description}</p>
      </div>

      <div ref={stackRef} className="mx-auto max-w-7xl" style={{ height: `${visibleProjects.length * 105}vh` }}>
        <div className="sticky top-20 h-[70vh] min-h-[520px] lg:h-[88vh] lg:min-h-[780px]">
          <div className="grid h-full grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-3 sm:gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-10">
            {/* Text on the left */}
            <div className="relative">
              {visibleProjects.map((project, index) => (
                <ProjectTextBlock
                      key={project.title}
                      project={project}
                      index={index}
                      total={visibleProjects.length}
                      scrollYProgress={scrollYProgress}
                    />
              ))}
                  </div>

            {/* Image stack on the right */}
            <div className="relative h-full min-w-0">
              {visibleProjects.map((project, index) => (
                <ProjectImageCard
                  key={project.title}
                  project={project}
                  index={index}
                  total={visibleProjects.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link to="/projects" className="inline-flex rounded-[var(--radius-pill)] border border-[var(--color-accent)] px-7 py-3 text-sm font-bold text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-on-accent)]">
          {projects.cta}
        </Link>
      </div>
    </section>
  );
}