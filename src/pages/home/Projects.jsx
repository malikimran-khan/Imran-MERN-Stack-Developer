import React, { useRef } from "react";
import { motion as Motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { portfolioContent } from "../../content/portfolioContent";

function ProjectStackCard({ project, index, total, scrollYProgress }) {
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
  const href = project.link || project.github || "/projects";
  const isExternal = href.startsWith("http");

  return (
    <Motion.article
      className="absolute inset-0 overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-[var(--color-surface)]"
      style={{ y, scale, opacity, zIndex: index + 1 }}
    >
      <img src={project.image} alt="" className="absolute inset-0 h-full w-full object-cover brightness-110 saturate-125 contrast-105" />
      <div className="pointer-events-none absolute inset-0 bg-white/5 mix-blend-screen" />
      <div className="absolute inset-0 grid place-items-center">
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
          className="rounded-[var(--radius-pill)] border border-[var(--color-accent)] bg-black/55 px-7 py-3 text-sm font-bold text-[var(--color-accent)] backdrop-blur-md transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-on-accent)]"
        >
          Explore Project
        </a>
      </div>
    </Motion.article>
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

      <div ref={stackRef} className="mx-auto max-w-7xl" style={{ height: `${visibleProjects.length * 98}vh` }}>
        <div className="sticky top-20 h-[80vh] min-h-[650px]">
          <div className="relative h-full">
            {visibleProjects.map((project, index) => (
              <ProjectStackCard
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

      <div className="mt-10 text-center">
        <Link to="/projects" className="inline-flex rounded-[var(--radius-pill)] border border-[var(--color-accent)] px-7 py-3 text-sm font-bold text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-on-accent)]">
          {projects.cta}
        </Link>
      </div>
    </section>
  );
}
