import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
};

const initials = {
  left: { clipPath: "inset(0 100% 0 0)" },
  right: { clipPath: "inset(0 0 0 100%)" },
  up: { clipPath: "inset(100% 0 0 0)" },
  down: { clipPath: "inset(0 0 100% 0)" },
};

export function RevealClip({ children, delay = 0, className, direction = "left" }: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : initials[direction]}
      whileInView={{ clipPath: "inset(0 0 0 0)" }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ duration: 1.6, delay, ease: [0.32, 0, 0.2, 1] }}
      className={className}
      style={{ willChange: "clip-path" }}
    >
      {children}
    </motion.div>
  );
}