import { ArrowRight, ArrowUpRight, Phone, MapPin, User, Sparkles } from 'lucide-react';
import Reveal from '../../common/Reveal';

export default function PartnerCtaBanner() {
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300 backdrop-blur-md mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                Official Brand Partners
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-tight mb-4 leading-tight">
                Request Official Brand Catalogs &{' '}
                <span className="italic font-normal text-gold-gradient">Spatial Mockup.</span>
              </h2>

              <p className="text-emerald-50/80 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                Looking to specify SOS, Haworth, or Geeken for your new corporate fitout? Speak with our senior product consultants for line-item pricing and physical sample delivery.
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-[#04170F] shadow-[0_10px_35px_-10px_rgba(52,211,153,0.6)] transition-all duration-300 hover:bg-[#6ee7b7] hover:-translate-y-0.5"
                >
                  <span>Request Official Catalog & Pricing</span>
                  <ArrowRight className="w-4 h-4 text-[#04170F] transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-gold/50 hover:-translate-y-0.5"
                >
                  <span>Book In-Shell Spatial Mockup</span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Right Card: Direct Procurement Desk */}
            <div className="lg:col-span-5 bg-black/35 backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold block mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3 text-gold" />
                  Direct Procurement Desk
                </span>
                <a
                  href="tel:+917359551555"
                  className="text-2xl sm:text-3xl font-bold font-serif text-white hover:text-gold flex items-center gap-2.5 transition-colors"
                >
                  <Phone className="w-6 h-6 text-gold" />
                  <span>+91 73595 51555</span>
                </a>
              </div>

              <div className="pt-3 border-t border-white/15 space-y-3 text-xs text-emerald-100/80">
                <div className="flex items-center gap-2.5">
                  <User className="w-4 h-4 text-gold shrink-0" />
                  <span>
                    Founder: <strong className="text-white font-medium">Dharmendra Surelia</strong>
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    B-311, Alpha Arcades, MIPCO Chowkdi, G.I.D.C., Bharuch – 392015, Gujarat, India
                  </span>
                </div>
              </div>
            </div>

          </div>

        </Reveal>
      </div>
    </section>
  );
}
