import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import CountUp from '../../common/CountUp';

const brandPartners = [
  {
    id: 'sos',
    name: 'SOS',
    subtitle: 'Spacewood Office Solutions',
    origin: 'Spacewood Office Solutions',
    tag: 'MODULAR WORKSPACE',
    specialty: 'Modern Modular Office Furniture & Workstations',
    desc: 'Modern modular office furniture, workstations, collaborative spaces, seating, and storage solutions.',
    src: '/images/hd/image-12-open-workstations.jpg',
    pills: ['Modular Workstations', 'Collaborative Hubs', 'Storage Systems'],
    linkText: 'Explore SOS Systems',
  },
  {
    id: 'haworth',
    name: 'HAWORTH',
    subtitle: 'Workplace furniture',
    origin: 'Workplace Furniture · Global',
    tag: 'INTERNATIONAL LEADER',
    specialty: 'Premium Ergonomic Seating & Architectural Walls',
    desc: 'Premium international workplace furniture and ergonomic office solutions.',
    src: '/images/hd/showroom-ergonomic-seating.jpg',
    pills: ['Ergonomic Seating', 'Architectural Walls', '12-Yr Global Warranty'],
    linkText: 'Explore Haworth Systems',
  },
  {
    id: 'geeken',
    name: 'Geeken',
    subtitle: 'Seating Collection',
    origin: 'Seating Collection · India',
    tag: 'SEATING COLLECTION',
    specialty: 'Institutional, Office & Modular Furniture Solutions',
    desc: 'Office furniture, institutional furniture, seating, and modular furniture solutions.',
    src: '/images/hd/showroom-collaboration-zone.jpg',
    pills: ['Institutional Furniture', 'Seating Collection', 'Modular Solutions'],
    linkText: 'Explore Geeken Systems',
  },
];

const metrics = [
  { value: 'Direct', label: 'OEM Supply Contracts', sub: 'Bypassing third-party broker markups' },
  { value: '3 Global', label: 'Manufacturing Giants', sub: 'SOS, Haworth & Geeken' },
  { value: 'Volume', label: 'Factory-Tier Pricing', sub: 'Guaranteed commercial enterprise economy' },
  { value: '10-Year+', label: 'Warranty Coverage', sub: 'Direct manufacturer warranty certificates' },
];

export default function PartnerHero() {
  return (
    <section className="relative overflow-hidden bg-[#F4F8F5] pt-28 pb-16 sm:pt-36 sm:pb-24">
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
            Curated Alliance of Global Manufacturers
          </div>

          <h1 className="mt-2 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[34px] xl:text-[40px] 2xl:text-[44px] font-medium tracking-tight text-[#0D3B2E] leading-tight lg:leading-none whitespace-normal lg-force-nowrap">
            Global manufacturing power,{' '}
            <span className="italic text-emerald-700">
              local spatial execution.
            </span>
          </h1>

          <p className="mt-3.5 text-sm sm:text-base lg:text-[15px] xl:text-[16px] 2xl:text-[17px] leading-relaxed text-stone-600 whitespace-normal lg-force-nowrap">
            Direct alliances with the world&apos;s most distinguished workplace brands—delivering authentic OEM warranties, factory volume pricing, and turnkey installation.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <a
              href="#brand-giants"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#0D3B2E] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#08281E] hover:shadow-xl"
            >
              <span>Explore Brand Alliances</span>
              <ArrowRight className="h-4 w-4 text-emerald-300 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-full border border-[#0D3B2E]/25 bg-white/90 px-7 py-3.5 text-sm font-semibold text-[#0D3B2E] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-600 hover:bg-white hover:shadow-md"
            >
              <span>Request OEM Specification Guide</span>
              <ArrowUpRight className="h-4 w-4 text-emerald-700" />
            </a>
          </div>
        </div>

        {/* 3 Clean, Simple Architectural Cards - Zero clutter on the photo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {brandPartners.map((brand) => (
            <div
              key={brand.id}
              className="group flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white shadow-sm transition-all duration-400 hover:-translate-y-1.5 hover:border-emerald-400/60 hover:shadow-xl"
            >
              {/* Photo Area - Completely clean, no green lines, no numbers, no active tags */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                <img
                  src={brand.src}
                  alt={brand.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute right-3.5 top-3.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-200 backdrop-blur-md">
                  {brand.origin.split('·')[0].trim()}
                </span>
              </div>

              {/* Content Area */}
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div>
                  <div className="flex items-baseline justify-between gap-2 pb-2 mb-2 border-b border-stone-100">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#0D3B2E] group-hover:text-emerald-700 transition-colors shrink-0">
                      {brand.name}
                    </h3>
                    <span className="text-xs sm:text-[13px] text-stone-500 font-medium truncate">
                      {brand.subtitle}
                    </span>
                  </div>

                  <div className="mt-1 text-xs font-semibold text-emerald-800">
                    {brand.specialty}
                  </div>

                  <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-stone-600 line-clamp-3">
                    {brand.desc}
                  </p>

                  {/* Brand Specs Pills */}
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {brand.pills.map((pill) => (
                      <span
                        key={pill}
                        className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-2.5 py-0.5 text-[10px] font-medium text-stone-700"
                      >
                        <CheckCircle2 className="h-2.5 w-2.5 text-emerald-600" />
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Footer */}
                <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-3 text-xs font-semibold text-emerald-800">
                  <a
                    href={`#${brand.id}`}
                    className="flex items-center gap-1 hover:text-emerald-600 transition-colors"
                  >
                    <span>{brand.linkText}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                  <ArrowUpRight className="h-4 w-4 text-emerald-700 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
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
            {metrics.map((s, idx) => (
              <div
                key={s.label}
                className={`group flex flex-col justify-center ${
                  idx === 0
                    ? 'sm:pr-6 lg:pr-8'
                    : idx === metrics.length - 1
                    ? 'pt-6 sm:pt-0 sm:pl-6 lg:pl-8'
                    : 'pt-6 sm:pt-0 sm:px-6 lg:px-8'
                }`}
              >
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-gold tracking-tight transition-transform duration-300 group-hover:scale-105">
                  <CountUp value={s.value} />
                </div>
                <div className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-100">
                  {s.label}
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
