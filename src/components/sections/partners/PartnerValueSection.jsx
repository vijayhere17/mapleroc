import { DollarSign, ShieldCheck, Cpu, Box, Clock, HeartHandshake } from 'lucide-react';
import Reveal from '../../common/Reveal';

const values = [
  { icon: DollarSign, title: 'Direct Factory Pricing', description: 'Eliminate dealer markups and middleman margins. Save 15-25% on volume commercial furniture procurement through our direct master OEM agreements.' },
  { icon: ShieldCheck, title: 'Genuine & Certified Warranty', description: 'Every workstation, task chair and acoustic system is backed by authentic manufacturer warranty certificates and traceable serial numbers.' },
  { icon: Cpu, title: 'Integrated Civil & MEP Fitout', description: 'Zero disputes between furniture vendors and site contractors. We coordinate raceways, power feeds and data drops directly.' },
  { icon: Box, title: 'On-Site Mockups & Live Demos', description: 'Evaluate ergonomics and finishes before volume orders — full-scale mockups inside your actual site shell.' },
  { icon: Clock, title: 'Global Lead-Time Assurance', description: 'Priority container allocation and direct factory dispatch for delivery dates aligned with your handover SLA.' },
  { icon: HeartHandshake, title: 'Dedicated OEM Maintenance SLA', description: 'Rapid-response warranty servicing, reconfigurations, fabric protection and genuine OEM spare parts.' },
];

export default function PartnerValueSection() {
  const [lead, ...rest] = values;
  return (
    <section className="relative isolate overflow-hidden bg-[#06221A] py-20 text-white sm:py-28">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-lines" />
        <div className="absolute -right-24 top-10 h-[26rem] w-[26rem] rounded-full bg-gold/10 blur-3xl animate-glow" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 sm:mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">The Partnership Advantage</span>
          <h2 className="mt-2.5 font-serif text-3xl sm:text-4xl lg:text-[44px] font-medium leading-tight tracking-tight text-white whitespace-normal lg:whitespace-nowrap [text-wrap:nowrap]">
            Why buy through MapleRoc <span className="italic text-gold-gradient">instead of a dealer.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-emerald-100/70 whitespace-normal lg:whitespace-nowrap [text-wrap:nowrap]">
            Single-contract accountability, factory-direct volume pricing, and zero friction between civil fitout and loose furniture.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
          <Reveal direction="zoom" className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gold to-[#059669] p-8 text-[#06221A] md:col-span-3 md:row-span-2 sm:p-10">
            <lead.icon className="h-12 w-12" />
            <div className="mt-24 font-serif text-6xl font-semibold sm:text-7xl">15–25%</div>
            <h3 className="mt-2 font-serif text-2xl font-semibold">{lead.title}</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#06221A]/80">{lead.description}</p>
          </Reveal>
          {rest.map((v, i) => (
            <Reveal key={v.title} delay={(i + 1) * 90} className={`group rounded-3xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:bg-white/[0.12] ${i < 2 ? 'md:col-span-3' : 'md:col-span-2'}`}>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold transition-colors group-hover:bg-gold group-hover:text-[#06221A]"><v.icon className="h-5 w-5" /></span>
              <h3 className="mt-4 font-serif text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-emerald-50/70 sm:text-[13px]">{v.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
