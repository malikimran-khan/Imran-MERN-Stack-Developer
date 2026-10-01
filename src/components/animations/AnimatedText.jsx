import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { DISTANCE, DURATION, EASE_OUT, VIEWPORT } from "../../utils/motion";

const MotionSpan = motion.span;

function motionFor(as) {
  return (as && motion[as]) || motion.p;
}

/**
 * Word-by-word text reveal.
 *
 * Words appear progressively from the first word to the last, each sliding in
 * from the requested direction with a short fade. Only `transform` + `opacity`
 * are animated, so text never reflows or shifts surrounding content.
 *
 * Accessibility: the readable text is exposed once to assistive tech (via an
 * `sr-only` copy) while the animated word spans are hidden from the a11y tree,
 * preventing screen readers from fragmenting the sentence.
 */
export default function AnimatedText({
  text,
  as = "p",
  className = "",
  wordClassName = "",
  direction = "up",
  distance = DISTANCE.md,
  duration = DURATION.base,
  stagger = 0.045,
  delay = 0,
  inherit = false,
  once = true,
  amount,
  viewport,
}) {
  const prefersReduced = useReducedMotion();
  const Tag = motionFor(as);
  const words = String(text ?? "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  const offset = prefersReduced ? 0 : distance;
  const hiddenOffset = {
    up: { x: 0, y: offset },
    down: { x: 0, y: -offset },
    left: { x: -offset, y: 0 },
    right: { x: offset, y: 0 },
  }[direction] || { x: 0, y: offset };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: prefersReduced ? 0 : stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, ...hiddenOffset },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, ease: EASE_OUT },
    },
  };

  const animationProps = inherit
    ? { variants: containerVariants }
    : {
        variants: containerVariants,
        initial: "hidden",
        whileInView: "show",
        viewport:
          viewport ?? { ...VIEWPORT, ...(amount != null ? { amount } : null), once },
      };

  return (
    <Tag className={className} {...animationProps}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((segment, index) => (
          <React.Fragment key={`${segment}-${index}`}>
            <MotionSpan
              variants={wordVariants}
              className={`inline-block ${wordClassName}`.trim()}
            >
              {segment}
            </MotionSpan>
            {index < words.length - 1 ? " " : null}
          </React.Fragment>
        ))}
      </span>
    </Tag>
  );
}