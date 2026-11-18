import { Phone, Mail, MessageSquare } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#FAFCF9] pt-28 pb-8 sm:pt-36 sm:pb-10">
      {/* Subtle ambient lighting */}
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[400px] w-[400px] rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.2) 0%, rgba(13,59,46,0) 70%)' }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-800/20 bg-emerald-900/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-800">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
          Direct Executive Consultation
        </div>

        {/* Headline: Single line on desktop */}
        <h1 className="mt-2 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[34px] xl:text-[40px] 2xl:text-[44px] font-medium tracking-tight text-[#0D3B2E] leading-tight lg:leading-none whitespace-normal lg-force-nowrap">
          Let&apos;s discuss your{' '}
          <span className="italic text-emerald-700">
            next spatial fitout.
          </span>
        </h1>

        {/* Subtitle: Single line on desktop */}
        <p className="mt-3.5 text-sm sm:text-base lg:text-[15px] xl:text-[16px] 2xl:text-[17px] leading-relaxed text-stone-600 whitespace-normal lg-force-nowrap">
          Direct technical consultation with our principal directors. Transparent pricing, verified feasibility, and rapid on-site mobilization.
        </p>

        {/* Quick Direct Touchpoint Chips */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="tel:+917359551555"
            className="group inline-flex items-center gap-2 rounded-full bg-[#0D3B2E] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#08281E]"
          >
            <Phone className="h-3.5 w-3.5 text-gold" />
            <span>+91 73595 51555</span>
          </a>

          <a
            href="https://wa.me/917359551555"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50 px-5 py-2.5 text-xs sm:text-sm font-semibold text-emerald-800 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-100"
          >
            <MessageSquare className="h-3.5 w-3.5 text-emerald-600" />
            <span>WhatsApp Direct</span>
          </a>

          <a
            href="mailto:contact@mapleroc.com"
            className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-stone-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-600 hover:text-emerald-800"
          >
            <Mail className="h-3.5 w-3.5 text-stone-500" />
            <span>contact@mapleroc.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
