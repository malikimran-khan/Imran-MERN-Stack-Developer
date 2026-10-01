import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { DURATION, EASE_OUT, VIEWPORT } from "../../utils/motion";

const MotionImg = motion.img;

/**
 * Image reveal: a short fade with a subtle scale-up (plus an optional slide).
 *
 * Performance
 * - Lazy-loads and async-decodes by default, which keeps off-screen images out
 *   of the critical loading path. Pass `loading="eager"` + `fetchPriority="high"`
 *   for above-the-fold / LCP images.
 * - Animates only `transform` + `opacity`, so no layout is recalculated.
 *
 * The image needs a sized parent (fixed height / aspect ratio) so the scale
 * animation cannot introduce shift.
 */
export default function AnimatedImage({
  src,
  alt = "",
  className = "",
  direction,
  distance = 20,
  scale = 1.06,
  duration = DURATION.slow,
  delay = 0,
  loading = "lazy",
  decoding = "async",
  fetchPriority,
  once = true,
  amount,
  viewport,
  ...rest
}) {
  const prefersReduced = useReducedMotion();

  const slide =
    direction && !prefersReduced
      ? {
          up: { y: distance },
          down: { y: -distance },
          left: { x: -distance },
          right: { x: distance },
        }[direction]
      : null;

  const initial = {
    opacity: 0,
    scale: prefersReduced ? 1 : scale,
    ...(slide || {}),
  };

  return (
    <MotionImg
      src={src}
      alt={alt}
      loading={loading}
      decoding={decoding}
      {...(fetchPriority ? { fetchPriority } : null)}
      initial={initial}
      whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      viewport={viewport ?? { ...VIEWPORT, ...(amount != null ? { amount } : null), once }}
      transition={{ duration, delay, ease: EASE_OUT }}
      className={className}
      {...rest}
    />
  );
}