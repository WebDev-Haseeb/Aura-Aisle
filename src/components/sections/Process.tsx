import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";

const steps = [
  { i: "01", title: "Discovery", body: "An unhurried conversation. We listen for the quiet preferences that shape the entire evening." },
  { i: "02", title: "Planning", body: "Precise logistics wrapped in grace — every supplier, contract, and timeline handled with invisible mastery." },
  { i: "03", title: "Design", body: "Florals, textures, light, scent. A complete visual language built for a single, irreplaceable night." },
  { i: "04", title: "Coordination", body: "Rehearsals, briefings, and a calm hand for every artisan involved in the production." },
  { i: "05", title: "Execution", body: "On the day, our team carries the entire weight so you remain wholly inside the moment." },
];

const CARD_WIDTH_PERCENT = 100 / 3;
const VISIBLE_COUNT = 3;

export function Process() {
  const [activeIndex, setActiveIndex] = useState(0);
  const desktopRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(desktopRef, { once: true, margin: "-10%" });

  const maxIndex = steps.length - VISIBLE_COUNT;
  const canGoLeft = activeIndex > 0;
  const canGoRight = activeIndex < maxIndex;

  const cardContent = (s: typeof steps[number], idx: number, isDesktop: boolean) => (
    <article className="space-y-8 pr-0 md:pr-8 md:border-r md:border-ivory/10 last:md:border-r-0 h-full">
      <div className="flex items-baseline gap-4">
        <span className="font-display italic text-7xl md:text-8xl text-champagne/40 leading-none">
          {s.i}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ivory/50">
          Stage
        </span>
      </div>
      <h4 className="font-display text-3xl italic">{s.title}</h4>
      <p className="text-sm leading-relaxed text-ivory/70 text-pretty">
        {s.body}
      </p>
    </article>
  );

  return (
    <section className="bg-charcoal text-ivory py-32 md:py-48">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: [0.32, 0, 0.2, 1] }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-ivory/40 mb-6">
            The sequence
          </p>
          <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1] tracking-tight max-w-3xl">
            How we breathe life
            <br />
            <span className="italic">into a vision.</span>
          </h2>
        </motion.div>
      </div>

      {/* Desktop carousel */}
      <div className="hidden md:block relative mt-20 md:mt-28 max-w-7xl mx-auto px-12">
        <button
          onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
          aria-label="Previous stage"
          className={`absolute left-5 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center size-10 rounded-full bg-ivory/10 backdrop-blur-md ring-1 ring-ivory/20 text-ivory hover:bg-ivory/20 ease-cinematic transition-all duration-500 ${canGoLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => setActiveIndex((i) => Math.min(maxIndex, i + 1))}
          aria-label="Next stage"
          className={`absolute right-5 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center size-10 rounded-full bg-ivory/10 backdrop-blur-md ring-1 ring-ivory/20 text-ivory hover:bg-ivory/20 ease-cinematic transition-all duration-500 ${canGoRight ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div ref={desktopRef} className="overflow-hidden mx-6">
          <motion.div
            className="flex"
            animate={{ x: `-${activeIndex * CARD_WIDTH_PERCENT}%` }}
            transition={{ duration: 0.7, ease: [0.32, 0, 0.2, 1] }}
          >
            {steps.map((s, idx) => (
              <motion.div
                key={s.i}
                className="w-1/3 flex-shrink-0 px-6"
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.32, 0, 0.2, 1] }}
              >
                {cardContent(s, idx, true)}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile vertical stack */}
      <div className="md:hidden px-6 mt-16 space-y-12">
        {steps.map((s, idx) => (
          <motion.div
            key={s.i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.32, 0, 0.2, 1] }}
          >
            <div className="border-l border-ivory/20 pl-6">
              {cardContent(s, idx, false)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}