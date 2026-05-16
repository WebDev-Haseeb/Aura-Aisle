import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getEvent, events } from "@/lib/events";
import { FadeUp } from "@/components/motion/FadeUp";
import { RevealClip } from "@/components/motion/RevealClip";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const event = getEvent(params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.event.title} — Aura & Aisle` },
          { name: "description", content: loaderData.event.blurb },
          { property: "og:title", content: `${loaderData.event.title} — Aura & Aisle` },
          { property: "og:description", content: loaderData.event.blurb },
          { property: "og:image", content: loaderData.event.image },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `/portfolio/${loaderData.event.slug}` },
        ]
      : [],
    links: loaderData ? [{ rel: "canonical", href: `/portfolio/${loaderData.event.slug}` }] : [],
  }),
  component: EventPage,
  notFoundComponent: () => (
    <div className="pt-40 px-6 text-center">
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">404</p>
      <h1 className="font-display text-5xl italic mt-4">Chapter not found</h1>
      <Link to="/portfolio" className="inline-block mt-8 font-mono text-[10px] uppercase tracking-[0.3em] hover:text-champagne">Return to portfolio</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="pt-40 px-6 text-center">
      <p className="font-display text-3xl italic">{error.message}</p>
    </div>
  ),
});

function EventPage() {
  const { event } = Route.useLoaderData();
  const idx = events.findIndex((e) => e.slug === event.slug);
  const next = events[(idx + 1) % events.length];

  return (
    <article>
      <section className="relative h-[90svh] w-full overflow-hidden bg-charcoal">
        <RevealClip className="absolute inset-0">
          <img src={event.image} alt={event.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-charcoal/30" />
        </RevealClip>
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-24 text-ivory">
          <FadeUp className="font-mono text-[10px] uppercase tracking-[0.3em] text-ivory/70 mb-6">
            {event.index} · {event.season} · {event.location} · {event.guests}
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-display text-[clamp(2.75rem,9vw,8rem)] italic leading-[0.95] tracking-tight">
              {event.title}
            </h1>
          </FadeUp>
        </div>
      </section>

      <section className="px-6 md:px-12 py-32 md:py-48">
        <div className="max-w-3xl mx-auto space-y-12">
          <FadeUp>
            <p className="font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.2] italic tracking-tight text-balance">
              {event.blurb}
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground text-pretty">
              {event.narrative}
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-4 md:gap-6">
          <RevealClip className="md:col-span-8 md:col-start-3">
            <img src={event.image} alt="" loading="lazy" className="w-full aspect-[16/9] object-cover" />
          </RevealClip>
          <RevealClip className="md:col-span-5 md:col-start-2" direction="right">
            <img src={event.image} alt="" loading="lazy" className="w-full aspect-[4/5] object-cover" />
          </RevealClip>
          <RevealClip className="md:col-span-5 mt-12 md:mt-24" direction="left">
            <img src={event.image} alt="" loading="lazy" className="w-full aspect-[4/5] object-cover" />
          </RevealClip>
        </div>
      </section>

      <section className="px-6 md:px-12 py-24 border-t border-foreground/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <Link to="/portfolio" className="font-mono text-[10px] uppercase tracking-[0.3em] hover:text-champagne ease-cinematic transition-colors duration-500">
            ← All chapters
          </Link>
          <Link
            to="/portfolio/$slug"
            params={{ slug: next.slug }}
            className="group text-right"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
              Next chapter
            </p>
            <p className="font-display text-3xl md:text-4xl italic group-hover:text-champagne ease-cinematic transition-colors duration-500">
              {next.title} →
            </p>
          </Link>
        </div>
      </section>
    </article>
  );
}