import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  DISTANCE,
  DURATION,
  STAGGER,
  VIEWPORT,
  revealContainer,
  revealItem,
} from "../../utils/motion";

function motionFor(as) {
  return (as && motion[as]) || motion.div;
}

/**
 * Scroll/view-based reveal wrapper.
 *
 *   // standalone element
 *   <Reveal direction="left">...</Reveal>
 *
 *   // staggered group (children pass `inherit`)
 *   <Reveal group stagger={0.08} className="grid ...">
 *     <Reveal as="article" inherit direction="up">...</Reveal>
 *   </Reveal>
 *
 * `as` lets the reveal *be* the layout element (e.g. as="article" inside a grid)
 * so no extra DOM node is added and the existing layout is preserved.
 * Animations run once per element (`once`), so scrolling back never re-triggers
 * them and no extra React renders happen.
 */
export default function Reveal({
  as = "div",
  children,
  direction = "up",
  distance = DISTANCE.md,
  duration = DURATION.base,
  delay = 0,
  group = false,
  stagger = STAGGER.base,
  inherit = false,
  once = true,
  amount,
  viewport,
  variants: variantsOverride,
  className,
  style,
  ...rest
}) {
  const prefersReduced = useReducedMotion();
  const Tag = motionFor(as);

  const variants =
    variantsOverride ??
    (group
      ? revealContainer({ stagger: prefersReduced ? 0 : stagger, delay })
      : revealItem({
          direction,
          distance: prefersReduced ? 0 : distance,
          duration,
          delay,
        }));

  const animationProps = inherit
    ? { variants }
    : {
        variants,
        initial: "hidden",
        whileInView: "show",
        viewport:
          viewport ?? { ...VIEWPORT, ...(amount != null ? { amount } : null), once },
      };

  return (
    <Tag className={className} style={style} {...animationProps} {...rest}>
      {children}
    </Tag>
  );
}