import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import Reveal from '../../common/Reveal';

const disciplines = [
  {
    id: '01',
    title: 'Workplace Strategy & Systems',
    tag: 'MODULAR STATIONS & CABINS',
    image: '/images/hd/image-10-office-cabin.jpg',
    description: 'Ergonomic workstation systems, executive desking, acoustic seating, and storage solutions engineered for performance, comfort, and commercial longevity.',
    specs: ['Acoustic Privacy Planning', 'Executive Suites & Storage', 'Ergonomic Certification'],
    linkText: 'Explore Workplace Solutions',
    linkHref: '#furniture-detail',
  },
  {
    id: '02',
    title: 'Interior Architecture & Fitout',
    tag: 'SPATIAL PLANNING & DESIGN',
    image: '/images/hd/image-18-clinic-lobby-reception.jpg',
    description: 'Monumental reception spaces, architectural timber louvers, integrated lighting, and human-centric commercial environments built to inspire.',
    specs: ['3D Photorealistic Detailing', 'Biophilic & Timber Integration', 'Code & Egress Compliance'],
    linkText: 'Explore Interior Architecture',
    linkHref: '#contact',
  },
  {
    id: '03',
    title: 'Turnkey Contracting & MEP',
    tag: 'GENERAL CONTRACTING & PMC',
    image: '/images/hd/image-3-conference-hall.jpg',
    description: 'On-site general contracting, MEP infrastructure, HVAC, partitions, and timely handover with open milestone tracking and zero vendor disputes.',
    specs: ['Single Accountable Contract', 'Guaranteed Handover Milestones', 'Zero Snag Disputes'],
    linkText: 'Explore Turnkey Execution',
    linkHref: '#mep-detail',
  },
  {
    id: '04',
    title: 'Bespoke Joinery & Furniture',
    tag: 'FACTORY-DIRECT CRAFTSMANSHIP',
    image: '/images/hd/image-2-pantry-breakout.jpg',
    description: 'Architectural millwork, custom executive desks, reception counters, and acoustic paneling crafted in our dedicated Bharuch workshop.',
    specs: ['Direct Factory Ownership', 'Commercial Grade Hardware', 'Solid Timber & Veneer Finish'],
    linkText: 'Explore Bespoke Joinery',
    linkHref: '#furniture-detail',
  },
];

export default function CoreDisciplinesGrid() {
  const [active, setActive] = useState(0);
  const d = disciplines[active];

  return (
    <section id="disciplines-grid" className="bg-[#FAFCF9] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 sm:mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-700">Core Disciplines</span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight tracking-tight text-[#0D3B2E] whitespace-normal lg:whitespace-nowrap">
            Four capabilities. <span className="italic text-emerald-700">One accountable contract.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
          {/* Tab list */}
          <div className="flex gap-2 overflow-x-auto pb-1 lg:col-span-4 lg:flex-col lg:overflow-visible">
            {disciplines.map((x, i) => (
              <button
                key={x.id}
                type="button"
                onClick={() => setActive(i)}
                className={`group flex min-w-[220px] shrink-0 cursor-pointer items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 lg:min-w-0 ${
                  i === active
                    ? 'border-[#0D3B2E] bg-[#0D3B2E] text-white shadow-xl lg:translate-x-2'
                    : 'border-stone-200 bg-white hover:border-emerald-300'
                }`}
              >
                <span className={`font-serif text-3xl font-semibold ${i === active ? 'text-gold' : 'text-emerald-800/30 group-hover:text-emerald-800/60'}`}>{x.id}</span>
                <span>
                  <span className="block font-serif text-base sm:text-lg font-semibold leading-tight">{x.title}</span>
                  <span className={`mt-0.5 block text-[11px] ${i === active ? 'text-emerald-100/70' : 'text-stone-500'}`}>{x.tag}</span>
                </span>
              </button>
            ))}
          </div>

          {/* Showcase */}
          <div key={d.id} className="animate-fade-up grid overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-xl md:grid-cols-2 lg:col-span-8" style={{ animationDuration: '0.6s' }}>
            <div className="relative min-h-[280px] md:min-h-[460px]">
              <img src={d.image} alt={d.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#06221A] shadow-md">{d.tag}</span>
            </div>
            <div className="flex flex-col justify-between p-6 sm:p-8">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-[#0D3B2E] sm:text-3xl">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">{d.description}</p>
                <ul className="mt-6 space-y-3">
                  {d.specs.map((s) => (
                    <li key={s} className="flex items-center gap-3 text-sm font-medium text-stone-800">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"><Check className="h-3 w-3" /></span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <a href={d.linkHref} className="group mt-8 inline-flex items-center justify-between rounded-full bg-[#0D3B2E] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#08281E]">
                {d.linkText}
                <ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover:rotate-45" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
