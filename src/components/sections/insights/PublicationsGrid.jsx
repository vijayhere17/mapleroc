import { useState } from 'react';
import { ArrowUpRight, Clock, BookOpen } from 'lucide-react';
import Reveal from '../../common/Reveal';

const filterCategories = [
  { id: 'all', label: 'All Articles' },
  { id: 'mep', label: 'Turnkey & MEP Engineering' },
  { id: 'ergonomics', label: 'Ergonomics & Wellness' },
  { id: 'governance', label: 'Governance & Procurement' },
  { id: 'standards', label: 'Regulatory & Standards' },
];

const publications = [
  {
    id: 1,
    group: 'ergonomics',
    category: 'ERGONOMICS & HEALTH',
    readTime: '7 min read',
    tag: 'Workplace Health',
    src: '/images/hd/showroom-ergonomic-seating.jpg',
    title: 'The Science of Ergonomic Task Seating: Deconstructing BIFMA X5.1 & European Active Lumbar Standards in 24/7 Control Rooms',
    description:
      'How pelvic support systems, zero-pressure seat contours, and dynamic recline geometry mitigate chronic musculoskeletal disorders in high-intensity commercial teams.',
  },
  {
    id: 2,
    group: 'standards',
    category: 'REGULATORY CODES',
    readTime: '9 min read',
    tag: 'Contracting Protocols',
    src: '/images/hd/image-11-reception-nhsrcl.jpg',
    title: 'Navigating CPWD & NBC Fire Codes: Material Integrity and Certification Protocols for Institutional Facilities',
    description:
      'A comprehensive checklist for statutory fire clearance, flame-retardant joinery specs, smoke damper positioning, and independent laboratory material test certification.',
  },
  {
    id: 3,
    group: 'mep',
    category: 'MEP & CLEANROOM',
    readTime: '6 min read',
    tag: 'Cleanroom Standards',
    src: '/images/hd/image-18-clinic-lobby-reception.jpg',
    title: 'Acoustic Integration Versus High Air-Changes: Balancing Noise Criteria (NC 30-35) in Healthcare Cleanrooms',
    description:
      'Resolving the acoustic paradox of high-velocity laminar airflow and patient auditory recuperation in super-speciality hospitals and ICU wings.',
  },
  {
    id: 4,
    group: 'mep',
    category: 'POWER INFRASTRUCTURE',
    readTime: '8 min read',
    tag: 'Technical Infrastructure',
    src: '/images/hd/image-3-conference-hall.jpg',
    title: 'Mitigating Harmonic Distortion in High-Density Trading Floors: Power Quality Engineering in Commercial Banking HQs',
    description:
      'Power distribution architecture, active harmonic filtering, and dedicated UPS busways to safeguard multi-screen algorithmic desks from micro-outages.',
  },
  {
    id: 5,
    group: 'ergonomics',
    category: 'CIRCULARITY & LEASING',
    readTime: '10 min read',
    tag: 'Sustainable Execution',
    src: '/images/hd/image-30-blue-modular-workstations.jpg',
    title: 'Optimizing High-Density Modular Workstations for Zero-Landfill Demountability and Relocation Economy',
    description:
      'Life-cycle cost analysis of modular aluminum desking versus stick-built drywall cubicles over a 15-year corporate lease duration.',
  },
  {
    id: 6,
    group: 'governance',
    category: 'COMMERCIAL GOVERNANCE',
    readTime: '5 min read',
    tag: 'Commercial Strategy',
    src: '/images/hd/image-10-office-cabin.jpg',
    title: 'The 17-Day BOQ Freezing Protocol: Why Fixed-Price Turnkey Contracts Eliminate Dispute Runarounds in CapEx',
    description:
      'How pre-contract 3D laser surveys and line-item locked pricing protect enterprise CFOs from post-award contractor variation claims.',
  },
  {
    id: 7,
    group: 'governance',
    category: 'SUPPLY CHAIN & OEM',
    readTime: '6 min read',
    tag: 'Enterprise Procurement',
    src: '/images/hd/image-1-meeting-room.jpg',
    title: 'Strategic OEM Vendor Consolidation: Eliminating Supply-Chain Friction in Multi-Location Corporate Rollouts',
    description:
      'Empirical protocols for direct factory procurement, milestone fabrication tracking, and locked lead-time SLAs across pan-India regional corporate offices.',
  },
  {
    id: 8,
    group: 'standards',
    category: 'ACOUSTIC ENGINEERING',
    readTime: '8 min read',
    tag: 'Acoustic Compliance',
    src: '/images/hd/image-31-large-auditorium-balcony.jpg',
    title: 'NRC 0.85+ Acoustic Decoupling Standards: Sound Isolation Architecture in Executive Auditoria & Boardrooms',
    description:
      'Engineering decoupled drywall partitions, perimeter resilient channels, and micro-perforated wood veneer absorbers for confidential executive boardrooms.',
  },
  {
    id: 9,
    group: 'mep',
    category: 'HVAC & STERILE PROTOCOLS',
    readTime: '9 min read',
    tag: 'Healthcare Engineering',
    src: '/images/hd/image-16-hospital-icu-ward.jpg',
    title: 'Precision Pressure Cascades and Dual-Redundant HVAC Systems in Super-Speciality Hospital ICU Wings',
    description:
      'Balancing HEPA filtration arrays, positive/negative infection isolation suites, and automated air-velocity dampers to ISO Class 7 healthcare guidelines.',
  },
];

export default function PublicationsGrid({ activeFilter: externalFilter, onSelectFilter: externalOnSelect }) {
  const [internalFilter, setInternalFilter] = useState('all');

  const currentFilter = externalFilter !== undefined ? externalFilter : internalFilter;
  const handleFilterSelect = (id) => {
    if (externalOnSelect) {
      externalOnSelect(id);
    } else {
      setInternalFilter(id);
    }
  };

  // Dynamically calculate REAL publication counts
  const getCategoryCount = (id) => {
    if (id === 'all') return publications.length;
    return publications.filter((p) => p.group === id).length;
  };

  const filteredPublications =
    currentFilter === 'all'
      ? publications
      : publications.filter((p) => p.group === currentFilter);

  return (
    <section id="publications-grid" className="bg-[#FAFCF9] py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header: Headline & Paragraph in ONE single line on desktop */}
        <Reveal className="mb-10 sm:mb-12">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-700">
            The Archive
          </span>
          <h2 className="mt-2.5 font-serif text-3xl sm:text-4xl lg:text-[44px] font-medium leading-tight tracking-tight text-[#0D3B2E] whitespace-normal lg:whitespace-nowrap [text-wrap:nowrap]">
            Latest spatial <span className="italic text-emerald-700">publications & research archive.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600 whitespace-normal lg:whitespace-nowrap [text-wrap:nowrap]">
            Direct insights from our senior project directors, joinery fabricators, and on-site MEP engineers.
          </p>

          {/* Real Count Filter Pills positioned directly below the Subtitle */}
          <div className="mt-7 flex flex-wrap items-center gap-2">
            {filterCategories.map((cat) => {
              const active = currentFilter === cat.id;
              const count = getCategoryCount(cat.id);
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleFilterSelect(cat.id)}
                  className={`cursor-pointer rounded-full border px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-[13px] font-semibold transition-all duration-300 ${
                    active
                      ? 'border-[#0D3B2E] bg-[#0D3B2E] text-white shadow-md ring-2 ring-emerald-500/20'
                      : 'border-stone-300 bg-white text-stone-700 hover:-translate-y-0.5 hover:border-emerald-600 hover:text-emerald-900'
                  }`}
                >
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Visual Publication Cards with Real HD Photos */}
        <div key={currentFilter} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredPublications.map((pub, i) => (
            <Reveal
              key={pub.id}
              delay={i * 60}
              className="group flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white shadow-xs transition-all duration-300 hover:shadow-xl hover:border-emerald-400/60 hover:-translate-y-1.5"
            >
              {/* Photo Header */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                <img
                  src={pub.src}
                  alt={pub.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Top Badges */}
                <span className="absolute top-3 left-3 flex h-7 w-7 items-center justify-center rounded-xl bg-white/95 font-serif text-xs font-bold text-[#0D3B2E] shadow-sm backdrop-blur-xs">
                  0{pub.id}
                </span>

                <span className="absolute top-3 right-3 rounded-full border border-white/20 bg-black/60 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-emerald-200 backdrop-blur-md">
                  {pub.category.split(' ')[0]}
                </span>

                <span className="absolute bottom-2.5 left-3 text-[10px] font-medium text-white/90 flex items-center gap-1">
                  <Clock className="h-3 w-3 text-gold" />
                  {pub.readTime}
                </span>
              </div>

              {/* Content Area */}
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-emerald-800 mb-1.5">
                    {pub.tag}
                  </div>

                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#0D3B2E] group-hover:text-emerald-700 transition-colors leading-snug mb-2.5">
                    {pub.title}
                  </h3>

                  <p className="text-stone-500 text-xs sm:text-[13px] leading-relaxed line-clamp-3">
                    {pub.description}
                  </p>
                </div>

                {/* Action Link */}
                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 group-hover:text-emerald-600 transition-colors"
                  >
                    <span>Read Whitepaper Analysis</span>
                    <ArrowUpRight className="h-4 w-4 text-emerald-700 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <BookOpen className="h-3.5 w-3.5 text-stone-400 group-hover:text-emerald-600" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
