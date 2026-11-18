import { ArrowRight, ShieldCheck, Award } from 'lucide-react';
import Reveal from '../../common/Reveal';

export default function BrandGiantsSection() {
  const brands = [
    {
      id: 'sos',
      name: 'SOS',
      tag: 'Spacewood Office Solutions',
      origin: 'Premier Modular Workplace Manufacturer · India',
      description:
        'Modern modular office furniture, workstations, collaborative spaces, seating, and storage solutions engineered for enterprise density, rapid reconfiguration, and commercial durability.',
      features: [
        {
          title: 'Modular Workstation Ecosystems',
          text: 'High-density desk configurations with integrated concealed cable conduits, acoustic screens, and customizable finishes.',
        },
        {
          title: 'Collaborative & Storage Solutions',
          text: 'Agile team tables, credenzas, mobile pedestals, and architectural filing systems tailored for modern corporate floorplates.',
        },
      ],
      advantage:
        'Direct factory procurement, verified milestone manufacturing, volume tier pricing, and seamless on-site installation coordinated with civil fitout.',
      linkText: 'Explore SOS Workstations & Modular Systems',
      image: '/images/hd/image-12-open-workstations.jpg',
      imageAlt: 'SOS Spacewood Modern Modular Office Workstations',
      pills: ['Modular Workstations', 'Collaborative Hubs', 'Storage Solutions'],
      reversed: false,
    },
    {
      id: 'haworth',
      name: 'HAWORTH',
      tag: 'Premium Workplace Furniture',
      origin: 'Headquarters: Holland, Michigan, USA · Founded 1948',
      description:
        'Premium international workplace furniture and ergonomic office solutions. Renowned globally for performance task seating, architectural movable walls, and circular-economy sustainable craftsmanship.',
      features: [
        {
          title: 'Ergonomic Seating Science',
          text: 'Patented Pelvic Support Systems, 4D adjustable armrests, and certified weight-activated recline mechanisms.',
        },
        {
          title: 'Sustainable Global Benchmark',
          text: 'Zero-waste manufacturing, circular economy certification, and GREENGUARD Gold accredited indoor air quality.',
        },
      ],
      advantage:
        'Direct OEM procurement, original manufacturer warranty certificates, volume pricing tiers, and white-glove trained assembly teams on-site.',
      linkText: 'Explore Haworth Ergonomic Seating & Systems',
      image: '/images/hd/showroom-ergonomic-seating.jpg',
      imageAlt: 'Haworth Premium Ergonomic Workplace Seating',
      pills: ['Ergonomic Seating', 'Global 12-Year Warranty', 'Architectural Walls'],
      reversed: true,
    },
    {
      id: 'geeken',
      name: 'Geeken',
      tag: 'Seating Collection',
      origin: 'Commercial & Institutional Furniture Manufacturer · India',
      description:
        'Office furniture, institutional furniture, seating, and modular furniture solutions built for rigorous commercial lifespans, orthopedic support, and heavy-duty institutional usage.',
      features: [
        {
          title: 'Comprehensive Seating Collection',
          text: 'High-back managerial chairs, breathable mesh task seating, visitor armchairs, and multi-tier auditorium seating.',
        },
        {
          title: 'Institutional & Office Durability',
          text: 'Heavy-duty steel frameworks, molded high-density foam, and wear-resistant commercial grade upholstery.',
        },
      ],
      advantage:
        'Factory-tier pricing, immediate dispatch availability for fast-track fitouts, zero mid-life failure rates, and dedicated warranty support.',
      linkText: 'Explore Geeken Seating Collection & Spec Sheets',
      image: '/images/hd/showroom-collaboration-zone.jpg',
      imageAlt: 'Geeken Seating Collection and Modular Solutions',
      pills: ['Office Seating', 'Institutional Systems', 'Modular Furniture'],
      reversed: false,
    },
  ];

  return (
    <section id="brand-giants" className="py-16 sm:py-24 bg-[#FAFCF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Headline & Paragraph in ONE single line on desktop */}
        <Reveal className="mb-12 sm:mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Direct Alliance Portfolio
          </span>
          <h2 className="mt-2.5 font-serif text-3xl sm:text-4xl lg:text-[44px] font-medium leading-tight tracking-tight text-[#0D3B2E] whitespace-normal lg:whitespace-nowrap [text-wrap:nowrap]">
            Three manufacturing giants,{' '}
            <span className="italic text-emerald-700">one direct delivery protocol.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600 whitespace-normal lg:whitespace-nowrap [text-wrap:nowrap]">
            Direct master agreements with SOS (Spacewood), Haworth, and Geeken eliminate dealer markups and guarantee authentic factory warranties.
          </p>
        </Reveal>

        {/* 3 Large Brand Cards */}
        <div className="space-y-12 sm:space-y-16">
          {brands.map((brand, idx) => (
            <Reveal
              key={brand.id}
              id={brand.id}
              delay={idx * 100}
              className="bg-white rounded-3xl border border-stone-200/90 shadow-md p-6 sm:p-8 lg:p-12 scroll-mt-28 transition-all duration-300 hover:shadow-xl hover:border-emerald-500/40"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  brand.reversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                
                {/* Visual Image Side */}
                <div
                  className={`lg:col-span-5 ${
                    brand.reversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[5/4] bg-stone-100 border border-stone-200/80 shadow-md">
                    <img
                      src={brand.image}
                      alt={brand.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Bottom Feature Pills */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 flex flex-wrap gap-1.5">
                      {brand.pills.map((pill) => (
                        <span
                          key={pill}
                          className="px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-full text-[10px] sm:text-[11px] font-semibold text-[#0D3B2E] border border-white/80 shadow-xs"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Text & Content Side */}
                <div
                  className={`lg:col-span-7 flex flex-col justify-between ${
                    brand.reversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div>
                    {/* Brand Badge & Origin */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-2">
                      <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#0D3B2E]">
                        {brand.name}
                      </span>
                      <span className="px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-semibold tracking-wide border border-emerald-200/60">
                        {brand.tag}
                      </span>
                    </div>

                    <p className="text-[11px] sm:text-xs text-stone-400 font-medium mb-3">
                      {brand.origin}
                    </p>

                    <p className="text-stone-600 text-xs sm:text-[14px] leading-relaxed mb-6">
                      {brand.description}
                    </p>

                    {/* 2 Feature Boxes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-5">
                      {brand.features.map((feat) => (
                        <div
                          key={feat.title}
                          className="p-4 rounded-2xl bg-[#F8FAF9] border border-stone-200/80 transition-colors hover:border-emerald-300"
                        >
                          <div className="flex items-center gap-1.5 mb-1.5 text-emerald-700">
                            <ShieldCheck className="w-4 h-4 text-emerald-600" />
                            <h4 className="text-xs sm:text-[13px] font-semibold text-[#0D3B2E]">
                              {feat.title}
                            </h4>
                          </div>
                          <p className="text-stone-500 text-[11px] sm:text-xs leading-relaxed">
                            {feat.text}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Green Callout Banner */}
                    <div className="p-4 rounded-2xl bg-[#F1F6F3] border border-[#D5E4DB] mb-6 flex items-start gap-3">
                      <Award className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-[#0D3B2E] block mb-0.5">
                          The MapleRoc {brand.name} Advantage:
                        </span>
                        <p className="text-stone-700 text-xs sm:text-[13px] leading-relaxed">
                          {brand.advantage}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <a
                      href="#contact"
                      className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0D3B2E] hover:text-emerald-700 transition-colors"
                    >
                      <span>{brand.linkText}</span>
                      <ArrowRight className="w-4 h-4 text-gold transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>

                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
