import { useState } from 'react';
import Reveal from '../../common/Reveal';

const sectors = [
  { num: '01', title: 'Corporate & Tech HQ', description: 'High-density open floors, acoustic focus pods and sit-to-stand motorized desking engineered for 24/7 engineering and tech teams.', image: 'image-12-open-workstations' },
  { num: '02', title: 'Executive & Boardrooms', description: 'Solid timber veneer board tables, luxury leather seating and concealed motorized audio-visual presentation hubs.', image: 'image-3-conference-hall' },
  { num: '03', title: 'Healthcare & Labs', description: 'Antimicrobial vinyl, bleach-cleanable seating, seamless chemical-resistant surfaces and ergonomic nurse station desking.', image: 'image-16-hospital-icu-ward' },
  { num: '04', title: 'Institutions & Universities', description: 'Heavy-duty lecture hall seating, mobile study tables and acoustic auditoria seating built for 20-year commercial lifespans.', image: 'image-31-large-auditorium-balcony' },
];

export default function PartnerSectorsSection() {
  const [active, setActive] = useState(0);
  return (
    <section className="bg-[#FAFCF9] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 sm:mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-700">Sector Solutions</span>
          <h2 className="mt-2.5 font-serif text-3xl sm:text-4xl lg:text-[44px] font-medium leading-tight tracking-tight text-[#0D3B2E] whitespace-normal lg:whitespace-nowrap [text-wrap:nowrap]">
            Engineered for <span className="italic text-emerald-700">every commercial environment.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600 whitespace-normal lg:whitespace-nowrap [text-wrap:nowrap]">
            From Fortune 500 tech campuses and executive boardrooms to sterile healthcare wards and universities.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            {sectors.map((s, i) => (
              <button
                key={s.num}
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group block w-full cursor-pointer border-t border-[#0D3B2E]/20 py-6 text-left transition-all last:border-b"
              >
                <div className="flex items-center gap-5">
                  <span className={`font-serif text-3xl font-semibold transition-colors ${active === i ? 'text-gold' : 'text-outline-dark'}`}>{s.num}</span>
                  <h3 className={`font-serif text-xl font-semibold transition-all duration-300 sm:text-2xl ${active === i ? 'translate-x-2 text-[#0D3B2E]' : 'text-stone-400 group-hover:text-[#0D3B2E]'}`}>{s.title}</h3>
                </div>
                <div className={`grid pl-[3.7rem] transition-all duration-500 ${active === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <p className="overflow-hidden text-sm leading-relaxed text-stone-600"><span className="block pt-3">{s.description}</span></p>
                </div>
              </button>
            ))}
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl lg:col-span-6 lg:aspect-auto lg:min-h-[420px]">
            {sectors.map((s, i) => (
              <img key={s.num} src={`/images/hd/${s.image}.jpg`} alt={s.title} loading="lazy" className={`absolute inset-0 h-full w-full object-cover transition-all duration-[900ms] ${active === i ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`} />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#06221A]/70 via-transparent to-transparent" />
            <span className="absolute bottom-5 left-5 rounded-full bg-gold px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#06221A]">{sectors[active].title}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
