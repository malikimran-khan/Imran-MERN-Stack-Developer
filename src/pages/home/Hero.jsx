import React from "react";
import { portfolioContent } from "../../content/portfolioContent";
import WaveBadge from "../../components/WaveBadge";
import AnimatedText from "../../components/animations/AnimatedText";
import AnimatedImage from "../../components/animations/AnimatedImage";
import Reveal from "../../components/animations/Reveal";

export default function Hero() {
  const { hero } = portfolioContent;

  return (
    <section id="home" className="relative z-10 min-h-screen overflow-hidden px-5 py-0">
      {hero.accentDots.map((dot) => (
        <span key={dot.className} className={`absolute hidden rounded-full bg-[var(--color-accent)] md:block ${dot.className}`} aria-hidden="true" />
      ))}

      <div className="mx-auto grid min-h-screen max-w-7xl items-center">
        <div className="relative">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(300px,360px)_minmax(0,1.35fr)] lg:gap-0">
            <div className="relative z-30 text-center lg:text-left">
              <AnimatedText
                as="p"
                text={hero.eyebrow}
                className="dark-hero-name mb-4"
                direction="left"
                distance={18}
                delay={0.05}
              />
              <AnimatedText
                as="h1"
                text={hero.headlineLeft}
                className="dark-hero-word"
                direction="left"
                distance={44}
                duration={0.7}
                delay={0.1}
              />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-sm lg:h-[490px] lg:max-w-[372px]">
              <div className="aspect-[0.76] overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-surface)] shadow-2xl shadow-black/45 lg:hidden">
                <AnimatedImage
                  src={portfolioContent.stickyVisual.images[0].src}
                  alt=""
                  className="h-full w-full object-cover grayscale-[12%]"
                  loading="eager"
                  fetchPriority="high"
                  scale={1.06}
                  duration={0.8}
                  delay={0.15}
                />
              </div>
              <WaveBadge label={hero.bubble} className="absolute -bottom-7 -left-5 h-24 w-24 lg:hidden" />
            </div>

            <div className="relative z-30 text-center lg:text-right">
              <AnimatedText
                as="h1"
                text={hero.headlineRight}
                className="dark-hero-word"
                direction="right"
                distance={44}
                duration={0.7}
                delay={0.2}
              />
              <AnimatedText
                as="p"
                text={hero.taglineRight}
                className="mx-auto mt-5 max-w-sm text-sm leading-6 text-[var(--color-text-muted)] lg:ml-auto lg:mr-0"
                direction="right"
                distance={18}
                stagger={0.03}
                delay={0.35}
              />
            </div>
          </div>

          <Reveal
            className="tilted-preview absolute bottom-1 left-0 hidden w-40 overflow-hidden rounded-[20px] border border-white/10 bg-[var(--color-surface)] p-2 shadow-2xl shadow-black/40 lg:block"
            direction="up"
            distance={24}
            delay={0.4}
          >
            <AnimatedImage
              src={hero.previewImage}
              alt=""
              className="aspect-[4/3] w-full rounded-[14px] object-cover"
              delay={0.45}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
