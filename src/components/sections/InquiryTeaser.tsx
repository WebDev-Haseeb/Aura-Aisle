import { Link } from "@tanstack/react-router";
import { FadeUp } from "@/components/motion/FadeUp";

export function InquiryTeaser() {
  return (
    <section className="px-6 md:px-12 py-32 md:py-48 bg-ivory">
      <FadeUp>
        <div className="max-w-6xl mx-auto bg-charcoal text-ivory px-8 md:px-20 py-24 md:py-36 rounded-sm">
          <div className="flex flex-col items-center text-center gap-12 max-w-3xl mx-auto">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-champagne">
              By appointment · limited commissions
            </p>
            <h2 className="font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] tracking-tight italic">
              Begin your story.
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-ivory/70 max-w-xl text-pretty">
              We accept a small number of commissions each year so that every
              evening is given absolute devotion. Tell us about yours.
            </p>
            <Link
              to="/inquiry"
              className="group inline-flex items-center gap-5 mt-4 pl-6 pr-3 py-3 rounded-full bg-ivory text-charcoal ease-cinematic transition-all duration-500 hover:bg-champagne"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
                Open the conversation
              </span>
              <span className="size-9 rounded-full bg-charcoal text-ivory flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.25">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}