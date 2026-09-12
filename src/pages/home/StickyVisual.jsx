import React from "react";
import { motion as Motion, useScroll, useSpring, useTransform } from "framer-motion";
import { portfolioContent } from "../../content/portfolioContent";
import WaveBadge from "../../components/WaveBadge";

export default function StickyVisual({ targetRef }) {
  const { hero, stickyVisual } = portfolioContent;
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const rawX = useTransform(scrollYProgress, [0, 0.08, 0.42, 1], [0, 0, 220, 220]);
  const rawY = useTransform(scrollYProgress, [0, 0.08, 0.42, 1], [0, 0, 18, 10]);
  const rawRotateX = useTransform(scrollYProgress, [0, 0.08, 0.42, 1], [0, 0, 6, 4]);
  const rawRotateZ = useTransform(scrollYProgress, [0, 0.08, 0.42, 1], [0, 0, -5, -4]);
  const rawFlipRotateY = useTransform(scrollYProgress, [0, 0.08, 0.42, 1], [0, 0, 180, 180]);
  const rawScale = useTransform(scrollYProgress, [0, 0.08, 0.22, 0.42, 1], [0.94, 0.94, 1, 0.97, 0.97]);
  const springConfig = { stiffness: 65, damping: 24, mass: 0.9 };
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);
  const rotateX = useSpring(rawRotateX, springConfig);
  const rotateZ = useSpring(rawRotateZ, springConfig);
  const flipRotateY = useSpring(rawFlipRotateY, springConfig);
  const scale = useSpring(rawScale, springConfig);

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0 z-0 hidden lg:block">
      <div className="sticky top-[calc(50vh-245px)] mx-auto max-w-7xl">
        <Motion.div
          className="relative mx-auto h-[490px] w-[372px]"
          style={{
            x,
            y,
            rotateX,
            rotateZ,
            scale,
            transformPerspective: 1000,
            transformStyle: "preserve-3d",
          }}
        >
          <Motion.div className="relative h-full w-full rounded-[var(--radius-card)] shadow-2xl shadow-black/45" style={{ rotateY: flipRotateY, transformStyle: "preserve-3d" }}>
            <div className="card-face overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-surface)]">
              <img src={stickyVisual.images[0].src} alt="" className="h-full w-full object-cover grayscale-[12%]" />
            </div>

            <div className="card-face card-back flex flex-col justify-between rounded-[var(--radius-card)] border border-white/10 bg-[var(--color-surface)] p-8">
              <div>
                <span className="mb-4 inline-flex rounded-[var(--radius-pill)] bg-[var(--color-accent)] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-on-accent)]">
                  {stickyVisual.backTitle}
                </span>
                <p className="font-display text-3xl font-bold leading-tight text-white">{stickyVisual.backText}</p>
              </div>
              <ul className="grid gap-3 text-[var(--color-text-muted)]">
                {stickyVisual.backItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Motion.div>

          <WaveBadge label={hero.bubble} className="absolute -bottom-8 -left-7 h-28 w-28" />
        </Motion.div>
      </div>
    </div>
  );
}
