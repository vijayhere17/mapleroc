import { useState } from 'react';
import SectionBadge from '../common/SectionBadge';
import { showroomGallery } from '../../data/siteData';
import { MapPin, ArrowUpRight, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function ShowroomSection({ onNavigate }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = showroomGallery[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? showroomGallery.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === showroomGallery.length - 1 ? 0 : prev + 1));
  };

  const handleVisitClick = (e) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('contact');
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  return (
    <section
      id="showroom"
      className="py-12 sm:py-16 md:py-24 bg-[#F5F8F6] border-t border-stone-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block - Arranged with 1-Line Headline, 1-Line Paragraph & Button Below */}
        <div className="mb-8 sm:mb-12">
          {/* Top meta indicator strip */}
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <SectionBadge text="Experience Center" />
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[11px] font-medium text-stone-600 border border-stone-200/80 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Mon – Sat: 09:00 AM – 07:00 PM</span>
              <span className="text-stone-300">|</span>
              <span className="text-[#2F6146] font-semibold">Bharuch GIDC Studio</span>
            </div>
          </div>

          {/* Main Headline on ONE single line across desktop */}
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[46px] 2xl:text-5xl text-[#0D3B2E] font-medium tracking-tight mb-3 sm:mb-4 whitespace-normal lg:whitespace-nowrap [text-wrap:nowrap]">
            Visit Our Bharuch Furniture Showroom.
          </h2>

          {/* Subtitle in ONE single line across desktop */}
          <p className="text-xs sm:text-sm md:text-base lg:text-[15px] xl:text-[16px] text-stone-600 leading-relaxed whitespace-normal lg:whitespace-nowrap [text-wrap:nowrap]">
            Test ergonomic seating, compare modular workstation partitions, and inspect real timber, laminate, and acoustic finishes in person before specifying your workplace build.
          </p>

          {/* Action button directly below the paragraph */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href={onNavigate ? '#contact-page' : '#contact'}
              onClick={handleVisitClick}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0D3B2E] hover:bg-[#08281E] text-white text-xs sm:text-sm font-semibold transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Schedule Showroom Walkthrough</span>
              <ArrowUpRight className="w-4 h-4 text-gold" />
            </a>
          </div>
        </div>

        {/* Main Interactive Spotlight Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 shadow-sm overflow-hidden mb-5 sm:mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left: Large Active Showroom Photo */}
            <div className="lg:col-span-7 relative aspect-4/3 lg:aspect-auto lg:h-[450px] bg-stone-100 overflow-hidden">
              <img
                src={activeItem.image}
                alt={activeItem.alt}
                className="w-full h-full object-cover object-center transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

              {/* Top Left Category Pill */}
              <div className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#0D3B2E] border border-white/80 shadow-xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>{activeItem.tag}</span>
              </div>

              {/* Top Right Counter Pill */}
              <div className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 bg-black/55 backdrop-blur-xs text-white px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider">
                0{activeIndex + 1} / 0{showroomGallery.length}
              </div>

              {/* Bottom Left Address Strip on Photo */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-5 sm:left-5 sm:right-5 flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/80 shadow-md text-[11px] sm:text-xs font-medium text-stone-800">
                  <MapPin className="w-3.5 h-3.5 text-[#2F6146] shrink-0" />
                  <span className="truncate">B-311, Alpha Arcades, G.I.D.C., Bharuch</span>
                </div>

                {/* Prev / Next Overlay Arrows */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 hover:bg-white text-[#0D3B2E] flex items-center justify-center shadow-md transition-colors cursor-pointer"
                    aria-label="Previous showroom photo"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 hover:bg-white text-[#0D3B2E] flex items-center justify-center shadow-md transition-colors cursor-pointer"
                    aria-label="Next showroom photo"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Zone Details & Highlights */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-9 flex flex-col justify-between bg-white lg:min-h-[450px]">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#2F6146] mb-2">
                  Showroom Zone 0{activeIndex + 1}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#0D3B2E] font-medium tracking-tight leading-snug mb-3">
                  {activeItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                  {activeItem.description}
                </p>

                {/* Highlights Checklist */}
                <div className="space-y-2.5 mb-6">
                  {activeItem.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#F8FAF9] border border-stone-200/70"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#2F6146] shrink-0" />
                      <span className="text-xs sm:text-[13px] font-medium text-stone-800">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                <div className="text-[11px] sm:text-xs text-stone-500">
                  <span className="font-semibold text-stone-800 block">Mon – Sat: 09:00 AM – 07:00 PM</span>
                  <span>Hands-on trials for architects & corporate teams</span>
                </div>
                <a
                  href={onNavigate ? '#contact-page' : '#contact'}
                  onClick={handleVisitClick}
                  className="w-9 h-9 rounded-full bg-[#EAF3EE] hover:bg-[#0D3B2E] text-[#0D3B2E] hover:text-white flex items-center justify-center transition-colors shrink-0"
                  aria-label="Book showroom visit"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 5-Photo Interactive Gallery Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {showroomGallery.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`group text-left rounded-xl sm:rounded-2xl overflow-hidden bg-white border transition-all cursor-pointer flex flex-col ${
                  isActive
                    ? 'border-[#0D3B2E] ring-2 ring-[#0D3B2E]/15 shadow-md'
                    : 'border-stone-200/80 hover:border-emerald-400 hover:shadow-sm'
                }`}
              >
                <div className="relative aspect-4/3 w-full overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {isActive && (
                    <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                  )}
                </div>
                <div className="p-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#2F6146] block mb-0.5 truncate">
                    {item.tag}
                  </span>
                  <span className="text-xs font-semibold text-[#0D3B2E] line-clamp-1">
                    {item.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
