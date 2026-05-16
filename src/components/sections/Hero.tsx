import { motion, useReducedMotion } from "motion/react";
import hero from "@/assets/hero-ballroom.jpg";

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-charcoal text-ivory">
      <motion.div
        initial={reduce ? false : { scale: 1.15, clipPath: "inset(8% 8% 8% 8%)" }}
        animate={{ scale: 1, clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: 2.4, ease: [0.32, 0, 0.2, 1] }}
        className="absolute inset-0"
        style={{ willChange: "transform, clip-path" }}
      >
        <img
          src={hero}
          alt="A candlelit ballroom dressed for a private celebration"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/10 to-charcoal/70" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col justify-between px-6 md:px-12 py-28 md:py-32">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.32, 0, 0.2, 1] }}
          className="font-mono text-[10px] uppercase tracking-[0.4em]"
        >
          Aura &amp; Aisle / Est. 2014
        </motion.p>

        <div className="space-y-10 max-w-5xl">
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.9, ease: [0.32, 0, 0.2, 1] }}
            className="font-display text-[clamp(2.75rem,9vw,8.5rem)] leading-[0.95] tracking-tight text-balance"
          >
            The hush before the
            <br />
            <span className="italic font-normal">first breath.</span>
          </motion.h1>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 1.4, ease: [0.32, 0, 0.2, 1] }}
            className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16"
          >
            <div className="h-px w-24 bg-champagne self-start md:self-auto md:mb-4" />
            <p className="max-w-md text-sm md:text-base leading-relaxed text-ivory/80 text-pretty">
              Cinematic weddings and private celebrations, composed for the
              world's most discerning hosts. Lahore · Karachi · Islamabad ·
              by invitation worldwide.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.8 }}
          className="flex justify-between items-end font-mono text-[10px] uppercase tracking-[0.3em] text-ivory/60"
        >
          <span>Scroll · the evening begins</span>
          <span className="hidden md:inline">Vol. I — A decade in candlelight</span>
        </motion.div>
      </div>
    </section>
  );
}