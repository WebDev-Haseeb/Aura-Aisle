export function WhatsAppPill() {
  return (
    <a
      href="https://wa.me/923000000000"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center justify-center size-[52px] rounded-full bg-charcoal text-ivory shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-foreground/10 ease-cinematic transition-all duration-500 hover:scale-105 hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]"
      aria-label="Begin a WhatsApp consultation"
    >
      <svg className="size-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.3a11.976 11.976 0 00-8.52-3.526C7.166.587 2.011 5.742 2.009 12.008c-.001 2.112.551 4.17 1.597 5.99L1.494 23.28l5.424-1.142a11.892 11.892 0 005.68 1.448h.004c6.62 0 12.006-5.386 12.008-12.009a11.957 11.957 0 00-3.523-8.522z" />
      </svg>
      <span className="absolute right-full mr-3 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.25em] text-charcoal bg-ivory/95 backdrop-blur-md px-3 py-2 rounded-sm opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 ease-cinematic transition-all duration-500 pointer-events-none shadow-[0_4px_12px_rgba(0,0,0,0.06)] ring-1 ring-foreground/10">
        WhatsApp
      </span>
    </a>
  );
}