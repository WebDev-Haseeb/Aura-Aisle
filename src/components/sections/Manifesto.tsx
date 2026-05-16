import { FadeUp } from "@/components/motion/FadeUp";

export function Manifesto() {
  return (
    <section className="px-6 md:px-12 py-32 md:py-48 bg-ivory">
      <div className="max-w-4xl mx-auto">
        <FadeUp className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-12">
          — A note from the atelier
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="font-display text-[clamp(1.75rem,3.6vw,3.25rem)] leading-[1.15] tracking-tight text-balance">
            We do not <span className="italic">stage</span> events. We compose
            evenings — the way light folds across a marble floor, the way a
            room breathes before the doors open. A decade of practised
            restraint, every detail
            <span className="italic"> orchestrated </span>
            so the moment may feel inevitable.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}