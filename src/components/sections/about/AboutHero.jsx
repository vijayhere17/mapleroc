import { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight, Award, ShieldCheck } from 'lucide-react';
import CountUp from '../../common/CountUp';

const stats = [
  { v: '25+', l: 'Years Experience' },
  { v: '200+', l: 'Projects Delivered' },
  { v: '60+', l: 'Cities Reached' },
  { v: '4', l: 'Core Disciplines' },
];

const heroProjects = [
  {
    id: 'nhsrcl',
    tag: 'Government Secretariat',
    title: 'National High Speed Rail Corporation (NHSRCL)',
    specs: 'Turnkey interior architecture, Italian marble monolith reception & timber slat acoustic ceiling',
    image: '/images/hd/image-11-reception-nhsrcl.jpg',
    metric: '100% SLA Record',
  },
  {
    id: 'executive-lounge',
    tag: 'Bespoke Executive Fitout',
    title: 'Executive Leadership Suite & Lounges',
    specs: 'Curved organic timber ceilings, custom fluted paneling & luxury ergonomic armchairs',
    image: '/images/hd/image-4-living-lounge.jpg',
    metric: '4,500 sq.ft.',
  },
  {
    id: 'boardroom',
    tag: 'Corporate Headquarters',
    title: 'Grand Council & Executive Boardroom Suite',
    specs: 'Acoustic glass architectural partitions, integrated AV conference systems & joinery',
    image: '/images/hd/image-1-meeting-room.jpg',
    metric: '25+ Seats',
  },
];

export default function AboutHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-switch project showcase every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroProjects.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const activeProject = heroProjects[activeIndex];

  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Ambient background glows */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-[32rem] w-[32rem] rounded-full bg-emerald-100/50 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-20 top-1/2 h-80 w-80 rounded-full bg-emerald-50/70 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        {/* Left Column: Copy & Value Props */}
        <div className="lg:col-span-6 space-y-5">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-emerald-700/20 bg-emerald-50/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800 backdrop-blur-xs" style={{ animationDelay: '100ms' }}>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
            Our Heritage · Since 2000
          </div>

          <h1 className="animate-fade-up font-serif text-3xl sm:text-5xl lg:text-[48px] xl:text-[52px] font-semibold leading-[1.12] tracking-tight text-[#0D3B2E]" style={{ animationDelay: '250ms' }}>
            From a furniture pioneer to <span className="text-emerald-700 italic">one accountable partner</span> for the whole space.
          </h1>

          <p className="animate-fade-up max-w-xl text-sm sm:text-base leading-relaxed text-stone-600" style={{ animationDelay: '450ms' }}>
            For more than two decades, MapleRoc has unified architectural vision with turnkey site execution. From landmark high-speed rail secretariats and corporate tech headquarters to multispecialty healthcare facilities, we take total single-source accountability from initial spatial strategy to final handover.
          </p>

          <div className="animate-fade-up flex flex-col sm:flex-row gap-3.5 pt-2" style={{ animationDelay: '600ms' }}>
            <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0D3B2E] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-emerald-800 hover:-translate-y-0.5">
              <span>Schedule a Consultation</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#timeline" className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white/80 px-7 py-3.5 text-sm font-semibold text-[#0D3B2E] transition-all hover:border-emerald-600 hover:text-emerald-700 hover:-translate-y-0.5">
              <span>Explore Our 25-Year Heritage</span>
            </a>
          </div>

          {/* 4 Core Stat Indicator Boxes */}
          <div className="animate-fade-up grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 border-t border-stone-200/80 pt-6" style={{ animationDelay: '750ms' }}>
            {stats.map((s) => (
              <div
                key={s.l}
                className="group relative rounded-2xl border border-stone-200/90 bg-white p-3.5 sm:p-4 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-sm"
              >
                <div className="font-serif text-2xl sm:text-[28px] font-bold tracking-tight text-[#0D3B2E]">
                  <CountUp value={s.v} />
                </div>
                <div className="mt-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-stone-500 leading-snug">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Grand Architectural Interactive Showcase */}
        <div className="lg:col-span-6 space-y-3.5">
          {/* Main Cinematic Architectural Card */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-stone-200/90 bg-[#06221A] group">
            <div className="relative aspect-16/11 sm:aspect-4/3 w-full overflow-hidden bg-stone-900">
              <img
                key={activeProject.id}
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-103 animate-fade-in"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041D16] via-[#041D16]/55 to-transparent pointer-events-none" />

              {/* Top Meta Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#0D3B2E] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                  {activeProject.tag}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-gold text-[10px] sm:text-[11px] font-semibold border border-white/10">
                  <Award className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>{activeProject.metric}</span>
                </span>
              </div>

              {/* Bottom Project Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-emerald-300 font-bold">
                    Delivered Landmark Buildout
                  </span>
                </div>
                <h3 className="font-serif text-lg sm:text-2xl font-bold leading-snug mb-1 text-white">
                  {activeProject.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-emerald-50/85 leading-relaxed max-w-lg line-clamp-2">
                  {activeProject.specs}
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Project Switcher Thumbnails */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {heroProjects.map((project, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`group relative rounded-xl sm:rounded-2xl p-1.5 sm:p-2 border-2 text-left transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'border-[#0D3B2E] bg-[#FAFCF9] shadow-md ring-2 ring-emerald-600/30 -translate-y-0.5'
                      : 'border-stone-200 bg-white hover:border-stone-400 opacity-75 hover:opacity-100'
                  }`}
                >
                  <div className="aspect-16/10 rounded-lg overflow-hidden mb-1.5 bg-stone-100 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    {isActive && (
                      <div className="absolute inset-0 border-2 border-emerald-600 rounded-lg pointer-events-none" />
                    )}
                  </div>
                  <div className="px-0.5">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] sm:text-[11px] font-bold block truncate leading-tight ${isActive ? 'text-[#0D3B2E]' : 'text-stone-700'}`}>
                        {project.id === 'nhsrcl' ? 'NHSRCL Secretariat' : project.id === 'executive-lounge' ? 'Executive Lounge' : 'Boardroom Suite'}
                      </span>
                      <ChevronRight className={`w-3 h-3 transition-transform ${isActive ? 'text-emerald-700 translate-x-0.5' : 'text-stone-400'}`} />
                    </div>
                    <span className="text-[9px] text-stone-500 block truncate mt-0.5">
                      {project.tag}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
