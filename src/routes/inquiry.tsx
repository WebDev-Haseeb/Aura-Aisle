import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FadeUp } from "@/components/motion/FadeUp";

export const Route = createFileRoute("/inquiry")({
  head: () => ({
    meta: [
      { title: "Begin Your Story — Aura & Aisle" },
      { name: "description", content: "Open a conversation with the atelier. We accept a small number of commissions each year." },
      { property: "og:title", content: "Begin Your Story — Aura & Aisle" },
      { property: "og:description", content: "Open a conversation with the atelier." },
      { property: "og:url", content: "/inquiry" },
    ],
    links: [{ rel: "canonical", href: "/inquiry" }],
  }),
  component: InquiryPage,
});

const fields = [
  { name: "name", label: "Your name", type: "text", required: true, full: false, autoComplete: "name" },
  { name: "partner", label: "Partner's name (optional)", type: "text", required: false, full: false, autoComplete: "name" },
  { name: "email", label: "Email", type: "email", required: true, full: false, autoComplete: "email" },
  { name: "phone", label: "Phone / WhatsApp", type: "tel", required: false, full: false, autoComplete: "tel" },
  { name: "eventType", label: "Event type", type: "text", required: true, full: false, placeholder: "Wedding, intimate ceremony, private celebration…" },
  { name: "date", label: "Anticipated date", type: "text", required: false, full: false, placeholder: "Month, year" },
  { name: "location", label: "Preferred location", type: "text", required: false, full: false, autoComplete: "address-level1" },
  { name: "guests", label: "Approximate guests", type: "text", required: false, full: false },
  { name: "budget", label: "Budget range", type: "text", required: false, full: true },
];

function InquiryPage() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="pt-32 md:pt-40 pb-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 md:gap-20">
        <div className="md:col-span-5 md:sticky md:top-32 md:self-start space-y-10">
          <FadeUp className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
            By appointment — limited commissions
          </FadeUp>
          <FadeUp delay={0.05}>
            <h1 className="font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.95] tracking-tight">
              Begin your <span className="italic">story.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-sm md:text-base leading-relaxed text-muted-foreground max-w-md text-pretty">
              Tell us a little about the occasion. We respond personally
              within two working days. There is no obligation; we are
              listening first.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="pt-6 border-t border-foreground/10 space-y-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Or write directly</p>
              <a href="mailto:hello@auraandaisle.studio" className="block text-base hover:text-champagne ease-cinematic transition-colors duration-500">
                hello@auraandaisle.studio
              </a>
              <a href="https://wa.me/923000000000" className="block text-base hover:text-champagne ease-cinematic transition-colors duration-500">
                +92 · WhatsApp
              </a>
            </div>
          </FadeUp>
        </div>

        <div className="md:col-span-7">
          {submitted ? (
            <FadeUp>
              <div className="border border-foreground/10 p-10 md:p-16 text-center space-y-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-champagne">Received</p>
                <h2 className="font-display text-4xl md:text-5xl italic leading-tight">
                  Thank you — your letter is with us.
                </h2>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto text-pretty">
                  A principal designer will reply personally within two
                  working days.
                </p>
              </div>
            </FadeUp>
          ) : (
            <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {fields.map((f) => (
                <label
                  key={f.name}
                  className={`block ${f.full ? "md:col-span-2" : ""}`}
                >
                  <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
                    {f.label}{f.required ? " *" : ""}
                  </span>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    required={f.required}
                    placeholder={f.placeholder}
                    autoComplete={f.autoComplete}
                    className="w-full bg-transparent border-b border-foreground/20 pb-3 text-base placeholder:text-muted-foreground/50 focus:outline-none focus:border-champagne ease-cinematic transition-colors duration-500"
                  />
                </label>
              ))}
              <label className="md:col-span-2 block">
                <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
                  Your vision *
                </span>
                <textarea
                  id="vision"
                  name="vision"
                  required
                  rows={5}
                  placeholder="Tell us anything — a mood, a memory, a single word…"
                  className="w-full bg-transparent border-b border-foreground/20 pb-3 text-base resize-none placeholder:text-muted-foreground/50 focus:outline-none focus:border-champagne ease-cinematic transition-colors duration-500"
                />
              </label>
              <div className="md:col-span-2 pt-6">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-5 pl-7 pr-3 py-3.5 rounded-full bg-charcoal text-ivory ease-cinematic transition-all duration-500 hover:bg-champagne hover:text-charcoal"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
                    Send the letter
                  </span>
                  <span className="size-9 rounded-full bg-ivory text-charcoal flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.25">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}