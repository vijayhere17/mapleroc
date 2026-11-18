import { ArrowRight, ArrowUpRight, User, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';
import Reveal from '../../common/Reveal';

export default function FeaturedInsightCard() {
  return (
    <section id="featured-insight" className="bg-[#FAFCF9] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Featured Dossier Card with Crystal-Clear Photo */}
        <Reveal direction="zoom" className="grid overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-[#06221A] text-white shadow-2xl lg:grid-cols-12 border border-emerald-500/20">
          
          {/* Left Photo Stage - 100% Crystal-Clear HD Image, Zero Opacity Dimming */}
          <div className="group relative min-h-[340px] sm:min-h-[420px] lg:col-span-5 overflow-hidden bg-stone-900">
            <img
              src="/images/hd/image-27-office-reception-fitout.jpg"
              alt="Resident MEP Superintendent Governance and Turnkey Execution"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="eager"
            />
            {/* Subtle Gradient only at the edges for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />

            {/* Top Floating Badge */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
              <span className="flex items-center gap-1.5 rounded-full bg-[#0D3B2E]/90 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold backdrop-blur-md shadow-md border border-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                Featured Whitepaper
              </span>
              <span className="rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-200 backdrop-blur-md">
                REF: MR-WP-2026
              </span>
            </div>

            {/* Bottom Overlay Glass Card */}
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <div className="rounded-2xl bg-black/70 backdrop-blur-md p-4 border border-white/20 shadow-xl">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-gold" />
                  <span className="text-[10px] font-bold text-gold uppercase tracking-wider">
                    Empirical Field Research
                  </span>
                </div>
                <p className="text-xs text-white/95 font-medium leading-relaxed">
                  Resident MEP Superintendence & Fast-Track Critical-Path Delivery.
                </p>
              </div>
            </div>
          </div>

          {/* Right Information & Content Stage */}
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:col-span-7 lg:p-12">
            
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-block rounded-full border border-emerald-400/40 bg-emerald-950/60 px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-300">
                  Commercial Fitout Project Management
                </span>
                <span className="text-[11px] text-emerald-100/60 flex items-center gap-1">
                  <Clock className="h-3 w-3 text-gold" />
                  12 Min Read
                </span>
              </div>

              <h2 className="mt-4 font-serif text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight text-white">
                Mitigating schedule slippage in multi-trade EPC fitouts:{' '}
                <span className="italic font-normal text-gold-gradient block sm:inline">
                  the Resident MEP Superintendent model.
                </span>
              </h2>

              {/* Author & Peer Review Row */}
              <div className="mt-5 flex items-center gap-3 pb-5 border-b border-white/10">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-gold border border-white/10 shrink-0">
                  <User className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Dharmendra Surelia & Senior Engineering Directorate
                  </p>
                  <p className="text-[11px] text-emerald-100/60">
                    Peer-Reviewed by PMC Directors · Published Q1 2026
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-emerald-50/80">
                Analysis of 45 multi-contractor fitouts reveals an average schedule overrun of 22% due to handoff friction between civil, electrical, HVAC, and furniture vendors. This paper explores how single-contract accountability and resident MEP superintendence compresses critical-path delivery by 35%.
              </p>

              {/* 3 Key Takeaways Pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  '35% Critical-Path Compression',
                  'Single-Contract MEP Governance',
                  'Zero Handover Snag Disputes',
                ].map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-emerald-200 border border-white/10"
                  >
                    <CheckCircle2 className="h-3 w-3 text-gold" />
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 pt-6 border-t border-white/10">
              <a
                href="#publications-grid"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-[#04170F] shadow-[0_10px_35px_-10px_rgba(52,211,153,0.6)] transition-all duration-300 hover:bg-[#6ee7b7] hover:-translate-y-0.5"
              >
                <span>Read Full White Paper</span>
                <ArrowRight className="h-4 w-4 text-[#04170F] transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#newsletter"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-gold/50 hover:-translate-y-0.5"
              >
                <span>Download PDF Report</span>
                <ArrowUpRight className="h-4 w-4 text-emerald-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

          </div>

        </Reveal>

      </div>
    </section>
  );
}
