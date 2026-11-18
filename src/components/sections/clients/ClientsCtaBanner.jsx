import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Reveal from '../../common/Reveal';

export default function ClientsCtaBanner() {
  return (
    <section className="py-16 sm:py-20 bg-[#FAFCF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal
          direction="zoom"
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0D3B2E] via-[#083327] to-[#041D16] p-8 sm:p-12 lg:p-16 text-white shadow-2xl border border-emerald-500/25"
        >
          {/* Subtle ambient lighting */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-emerald-950/60 blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300 backdrop-blur-md mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              Start A Collaboration
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-tight mb-4 leading-tight">
              Have an Upcoming Architectural or{' '}
              <span className="italic font-normal text-gold-gradient">Enterprise Commission?</span>
            </h2>

            {/* Description */}
            <p className="text-emerald-50/80 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              Whether you are a facility head planning a 50,000 sq.ft. corporate relocation or a principal architect seeking a reliable execution partner, our senior directors are ready to discuss feasibility and budgets.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-[#04170F] shadow-[0_10px_35px_-10px_rgba(52,211,153,0.6)] transition-all duration-300 hover:bg-[#6ee7b7] hover:-translate-y-0.5"
              >
                <span>Initiate Collaboration Discussion</span>
                <ArrowRight className="w-4 h-4 text-[#04170F] transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-gold/50 hover:-translate-y-0.5"
              >
                <span>Download Capability Deck</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Bottom 2 Checks */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/15">
              <div className="flex items-center gap-2 text-xs sm:text-[13px] text-emerald-100/80 font-medium">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>Confidential NDA Protected Dialogue</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-[13px] text-emerald-100/80 font-medium">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>Fixed Price Feasibility within 48 Hours</span>
              </div>
            </div>

          </div>

        </Reveal>
      </div>
    </section>
  );
}
