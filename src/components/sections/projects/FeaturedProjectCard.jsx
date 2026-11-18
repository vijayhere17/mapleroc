import { ArrowUpRight, CheckCircle2, Star } from 'lucide-react';
import Reveal from '../../common/Reveal';

const thumbs = [
  '/images/hd/image-15-healthcare-clinic.jpg',
  '/images/hd/image-16-hospital-icu-ward.jpg',
  '/images/hd/image-18-clinic-lobby-reception.jpg',
];

const specs = [
  { t: '18,500 Sq.Ft. Turnkey Execution', d: 'Full civil, electrical, MEP, HVAC and access-controlled acoustic glass partitions.' },
  { t: 'Custom Joinery & Acoustic Panelling', d: 'Solid American walnut veneer, NRC 0.85 acoustic fabric walls and motorized pop-up sockets.' },
  { t: 'Zero Handover Snags on Day 1', d: '100% pre-commissioned AV, air balancing and statutory fire compliance certification.' },
];

export default function FeaturedProjectCard() {
  return (
    <section id="featured-project" className="bg-[#FAFCF9] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="zoom" className="relative isolate overflow-hidden rounded-[2rem] text-white shadow-2xl">
          <img src="/images/hd/image-3-conference-hall.jpg" alt="Executive Boardroom and Headquarters Suite" className="absolute inset-0 -z-10 h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06221A] via-[#06221A]/88 to-[#06221A]/35" />

          <div className="grid grid-cols-1 gap-10 p-6 sm:p-10 lg:grid-cols-12 lg:p-14">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#06221A]">
                  <Star className="h-3 w-3 fill-[#06221A]" /> Featured Turnkey Build
                </span>
                <span className="text-[11px] text-emerald-100/70">Handover Certificate Issued: March 2026</span>
              </div>
              <div className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">Corporate Workplace | Turnkey Fitout</div>
              <h3 className="mt-2 font-serif text-3xl font-medium leading-tight sm:text-5xl">
                Executive Boardroom & <span className="italic text-gold-gradient">High-Density Headquarters</span>
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-emerald-50/80 sm:text-base">
                Delivered turnkey in 72 days for a Fortune 500 enterprise. Full scope encompassed architectural layouts, custom acoustic wall panelling, a motorized board table with hidden AV connections, HVAC balancing and 120 ergonomic workstations.
              </p>

              <div className="mt-8 flex gap-3">
                {thumbs.map((src) => (
                  <img key={src} src={src} alt="" loading="lazy" className="h-20 w-28 rounded-xl border border-white/20 object-cover transition-transform duration-300 hover:-translate-y-1 sm:h-24 sm:w-36" />
                ))}
              </div>

              <figure className="mt-8 max-w-xl border-l-2 border-gold pl-5">
                <blockquote className="font-serif text-base italic leading-relaxed text-white sm:text-lg">
                  &ldquo;MapleRoc delivered our new corporate floor 10 days ahead of schedule with zero change-orders. The bespoke board table and acoustic detailing surpassed our global benchmarks.&rdquo;
                </blockquote>
                <figcaption className="mt-2 text-[11px] uppercase tracking-widest text-gold">VP Corporate Real Estate, Enterprise Client</figcaption>
              </figure>
            </div>

            <div className="flex flex-col justify-end gap-3 lg:col-span-5">
              {specs.map((s, i) => (
                <Reveal key={s.t} delay={i * 120} className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl transition-colors duration-300 hover:border-gold/60">
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <div>
                      <h5 className="font-serif text-base font-semibold">{s.t}</h5>
                      <p className="mt-1 text-xs leading-relaxed text-emerald-50/75">{s.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
              <a href="#contact" className="group mt-2 inline-flex items-center justify-between rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-[#06221A] transition-all hover:bg-[#6ee7b7]">
                Explore Full Case Study
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
