import { ArrowRight, ArrowUpRight } from 'lucide-react';
import CountUp from '../../common/CountUp';

const disciplines = [
  {
    id: '01',
    tag: 'STRATEGY',
    title: 'Workplace Strategy',
    desc: 'Space density mapping, acoustic privacy zoning, and ergonomic systems engineered for team productivity.',
    src: '/images/hd/image-10-office-cabin.jpg',
    href: '#disciplines-grid',
  },
  {
    id: '02',
    tag: 'ARCHITECTURE',
    title: 'Interior Architecture',
    desc: 'Monumental reception spaces, vertical timber louvers, recessed profile lighting, and human-centric corporate design.',
    src: '/images/hd/image-18-clinic-lobby-reception.jpg',
    href: '#disciplines-grid',
  },
  {
    id: '03',
    tag: 'CONTRACTING',
    title: 'Turnkey Contracting & MEP',
    desc: 'Single-source site delivery covering civil works, electrical, HVAC, acoustic ceilings, and zero vendor runarounds.',
    src: '/images/hd/image-3-conference-hall.jpg',
    href: '#disciplines-grid',
  },
  {
    id: '04',
    tag: 'MANUFACTURING',
    title: 'Bespoke Joinery & Millwork',
    desc: 'In-house factory craftsmanship from our Bharuch workshop—solid veneer managerial desks, credenzas, and custom joinery.',
    src: '/images/hd/image-2-pantry-breakout.jpg',
    href: '#disciplines-grid',
  },
];

const stats = [
  { v: '25+', l: 'Years Execution Heritage', sub: 'Proven commercial delivery across India' },
  { v: '4', l: 'Core Disciplines', sub: 'Unified under one accountable contract' },
  { v: '3', l: 'Global Brand Partners', sub: 'Direct OEM factory-tier partnerships' },
  { v: '200+', l: 'Projects Delivered', sub: 'Government, enterprise & institutions' },
];

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#F4F8F5] pt-28 pb-16 sm:pt-36 sm:pb-20">
      {/* Subtle ambient lighting */}
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.2) 0%, rgba(13,59,46,0) 70%)' }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header: Headline & Paragraph in ONE single line on desktop */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-800/20 bg-emerald-900/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
            What We Do · Turnkey Capabilities
          </div>

          <h1 className="mt-2 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[34px] xl:text-[40px] 2xl:text-[44px] font-medium tracking-tight text-[#0D3B2E] leading-tight lg:leading-none whitespace-normal lg-force-nowrap">
            Spatial execution from{' '}
            <span className="italic text-emerald-700">
              concept to handover.
            </span>
          </h1>

          <p className="mt-3.5 text-sm sm:text-base lg:text-[15px] xl:text-[16px] 2xl:text-[17px] leading-relaxed text-stone-600 whitespace-normal lg-force-nowrap">
            Workplace strategy, bespoke joinery, MEP engineering, and turnkey site contracting—unified under one single accountable contract.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <a
              href="#disciplines-grid"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#0D3B2E] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#08281E] hover:shadow-xl"
            >
              <span>Explore All Disciplines</span>
              <ArrowRight className="h-4 w-4 text-emerald-300 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-full border border-[#0D3B2E]/25 bg-white/90 px-7 py-3.5 text-sm font-semibold text-[#0D3B2E] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-600 hover:bg-white hover:shadow-md"
            >
              <span>Request Space Feasibility</span>
              <ArrowUpRight className="h-4 w-4 text-emerald-700" />
            </a>
          </div>
        </div>

        {/* 4 Clean, Simple, Uncluttered Architectural Cards - Photo on top, clean text below, ZERO messy overlays */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          {disciplines.map((d) => (
            <a
              key={d.id}
              href={d.href}
              className="group flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white shadow-sm transition-all duration-400 hover:-translate-y-1.5 hover:border-emerald-400/60 hover:shadow-xl cursor-pointer"
            >
              {/* Photo Box - Clean, no text covering the photo */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-stone-100">
                <img
                  src={d.src}
                  alt={d.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 font-serif text-xs font-bold text-[#0D3B2E] shadow-sm">
                  {d.id}
                </span>
                <span className="rounded-full border border-white/20 bg-black/50 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-emerald-200 backdrop-blur-md absolute right-3 top-3">
                  {d.tag}
                </span>
              </div>

              {/* Clean White Content Area - Zero clutter, pure readability */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#0D3B2E] group-hover:text-emerald-700 transition-colors leading-snug">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-stone-500 line-clamp-2">
                    {d.desc}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-stone-100 pt-3 text-xs font-semibold text-emerald-800">
                  <span className="group-hover:text-emerald-600 transition-colors">Explore capability</span>
                  <ArrowUpRight className="h-4 w-4 text-emerald-700 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* 4 Bottom Metrics - Dedicated Luxury Container Box */}
        <div className="mt-14 sm:mt-16 relative isolate overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0D3B2E] via-[#083327] to-[#041D16] text-white p-7 sm:p-9 lg:p-10 shadow-2xl border border-emerald-500/25">
          {/* Subtle Ambient Glow */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-emerald-400/15 blur-3xl" />
            <div className="absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-emerald-950/60 blur-3xl" />
          </div>

          <div className="grid grid-cols-2 gap-6 sm:gap-0 lg:grid-cols-4 sm:divide-x divide-white/15">
            {stats.map((s, idx) => (
              <div
                key={s.l}
                className={`group flex flex-col justify-center ${
                  idx === 0
                    ? 'sm:pr-6 lg:pr-8'
                    : idx === stats.length - 1
                    ? 'pt-6 sm:pt-0 sm:pl-6 lg:pl-8'
                    : 'pt-6 sm:pt-0 sm:px-6 lg:px-8'
                }`}
              >
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-gold tracking-tight transition-transform duration-300 group-hover:scale-105">
                  <CountUp value={s.v} />
                </div>
                <div className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-100">
                  {s.l}
                </div>
                <div className="mt-0.5 text-[11px] text-emerald-200/65 font-medium leading-tight">
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
