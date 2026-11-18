import { ArrowRight, Quote } from 'lucide-react';
import Reveal from '../../common/Reveal';

export default function FounderQuoteSection() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#041B14] via-[#06221A] to-[#0A2E24] py-20 text-white sm:py-28 border-t border-emerald-950/80">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <img
          src="/images/hd/image-14-luxury-lounge-2.jpg"
          alt=""
          className="h-full w-full object-cover opacity-15"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#041B14] via-[#06221A]/95 to-[#06221A]/80" />
        <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl animate-glow" />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-emerald-600/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        
        {/* Left Column: Founder Portrait */}
        <Reveal direction="left" className="lg:col-span-5 flex justify-center">
          <div className="relative">
            {/* Outer decorative emerald accent ring */}
            <div className="absolute -inset-3 rounded-full border-2 border-emerald-400/30 pointer-events-none" />
            <div className="absolute -inset-1 rounded-full border border-emerald-500/20 pointer-events-none animate-pulse" />

            {/* Circular portrait container */}
            <div className="relative w-56 h-56 sm:w-68 sm:h-68 lg:w-76 lg:h-76 rounded-full overflow-hidden p-1.5 border-2 border-emerald-400/60 shadow-2xl bg-[#06221A]">
              <img
                src="/images/dharmendra-surelia.jpg"
                alt="Dharmendra Surelia, Founder & Managing Director"
                className="w-full h-full rounded-full object-cover object-top"
                loading="lazy"
              />
            </div>

            {/* Centered Name Tag Pill under the Circle */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[92%] rounded-2xl border border-emerald-400/30 bg-[#06221A]/95 px-5 py-2.5 text-center backdrop-blur-xl shadow-2xl">
              <div className="font-serif text-base sm:text-lg font-bold text-white whitespace-nowrap">
                Dharmendra Surelia
              </div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-widest text-emerald-300 font-semibold whitespace-nowrap mt-0.5">
                Founder &amp; Managing Director
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right Column: Balanced Executive Quote & Vision */}
        <Reveal direction="right" className="lg:col-span-7">
          
          {/* Header Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-950/80 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-300 mb-4 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Founder&apos;s Philosophy
          </div>

          <Quote className="h-10 w-10 text-emerald-400/70 mb-4" />

          {/* Balanced, Typographically Perfect Quote */}
          <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-normal leading-relaxed tracking-tight text-white [text-wrap:balance]">
            &ldquo;True turnkey architecture isn&apos;t simply handing over keys — it is honoring every millimeter of intent, so workspaces{' '}
            <span className="italic font-semibold text-emerald-300">
              empower the human mind for <span className="whitespace-nowrap">decades.&rdquo;</span>
            </span>
          </blockquote>

          {/* Narrative Paragraph */}
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-emerald-100/80 sm:text-base border-t border-emerald-900/60 pt-6">
            When we founded MapleRoc more than 25 years ago in Bharuch, commercial interiors were fragmented between multiple suppliers, local contractors, and disconnected consultants. Our vision was clear: one single home where design intent, precision joinery, and turnkey contracting meet with total accountability.
          </p>

          {/* Key Credentials Strip */}
          <div className="mt-5 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-emerald-200/80">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>25+ Years Industry Leadership</span>
            </div>
            <span className="hidden sm:inline text-emerald-700">•</span>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>In-House OEM Manufacturing Facility</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-7">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-[#06221A] transition-all hover:-translate-y-0.5 hover:bg-emerald-300 shadow-lg shadow-emerald-950/50"
            >
              <span>Connect With Dharmendra Surelia</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </Reveal>

      </div>
    </section>
  );
}
