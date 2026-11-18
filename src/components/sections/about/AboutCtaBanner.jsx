import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutCtaBanner() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-[#FAFCF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-[#0D3B2E] via-[#083327] to-[#041D16] text-white p-7 sm:p-12 lg:p-20 shadow-2xl border border-emerald-500/25">
          {/* Ambient Lighting & Logo Watermark */}
          <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute -right-16 -top-16 h-[440px] w-[440px] rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="absolute -left-16 -bottom-16 h-96 w-96 rounded-full bg-emerald-950/60 blur-3xl" />
            
            {/* Logo Watermark in Soft Elegant Shade */}
            <div className="absolute -right-8 sm:right-4 lg:right-12 top-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-[440px] md:h-[440px] lg:w-[520px] lg:h-[520px] select-none flex items-center justify-center">
              <img
                src="/images/mapleroc-logo-icon.png"
                alt=""
                className="w-full h-auto object-contain opacity-20 sm:opacity-25 mix-blend-screen filter brightness-110 drop-shadow-[0_0_80px_rgba(52,211,153,0.3)] -rotate-6 select-none"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D3B2E] via-[#0D3B2E]/75 to-transparent" />
          </div>

          <div className="relative max-w-3xl space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Schedule a Workplace Walkthrough
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]">
              Ready to Transform <span className="italic text-gold-gradient">Your Workplace?</span>
            </h2>

            <p className="text-sm sm:text-base text-emerald-50/80 leading-relaxed max-w-2xl">
              From conceptual architectural space planning to custom workstation joinery and final handover—MapleRoc takes total single-source accountability. Schedule your initial consultation today.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="mailto:contact@mapleroc.com"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-[#06221A] shadow-[0_10px_40px_-10px_rgba(52,211,153,0.7)] transition-all hover:bg-[#6ee7b7] hover:-translate-y-0.5"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="tel:+917359551555"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold backdrop-blur-md transition-all hover:bg-white/20 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>+91 73595 51555</span>
              </a>
            </div>

            <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {['Free Initial Space Assessment', 'Transparent Itemized BOQ', 'Zero-Obligation Feasibility'].map((t) => (
                <div key={t} className="flex items-center gap-2 text-xs sm:text-[13px] text-emerald-50/85">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

