import { CheckCircle2, Sparkles } from 'lucide-react';
import Reveal from '../../common/Reveal';

export default function PartnerFinishesSection() {
  const points = [
    {
      title: 'BIFMA X5.1 & EN 1335 Certified',
      text: 'Rigorously tested for structural durability, cyclic drop loads, and 24/7 commercial performance.',
    },
    {
      title: 'Zero-VOC & Low-Emission Fabrics',
      text: 'GREENGUARD Gold accredited upholstery and low-odor adhesives for healthy indoor office air quality.',
    },
    {
      title: 'Custom Factory RAL Powder-Coating',
      text: 'Exact corporate brand color matching on workstation steel legs, beams, and cable raceways.',
    },
    {
      title: 'Fire Retardant (FR) & Stain Resistance',
      text: 'Commercial contract-grade fabrics treated with nanotech spill-repellent barriers.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAFCF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Sample Board & Visual */}
          <Reveal direction="left" className="lg:col-span-5">
            <div className="group relative rounded-3xl overflow-hidden shadow-2xl border border-stone-200/90 bg-stone-100 aspect-[4/3] sm:aspect-[5/4]">
              <img
                src="/images/hd/image-13-luxury-lounge-1.jpg"
                alt="MapleRoc architectural material finishes and craft library"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/80 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="h-3.5 w-3.5 text-emerald-700" />
                  <span className="text-[10px] font-bold text-[#0D3B2E] uppercase tracking-wider">
                    Craft & Material Archives
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] font-semibold text-stone-800 leading-snug">
                  Original OEM sample swatches, natural solid timber veneers, and custom powder-coat finishes.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Copy & Checklist */}
          <Reveal direction="right" className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-800/20 bg-emerald-900/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-800 w-fit mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
              Materials & Testing
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-tight text-[#0D3B2E] leading-tight mb-3">
              Curated finishes,{' '}
              <span className="italic text-emerald-700">uncompromising standards.</span>
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
              Every finish option in our portfolio is laboratory-tested for commercial abrasion resistance, fire safety (FR), and VOC emissions. We deliver physical sample boards directly to client architectural teams for tactile review.
            </p>

            {/* Checklist items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-xs transition-colors hover:border-emerald-300"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <h4 className="text-xs sm:text-[13px] font-semibold text-[#0D3B2E]">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-stone-500 text-xs leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

          </Reveal>

        </div>
      </div>
    </section>
  );
}
