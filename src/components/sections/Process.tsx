import { useState, useEffect, useRef, useCallback } from "react";
import { FadeUp } from "@/components/motion/FadeUp";

const steps = [
  { i: "01", title: "Discovery", body: "An unhurried conversation. We listen for the quiet preferences that shape the entire evening." },
  { i: "02", title: "Planning", body: "Precise logistics wrapped in grace — every supplier, contract, and timeline handled with invisible mastery." },
  { i: "03", title: "Design", body: "Florals, textures, light, scent. A complete visual language built for a single, irreplaceable night." },
  { i: "04", title: "Coordination", body: "Rehearsals, briefings, and a calm hand for every artisan involved in the production." },
  { i: "05", title: "Execution", body: "On the day, our team carries the entire weight so you remain wholly inside the moment." },
];

export function Process() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showHint, setShowHint] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    if (el.scrollLeft > 20) setShowHint(false);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  function scrollBy(direction: number) {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = window.innerWidth >= 768 ? 360 + 64 : 280 + 32;
    el.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  }

  return (
    <section className="bg-charcoal text-ivory py-32 md:py-48 overflow-hidden">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <FadeUp>
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-ivory/40 mb-6">
            The sequence
          </p>
          <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1] tracking-tight max-w-3xl">
            How we breathe life
            <br />
            <span className="italic">into a vision.</span>
          </h2>
        </FadeUp>
      </div>

      <div className="relative mt-20 md:mt-28">
        <button
          onClick={() => scrollBy(-1)}
          aria-label="Previous stage"
          className={`hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 items-center justify-center size-10 rounded-full bg-ivory/10 backdrop-blur-md ring-1 ring-ivory/20 text-ivory hover:bg-ivory/20 ease-cinematic transition-all duration-500 ${canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => scrollBy(1)}
          aria-label="Next stage"
          className={`hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 items-center justify-center size-10 rounded-full bg-ivory/10 backdrop-blur-md ring-1 ring-ivory/20 text-ivory hover:bg-ivory/20 ease-cinematic transition-all duration-500 ${canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory gap-8 md:gap-16 px-6 md:px-12 pb-12 no-scrollbar scroll-smooth">
          {steps.map((s, idx) => (
            <FadeUp key={s.i} delay={idx * 0.06} as="div">
              <article className={`snap-start min-w-[280px] md:min-w-[360px] max-w-[360px] space-y-8 pr-8 border-r border-ivory/10 last:border-r-0 pl-4 md:pl-8 ${idx === 0 ? "ml-2 md:ml-4" : ""}`}>
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
            </FadeUp>
          ))}
        </div>
      </div>

      <div className={`px-6 md:px-12 max-w-7xl mx-auto flex justify-end transition-opacity duration-700 ${showHint ? "opacity-100" : "opacity-0"}`}>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ivory/40 flex items-center gap-2">
          Drag to explore
          <svg className="size-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </span>
      </div>
    </section>
  );
}