import { useState } from 'react';
import { ArrowUpRight, ShieldCheck, Download, CheckCircle2, Building } from 'lucide-react';
import Reveal from '../../common/Reveal';

const spotlightClients = [
  {
    id: 'nhsrcl',
    name: 'National High Speed Rail Corp (NHSRCL)',
    acronym: 'NHSRCL',
    sector: 'Government Infrastructure & High-Speed Rail',
    location: 'Vadodara & Ahmedabad, Gujarat',
    scope: 'Full turnkey regional project secretariat covering double-height acoustic reception, executive boardroom suites, high-security data cabins, and civil MEP integration.',
    scale: '4,500 Sq.Ft · Complete Turnkey Fitout',
    src: '/images/hd/image-11-reception-nhsrcl.jpg',
    deliverables: [
      'NBC-Compliant Fire-Rated Partitioning',
      'Motorized AV Conference Tables',
      'Zero Handover Snags on Day 1',
    ],
    quote: 'MapleRoc delivered our high-speed rail regional administrative office in record time with exemplary finish quality.',
  },
  {
    id: 'amns',
    name: 'AM/NS India (ArcelorMittal Nippon Steel)',
    acronym: 'AM/NS',
    sector: 'Conglomerates & Heavy Industry',
    location: 'Hazira & Surat Industrial Complex',
    scope: 'Landmark corporate facade, executive administrative headquarters, metallurgical R&D training suites, and acoustic executive dining facilities.',
    scale: '32,000 Sq.Ft · Masterplan Campus Fitout',
    src: '/images/hd/image-22-amns-india-facade.jpg',
    deliverables: [
      'High-Durability Industrial Finishes',
      'Executive Leadership Lounge Joinery',
      'Fixed-Price Lump-Sum BOQ Execution',
    ],
    quote: 'From exterior architectural coordination to executive boardroom joinery, MapleRoc exhibited unmatched dedication.',
  },
  {
    id: 'reliance',
    name: 'Reliance Industries Limited (RIL)',
    acronym: 'RIL',
    sector: 'Conglomerates & Energy Infrastructure',
    location: 'Dahej & Jamnagar Facilities',
    scope: 'High-density executive workstation floors, meeting suites, acoustic wall paneling, and specialized mission-critical operations consoles.',
    scale: '120+ Workstations · Bespoke Joinery',
    src: '/images/hd/image-12-open-workstations.jpg',
    deliverables: [
      'Concealed High-Capacity Data Conduits',
      'Custom Factory-Crafted Desking',
      '100% Contract Milestone Compliance',
    ],
    quote: 'Precision engineering and factory-direct volume pricing delivered with zero mid-contract escalations.',
  },
  {
    id: 'lt',
    name: 'Larsen & Toubro (L&T)',
    acronym: 'L&T',
    sector: 'Engineering & Construction Megaprojects',
    location: 'Regional Engineering Headquarters',
    scope: 'Regional project headquarters, open engineering bullpens, acoustically isolated design review chambers, and executive leadership suites.',
    scale: '18,500 Sq.Ft · Full Civil & MEP Turnkey',
    src: '/images/hd/image-3-conference-hall.jpg',
    deliverables: [
      'Acoustic Walnut Wall Paneling (NRC 0.85)',
      'Single-Contract Turnkey MEP Integration',
      'Statutory Egress & Air Balancing Certified',
    ],
    quote: 'A trusted turnkey delivery partner that respects architectural detailing and strict deadline milestones.',
  },
];

const categories = [
  { id: 'all', label: 'All Mandates (12)' },
  { id: 'psu', label: 'Infrastructure & PSU' },
  { id: 'conglomerates', label: 'Conglomerates & IT' },
  { id: 'bfsi', label: 'Banking & BFSI' },
  { id: 'healthcare', label: 'Healthcare & Industry' },
];

const clients = [
  {
    id: 1,
    cat: 'psu',
    name: 'National High Speed Rail Corp (NHSRCL)',
    initials: 'NH',
    sector: 'Infrastructure & PSU',
    subSector: 'High-Speed Rail',
    scope: 'Complete administrative reception, acoustic conference rooms, and turnkey regional project office.',
    src: '/images/hd/image-11-reception-nhsrcl.jpg',
    metric: '4,500 Sq.Ft · Reception & Suites',
  },
  {
    id: 2,
    cat: 'healthcare',
    name: 'AM/NS India (ArcelorMittal Nippon)',
    initials: 'AM',
    sector: 'Industrial / Steel',
    subSector: 'Heavy Industry',
    scope: 'Landmark corporate facade, executive administrative hub, R&D suites, and training center fitout.',
    src: '/images/hd/image-22-amns-india-facade.jpg',
    metric: '32,000 Sq.Ft · Campus HQ',
  },
  {
    id: 3,
    cat: 'conglomerates',
    name: 'Reliance Industries Limited (RIL)',
    initials: 'RI',
    sector: 'Conglomerates & Energy',
    subSector: 'Energy & Petrochem',
    scope: 'High-density executive workstation floors, meeting suites, and specialized control room furniture.',
    src: '/images/hd/image-12-open-workstations.jpg',
    metric: '120+ Workstations · Dahej Hub',
  },
  {
    id: 4,
    cat: 'conglomerates',
    name: 'Larsen & Toubro (L&T)',
    initials: 'LT',
    sector: 'Engineering & Infra',
    subSector: 'EPC Infrastructure',
    scope: 'Regional project headquarters, engineering design bullpens, and acoustically isolated meeting rooms.',
    src: '/images/hd/image-3-conference-hall.jpg',
    metric: '18,500 Sq.Ft · Civil & MEP',
  },
  {
    id: 5,
    cat: 'conglomerates',
    name: 'Adani Enterprises Limited',
    initials: 'AD',
    sector: 'Ports & Energy Infra',
    subSector: 'Conglomerate HQ',
    scope: 'Corporate administration wing, conference AV suite, and high-spec solid veneer executive desking.',
    src: '/images/hd/image-10-office-cabin.jpg',
    metric: 'Executive Suites & Boardroom',
  },
  {
    id: 6,
    cat: 'bfsi',
    name: 'State Bank of India (SBI)',
    initials: 'SB',
    sector: 'Banking & BFSI',
    subSector: 'Public Sector Banking',
    scope: 'Regional administrative zonal office, secure transaction counters, and executive conference hall.',
    src: '/images/hd/image-1-meeting-room.jpg',
    metric: 'Zonal Office & High-Security Counters',
  },
  {
    id: 7,
    cat: 'bfsi',
    name: 'HDFC Bank Limited',
    initials: 'HD',
    sector: 'Banking & BFSI',
    subSector: 'Private Banking',
    scope: 'Premier private banking lounge, retail branch network standard fitout, and back-office workstations.',
    src: '/images/hd/image-14-luxury-lounge-2.jpg',
    metric: 'Private Wealth Lounge & Workstations',
  },
  {
    id: 8,
    cat: 'psu',
    name: 'Nuclear Power Corp. of India (NPCIL)',
    initials: 'NP',
    sector: 'Government & Energy',
    subSector: 'Strategic Public Sector',
    scope: 'High-security administrative wing, secure document archives, and NBC-compliant fire-rated doors.',
    src: '/images/hd/image-31-large-auditorium-balcony.jpg',
    metric: 'NBC Fire Doors & Civic Auditoria',
  },
  {
    id: 9,
    cat: 'healthcare',
    name: 'BASF India',
    initials: 'BA',
    sector: 'Chemicals & Research',
    subSector: 'Multinational Corp',
    scope: 'Corporate administrative office, laboratory technical cabins, and chemical-resistant pantry spaces.',
    src: '/images/hd/image-18-clinic-lobby-reception.jpg',
    metric: 'Cleanroom Joinery & Tech Cabins',
  },
  {
    id: 10,
    cat: 'healthcare',
    name: 'Tata Chemicals Limited',
    initials: 'TC',
    sector: 'Industrial Chemicals',
    subSector: 'Industrial Enterprise',
    scope: 'Plant administrative building, executive dining suite, and ergonomics-compliant control consoles.',
    src: '/images/hd/image-35-cafeteria-dining-hall.jpg',
    metric: 'Executive Dining & Admin Wing',
  },
  {
    id: 11,
    cat: 'healthcare',
    name: 'Torrent Pharmaceuticals Ltd',
    initials: 'TP',
    sector: 'Pharma & Life Sciences',
    subSector: 'Life Sciences HQ',
    scope: 'Corporate R&D administration floor, executive board suites, and acoustic training auditoriums.',
    src: '/images/hd/image-17-hospital-reception-vitrag.jpg',
    metric: 'R&D Floor & Acoustic Paneling',
  },
  {
    id: 12,
    cat: 'psu',
    name: 'Food Corporation of India (FCI / CWC)',
    initials: 'FC',
    sector: 'Government Authority',
    subSector: 'National Supply Chain',
    scope: 'Zonal headquarters, meeting facilities, and heavy-duty archive record management systems.',
    src: '/images/hd/image-9-workshop-factory.jpg',
    metric: 'High-Density Archive & Fitout',
  },
];

export default function ClientIndexSection() {
  const [activeSpotlight, setActiveSpotlight] = useState(0);
  const [activeTab, setActiveTab] = useState('all');

  const filteredClients =
    activeTab === 'all'
      ? clients
      : clients.filter((c) => c.cat === activeTab);

  const activeProject = spotlightClients[activeSpotlight];

  return (
    <section id="client-index" className="py-16 sm:py-24 bg-[#FAFCF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Headline & Paragraph in ONE single line on desktop */}
        <Reveal className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60 text-[11px] font-semibold uppercase tracking-wider mb-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
            Verified Enterprise Track Record
          </div>
          <h2 className="mt-2.5 font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#0D3B2E] font-medium tracking-tight whitespace-normal lg:whitespace-nowrap [text-wrap:nowrap]">
            Comprehensive client index,{' '}
            <span className="italic text-emerald-700">delivered across India.</span>
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base whitespace-normal lg:whitespace-nowrap [text-wrap:nowrap]">
            Representative selection of corporate, institutional, and public sector mandates executed under single-contract turnkey accountability.
          </p>
        </Reveal>

        {/* Feature 1: Interactive Landmark Client Spotlight Stage */}
        <div className="mb-16 sm:mb-20">
          {/* Spotlight Selector Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none touch-pan-x">
            {spotlightClients.map((client, idx) => {
              const isActive = idx === activeSpotlight;
              return (
                <button
                  key={client.id}
                  type="button"
                  onClick={() => setActiveSpotlight(idx)}
                  className={`group flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-[13px] font-semibold transition-all duration-300 cursor-pointer shrink-0 border ${
                    isActive
                      ? 'bg-[#0D3B2E] text-white border-[#0D3B2E] shadow-md ring-2 ring-emerald-500/30'
                      : 'bg-white hover:bg-stone-50 text-stone-700 border-stone-200/90 hover:border-emerald-300'
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-lg text-[10px] font-bold font-mono ${
                      isActive ? 'bg-gold text-[#04170F]' : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <span>{client.acronym}</span>
                  <span
                    className={`hidden md:inline text-[11px] font-normal ${
                      isActive ? 'text-emerald-200' : 'text-stone-400'
                    }`}
                  >
                    · {client.sector.split('&')[0].trim()}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Spotlight Hero Card */}
          <div className="relative overflow-hidden rounded-3xl bg-white border border-stone-200/90 shadow-xl transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Left Photo Stage */}
              <div className="lg:col-span-5 relative aspect-[16/11] lg:aspect-auto min-h-[280px] sm:min-h-[360px] overflow-hidden bg-stone-100">
                <img
                  key={activeProject.id}
                  src={activeProject.src}
                  alt={activeProject.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1.5 rounded-full bg-[#0D3B2E]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold backdrop-blur-md shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                    Verified Handover
                  </span>
                  <span className="rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-200 backdrop-blur-md">
                    {activeProject.location.split(',')[0]}
                  </span>
                </div>

                {/* Bottom Metric Pill */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-2xl bg-white/95 backdrop-blur-md p-3.5 border border-white/80 shadow-md">
                    <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block mb-0.5">
                      Execution Scope
                    </span>
                    <p className="text-xs sm:text-[13px] font-bold text-[#0D3B2E] leading-snug">
                      {activeProject.scale}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Details Dossier */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
                    <Building className="h-3.5 w-3.5 text-emerald-700" />
                    <span>{activeProject.sector}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D3B2E] leading-tight mb-3">
                    {activeProject.name}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-[14px] leading-relaxed mb-6">
                    {activeProject.scope}
                  </p>

                  {/* 3 Deliverables Checklist */}
                  <div className="space-y-2.5 mb-6">
                    {activeProject.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span className="text-xs sm:text-[13px] font-semibold text-[#0D3B2E]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-stone-200/80 mb-6 border-l-4 border-l-[#0D3B2E]">
                    <p className="text-stone-700 text-xs sm:text-[13px] italic leading-relaxed">
                      &ldquo;{activeProject.quote}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-[#0D3B2E] px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#08281E] hover:shadow-md"
                  >
                    <span>Request Client Case Reference</span>
                    <ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <span className="text-[11px] text-stone-500 font-medium">
                    Verified Single-Source Delivery SLA
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Feature 2: Complete Client Directory Grid with Visual Cards */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#0D3B2E]">
                All Enterprise Mandates Directory
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Filter by commercial domain or browse verified delivered facilities
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none touch-pan-x -mx-4 px-4 sm:mx-0 sm:px-0">
              {categories.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap cursor-pointer shrink-0 border ${
                      isActive
                        ? 'bg-[#0D3B2E] text-white border-[#0D3B2E] shadow-sm'
                        : 'bg-white hover:bg-stone-100 text-stone-700 border-stone-200/90'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 12 Visual Architectural Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-12">
            {filteredClients.map((client) => (
              <div
                key={client.id}
                className="group flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white shadow-xs transition-all duration-300 hover:shadow-xl hover:border-emerald-400/60 hover:-translate-y-1"
              >
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                  <img
                    src={client.src}
                    alt={client.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Monogram Badge */}
                  <span className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-xl bg-white/95 font-serif text-xs font-bold text-[#0D3B2E] shadow-sm backdrop-blur-xs">
                    {client.initials}
                  </span>

                  {/* Sector Pill */}
                  <span className="absolute top-3 right-3 rounded-full border border-white/20 bg-black/60 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-emerald-200 backdrop-blur-md">
                    {client.subSector}
                  </span>

                  {/* Bottom Metric */}
                  <span className="absolute bottom-2.5 left-3 text-[10px] font-medium text-white/90">
                    {client.metric}
                  </span>
                </div>

                {/* Content Area */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-emerald-800 mb-1">
                      {client.sector}
                    </div>

                    <h4 className="font-serif text-base sm:text-lg font-bold text-[#0D3B2E] group-hover:text-emerald-700 transition-colors leading-snug mb-2">
                      {client.name}
                    </h4>

                    <p className="text-stone-500 text-xs leading-relaxed line-clamp-2">
                      {client.scope}
                    </p>
                  </div>

                  {/* Bottom SLA Tag */}
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-800">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                      Verified Handover Mandate
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-emerald-700 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature 3: Bottom Integrity & Reference Download Strip */}
        <div className="bg-gradient-to-r from-[#F8FAF9] to-[#F1F6F3] rounded-3xl p-6 sm:p-7 border border-stone-200/90 flex flex-col md:flex-row items-center justify-between gap-5 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0D3B2E] text-gold shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-serif text-base font-bold text-[#0D3B2E]">
                Client Portfolio Integrity Guaranteed
              </h5>
              <p className="text-xs text-stone-600 leading-relaxed mt-0.5 max-w-2xl">
                Every client mandate and square footage metric listed reflects physical commercial spaces executed under master turnkey contracts with zero vendor disputes.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border border-stone-300 hover:border-emerald-600 bg-white hover:bg-stone-50 text-stone-900 text-xs sm:text-[13px] font-semibold whitespace-nowrap transition-all shadow-xs shrink-0"
          >
            <Download className="w-4 h-4 text-emerald-700 transition-transform group-hover:-translate-y-0.5" />
            <span>Download Reference List PDF</span>
          </a>
        </div>

      </div>
    </section>
  );
}
