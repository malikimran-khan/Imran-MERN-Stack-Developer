import { useEffect, useRef, useState } from "react";

export function useCountUp(target, duration = 1200) {
  const [value, setValue] = useState(0);
  const elementRef = useRef(null);
  const stateRef = useRef({ started: false, frame: null });

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return undefined;
    const state = stateRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || state.started) return;
        state.started = true;
        const start = performance.now();

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          setValue(Math.round(target * progress));
          if (progress < 1) state.frame = requestAnimationFrame(tick);
        };

        state.frame = requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (state.frame) cancelAnimationFrame(state.frame);
    };
  }, [duration, target]);

  return [value, elementRef];
}
