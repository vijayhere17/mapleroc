import { heroStats } from '../../data/siteData';
import Reveal from '../common/Reveal';
import CountUp from '../common/CountUp';

export default function StatsBar() {
  return (
    <section className="relative mt-10 sm:mt-14 mb-12 sm:mb-16 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {heroStats.map((stat, idx) => (
            <Reveal
              key={idx}
              delay={idx * 120}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/60 bg-white/95 p-4 sm:p-6 shadow-[0_20px_50px_-20px_rgba(4,23,15,0.5)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-18px_rgba(4,23,15,0.55)]"
            >
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-emerald-700 to-gold transition-transform duration-500 group-hover:scale-x-100" />
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0D3B2E] mb-1">
                <CountUp value={stat.number} />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-stone-900 tracking-tight mb-1">
                {stat.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-stone-500 leading-relaxed hidden sm:block">
                {stat.subtitle}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
