import Reveal from '../../common/Reveal';

const steps = [
  { num: '01', title: '10-Day Pre-Audit & Locked BOQ', description: 'Site laser survey, 3D clash-detection and locked-in line-item procurement before physical construction begins.' },
  { num: '02', title: 'Non-Stop Schedule Tracking', description: 'Real-time milestone dashboard with weekly site walk-throughs, live photo logs and verified material testing certificates.' },
  { num: '03', title: 'Factory-Controlled Joinery', description: 'High-density desking and bespoke millwork pre-assembled and inspected in our factory before white-glove delivery.' },
  { num: '04', title: 'Snag-Free Handover & 12-Month SLA', description: 'Pre-commissioned MEP, as-built CAD drawings, operational manuals and a dedicated 12-month warranty team.' },
];

export default function ProjectsDeliveryAssurance() {
  return (
    <section className="relative isolate overflow-hidden bg-[#06221A] py-20 text-white sm:py-28">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <img src="/images/hd/image-34-brick-arch-building-night.jpg" alt="" className="h-full w-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06221A] via-[#06221A]/85 to-[#06221A]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">Delivery Assurance</span>
          <h2 className="mt-3 font-serif text-3xl font-medium leading-tight sm:text-5xl">
            How every project reaches <span className="italic text-gold-gradient">on-time handover.</span>
          </h2>
        </Reveal>
        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent lg:block" />
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 130} className="group relative text-center lg:text-left">
              <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 bg-[#0D3B2E] font-serif text-xl font-semibold text-gold transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-[#06221A] lg:mx-0">
                {s.num}
              </div>
              <h3 className="font-serif text-lg font-semibold leading-snug">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-emerald-50/70">{s.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
