import SectionBadge from '../common/SectionBadge';
import { brandPartners } from '../../data/siteData';
import { ArrowUpRight } from 'lucide-react';

export default function BrandPartnersSection() {
  return (
    <section id="partners" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <SectionBadge text="Partnerships" className="mb-2 sm:mb-3" />
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#0D3B2E] font-medium tracking-tight mb-3">
            Our Trusted Brand Partners
          </h2>
          <p className="text-xs sm:text-base text-stone-500 leading-relaxed">
            We collaborate with premier international manufacturers to bring certified ergonomic furniture, acoustic panels, and sustainable workspace systems directly to your project.
          </p>
        </div>

        {/* 3 Partner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {brandPartners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Brand Showcase Photo */}
                {partner.image && (
                  <div className="relative aspect-16/10 sm:aspect-16/9 overflow-hidden bg-stone-100">
                    <img
                      src={partner.image}
                      alt={`${partner.name} - ${partner.subtitle}`}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-5 sm:p-6 lg:p-7">
                  {/* Brand Title & Subtitle line on ONE single line */}
                  <div className="flex items-baseline justify-between gap-2 pb-3 mb-3 border-b border-stone-100 whitespace-nowrap overflow-hidden">
                    <h3 className="font-sans font-bold text-lg sm:text-xl lg:text-2xl text-[#0D3B2E] tracking-tight shrink-0">
                      {partner.name}
                    </h3>
                    <span className="font-sans text-xs sm:text-[13px] text-stone-500 font-medium truncate">
                      {partner.subtitle}
                    </span>
                  </div>

                  <p className="font-sans text-xs sm:text-[13.5px] text-stone-600 leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </div>

              {/* Bottom Explore Link */}
              <div className="px-5 sm:px-6 lg:px-7 pb-5 sm:pb-6 pt-1">
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D3B2E] group-hover:text-emerald-700 uppercase tracking-wider pt-3 border-t border-stone-100 w-full"
                >
                  <span>Explore Partner</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-auto" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
