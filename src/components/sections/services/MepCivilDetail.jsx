import { ShieldCheck, Clock, FileCheck } from 'lucide-react';
import Reveal from '../../common/Reveal';

const points = [
  { icon: ShieldCheck, title: 'In-House MEP Engineering', description: 'Coordinated conduit, ducting and power distribution drawings that eliminate clashes before site execution begins.' },
  { icon: Clock, title: 'Daily Milestones & Open Dashboards', description: 'Real-time client progress updates with photo logs, material testing certificates and transparent delivery milestones.' },
  { icon: FileCheck, title: 'Handover & Post-Handover Warranty', description: 'As-built drawings, operations manuals and 12-month preventative maintenance coverage.' },
];

export default function MepCivilDetail() {
  return (
    <section id="mep-detail" className="overflow-hidden bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <Reveal direction="left" className="relative lg:col-span-6">
          <img src="/images/hd/image-32-cubicle-fitout-installation.jpg" alt="Turnkey site execution" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl" loading="lazy" />
        </Reveal>

        <div className="lg:col-span-6">
          <Reveal>
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-700">MEP & Civil Execution</span>
            <h2 className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-[#0D3B2E] sm:text-5xl">
              Engineering rigor, <span className="italic text-emerald-700">visible every day.</span>
            </h2>
          </Reveal>
          <div className="mt-9 space-y-3">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i * 110} className="group flex gap-5 rounded-2xl border border-stone-200 bg-[#FAFCF9] p-5 transition-all duration-300 hover:translate-x-2 hover:border-gold hover:bg-white hover:shadow-lg">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0D3B2E] text-gold"><p.icon className="h-5 w-5" /></span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#0D3B2E]">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-stone-500">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
