import { ArrowDown, ArrowUpRight } from 'lucide-react';
import CountUp from '../../common/CountUp';

const insightShowcases = [
  {
    id: 'mep-governance',
    tag: 'TURNKEY & MEP',
    title: 'Resident MEP Superintendent Governance',
    subtitle: 'Critical-Path Schedule Compression',
    desc: 'How single-contract turnkey accountability and resident MEP superintendence compresses critical-path delivery by 35% in commercial campuses.',
    src: '/images/hd/image-3-conference-hall.jpg',
    readTime: '12 Min Read · Peer Reviewed',
    href: '#featured-insight',
  },
  {
    id: 'ergonomics',
    tag: 'ERGONOMICS & HEALTH',
    title: 'Active Lumbar Geometry in 24/7 Operations',
    subtitle: 'BIFMA X5.1 Posture Engineering',
    desc: 'Deconstructing pelvic support science, zero-pressure seat contours, and dynamic recline geometry to eliminate musculoskeletal fatigue in corporate teams.',
    src: '/images/hd/image-12-open-workstations.jpg',
    readTime: '8 Min Read · Field Research',
    href: '#publications-grid',
  },
  {
    id: 'procurement',
    tag: 'COMMERCIAL GOVERNANCE',
    title: 'The 17-Day Fixed-Price BOQ Freezing Protocol',
    subtitle: 'CapEx Risk Mitigation',
    desc: 'Why pre-contract 3D laser surveys and line-item locked pricing protect enterprise CFOs from post-award contractor variation claims.',
    src: '/images/hd/image-11-reception-nhsrcl.jpg',
    readTime: '10 Min Read · Contract Standard',
    href: '#publications-grid',
  },
];

const metrics = [
  { value: '40+', label: 'Whitepapers & Studies', sub: 'Peer-reviewed spatial research' },
  { value: '12', label: 'Industry Research Citations', sub: 'NBC, CPWD & BIFMA benchmarks' },
  { value: '25+', label: 'Years Field Observations', sub: 'Real site data across India' },
  { value: '100%', label: 'Turnkey Delivery SLA', sub: 'Zero mid-contract variations' },
];

export default function InsightsHero() {
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
            The MapleRoc Journal · Research, Ergonomics &amp; Governance
          </div>

          <h1 className="mt-2 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[32px] xl:text-[38px] 2xl:text-[42px] font-medium tracking-tight text-[#0D3B2E] leading-tight lg:leading-none whitespace-normal lg-force-nowrap">
            Thought leadership in{' '}
            <span className="italic text-emerald-700">
              corporate architecture &amp; execution.
            </span>
          </h1>

          <p className="mt-3.5 text-sm sm:text-base lg:text-[15px] xl:text-[16px] 2xl:text-[17px] leading-relaxed text-stone-600 whitespace-normal lg-force-nowrap">
            Field-tested research from our project directors and MEP engineers—written for leaders who commission landmark workplaces.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <a
              href="#publications-grid"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#0D3B2E] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#08281E] hover:shadow-xl"
            >
              <span>Explore Publications</span>
              <ArrowDown className="h-4 w-4 text-emerald-300 transition-transform group-hover:translate-y-1" />
            </a>
            <a
              href="#featured-insight"
              className="inline-flex items-center gap-2.5 rounded-full border border-[#0D3B2E]/25 bg-white/90 px-7 py-3.5 text-sm font-semibold text-[#0D3B2E] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-600 hover:bg-white hover:shadow-md"
            >
              <span>Featured Whitepaper</span>
              <ArrowUpRight className="h-4 w-4 text-emerald-700" />
            </a>
          </div>
        </div>

        {/* 3 Clean Research Cards with Real HD Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {insightShowcases.map((insight) => (
            <div
              key={insight.id}
              className="group flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white shadow-sm transition-all duration-400 hover:-translate-y-1.5 hover:border-emerald-400/60 hover:shadow-xl"
            >
              {/* Photo Area */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                <img
                  src={insight.src}
                  alt={insight.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute right-3.5 top-3.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-200 backdrop-blur-md">
                  {insight.tag}
                </span>
              </div>

              {/* Content Area */}
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div>
                  <div className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider mb-1">
                    {insight.subtitle}
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#0D3B2E] group-hover:text-emerald-700 transition-colors mb-2 leading-snug">
                    {insight.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] leading-relaxed text-stone-600 line-clamp-3 mb-4">
                    {insight.desc}
                  </p>
                </div>

                {/* Action Link & Read Time */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-medium text-stone-500">
                    {insight.readTime}
                  </span>
                  <a
                    href={insight.href}
                    className="inline-flex items-center gap-1 font-semibold text-emerald-800 hover:text-emerald-600 transition-colors"
                  >
                    <span>Read Analysis</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-emerald-700" />
                  </a>
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
