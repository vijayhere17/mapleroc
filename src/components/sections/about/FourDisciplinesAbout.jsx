import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../../common/Reveal';

const items = [
  {
    id: '01',
    tag: 'Strategy',
    title: 'Workplace Strategy',
    desc: 'Analyzing space efficiency, workforce growth models and department adjacencies to program future-ready facilities.',
    image: '/images/hd/image-1-meeting-room.jpg',
  },
  {
    id: '02',
    tag: 'Architecture',
    title: 'Interior Design',
    desc: 'Inspiring, functional, brand-aligned commercial environments with detailed 3D visualization and planning.',
    image: '/images/hd/image-27-office-reception-fitout.jpg',
  },
  {
    id: '03',
    tag: 'Contracting',
    title: 'Project Execution & PMC',
    desc: 'Seamless on-site coordination, contractor management, MEP services and timely turnkey delivery.',
    image: '/images/hd/image-11-reception-nhsrcl.jpg',
  },
  {
    id: '04',
    tag: 'Manufacturing',
    title: 'Custom Furniture & Joinery',
    desc: 'In-house precision craft of modular workstations, executive desks, acoustic pods and ergonomic seating.',
    image: '/images/hd/image-30-blue-modular-workstations.jpg',
  },
];

export default function FourDisciplinesAbout() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#FAFCF9] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header: Headline & Subtitle stacked together cleanly */}
        <Reveal className="mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-800/20 bg-emerald-900/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-800 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
            What We Do
          </div>

          <h2 className="mt-2 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[46px] 2xl:text-[50px] font-medium tracking-tight text-[#0D3B2E] leading-tight lg:leading-none whitespace-normal lg:whitespace-nowrap [text-wrap:nowrap]">
            Four disciplines,{' '}
            <span className="italic text-emerald-700">
              one cohesive team.
            </span>
          </h2>

          <p className="mt-3.5 text-sm sm:text-base lg:text-[15px] xl:text-[16px] 2xl:text-[17px] leading-relaxed text-stone-600 max-w-4xl whitespace-normal lg:whitespace-nowrap [text-wrap:nowrap]">
            By integrating strategy, interior architecture, on-site contracting and bespoke manufacturing, we eliminate fragmented vendor handoffs.
          </p>
        </Reveal>

        {/* Expanding Accordion Slider Layout (Pehle Jaisa) */}
        <div className="flex flex-col gap-3.5 lg:h-[540px] lg:flex-row">
          {items.map((d, i) => {
            const active = open === i;
            return (
              <button
                key={d.id}
                type="button"
                onMouseEnter={() => setOpen(i)}
                onClick={() => setOpen(i)}
                className={`group relative cursor-pointer overflow-hidden rounded-3xl text-left text-white transition-all duration-700 ease-out ${
                  active ? 'h-[380px] lg:flex-[3.2]' : 'h-24 lg:flex-1'
                } lg:h-auto`}
              >
                {/* Authentic HD Project Image - Zero Showroom */}
                <img
                  src={d.image}
                  alt={d.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 transition-colors duration-700 ${
                    active
                      ? 'bg-gradient-to-t from-[#04170F]/95 via-[#04170F]/40 to-transparent'
                      : 'bg-[#04170F]/65 hover:bg-[#04170F]/50'
                  }`}
                />

                {/* Card Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 z-10">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-2xl sm:text-3xl font-semibold text-gold">
                      {d.id}
                    </span>
                    <span className="rounded-full border border-white/30 bg-black/40 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest backdrop-blur-md">
                      {d.tag}
                    </span>
                  </div>

                  <h3 className="mt-2 font-serif text-lg sm:text-xl lg:text-2xl font-semibold leading-snug">
                    {d.title}
                  </h3>

                  <div className={`grid transition-all duration-500 ${active ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <p className="overflow-hidden text-xs sm:text-sm leading-relaxed text-emerald-50/90 lg:max-w-md">
                      <span className="mt-2.5 block">{d.desc}</span>
                    </p>
                  </div>
                </div>

                {/* Top-Right Arrow Action */}
                <span
                  className={`absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-gold text-[#04170F] transition-all duration-500 shadow-md ${
                    active ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                  }`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
