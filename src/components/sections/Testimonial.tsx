import { FadeUp } from "@/components/motion/FadeUp";

const quotes = [
  {
    body: "They do not plan events; they compose atmospheres. Our quietest thoughts became something we could walk inside of.",
    name: "Sana & Hamza",
    detail: "Walled City of Lahore, 2024",
  },
  {
    body: "Every detail held its breath until the right moment. We have never felt so entirely cared for.",
    name: "Amal & Rayan",
    detail: "Karachi, Spring 2024",
  },
];

export function Testimonial() {
  return (
    <section className="px-6 md:px-12 py-32 md:py-48 bg-ivory">
      <div className="max-w-3xl mx-auto text-center space-y-24">
        {quotes.map((q, i) => (
          <FadeUp key={i} delay={i * 0.1}>
            <div className="space-y-8">
              <div className="flex justify-center gap-1.5">
                <span className="size-1 rounded-full bg-champagne" />
                <span className="size-1 rounded-full bg-champagne" />
                <span className="size-1 rounded-full bg-champagne" />
              </div>
              <p className="font-display text-[clamp(1.5rem,3vw,2.5rem)] italic leading-[1.25] tracking-tight text-balance">
                &ldquo;{q.body}&rdquo;
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {q.name} — {q.detail}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}