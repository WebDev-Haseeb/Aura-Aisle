import { FadeUp } from "@/components/motion/FadeUp";
import { RevealClip } from "@/components/motion/RevealClip";
import detail from "@/assets/detail-candle.jpg";

const services = [
  { i: "01", title: "Full Production", body: "Comprehensive multi-day weddings, from venue scouting to the final departure car." },
  { i: "02", title: "Creative Direction", body: "The visual language, sensory journey, and spatial choreography of the evening." },
  { i: "03", title: "Decor & Florals", body: "Architectural floral installations, custom furniture, bespoke tablescapes." },
  { i: "04", title: "Destination Events", body: "International production with on-the-ground craftsmen wherever the day requires." },
  { i: "05", title: "Private Celebrations", body: "Intimate dinners, anniversaries, and milestones built with the same devotion." },
  { i: "06", title: "Corporate Galas", body: "Considered brand occasions for houses that prize atmosphere over spectacle." },
];

export function Services() {
  return (
    <section className="px-6 md:px-12 py-32 md:py-48 bg-ivory">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-20">
        <div className="md:col-span-5 md:sticky md:top-32 md:self-start space-y-10">
          <FadeUp>
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-6">
              The practice
            </p>
            <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1] tracking-tight">
              An atelier of
              <br />
              <span className="italic">composed celebration.</span>
            </h2>
          </FadeUp>
          <RevealClip className="overflow-hidden">
            <img
              src={detail}
              alt="A single ivory taper and white garden rose on linen"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover"
            />
          </RevealClip>
        </div>
        <ol className="md:col-span-7 divide-y divide-foreground/10 border-y border-foreground/10">
          {services.map((s, idx) => (
            <FadeUp key={s.i} delay={idx * 0.05} as="div">
              <li className="group grid grid-cols-12 gap-6 py-10 md:py-12 items-baseline ease-cinematic transition-colors duration-500 hover:bg-foreground/[0.015] -mx-4 px-4">
                <span className="col-span-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground pt-2">
                  {s.i}
                </span>
                <div className="col-span-10 md:col-span-7 font-display text-2xl md:text-3xl italic leading-tight tracking-tight">
                  {s.title}
                </div>
                <p className="col-start-3 md:col-start-auto col-span-10 md:col-span-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {s.body}
                </p>
              </li>
            </FadeUp>
          ))}
        </ol>
      </div>
    </section>
  );
}