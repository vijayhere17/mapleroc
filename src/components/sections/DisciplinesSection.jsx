import { disciplines } from '../../data/siteData';
import Reveal from '../common/Reveal';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function DisciplinesSection() {
  return (
    <section id="disciplines" className="relative isolate overflow-hidden py-16 sm:py-20 md:py-28 bg-[#06221A] text-white">
      {/* Background photo + overlays */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <img src="/images/hd/image-9-workshop-factory.jpg" alt="" className="h-full w-full object-cover opacity-30 animate-kenburns" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06221A] via-[#06221A]/85 to-[#06221A]" />
        <div className="absolute inset-0 bg-grid-lines" />
        <div className="absolute -right-20 top-10 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl animate-glow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Disciplines
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-medium tracking-tight">
              Four disciplines. <span className="italic text-gold-gradient">One team.</span>
            </h2>
          </div>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-100 hover:text-gold transition-colors group"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {disciplines.map((item, idx) => (
            <Reveal
              key={item.id}
              delay={idx * 120}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-white/[0.06] p-5 sm:p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:bg-white/[0.12]"
            >
              <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/0 blur-2xl transition-all duration-500 group-hover:bg-gold/30" />
              <div>
                <div className="flex items-center justify-between mb-5 sm:mb-8">
                  <span className="font-serif text-4xl sm:text-5xl font-semibold text-white/25 group-hover:text-gold transition-colors duration-500">
                    {item.id}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-100 bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-50/70 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-100 group-hover:text-gold transition-colors">
                  {item.linkText}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-gold group-hover:text-[#06221A] flex items-center justify-center transition-all duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
