import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { DURATION, EASE_OUT, VIEWPORT } from "../../utils/motion";

const MotionImg = motion.img;

/**
 * Image with a subtle scroll parallax.
 *
 * The image fades in on view and drifts slowly as its section scrolls past,
 * giving depth without being distracting. The parent must have a fixed size and
 * `overflow-hidden` so the slightly scaled image always covers the frame.
 *
 * Uses a spring-smoothed motion value (no React re-renders on scroll) and falls
 * back to a plain fade for visitors who prefer reduced motion.
 */
export default function ParallaxImage({
  src,
  alt = "",
  className = "h-full w-full object-cover",
  range = 6,
  cover = 1.12,
  duration = DURATION.slow,
  delay = 0,
  loading = "lazy",
  decoding = "async",
  fetchPriority,
  ...rest
}) {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [`-${range}%`, `${range}%`]);
  const y = useSpring(rawY, { stiffness: 90, damping: 30, mass: 0.6 });

  return (
    <MotionImg
      ref={ref}
      src={src}
      alt={alt}
      loading={loading}
      decoding={decoding}
      {...(fetchPriority ? { fetchPriority } : null)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ ...VIEWPORT, amount: 0.1, once: true }}
      transition={{ duration, delay, ease: EASE_OUT }}
      style={prefersReduced ? undefined : { y, scale: cover, willChange: "transform" }}
      className={className}
      {...rest}
    />
  );
}