import Reveal from '../../common/Reveal';

const milestones = [
  { year: '2000', title: 'Establishment and Furniture Pioneer', desc: 'Founded by Dharmendra Surelia in Bharuch, establishing early benchmarks in commercial furniture retailing.', tag: 'Foundation' },
  { year: '2008', title: 'Architectural Expansion', desc: 'Expanding from furniture supply into full space planning and commercial interior architecture.', tag: 'Design Evolution' },
  { year: '2016', title: 'Turnkey Project Execution', desc: 'Integrating in-house project management (PMC) and general contracting under one unified contract.', tag: 'Contracting' },
  { year: '2021', title: 'Institutional Alliances', desc: 'Delivering landmark projects for high-speed rail, healthcare hospitals and Fortune 500 corporations.', tag: 'Scale & Growth' },
  { year: 'Present', title: 'Future-Ready Workplaces', desc: 'Pioneering sustainable, ergonomic and tech-integrated commercial environments across India.', tag: 'Our Future Vision' },
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="relative isolate overflow-hidden bg-gradient-to-b from-[#E2F2E9] via-[#D5ECDF] to-[#E2F2E9] py-20 sm:py-28 border-y border-emerald-800/15">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <Reveal className="mx-auto mb-16 max-w-4xl text-center sm:mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-800/30 bg-emerald-900/15 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-900 mb-3 backdrop-blur-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-700 animate-pulse" />
            Milestones
          </div>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[44px] font-medium leading-tight tracking-tight text-[#0D3B2E] whitespace-normal lg:whitespace-nowrap [text-wrap:nowrap]">
            A quarter-century of{' '}
            <span className="italic text-emerald-800">design evolution.</span>
          </h2>
        </Reveal>

        {/* Timeline Path & Items */}
        <div className="relative">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-transparent via-[#0D3B2E]/40 to-transparent lg:left-1/2" />

          <div className="space-y-12 sm:space-y-16">
            {milestones.map((m, i) => {
              const left = i % 2 === 0;
              return (
                <div key={m.year} className="relative grid grid-cols-1 lg:grid-cols-2 lg:gap-24">
                  <span className="absolute left-4 top-8 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-[#0D3B2E] ring-8 ring-emerald-700/25 lg:left-1/2" />
                  <Reveal
                    direction={left ? 'left' : 'right'}
                    className={`pl-12 lg:pl-0 ${left ? 'lg:col-start-1 lg:text-right' : 'lg:col-start-2'}`}
                  >
                    <div className="font-serif text-5xl sm:text-7xl lg:text-8xl font-semibold leading-none text-outline-green tracking-tight select-none">{m.year}</div>
                    <div className="mt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-800">{m.tag}</div>
                    <h3 className="mt-2 font-serif text-xl font-bold sm:text-2xl text-[#0D3B2E]">{m.title}</h3>
                    <p className={`mt-2 max-w-md text-sm leading-relaxed text-[#184638] ${left ? 'lg:ml-auto' : ''}`}>{m.desc}</p>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
