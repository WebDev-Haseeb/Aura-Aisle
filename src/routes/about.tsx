import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { FadeUp } from "@/components/motion/FadeUp";
import { RevealClip } from "@/components/motion/RevealClip";
import detail from "@/assets/detail-candle.jpg";
import hero from "@/assets/hero-ballroom.jpg";
import hunza from "@/assets/event-hunza.jpg";
import seaside from "@/assets/event-seaside.jpg";

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

const stats = [
  { num: "10+", label: "Years of practice" },
  { num: "08", label: "Commissions per year" },
  { num: "04", label: "Continents reached" },
  { num: "01", label: "Principal designer" },
];

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 md:pb-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-8">
              The atelier
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.9] tracking-tight text-balance">
              A quiet studio
              <br />
              for <span className="italic">unrepeatable</span>
              <br />
              evenings.
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-12 pb-24 md:pb-32 border-b border-foreground/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((s, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="space-y-3">
                <p className="font-display italic text-5xl md:text-6xl tracking-tight text-charcoal">
                  {s.num}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Origin story */}
      <section className="px-6 md:px-12 py-32 md:py-48">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-20 items-start">
          <div className="md:col-span-5 space-y-8 md:pt-8">
            <FadeUp>
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                Origin
              </p>
            </FadeUp>
            <FadeUp delay={0.05}>
              <p className="font-display text-2xl md:text-3xl italic leading-snug text-balance">
                Founded in Lahore in 2014, we are a studio of four — one
                principal designer, two producers, and a master florist.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground text-pretty">
                We accept only eight commissions each year. Each is built from
                the ground — a year of planning, three rehearsals, and an
                unbroken line from first conversation to final goodbye.
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground text-pretty">
                Our work has carried us to the Hunza valley, Lake Como,
                Marrakech and the Aegean coast. Always quiet. Always
                considered. Always for those who value atmosphere over
                spectacle.
              </p>
            </FadeUp>
          </div>
          <RevealClip className="md:col-span-7" direction="right">
            <img src={hero} alt="A candlelit ballroom" loading="lazy" className="w-full aspect-[4/3] object-cover" />
          </RevealClip>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-charcoal text-ivory px-6 md:px-12 py-32 md:py-48">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="font-mono text-[10px] uppercase tracking-[0.35em] text-ivory/50 mb-20">
            Principles
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {[
              ["Restraint", "Every element earns its place. What is removed matters as much as what remains."],
              ["Silence", "We design for the pause between moments — the long breath before the doors open."],
              ["Continuity", "The designer you meet is the designer who is with you on the day. Always."],
            ].map(([title, body], i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="space-y-5 border-t border-ivory/10 pt-8">
                  <h3 className="font-display text-3xl italic">{title}</h3>
                  <p className="text-sm text-ivory/70 leading-relaxed text-pretty">{body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Atmosphere gallery */}
      <section className="px-6 md:px-12 py-32 md:py-48">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-16">
            The field
          </FadeUp>
          <div className="grid md:grid-cols-12 gap-4 md:gap-6">
            <RevealClip className="md:col-span-7">
              <img src={seaside} alt="Ivory tablescape by the sea" loading="lazy" className="w-full aspect-[4/3] object-cover" />
            </RevealClip>
            <RevealClip className="md:col-span-5 md:mt-24" direction="right">
              <img src={hunza} alt="Mountain ceremony at sunrise" loading="lazy" className="w-full aspect-[4/5] object-cover" />
            </RevealClip>
            <RevealClip className="md:col-span-5 md:col-start-2 md:-mt-32" direction="left">
              <img src={detail} alt="A candle and a single rose" loading="lazy" className="w-full aspect-[4/5] object-cover" />
            </RevealClip>
            <motion.div
              className="md:col-span-5 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <p className="font-display text-2xl md:text-3xl italic leading-snug text-balance max-w-sm text-center">
                "Every detail held its breath until the right moment."
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}