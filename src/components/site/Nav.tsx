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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navClasses = scrolled
    ? "bg-ivory/95 backdrop-blur-md text-charcoal shadow-[0_1px_0_rgba(0,0,0,0.05)] py-4 md:py-5"
    : "mix-blend-difference text-ivory py-5 md:py-6";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 flex justify-between items-center transition-all duration-500 ease-cinematic ${navClasses}`}
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

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative size-8 flex flex-col justify-center items-center gap-1.5"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={`block h-px w-5 bg-current ease-cinematic transition-all duration-500 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block h-px w-5 bg-current ease-cinematic transition-all duration-500 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-5 bg-current ease-cinematic transition-all duration-500 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center bg-ivory text-charcoal ease-cinematic transition-all duration-700 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-10">
          {links.map((l, idx) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMenuOpen(false)}
              className="font-display italic text-4xl tracking-tight hover:text-champagne ease-cinematic transition-colors duration-500"
              style={{
                transitionDelay: menuOpen ? `${idx * 60 + 200}ms` : "0ms",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.5s cubic-bezier(0.32, 0, 0.2, 1), transform 0.5s cubic-bezier(0.32, 0, 0.2, 1), color 0.5s cubic-bezier(0.32, 0, 0.2, 1)",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}