import { useEffect, useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';

const slides = [
  {
    src: '/images/hd/image-1-meeting-room.jpg',
    title: 'Modern Workplaces & Conference Suites',
    tag: 'Commercial Workspaces',
  },
  {
    src: '/images/hd/image-4-living-lounge.jpg',
    title: 'Contemporary Executive Living & Lounge Fitout',
    tag: 'Bespoke Interiors',
  },
  {
    src: '/images/hd/image-14-luxury-lounge-2.jpg',
    title: 'Executive Boardroom & Leadership Suite',
    tag: 'Corporate Headquarters',
  },
  {
    src: '/images/hd/image-11-reception-nhsrcl.jpg',
    title: 'NHSRCL High-Speed Rail Corporate Secretariat',
    tag: 'Institutional Fitout',
  },
];

const SLIDE_MS = 2500;

export default function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), SLIDE_MS);
    return () => clearInterval(id);
  }, [active]);

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#04170F] text-white flex items-center">
      {/* Background slideshow - Crystal clear high-definition images, zero blur, no grid/plus lines */}
      <div className="absolute inset-0 -z-10">
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt=""
            aria-hidden="true"
            loading={i === 0 ? 'eager' : 'lazy'}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[700ms] ease-in-out ${
              i === active ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        {/* Clean, balanced left-side gradient to ensure white text readability while keeping the full image sharp and crystal clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#04170F]/85 via-[#04170F]/45 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04170F]/80 via-transparent to-black/20 pointer-events-none" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-28 sm:pb-32">
        <div className="max-w-4xl space-y-6 sm:space-y-7">
          <div
            className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-emerald-100"
            style={{ animationDelay: '100ms' }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Turnkey Commercial Interiors
          </div>

          <h1
            className="animate-fade-up font-serif text-[1.95rem] leading-[1.2] sm:text-5xl lg:text-6xl xl:text-[4.6rem] font-medium tracking-tight"
            style={{ animationDelay: '250ms' }}
          >
            <span className="inline-block whitespace-normal sm:whitespace-nowrap">Designing Spaces,</span>
            <br />
            <span className="italic font-normal text-gold-gradient inline-block whitespace-normal sm:whitespace-nowrap pr-2 pb-2 pt-0.5">
              Delivering Excellence.
            </span>
          </h1>

            <p
              className="animate-fade-up max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-emerald-50/80"
              style={{ animationDelay: '450ms' }}
            >
              Integrated Interior Design, Turnkey Contracting, and Bespoke Commercial Furniture for Modern Workplaces and Premier Institutions.
            </p>

            <div
              className="animate-fade-up flex flex-col sm:flex-row gap-3.5 pt-1"
              style={{ animationDelay: '650ms' }}
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-[#04170F] shadow-[0_10px_40px_-10px_rgba(52,211,153,0.7)] transition-all hover:bg-[#6ee7b7] hover:-translate-y-0.5"
              >
                Schedule a Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/15 hover:-translate-y-0.5"
              >
                View Our Work
              </a>
            </div>

            <div
              className="animate-fade-up flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-3"
              style={{ animationDelay: '850ms' }}
            >
              <div className="flex -space-x-2.5">
                {['NH', 'AM', 'RL'].map((t, i) => (
                  <span
                    key={t}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-2 ring-[#04170F] text-xs font-bold text-emerald-100"
                    style={{ backgroundColor: ['#1F3D2B', '#28573D', '#37694C'][i] }}
                  >
                    {t}
                  </span>
                ))}
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-2 ring-[#04170F] bg-gold text-[11px] font-bold text-[#04170F]">
                  200+
                </span>
              </div>
              <div className="text-xs text-emerald-100/70">
                <div className="flex items-center gap-1 font-semibold text-gold">
                  <Star className="h-3.5 w-3.5 fill-gold text-gold" />
                  Trusted by 200+ clients across India
                </div>
                Government PSUs, Corporate Tech Parks & Institutions
              </div>
            </div>
          </div>
        </div>

      {/* Active Space Floating Indicator on Bottom Right (Progress lines removed) */}
      <div className="absolute bottom-6 sm:bottom-10 right-4 sm:right-6 lg:right-8 z-10 hidden sm:inline-flex items-center gap-2.5 rounded-full bg-black/40 backdrop-blur-md px-4 py-1.5 border border-white/15 text-xs text-white/90 shadow-lg">
        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
        <span className="font-semibold text-gold tracking-wide uppercase text-[10px] sm:text-[11px]">{slides[active].tag}</span>
        <span className="text-white/30">•</span>
        <span className="text-white/80 font-medium text-xs truncate max-w-[200px] lg:max-w-none">{slides[active].title}</span>
      </div>
    </section>
  );
}
