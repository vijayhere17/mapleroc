import { ArrowDown, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import CountUp from '../../common/CountUp';

const clientShowcases = [
  {
    id: 'gov-psu',
    tag: 'GOVERNMENT & PSUs',
    name: 'National High Speed Rail Corp (NHSRCL)',
    sector: 'Infrastructure & Public Sector',
    desc: 'High-security double-height reception, acoustic executive conference chambers, and regional corporate secretariat fitout.',
    src: '/images/hd/image-11-reception-nhsrcl.jpg',
    pills: ['High-Speed Rail Secretariat', '100% SLA Handover'],
    href: '#client-index',
  },
  {
    id: 'conglomerates',
    tag: 'CONGLOMERATES & INDUSTRY',
    name: 'AM/NS India & Reliance Industries',
    sector: 'Heavy Industry & Corporate HQ',
    desc: 'Landmark corporate facade, high-density modular workstation floors, executive boardrooms, and specialized control hubs.',
    src: '/images/hd/image-22-amns-india-facade.jpg',
    pills: ['Fortune 500 Standards', 'Turnkey MEP & Civil'],
    href: '#client-index',
  },
  {
    id: 'architects-healthcare',
    tag: 'HEALTHCARE & ARCHITECTURE',
    name: 'Vitrag Hospital & Pan-India PMC Studios',
    sector: 'Healthcare & Architectural Studios',
    desc: 'Cleanroom clinical partitions, monolithic stone reception, and exact shop-drawing execution protecting architectural intent.',
    src: '/images/hd/image-17-hospital-reception-vitrag.jpg',
    pills: ['Zero Snag Disputes', 'Absolute Design Fidelity'],
    href: '#architect-collaboration',
  },
];

const metrics = [
  { value: '60+', label: 'Enterprise Clients', sub: 'PSUs, multinationals & institutions' },
  { value: '25+', label: 'Years Execution Trust', sub: 'Unbroken commercial track record' },
  { value: '100%', label: 'Delivery SLA Record', sub: 'Strict contractual handover dates' },
  { value: 'Zero', label: 'Snag & Handover Disputes', sub: 'Single-source contract accountability' },
];

export default function ClientsHero() {
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
            Clients &amp; Associates · Turnkey Track Record
          </div>

          <h1 className="mt-2 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[34px] xl:text-[40px] 2xl:text-[44px] font-medium tracking-tight text-[#0D3B2E] leading-tight lg:leading-none whitespace-normal lg-force-nowrap">
            Trusted by government, industry &amp;{' '}
            <span className="italic text-emerald-700">
              visionary architects.
            </span>
          </h1>

          <p className="mt-3.5 text-sm sm:text-base lg:text-[15px] xl:text-[16px] 2xl:text-[17px] leading-relaxed text-stone-600 whitespace-normal lg-force-nowrap">
            Fortune 500 corporations, public sector undertakings, premier healthcare systems, and architectural consultancies — 25+ years of turnkey delivery.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <a
              href="#client-index"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#0D3B2E] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#08281E] hover:shadow-xl"
            >
              <span>Explore Client Roster</span>
              <ArrowDown className="h-4 w-4 text-emerald-300 transition-transform group-hover:translate-y-1" />
            </a>
            <a
              href="#architect-collaboration"
              className="inline-flex items-center gap-2.5 rounded-full border border-[#0D3B2E]/25 bg-white/90 px-7 py-3.5 text-sm font-semibold text-[#0D3B2E] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-600 hover:bg-white hover:shadow-md"
            >
              <span>Architect Partnership</span>
              <ArrowUpRight className="h-4 w-4 text-emerald-700" />
            </a>
          </div>
        </div>

        {/* 3 Clean Architectural Client Cards with Real Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {clientShowcases.map((client) => (
            <div
              key={client.id}
              className="group flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white shadow-sm transition-all duration-400 hover:-translate-y-1.5 hover:border-emerald-400/60 hover:shadow-xl"
            >
              {/* Photo Area */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                <img
                  src={client.src}
                  alt={client.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute right-3.5 top-3.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-200 backdrop-blur-md">
                  {client.tag.split(' ')[0]}
                </span>
              </div>

              {/* Content Area */}
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div>
                  <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-stone-100">
                    <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#0D3B2E] group-hover:text-emerald-700 transition-colors">
                      {client.name}
                    </h3>
                  </div>

                  <div className="text-xs font-semibold text-emerald-800">
                    {client.sector}
                  </div>

                  <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-stone-600 line-clamp-3">
                    {client.desc}
                  </p>

                  {/* Pills */}
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {client.pills.map((pill) => (
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

                {/* Action Link */}
                <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-3 text-xs font-semibold text-emerald-800">
                  <a
                    href={client.href}
                    className="flex items-center gap-1 hover:text-emerald-600 transition-colors"
                  >
                    <span>View Client Engagements</span>
                    <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
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
