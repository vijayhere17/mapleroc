import { Landmark, Building2, Scale, Activity } from 'lucide-react';
import Reveal from '../../common/Reveal';

export default function SpatialDisciplinesSection() {
  const disciplines = [
    {
      icon: Landmark,
      title: 'Government & PSUs',
      src: '/images/hd/image-11-reception-nhsrcl.jpg',
      description:
        'High-security spatial zoning, NBC fire compliance, CPWD-standard material testing, and grand civic auditoria execution.',
      clients: ['NHSRCL', 'NHAI', 'SBI', 'GNFC'],
    },
    {
      icon: Building2,
      title: 'Corporate Campuses',
      src: '/images/hd/image-12-open-workstations.jpg',
      description:
        'High-density modular workstation floors, executive board suites, agile huddle zones, and acoustic cafeterias.',
      clients: ['Reliance', 'AM/NS', 'L&T', 'Adani'],
    },
    {
      icon: Scale,
      title: 'Financial & Legal',
      src: '/images/hd/image-3-conference-hall.jpg',
      description:
        'Acoustically insulated demountable glass partitioning, executive partner chambers, and secure transaction hubs.',
      clients: ['HDFC Bank', 'SBI Capital', 'Axis', 'Kotak'],
    },
    {
      icon: Activity,
      title: 'Healthcare & Universities',
      src: '/images/hd/image-17-hospital-reception-vitrag.jpg',
      description:
        'Cleanroom clinical environments, antimicrobial solid surfaces, tiered lecture auditoriums, and medical laboratories.',
      clients: ['Vitrag Hospital', 'Apex Clinic', 'Zydus', 'Charusat'],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAFCF9] border-y border-[#E3ECE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header: Headline & Paragraph in ONE single line on desktop */}
        <Reveal className="mb-12 sm:mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Mapped Spatial Capability
          </span>
          <h2 className="mt-2.5 font-serif text-3xl sm:text-4xl lg:text-[44px] font-medium leading-tight tracking-tight text-[#0D3B2E] whitespace-normal lg:whitespace-nowrap [text-wrap:nowrap]">
            Specialized spatial disciplines,{' '}
            <span className="italic text-emerald-700">calibrated for enterprise.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600 whitespace-normal lg:whitespace-nowrap [text-wrap:nowrap]">
            Tailored spatial execution calibrated to the rigorous operational and statutory demands of distinct enterprise sectors.
          </p>
        </Reveal>

        {/* 4 Architectural Cards with High-Definition Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {disciplines.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                delay={idx * 80}
                className="group flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white shadow-xs transition-all duration-300 hover:shadow-xl hover:border-emerald-400/60 hover:-translate-y-1.5"
              >
                {/* Photo Header */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-stone-100">
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-xl bg-white/95 text-[#0D3B2E] shadow-sm backdrop-blur-xs">
                    <Icon className="w-4 h-4 text-emerald-700" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#0D3B2E] group-hover:text-emerald-700 transition-colors mb-2 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-stone-500 text-xs sm:text-[13px] leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex flex-wrap gap-1.5">
                    {item.clients.map((c) => (
                      <span
                        key={c}
                        className="px-2.5 py-0.5 rounded-full bg-[#F4F7F5] text-stone-600 text-[10px] font-medium"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
