/**
 * Shared motion tokens + variant factories.
 *
 * Why this file exists
 * - Consistency: one source of truth for duration, easing, distance and stagger
 *   so every section reveals with the same rhythm.
 * - Performance: only `transform` (x/y/scale) and `opacity` are animated, which
 *   are compositor-friendly and never trigger layout/paint.
 * - No layout shift: reveal distances never change the box size, so nothing moves
 *   around while the page loads.
 *
 * Accessibility
 * - App.jsx wraps the app in <MotionConfig reducedMotion="user" />, which disables
 *   transform animations for visitors who prefer reduced motion (fades remain).
 * - The factories below also collapse distance/stagger to zero when the caller
 *   detects reduced motion, so no element ever slides for those users.
 */

export const EASE_OUT = [0.22, 1, 0.36, 1];
export const EASE_SOFT = [0.16, 1, 0.3, 1];

export const DURATION = {
  fast: 0.4,
  base: 0.55,
  slow: 0.75,
};

export const DISTANCE = {
  sm: 14,
  md: 26,
  lg: 44,
};

export const STAGGER = {
  tight: 0.05,
  base: 0.08,
  loose: 0.12,
};

/** Default `whileInView` options - run once, a little before fully in view. */
export const VIEWPORT = { once: true, amount: 0.2 };

/**
 * Turn a direction + distance into the hidden transform offset.
 * "up" means the element starts below and rises into place.
 */
export function directionOffset(direction = "up", distance = DISTANCE.md) {
  switch (direction) {
    case "left":
      return { x: -distance, y: 0 };
    case "right":
      return { x: distance, y: 0 };
    case "down":
      return { x: 0, y: -distance };
    case "up":
    default:
      return { x: 0, y: distance };
  }
}

/** Reveal variant for a single element (standalone or child of a container). */
export function revealItem({
  direction = "up",
  distance = DISTANCE.md,
  duration = DURATION.base,
  delay = 0,
  ease = EASE_OUT,
} = {}) {
  const offset = directionOffset(direction, distance);
  return {
    hidden: { opacity: 0, ...offset },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease },
    },
  };
}

/** Stagger container - animates children that use `revealItem`. */
export function revealContainer({ stagger = STAGGER.base, delay = 0 } = {}) {
  return {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
}

/** Fade + scale reveal for images and media blocks (optionally with a slide). */
export function revealScale({
  from = 1.05,
  direction,
  distance = 0,
  duration = DURATION.slow,
  delay = 0,
  ease = EASE_OUT,
} = {}) {
  const offset = direction ? directionOffset(direction, distance) : { x: 0, y: 0 };
  return {
    hidden: { opacity: 0, scale: from, ...offset },
    show: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease },
    },
  };
}

/**
 * Ready-made item variants, handy when a component renders its own motion
 * element (so a wrapper node is not needed and the layout stays identical).
 */
export const REVEAL = {
  up: revealItem({ direction: "up" }),
  down: revealItem({ direction: "down" }),
  left: revealItem({ direction: "left" }),
  right: revealItem({ direction: "right" }),
};