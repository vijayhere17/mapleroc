import { Briefcase, ShieldCheck, Gem, Clock, Cpu, HeartHandshake } from 'lucide-react';
import Reveal from '../../common/Reveal';

const advantages = [
  { icon: Briefcase, title: '25+ Years of Proven Leadership', description: 'Corporate, industrial and institutional spaces with an unmatched track record across Western India.' },
  { icon: ShieldCheck, title: 'Single-Point Accountability', description: 'One contract, one point of contact, zero blame shifting between architects, MEP vendors, civil contractors and joiners.' },
  { icon: Gem, title: 'Curated Brand Alliances', description: 'Direct OEM access ensuring genuine warranty certificates, volume pricing and priority dispatch.' },
  { icon: Clock, title: 'Guaranteed Timelines', description: 'Strict milestone tracking with penalty-backed handover dates committed in our master commercial contract.' },
  { icon: Cpu, title: 'In-House MEP Coordination', description: 'HVAC, electrical and structured cabling integrated into architectural layouts before site work starts.' },
  { icon: HeartHandshake, title: 'Dedicated Post-Handover Care', description: '12-month operational warranty with rapid SLA response for snagging, maintenance and additions.' },
];

export default function WhyChooseServices() {
  return (
    <section className="bg-[#F3F8F5] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-medium leading-tight tracking-tight text-[#0D3B2E] whitespace-normal lg:whitespace-nowrap [text-wrap:nowrap]">
            Why leaders <span className="italic text-emerald-700">choose MapleRoc.</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-stone-500">
            Six commitments written into every master contract we sign.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-10 gap-y-2 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 100} className="group relative overflow-hidden border-t border-[#0D3B2E]/20 py-8 transition-colors duration-300 hover:border-gold">
              <span className="font-serif text-8xl font-semibold leading-none text-outline-dark transition-transform duration-500 group-hover:-translate-y-1">0{i + 1}</span>
              <div className="mt-2 flex items-start gap-4">
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0D3B2E] text-gold transition-transform duration-300 group-hover:rotate-6"><a.icon className="h-5 w-5" /></span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#0D3B2E]">{a.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-500">{a.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
