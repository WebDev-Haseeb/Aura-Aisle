import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef, useCallback } from "react";
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

const occasions = ["Wedding", "Intimate Ceremony", "Private Celebration", "Corporate Gala"];
const guests = ["Under 50", "50 – 120", "120 – 250", "250+"];
const timelines = ["Within 3 months", "3 – 6 months", "6 – 12 months", "12+ months"];

interface CustomSelectProps {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  placeholder: string;
}

function CustomSelect({ label, name, options, required, placeholder }: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) close();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <div ref={ref} className="relative">
      <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
        {label} {required ? "*" : ""}
      </span>
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between border-b border-foreground/20 pb-3 text-base focus:outline-none focus-visible:ring-1 focus-visible:ring-champagne/40 focus-visible:border-champagne ease-cinematic transition-colors duration-500"
      >
        <span className={value ? "text-charcoal" : "text-muted-foreground/50"}>
          {value || placeholder}
        </span>
        <svg
          className={`size-4 text-muted-foreground ease-cinematic transition-transform duration-500 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <input type="hidden" name={name} value={value} required={required} />
      <div
        className={`absolute left-0 right-0 top-full mt-2 z-20 bg-ivory border border-foreground/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden ease-cinematic transition-all duration-300 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => {
              setValue(opt);
              close();
            }}
            className={`w-full text-left px-4 py-3 text-sm ease-cinematic transition-colors duration-300 hover:bg-charcoal/5 ${
              value === opt ? "text-charcoal font-medium" : "text-muted-foreground"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function InquiryPage() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="pt-32 md:pt-40 pb-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <FadeUp className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-8 text-center">
          By appointment — limited commissions
        </FadeUp>
        <FadeUp delay={0.05}>
          <h1 className="font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.95] tracking-tight text-center">
            Begin your <span className="italic">story.</span>
          </h1>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground text-center max-w-md mx-auto mt-8 text-pretty">
            A few quiet details to open the conversation. We reply personally
            within two working days.
          </p>
        </FadeUp>

        <div className="mt-20 md:mt-24">
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
            <form onSubmit={onSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                <label className="block">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
                    Your name *
                  </span>
                  <input
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full bg-transparent border-b border-foreground/20 pb-3 text-base placeholder:text-muted-foreground/50 focus:outline-none focus:border-champagne ease-cinematic transition-colors duration-500"
                  />
                </label>

                <label className="block">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
                    Email *
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full bg-transparent border-b border-foreground/20 pb-3 text-base placeholder:text-muted-foreground/50 focus:outline-none focus:border-champagne ease-cinematic transition-colors duration-500"
                  />
                </label>

                <label className="block">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
                    Phone / WhatsApp
                  </span>
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="w-full bg-transparent border-b border-foreground/20 pb-3 text-base placeholder:text-muted-foreground/50 focus:outline-none focus:border-champagne ease-cinematic transition-colors duration-500"
                  />
                </label>

                <CustomSelect
                  label="Occasion"
                  name="occasion"
                  options={occasions}
                  required
                  placeholder="Select one"
                />

                <CustomSelect
                  label="Guests"
                  name="guests"
                  options={guests}
                  placeholder="Select range"
                />

                <CustomSelect
                  label="When"
                  name="timeline"
                  options={timelines}
                  placeholder="Select timeframe"
                />
              </div>

              <label className="block pt-4">
                <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
                  A short note
                </span>
                <textarea
                  name="note"
                  rows={4}
                  placeholder="A mood, a memory, a single word — anything that matters…"
                  className="w-full bg-transparent border-b border-foreground/20 pb-3 text-base resize-none placeholder:text-muted-foreground/50 focus:outline-none focus:border-champagne ease-cinematic transition-colors duration-500"
                />
              </label>

              <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-8">
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

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <a href="mailto:hello@auraandaisle.studio" className="hover:text-champagne ease-cinematic transition-colors duration-500">
                    Email
                  </a>
                  <span className="text-foreground/20">·</span>
                  <a href="https://wa.me/923334445555" className="hover:text-champagne ease-cinematic transition-colors duration-500">
                    WhatsApp
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}