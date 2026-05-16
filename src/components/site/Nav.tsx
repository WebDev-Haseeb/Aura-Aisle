import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "Atelier" },
  { to: "/inquiry", label: "Inquiry" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 flex justify-between items-center transition-all duration-500 ease-cinematic ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-md text-charcoal shadow-[0_1px_0_rgba(0,0,0,0.05)] py-4 md:py-5"
          : "mix-blend-difference text-ivory py-5 md:py-6"
      }`}
    >
      <Link to="/" className="font-display italic text-xl md:text-2xl tracking-tight">
        Aura<span className="opacity-50"> &amp; </span>Aisle
      </Link>
      <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.28em] font-medium">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="relative group hover:opacity-60 ease-cinematic transition-opacity duration-500"
            activeProps={{ className: "opacity-60" }}
          >
            {l.label}
            <span className="absolute left-0 -bottom-1 h-px w-full bg-current origin-left scale-x-0 group-hover:scale-x-100 ease-cinematic transition-transform duration-500" />
          </Link>
        ))}
      </div>
      <Link
        to="/inquiry"
        className="md:hidden text-[10px] uppercase tracking-[0.25em]"
      >
        Inquire
      </Link>
    </nav>
  );
}