import { Layers, Cpu, Wrench } from 'lucide-react';
import Reveal from '../../common/Reveal';

const phases = [
  { icon: Layers, step: '01', title: 'Space Planning & Ergonomics', description: 'Workplace density mapping, line-of-sight acoustic studies and anthropometric sizing for maximum occupant wellbeing.' },
  { icon: Cpu, step: '02', title: 'CNC Joinery & Factory Build', description: 'Precision automated cutting, zero-joint PUR edge-banding and commercial-grade high pressure laminate lamination.' },
  { icon: Wrench, step: '03', title: 'White-Glove On-Site Assembly', description: 'Factory-certified installation crew, clean-room assembly protocols and a comprehensive snag-free handover inspection.' },
];

export default function FurnitureArchitectureDetail() {
  return (
    <section id="furniture-detail" className="relative isolate overflow-hidden bg-[#06221A] py-20 text-white sm:py-28">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <img src="/images/hd/image-9-workshop-factory.jpg" alt="" className="h-full w-full object-cover opacity-30" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06221A] via-[#06221A]/85 to-[#06221A]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">Furniture & Architecture</span>
          <h2 className="mt-3 font-serif text-3xl font-medium leading-tight sm:text-5xl">
            From drawing board to <span className="italic text-gold-gradient">handover day.</span>
          </h2>
        </Reveal>

        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-[46px] hidden h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent md:block" />
          {phases.map((p, i) => (
            <Reveal key={p.step} delay={i * 150} className="group relative text-center">
              <div className="relative mx-auto mb-6 flex h-[92px] w-[92px] items-center justify-center rounded-full border border-gold/40 bg-[#0D3B2E] shadow-[0_0_0_10px_rgba(52,211,153,0.08)] transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-[#06221A]">
                <p.icon className="h-8 w-8 text-gold transition-colors group-hover:text-[#06221A]" />
                <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-gold font-serif text-sm font-bold text-[#06221A]">{p.step}</span>
              </div>
              <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-md transition-colors duration-300 group-hover:border-gold/50">
                <h3 className="font-serif text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-emerald-50/70">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
