import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import CountUp from '../../common/CountUp';

const SLIDE_MS = 6000;

const projectSlides = [
  {
    id: 'nhsrcl',
    num: '01',
    title: 'NHSRCL High-Speed Rail Secretariat',
    category: 'Institutional Turnkey',
    location: 'Vadodara & Ahmedabad, Gujarat',
    scale: '4,500 Sq.Ft · Landmark Fitout',
    src: '/images/hd/image-11-reception-nhsrcl.jpg',
    tagline: 'High-speed rail corporate secretariat featuring double-height acoustic reception and executive board suites.',
  },
  {
    id: 'boardroom',
    num: '02',
    title: 'Executive Boardroom & Leadership Suite',
    category: 'Corporate Headquarters',
    location: 'Mumbai Corporate Hub',
    scale: '18,500 Sq.Ft · Full MEP & Civil',
    src: '/images/hd/image-3-conference-hall.jpg',
    tagline: 'Precision motorized AV conference tables, acoustic walnut paneling, and calibrated multi-zone lighting.',
  },
  {
    id: 'campus',
    num: '03',
    title: 'Monolithic Institutional Campus',
    category: 'Institutional Architecture',
    location: 'Gujarat, India',
    scale: '120,000 Sq.Ft · Civil & Interiors',
    src: '/images/hd/image-23-radial-campus-stupa.jpg',
    tagline: 'Monumental architectural buildout blending structural civil engineering, stone masonry, and landscaped plazas.',
  },
  {
    id: 'lounge',
    num: '04',
    title: 'Contemporary Leadership Lounge',
    category: 'Executive Hospitality',
    location: 'Bharuch Executive Center',
    scale: 'Bespoke Joinery & Millwork',
    src: '/images/hd/image-14-luxury-lounge-2.jpg',
    tagline: 'In-house factory craftsmanship, acoustic timber baffle ceiling, and custom ergonomic modular seating.',
  },
];

const metrics = [
  { value: '200+', label: 'Delivered Spaces' },
  { value: '4.8M+', label: 'Sq. Ft. Fitted Out' },
  { value: '100%', label: 'On-Time Handover SLA' },
  { value: 'Zero', label: 'Mid-Contract Escalations' },
];

export default function ProjectsHero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % projectSlides.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, [active]);

  const currentSlide = projectSlides[active];

  return (
    <section className="relative isolate flex min-h-[96svh] flex-col justify-between overflow-hidden bg-[#04170F] text-white">
      {/* Background Slideshow with Smooth Cross-Fade */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {projectSlides.map((slide, i) => (
          <img
            key={slide.id}
            src={slide.src}
            alt={slide.title}
            aria-hidden="true"
            loading={i === 0 ? 'eager' : 'lazy'}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-in-out ${
              i === active
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105 pointer-events-none'
            }`}
          />
        ))}

        {/* Cinematic Multi-stop Dark Emerald Gradients for High Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#04170F]/95 via-[#04170F]/75 to-[#04170F]/30 lg:to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04170F] via-[#04170F]/50 to-black/30 pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="mx-auto w-full max-w-7xl px-4 pt-32 sm:px-6 sm:pt-36 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          {/* Left Column: Brand Copy & CTAs */}
          <div className="max-w-2xl">
            {/* Pill Badge */}
            <div
              className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-200 backdrop-blur-md"
              style={{ animationDelay: '100ms' }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              Portfolio & Delivered Buildouts
            </div>

            {/* Headline */}
            <h1
              className="animate-fade-up mt-5 font-serif text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.08] text-white"
              style={{ animationDelay: '250ms' }}
            >
              Landmark spaces,{' '}
              <span className="italic font-normal text-gold-gradient block sm:inline">
                built to endure.
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="animate-fade-up mt-6 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-emerald-50/80"
              style={{ animationDelay: '450ms' }}
            >
              Corporate headquarters, high-density workspaces, healthcare facilities, and institutional campuses across India — delivered with single-source turnkey accountability, fixed-price BOQs, and guaranteed handover SLAs.
            </p>

            {/* CTA Buttons */}
            <div
              className="animate-fade-up mt-8 flex flex-wrap items-center gap-3.5"
              style={{ animationDelay: '650ms' }}
            >
              <a
                href="#projects-gallery"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-[#04170F] shadow-[0_10px_35px_-10px_rgba(52,211,153,0.6)] transition-all duration-300 hover:bg-[#6ee7b7] hover:-translate-y-0.5"
              >
                Explore Project Gallery
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
              </a>
              <a
                href="#featured-project"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-gold/50 hover:-translate-y-0.5"
              >
                Featured Buildout
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Floating Badge (Desktop Live Project Indicator) */}
          <div
            className="hidden lg:flex flex-col items-end gap-2.5 animate-fade-up"
            style={{ animationDelay: '350ms' }}
          >
            <div className="flex items-center gap-2.5 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-xs backdrop-blur-xl shadow-2xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-gold font-mono text-[11px] font-semibold uppercase tracking-wider">
                {currentSlide.category}
              </span>
              <span className="h-3 w-px bg-white/20" />
              <span className="flex items-center gap-1.5 text-white/90 font-medium">
                <MapPin className="h-3 w-3 text-gold" />
                {currentSlide.location}
              </span>
            </div>

            <div className="max-w-xs text-right text-[12px] text-emerald-100/70 font-light leading-snug">
              {currentSlide.tagline}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Dynamic Interactive Project Switcher & Credibility Metrics */}
      <div className="mx-auto w-full max-w-7xl px-4 pb-8 pt-12 sm:px-6 sm:pb-12 lg:px-8">
        {/* Dynamic Project Switcher Strip */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/80 flex items-center gap-2">
              <Sparkles className="h-3 w-3 text-gold" />
              Select Landmark Showcase ({active + 1}/{projectSlides.length})
            </span>
            <span className="text-[11px] text-emerald-100/60 hidden sm:inline">
              Click any project to preview live
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {projectSlides.map((slide, i) => {
              const isCurrent = i === active;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`group relative text-left rounded-2xl p-3.5 sm:p-4 transition-all duration-300 border backdrop-blur-md overflow-hidden cursor-pointer ${
                    isCurrent
                      ? 'bg-emerald-950/80 border-gold/80 shadow-[0_8px_30px_rgb(0,0,0,0.5)] ring-1 ring-gold/40'
                      : 'bg-black/40 border-white/10 hover:bg-black/60 hover:border-white/25 hover:-translate-y-0.5'
                  }`}
                >
                  {/* Progress Bar Animation on Top Border */}
                  <div className="absolute top-0 inset-x-0 h-[3px] bg-white/10 overflow-hidden">
                    {isCurrent ? (
                      <div
                        key={active}
                        className="h-full bg-gold origin-left"
                        style={{ animation: `bar-fill ${SLIDE_MS}ms linear forwards` }}
                      />
                    ) : i < active ? (
                      <div className="h-full bg-gold/40" />
                    ) : null}
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-1.5 pt-1">
                    <span
                      className={`text-[11px] font-mono font-bold tracking-wider ${
                        isCurrent ? 'text-gold' : 'text-emerald-100/50'
                      }`}
                    >
                      {slide.num}
                    </span>
                    <span
                      className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full ${
                        isCurrent
                          ? 'bg-gold/20 text-gold border border-gold/30'
                          : 'bg-white/10 text-emerald-100/70'
                      }`}
                    >
                      {slide.category.split(' ')[0]}
                    </span>
                  </div>

                  <div
                    className={`font-serif text-sm font-semibold truncate transition-colors ${
                      isCurrent ? 'text-white' : 'text-white/80 group-hover:text-gold'
                    }`}
                  >
                    {slide.title}
                  </div>

                  <div className="text-[11px] text-emerald-100/60 truncate mt-0.5">
                    {slide.scale}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Credibility Metrics Bar */}
        <div className="grid grid-cols-2 gap-4 border-t border-white/15 pt-6 sm:grid-cols-4 sm:gap-6">
          {metrics.map((m) => (
            <div key={m.label} className="flex flex-col">
              <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-gold">
                <CountUp value={m.value} />
              </div>
              <div className="mt-1 text-[11px] sm:text-xs font-medium text-emerald-100/70">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
