import { Briefcase, ShieldCheck, Building2, Armchair, Clock, Award, CheckCircle2 } from 'lucide-react';
import Reveal from '../../common/Reveal';

export default function AccountabilityAbout() {
  return (
    <section className="bg-[#FAFCF9] py-16 sm:py-24 border-y border-stone-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <Reveal className="mx-auto mb-12 sm:mb-16 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-800/20 bg-emerald-900/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-800 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
            Our Advantage
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-medium leading-tight tracking-tight text-[#0D3B2E] whitespace-normal lg:whitespace-nowrap [text-wrap:nowrap]">
            One partner, accountable from first survey to{' '}
            <span className="italic text-emerald-700">final handover.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-2xl mx-auto">
            Single-contract governance delivering turnkey accuracy across corporate and institutional fitouts.
          </p>
        </Reveal>

        {/* High-End Asymmetric Bento Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* Left Column (5 Cols): Grand 25+ Legacy Hero Showcase */}
          <Reveal
            direction="left"
            className="lg:col-span-5 group relative isolate flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-[#06221A] via-[#0D3B2E] to-[#0A2E24] p-5 sm:p-8 lg:p-9 text-white shadow-xl border border-emerald-500/25"
          >
            <img
              src="/images/hd/image-11-reception-nhsrcl.jpg"
              alt="MapleRoc Delivered Architectural Reception Fitout"
              loading="lazy"
              className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25 transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#041B14] via-[#06221A]/85 to-[#06221A]/40" />

            {/* Top Badge */}
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-gold backdrop-blur-md border border-white/15 shadow-sm">
                  <Briefcase className="h-6 w-6 text-gold" />
                </span>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-950/80 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-300 backdrop-blur-md">
                  ★ Established 2000
                </span>
              </div>

              {/* Big Stat & Headline */}
              <div className="mt-8 sm:mt-12">
                <div className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-gold tracking-tight leading-none">
                  25+
                </div>
                <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                  Years of Industry Experience
                </h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-emerald-100/85">
                  From our Bharuch precision manufacturing facility to nationwide turnkey executions, we replace fragmented vendor handoffs with single-source contractual certainty.
                </p>
              </div>

              {/* Key Trust Checkmarks */}
              <div className="mt-6 space-y-2 text-xs text-emerald-100/90 border-t border-white/15 pt-5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>National High-Speed Rail & PSU Track Record</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>100% In-House OEM Joinery & Desking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Strict NBC Fire & ISO 9001 Safety Code</span>
                </div>
              </div>
            </div>

            {/* Bottom 3 Live Metrics Strip */}
            <div className="mt-8 pt-5 border-t border-white/15 grid grid-cols-3 gap-2 text-center bg-black/25 -mx-5 -mb-5 sm:-mx-8 sm:-mb-8 p-3.5 sm:p-5 backdrop-blur-xs">
              <div>
                <div className="font-serif text-xl sm:text-2xl font-bold text-gold">200+</div>
                <div className="text-[10px] uppercase tracking-wider text-emerald-200/80 mt-0.5">Fitouts</div>
              </div>
              <div className="border-x border-white/15">
                <div className="font-serif text-xl sm:text-2xl font-bold text-gold">60+</div>
                <div className="text-[10px] uppercase tracking-wider text-emerald-200/80 mt-0.5">Cities</div>
              </div>
              <div>
                <div className="font-serif text-xl sm:text-2xl font-bold text-gold">100%</div>
                <div className="text-[10px] uppercase tracking-wider text-emerald-200/80 mt-0.5">SLA Record</div>
              </div>
            </div>
          </Reveal>

          {/* Right Column (7 Cols): Dynamic 5-Advantage Matrix */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-5 sm:gap-6">
            
            {/* Top Half: 2 Wide Strategic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 flex-1">
              
              {/* Tile 1: Custom Furniture & Joinery */}
              <Reveal
                delay={100}
                className="group relative flex flex-col justify-between rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-600/50 hover:shadow-xl hover:bg-[#FAFCF9]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100/90 text-emerald-800 transition-colors duration-300 group-hover:bg-[#0D3B2E] group-hover:text-gold shadow-xs">
                      <Armchair className="h-5 w-5" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      01 • Factory
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-lg sm:text-xl font-bold text-[#0D3B2E]">
                    Custom Furniture & Joinery
                  </h3>
                  <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-stone-600">
                    Direct factory fabrication of executive suites, high-density modular workstations, and acoustic focus pods with zero intermediary markup.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    <span className="rounded-md bg-stone-100 px-2 py-0.5 text-[10px] font-medium text-stone-700">Executive Desking</span>
                    <span className="rounded-md bg-stone-100 px-2 py-0.5 text-[10px] font-medium text-stone-700">Acoustic Pods</span>
                    <span className="rounded-md bg-stone-100 px-2 py-0.5 text-[10px] font-medium text-stone-700">Modular Seating</span>
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-stone-100 flex items-center justify-between text-[11px] font-semibold text-emerald-800">
                  <span>Bharuch OEM Facility</span>
                  <span className="text-emerald-600 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Reveal>

              {/* Tile 2: Turnkey Design-Build Prowess */}
              <Reveal
                delay={200}
                className="group relative flex flex-col justify-between rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-600/50 hover:shadow-xl hover:bg-[#FAFCF9]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100/90 text-emerald-800 transition-colors duration-300 group-hover:bg-[#0D3B2E] group-hover:text-gold shadow-xs">
                      <Building2 className="h-5 w-5" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      02 • PMC & Build
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-lg sm:text-xl font-bold text-[#0D3B2E]">
                    Turnkey Design-Build Prowess
                  </h3>
                  <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-stone-600">
                    Seamless synthesis of 3D interior architecture, resident civil engineering, MEP electrical busways, ceiling acoustics and flooring.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    <span className="rounded-md bg-stone-100 px-2 py-0.5 text-[10px] font-medium text-stone-700">Civil Contracting</span>
                    <span className="rounded-md bg-stone-100 px-2 py-0.5 text-[10px] font-medium text-stone-700">MEP Engineering</span>
                    <span className="rounded-md bg-stone-100 px-2 py-0.5 text-[10px] font-medium text-stone-700">Acoustic Ceilings</span>
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-stone-100 flex items-center justify-between text-[11px] font-semibold text-emerald-800">
                  <span>Concept to Handover</span>
                  <span className="text-emerald-600 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Reveal>
            </div>

            {/* Bottom Half: 3 Focused Governance & Assurance Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 flex-1">
              
              {/* Tile 3: Certified Safety & Compliances - DIRECTLY UNDER CUSTOM FURNITURE */}
              <Reveal
                delay={300}
                className="group relative flex flex-col justify-between rounded-3xl border border-stone-200/90 bg-white p-5 sm:p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-600/50 hover:shadow-xl hover:bg-[#FAFCF9]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100/90 text-emerald-800 transition-colors duration-300 group-hover:bg-[#0D3B2E] group-hover:text-gold shadow-xs">
                      <Award className="h-5 w-5" />
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      03 • Safety
                    </span>
                  </div>

                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#0D3B2E] leading-snug">
                    Certified Safety & Compliances
                  </h3>
                  <p className="mt-1.5 text-xs text-stone-600 leading-relaxed">
                    NBC fire compliance, ISO certifications and green building standards across all sites.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[10px] font-semibold text-emerald-800">
                  <span>NBC & ISO Certified</span>
                  <span className="text-emerald-600 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Reveal>

              {/* Tile 4: Single-Point Accountability */}
              <Reveal
                delay={400}
                className="group relative flex flex-col justify-between rounded-3xl border border-stone-200/90 bg-white p-5 sm:p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-600/50 hover:shadow-xl hover:bg-[#FAFCF9]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100/90 text-emerald-800 transition-colors duration-300 group-hover:bg-[#0D3B2E] group-hover:text-gold shadow-xs">
                      <ShieldCheck className="h-5 w-5" />
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      04 • Governance
                    </span>
                  </div>

                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#0D3B2E] leading-snug">
                    Single-Point Accountability
                  </h3>
                  <p className="mt-1.5 text-xs text-stone-600 leading-relaxed">
                    1 dedicated Project Director handling all architects, sub-contractors and suppliers.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[10px] font-semibold text-emerald-800">
                  <span>Zero Vendor Deflection</span>
                  <span className="text-emerald-600 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Reveal>

              {/* Tile 5: Milestone-Locked Handover */}
              <Reveal
                delay={500}
                className="group relative flex flex-col justify-between rounded-3xl border border-stone-200/90 bg-white p-5 sm:p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-600/50 hover:shadow-xl hover:bg-[#FAFCF9]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100/90 text-emerald-800 transition-colors duration-300 group-hover:bg-[#0D3B2E] group-hover:text-gold shadow-xs">
                      <Clock className="h-5 w-5" />
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      05 • SLA Delivery
                    </span>
                  </div>

                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#0D3B2E] leading-snug">
                    Milestone-Locked Handover
                  </h3>
                  <p className="mt-1.5 text-xs text-stone-600 leading-relaxed">
                    Critical-path scheduling and transparent reporting ensuring promised delivery dates.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[10px] font-semibold text-emerald-800">
                  <span>100% On-Time SLA</span>
                  <span className="text-emerald-600 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Reveal>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
