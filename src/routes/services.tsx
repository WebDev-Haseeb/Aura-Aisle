import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { InquiryTeaser } from "@/components/sections/InquiryTeaser";
import { FadeUp } from "@/components/motion/FadeUp";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Aura & Aisle" },
      { name: "description", content: "Full production, creative direction, destination weddings, and private celebrations." },
      { property: "og:title", content: "Services — Aura & Aisle" },
      { property: "og:description", content: "Full production, creative direction, destination weddings, and private celebrations." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="pt-40 pb-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-8">
            The practice
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] tracking-tight">
              An atelier for the
              <br />
              <span className="italic">whole evening.</span>
            </h1>
          </FadeUp>
        </div>
      </section>
      <Services />
      <Process />
      <InquiryTeaser />
    </>
  );
}