import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { events } from "@/lib/events";
import { FadeUp } from "@/components/motion/FadeUp";

function Stage({ event, index, total }: { event: typeof events[number]; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], reduce ? [1, 1, 1] : [1.08, 1.02, 1.08]);

  return (
    <div
      ref={ref}
      className="relative h-[100svh] w-full sticky top-0 overflow-hidden"
      style={{ zIndex: index + 1 }}
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover"
          loading={index === 0 ? "eager" : "lazy"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-charcoal/30" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col justify-between px-6 md:px-12 py-20 md:py-24 text-ivory">
        <div className="flex justify-between items-start font-mono text-[10px] uppercase tracking-[0.3em] text-ivory/70">
          <span>Selected work — {event.index} / {String(total).padStart(2, "0")}</span>
          <span className="hidden md:inline">{event.season}</span>
        </div>
        <div className="max-w-2xl space-y-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-champagne md:hidden">
            {event.season}
          </div>
          <h3 className="font-display text-[clamp(2.25rem,6vw,5rem)] leading-[1] tracking-tight italic">
            {event.title}
          </h3>
          <p className="text-sm md:text-base text-ivory/80 leading-relaxed max-w-lg text-pretty">
            {event.blurb}
          </p>
          <div className="flex items-center gap-8 pt-2">
            <Link
              to="/portfolio/$slug"
              params={{ slug: event.slug }}
              className="group inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] ease-cinematic transition-colors duration-500 hover:text-champagne"
            >
              View the chapter
              <span className="block h-px w-10 bg-current ease-cinematic transition-all duration-500 group-hover:w-16" />
            </Link>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ivory/50 hidden md:inline">
              {event.location} · {event.guests}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturedEvents() {
  return (
    <section className="bg-charcoal text-ivory">
      <div className="px-6 md:px-12 pt-32 md:pt-48 pb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-ivory/10">
        <FadeUp>
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-ivory/50 mb-6">
            Vol. I — Selected work
          </p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight max-w-2xl">
            Five evenings, <span className="italic">composed.</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <Link
            to="/portfolio"
            className="font-mono text-[10px] uppercase tracking-[0.3em] hover:text-champagne ease-cinematic transition-colors duration-500"
          >
            View the full archive →
          </Link>
        </FadeUp>
      </div>

      <div className="relative">
        {events.map((e, i) => (
          <Stage key={e.slug} event={e} index={i} total={events.length} />
        ))}
      </div>
    </section>
  );
}