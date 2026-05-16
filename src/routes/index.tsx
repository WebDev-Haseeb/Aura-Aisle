import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { FeaturedEvents } from "@/components/sections/FeaturedEvents";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Testimonial } from "@/components/sections/Testimonial";
import { InstagramStrip } from "@/components/sections/InstagramStrip";
import { InquiryTeaser } from "@/components/sections/InquiryTeaser";
import heroOg from "@/assets/hero-ballroom.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aura & Aisle — Cinematic Wedding & Event Design" },
      { name: "description", content: "A Pakistan-based atelier composing cinematic, emotionally immersive weddings and private celebrations. Lahore · Karachi · Islamabad." },
      { property: "og:title", content: "Aura & Aisle — Cinematic Wedding & Event Design" },
      { property: "og:description", content: "A decade of practised restraint. Cinematic weddings and private celebrations, composed by appointment." },
      { property: "og:image", content: heroOg },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <FeaturedEvents />
      <Services />
      <Process />
      <Testimonial />
      <InstagramStrip />
      <InquiryTeaser />
    </>
  );
}
