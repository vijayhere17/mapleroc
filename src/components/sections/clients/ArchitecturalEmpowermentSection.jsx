import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import Reveal from '../../common/Reveal';

export default function ArchitecturalEmpowermentSection() {
  const specs = [
    'Exact Shop-Drawing CAD Detailing',
    'Physical Finish Sample Boards',
    'Custom CNC Joinery Execution',
    'Clash-Free 3D Coordination',
  ];

  const mepChecks = [
    {
      title: 'In-House MEP & Structural Engineering',
      desc: 'Coordinated conduit, ducting, and power distribution drawings that eliminate clashes before physical installation.',
    },
    {
      title: 'Statutory NBC & Fire Code Compliance',
      desc: 'Full certified adherence to National Building Code (NBC) standards, smoke dampers, and fire egress routes.',
    },
    {
      title: 'Single Accountable Point of Contact',
      desc: 'Zero blame-shifting between architects, civil contractors, and furniture trades on site.',
    },
  ];

  return (
    <section id="architect-collaboration" className="py-16 sm:py-24 bg-[#FAFCF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Headline & Paragraph in ONE single line on desktop */}
        <Reveal className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60 text-[11px] font-semibold uppercase tracking-wider mb-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
            Architectural Collaboration
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#0D3B2E] font-medium tracking-tight whitespace-normal lg:whitespace-nowrap [text-wrap:nowrap]">
            Empowering architectural vision with{' '}
            <span className="italic text-emerald-700">turnkey execution.</span>
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base whitespace-normal lg:whitespace-nowrap [text-wrap:nowrap]">
            We partner with leading architectural studios, spatial planners, and PMCs across India to realize complex spatial designs without compromise.
          </p>
        </Reveal>

        {/* 2 Detailed Cards with Real HD Photos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 sm:mb-12">
          
          {/* Card 1: Design Fidelity with Photo */}
          <Reveal direction="left" className="group bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:border-emerald-400/60 flex flex-col justify-between">
            <div>
              {/* Photo */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                <img
                  src="/images/hd/image-10-office-cabin.jpg"
                  alt="Architectural detailing and bespoke joinery"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#0D3B2E]/90 text-gold text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                  Protecting Architectural Intent
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="font-serif text-2xl font-bold text-[#0D3B2E] mb-3">
                  Absolute Design Fidelity
                </h3>

                <p className="text-stone-600 text-xs sm:text-[14px] leading-relaxed mb-6">
                  We honor every millimeter of the architect&apos;s design intent. From custom curved glass radii to bespoke solid-veneer joinery details, our workshop fabricates exactly what was envisioned on paper without value-engineering compromises.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-2">
                  {specs.map((item) => (
                    <div
                      key={item}
                      className="p-3 rounded-xl bg-[#F8FAF9] border border-stone-200/70 text-xs font-semibold text-[#0D3B2E] flex items-center gap-2"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0">
              <a
                href="#contact"
                className="group/link inline-flex items-center justify-between w-full pt-4 border-t border-stone-100 text-xs sm:text-sm font-semibold text-[#0D3B2E] hover:text-emerald-700 transition-colors"
              >
                <span>Architectural Detailing Protocol</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-700 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>

          {/* Card 2: MEP & Spatial Engineering with Photo */}
          <Reveal direction="right" className="group bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:border-emerald-400/60 flex flex-col justify-between">
            <div>
              {/* Photo */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                <img
                  src="/images/hd/image-3-conference-hall.jpg"
                  alt="Spatial engineering, HVAC, and electrical MEP integration"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#0D3B2E]/90 text-gold text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                  PMC & Site Delivery
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="font-serif text-2xl font-bold text-[#0D3B2E] mb-3">
                  Spatial Engineering & MEP Integration
                </h3>

                <p className="text-stone-600 text-xs sm:text-[14px] leading-relaxed mb-6">
                  One integrated site engineering team bridges the gap between creative design and practical execution. We handle structural calculations, HVAC ducting routing, fire egress codes, and power load balancing seamlessly.
                </p>

                <div className="space-y-3 mb-2">
                  {mepChecks.map((item) => (
                    <div key={item.title} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-xs sm:text-[13px] font-semibold text-[#0D3B2E]">
                          {item.title}
                        </h5>
                        <p className="text-stone-500 text-[11px] sm:text-xs leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0">
              <a
                href="#contact"
                className="group/link inline-flex items-center justify-between w-full pt-4 border-t border-stone-100 text-xs sm:text-sm font-semibold text-[#0D3B2E] hover:text-emerald-700 transition-colors"
              >
                <span>PMC & Site Delivery Standards</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-700 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>

        </div>

        {/* Architect Quote Box */}
        <Reveal className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 lg:p-10 shadow-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block mb-2 flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              Architect Associate Testimonial
            </span>
            <p className="font-serif text-lg sm:text-xl lg:text-[22px] italic text-[#0D3B2E] leading-relaxed mb-4">
              &ldquo;MapleRoc transforms complex architectural drawings into physical reality with zero deviation in geometry or material integrity. Their turnkey transparency allows our studio to focus purely on pure spatial creation.&rdquo;
            </p>
            <p className="text-xs font-semibold text-stone-900">
              Principal Architect & Founder, <span className="text-stone-500 font-normal">Premier Architectural Studio, Ahmedabad & Mumbai</span>
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-stone-200/80 shrink-0 text-left lg:text-right">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">
              Associate Partnership
            </span>
            <p className="text-xs text-stone-600 font-medium">
              Collaborating across 40+ landmark projects over 18 years.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
