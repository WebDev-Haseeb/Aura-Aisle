import { FadeUp } from "@/components/motion/FadeUp";
import { events } from "@/lib/events";
import detail from "@/assets/detail-candle.jpg";

export function InstagramStrip() {
  const tiles = [...events.map((e) => ({ src: e.image, alt: e.title })), { src: detail, alt: "Candle and rose detail" }];
  return (
    <section className="bg-ivory pt-24 pb-16">
      <div className="px-6 md:px-12 max-w-7xl mx-auto flex justify-between items-end mb-10">
        <FadeUp>
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
            Field notes — @auraandaisle
          </p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[10px] uppercase tracking-[0.3em] hover:text-champagne ease-cinematic transition-colors duration-500"
          >
            Follow →
          </a>
        </FadeUp>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-1 md:gap-2 px-1 md:px-2">
        {tiles.map((t, i) => (
          <FadeUp key={i} delay={i * 0.04}>
            <div className="aspect-square overflow-hidden group">
              <img
                src={t.src}
                alt={t.alt}
                loading="lazy"
                className="h-full w-full object-cover grayscale-[15%] ease-cinematic transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.04]"
              />
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}