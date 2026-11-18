import { HeartHandshake, Leaf, Layers, ShieldCheck } from 'lucide-react';
import Reveal from '../../common/Reveal';
import CountUp from '../../common/CountUp';

const ethos = [
  { icon: HeartHandshake, title: 'Human-First Ergonomics', desc: 'Employee posture, natural daylighting and acoustic comfort to boost wellbeing and productivity.' },
  { icon: Leaf, title: 'Sustainable Materials', desc: 'Certified low-VOC finishes, sustainably sourced hardwoods and recyclable acoustic panels.' },
  { icon: Layers, title: 'Architectural Cohesion', desc: 'Seamless transition between base-build structure and custom interior joinery.' },
  { icon: ShieldCheck, title: 'Strict Quality Standards', desc: 'Multi-stage factory and on-site audits ensuring zero tolerance for execution defects.' },
];

const stats = [
  { n: '25+', t: 'Years Experience' },
  { n: '200+', t: 'Projects Delivered' },
  { n: '60+', t: 'Cities Reached' },
  { n: '4', t: 'Integrated Disciplines' },
];

export default function AboutStory() {
  return (
    <section className="bg-[#FAFCF9] py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Overlapping photo collage */}
          <Reveal direction="left" className="relative lg:col-span-5">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl border-2 border-gold/60" />
            <img
              src="/images/hd/image-13-luxury-lounge-1.jpg"
              alt="MapleRoc Luxury Corporate Lounge and Precision Joinery"
              className="relative aspect-4/5 w-full rounded-3xl object-cover shadow-2xl"
              loading="lazy"
            />
            <div className="animate-float absolute -top-6 right-2 rounded-2xl bg-[#0D3B2E] px-5 py-3 text-white shadow-xl sm:-right-6">
              <div className="font-serif text-3xl leading-none text-gold">25+</div>
              <div className="text-[11px] uppercase tracking-widest text-emerald-100/80">Years</div>
            </div>
          </Reveal>

          {/* Story + ethos */}
          <div className="lg:col-span-7 lg:pl-8">
            <Reveal>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-700">Our Core Ethos</span>
              <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-medium leading-[1.1] tracking-tight text-[#0D3B2E]">
                Crafting spaces that balance <span className="italic text-emerald-700">wellbeing, utility</span> & architectural rigor.
              </h2>
              <p className="mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-stone-600">
                We believe exceptional commercial interiors are never born from standardized templates. Whether it&apos;s a high-speed rail headquarters, a multispecialty healthcare lobby, or an executive boardroom, our work unifies ergonomic science, acoustic comfort and precision joinery.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
              {ethos.map((e, i) => (
                <Reveal key={e.title} delay={i * 100} className="group flex gap-4 border-t border-stone-200 pt-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0D3B2E] text-gold transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                    <e.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#0D3B2E]">{e.title}</h3>
                    <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-stone-500">{e.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Counters */}
        <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-stone-200 sm:mt-32 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.t} className="bg-white px-6 py-9 text-center transition-colors hover:bg-[#0D3B2E] hover:text-white group">
              <div className="font-serif text-4xl sm:text-5xl font-semibold text-[#0D3B2E] group-hover:text-gold transition-colors">
                <CountUp value={s.n} />
              </div>
              <div className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-stone-500 group-hover:text-emerald-100">
                {s.t}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
