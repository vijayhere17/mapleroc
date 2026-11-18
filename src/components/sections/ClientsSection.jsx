import { clientSectors } from '../../data/siteData';
import Reveal from '../common/Reveal';
import { ArrowUpRight, Check } from 'lucide-react';

export default function ClientsSection() {
  return (
    <section id="clients" className="relative isolate overflow-hidden py-16 sm:py-20 md:py-28 bg-[#06221A] text-white">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <img src="/images/hd/image-34-brick-arch-building-night.jpg" alt="" className="h-full w-full object-cover opacity-40 animate-kenburns" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06221A] via-[#06221A]/80 to-[#06221A]" />
        <div className="absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl animate-glow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 sm:mb-14">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Clients
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] 2xl:text-5xl font-medium tracking-tight mb-4 whitespace-normal lg:whitespace-nowrap">
            Trusted by government, <span className="italic text-gold-gradient">industry</span> and institutions.
          </h2>
          <p className="text-sm sm:text-base text-emerald-50/70 leading-relaxed max-w-3xl">
            Delivering landmark commercial buildouts, high-speed rail secretariats, and institutional hospital complexes across India.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {clientSectors.map((sector, idx) => (
            <Reveal
              key={idx}
              delay={idx * 120}
              className="rounded-2xl sm:rounded-3xl border border-white/15 bg-white/[0.07] p-5 sm:p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:bg-white/[0.12]"
            >
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/15">
                <h3 className="font-serif text-lg sm:text-xl font-semibold">{sector.title}</h3>
                <div className="w-7 h-7 rounded-full bg-gold/20 text-gold flex items-center justify-center shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
              <ul className="space-y-3">
                {sector.clients.map((client, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-emerald-50/80">
                    <span className="w-4 h-4 rounded-full bg-gold/20 text-gold flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>{client}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
