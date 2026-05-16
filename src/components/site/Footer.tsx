import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-foreground/5 px-6 md:px-12 pt-20 pb-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        <div className="md:col-span-5 space-y-6">
          <p className="font-display italic text-4xl tracking-tight">Aura &amp; Aisle</p>
          <p className="text-sm max-w-sm text-muted-foreground leading-relaxed text-pretty">
            An atelier of cinematic celebration design. Composed in Lahore.
            Practised across Pakistan and beyond.
          </p>
        </div>
        <div className="md:col-span-3 space-y-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Studio</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/portfolio" className="hover:text-champagne ease-cinematic transition-colors duration-500">Portfolio</Link></li>
            <li><Link to="/services" className="hover:text-champagne ease-cinematic transition-colors duration-500">Services</Link></li>
            <li><Link to="/about" className="hover:text-champagne ease-cinematic transition-colors duration-500">Atelier</Link></li>
            <li><Link to="/inquiry" className="hover:text-champagne ease-cinematic transition-colors duration-500">Inquire</Link></li>
          </ul>
        </div>
        <div className="md:col-span-4 space-y-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Connect</p>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:hello@auraandaisle.studio" className="hover:text-champagne ease-cinematic transition-colors duration-500">hello@auraandaisle.studio</a></li>
            <li><a href="https://instagram.com" className="hover:text-champagne ease-cinematic transition-colors duration-500" rel="noreferrer">Instagram</a></li>
            <li><a href="https://wa.me/923000000000" className="hover:text-champagne ease-cinematic transition-colors duration-500">WhatsApp · +92</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 border-t border-foreground/5">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          © {new Date().getFullYear()} Aura &amp; Aisle — Lahore · Karachi · Islamabad
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          By appointment only
        </p>
      </div>
    </footer>
  );
}