import { createFileRoute, Link } from "@tanstack/react-router";
import { events } from "@/lib/events";
import { FadeUp } from "@/components/motion/FadeUp";
import { RevealClip } from "@/components/motion/RevealClip";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Aura & Aisle" },
      { name: "description", content: "Selected weddings and private celebrations composed by Aura & Aisle." },
      { property: "og:title", content: "Portfolio — Aura & Aisle" },
      { property: "og:description", content: "Selected weddings and private celebrations composed by Aura & Aisle." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="pt-32 md:pt-40 pb-24 px-6 md:px-12">
      <header className="max-w-7xl mx-auto mb-20 md:mb-32 grid md:grid-cols-12 gap-8 items-end">
        <FadeUp className="md:col-span-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-6">
            The archive — Vol. I
          </p>
          <h1 className="font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] tracking-tight">
            A decade in <span className="italic">candlelight.</span>
          </h1>
        </FadeUp>
        <FadeUp delay={0.1} className="md:col-span-4 text-sm text-muted-foreground leading-relaxed text-pretty">
          Each chapter is a separate composition — its own pacing, palette,
          and proportions. Click through for the full study.
        </FadeUp>
      </header>

      <div className="max-w-7xl mx-auto space-y-24 md:space-y-40">
        {events.map((e, i) => (
          <article key={e.slug} className={`grid md:grid-cols-12 gap-8 md:gap-16 items-end ${i % 2 ? "md:[direction:rtl]" : ""}`}>
            <RevealClip className={`md:col-span-8 ${i % 2 ? "md:[direction:ltr]" : ""}`}>
              <Link to="/portfolio/$slug" params={{ slug: e.slug }} className="block group overflow-hidden">
                <img
                  src={e.image}
                  alt={e.title}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover ease-cinematic transition-transform duration-1000 group-hover:scale-[1.03]"
                />
              </Link>
            </RevealClip>
            <FadeUp delay={0.1} className={`md:col-span-4 space-y-5 ${i % 2 ? "md:[direction:ltr]" : ""}`}>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {e.index} · {e.season} · {e.location}
              </div>
              <h2 className="font-display text-3xl md:text-4xl italic leading-tight tracking-tight">
                {e.title}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{e.blurb}</p>
              <Link
                to="/portfolio/$slug"
                params={{ slug: e.slug }}
                className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] hover:text-champagne ease-cinematic transition-colors duration-500"
              >
                The full chapter
                <span className="h-px w-10 bg-current" />
              </Link>
            </FadeUp>
          </article>
        ))}
      </div>
    </div>
  );
}