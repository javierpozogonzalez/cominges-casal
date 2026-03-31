"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  className = "",
  suffix = "",
  prefix = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
    duration: duration * 1000,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(to);
    }
  }, [inView, motionValue, to]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Intl.NumberFormat("es-ES").format(
          Math.floor(latest)
        )}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix]);

  return <span ref={ref} className={className} />;
}
