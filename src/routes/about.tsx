import { createFileRoute } from "@tanstack/react-router";
import { FadeUp } from "@/components/motion/FadeUp";
import { RevealClip } from "@/components/motion/RevealClip";
import detail from "@/assets/detail-candle.jpg";
import hero from "@/assets/hero-ballroom.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Atelier — Aura & Aisle" },
      { name: "description", content: "A small studio for cinematic celebration design, founded in Lahore in 2014." },
      { property: "og:title", content: "Atelier — Aura & Aisle" },
      { property: "og:description", content: "A small studio for cinematic celebration design, founded in Lahore in 2014." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-8">
            The atelier
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] tracking-tight">
              A small studio for
              <br /><span className="italic">cinematic celebration.</span>
            </h1>
          </FadeUp>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-20 items-start">
          <RevealClip className="md:col-span-7">
            <img src={hero} alt="A candlelit ballroom" loading="lazy" className="w-full aspect-[4/3] object-cover" />
          </RevealClip>
          <div className="md:col-span-5 space-y-8 md:pt-12">
            <FadeUp>
              <p className="font-display text-2xl md:text-3xl italic leading-snug text-balance">
                Founded in Lahore in 2014, Aura &amp; Aisle is the work of a
                small studio of designers, florists, and producers.
              </p>
            </FadeUp>
            <FadeUp delay={0.05}>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground text-pretty">
                We accept only a handful of commissions each year. Each one is
                built from the ground — a year of careful planning, three
                rehearsals, an unbroken line of one principal designer from
                first conversation to the final goodbye.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground text-pretty">
                Our work has carried us across Pakistan and to ceremonies in
                the Hunza valley, Lake Como, Marrakech and the Aegean coast.
                Always quiet. Always considered. Always for the host who
                values atmosphere over spectacle.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="bg-charcoal text-ivory px-6 md:px-12 py-32 md:py-48">
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-12">
          <FadeUp className="md:col-span-4 font-mono text-[10px] uppercase tracking-[0.35em] text-ivory/50">
            Principles
          </FadeUp>
          <div className="md:col-span-8 space-y-12">
            {[
              ["Restraint is luxury.", "Every element earns its place. What is removed matters as much as what remains."],
              ["The room must breathe.", "We design for the silence between moments — the long pause before the doors open."],
              ["One hand throughout.", "The designer you meet is the designer who is with you on the day. Always."],
            ].map(([title, body], i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="space-y-3 border-t border-ivory/10 pt-8">
                  <h3 className="font-display text-3xl italic">{title}</h3>
                  <p className="text-sm text-ivory/70 leading-relaxed text-pretty max-w-md">{body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-32">
        <div className="max-w-3xl mx-auto">
          <RevealClip>
            <img src={detail} alt="A candle and a single rose" loading="lazy" className="w-full aspect-[4/5] object-cover" />
          </RevealClip>
        </div>
      </section>
    </>
  );
}