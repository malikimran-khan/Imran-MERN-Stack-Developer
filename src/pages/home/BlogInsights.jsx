import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioContent } from "../../content/portfolioContent";
import { REVEAL } from "../../utils/motion";
import AnimatedText from "../../components/animations/AnimatedText";
import AnimatedImage from "../../components/animations/AnimatedImage";
import Reveal from "../../components/animations/Reveal";

const MotionButton = motion.button;
const MotionArticle = motion.article;

function CategoryPill({ label, active = false }) {
  return (
    <MotionButton
      variants={REVEAL.up}
      type="button"
      className={`rounded-[var(--radius-pill)] border px-5 py-2 text-sm font-semibold transition-colors ${
        active
          ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-on-accent)]"
          : "border-white/12 bg-white/[0.03] text-white/78 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
      }`}
    >
      {label}
    </MotionButton>
  );
}

function ArticleCard({ post, featured = false }) {
  const href = post.link || post.github || "/projects";
  const isExternal = href.startsWith("http");

  return (
    <MotionArticle variants={REVEAL.up} className={`group overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-[var(--color-surface)] shadow-[0_0_40px_rgba(212,255,79,0.05)] ${featured ? "min-h-[560px]" : "min-h-[360px]"}`}>
      <div className={`${featured ? "h-[360px]" : "h-56"} overflow-hidden bg-black/20`}>
        <AnimatedImage src={post.image} alt="" className="h-full w-full object-cover brightness-105 saturate-110 transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-6 md:p-7">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className="rounded-[var(--radius-pill)] bg-[var(--color-accent)] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-on-accent)]">
            {post.category}
          </span>
          <span className="text-sm text-[var(--color-text-muted)]">{post.date}</span>
        </div>
        <h3 className={`font-display font-bold leading-none text-white ${featured ? "text-5xl md:text-6xl" : "text-3xl md:text-4xl"}`}>
          {post.title}
        </h3>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-text-muted)]">{post.excerpt}</p>
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-accent)]"
        >
          Explore project
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </MotionArticle>
  );
}

export default function BlogInsights({ preview = false }) {
  const { blogs } = portfolioContent;
  const previewItems = blogs.items.slice(0, 3);
  const displayedItems = preview ? previewItems : blogs.items;

  return (
    <section id="blogs" className="relative overflow-hidden px-5 py-24">
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute left-[8%] top-24 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
        <div className="absolute right-[12%] top-1/3 h-3 w-3 rounded-full bg-[var(--color-accent)]" />
        <div className="absolute bottom-28 left-[18%] h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedText
            as="h2"
            text={blogs.title}
            className="font-display text-6xl font-bold leading-none text-white md:text-8xl"
            stagger={0.06}
          />
          <AnimatedText
            as="p"
            text={blogs.description}
            className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--color-text-muted)]"
            distance={18}
            stagger={0.02}
            delay={0.1}
          />
        </div>

        {!preview && (
          <Reveal group stagger={0.05} className="mt-8 flex flex-wrap justify-center gap-3">
            {blogs.filters.map((filter, index) => (
              <CategoryPill key={filter} label={filter} active={index === 0} />
            ))}
          </Reveal>
        )}

        {!preview && (
          <Reveal group stagger={0.12} className="mt-14 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <ArticleCard post={blogs.featured[0]} featured />
            <ArticleCard post={blogs.featured[1]} />
          </Reveal>
        )}

        <Reveal group stagger={0.1} className="mt-[4.5rem] flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <Reveal as="div" inherit direction="left" distance={22}>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              {preview ? "Project preview" : `${blogs.items.length} project notes`}
            </span>
            <AnimatedText
              as="h3"
              inherit
              text={blogs.latestTitle}
              className="mt-3 font-display text-5xl font-bold leading-none text-white md:text-6xl"
              direction="left"
              stagger={0.05}
            />
          </Reveal>
          <Reveal as="div" inherit direction="right" distance={18}>
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-accent)]">
              {blogs.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </Reveal>

        <Reveal group stagger={0.08} className="mt-8 grid gap-6 md:grid-cols-3">
          {displayedItems.map((post) => (
            <ArticleCard key={post.title} post={post} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
