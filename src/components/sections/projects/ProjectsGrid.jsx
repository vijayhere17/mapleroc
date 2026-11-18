import { ArrowUpRight } from 'lucide-react';
import Reveal from '../../common/Reveal';

export default function ProjectsGrid({ activeCategory }) {
  const allProjects = [
    {
      id: 1,
      wide: true,
      categoryGroup: ['corporate', 'institutional'],
      sector: 'IT / Tech Campus Masterplan',
      scope: 'Turnkey Architectural Fitout',
      tag: 'Enterprise Campus',
      capacity: '500+ Capacity',
      title: 'Integrated Enterprise Campus & Collaborative Tech Park',
      description:
        'Comprehensive turnkey execution covering master planning, high-density workspaces, acoustic circulation corridors, and executive management pavilions.',
      image: '/images/image-6-aerial-architecture.jpg',
      specs: ['85,000 Sq. Ft.', '120 Days Handover'],
    },
    {
      id: 2,
      categoryGroup: ['institutional'],
      sector: 'Institutional Auditorium',
      scope: '600 Seats',
      tag: 'Acoustic Engineering',
      title: 'Acoustic Council Auditorium & Central Hall Fitout',
      description:
        'Tiered stepped seating, acoustic timber baffles, stage lighting, and complete audio-visual integration.',
      image: '/images/image-31-large-auditorium-balcony.jpg',
      specs: ['8,500 Sq. Ft.', 'Turnkey Acoustics'],
    },
    {
      id: 3,
      categoryGroup: ['executive', 'corporate'],
      sector: 'Executive Reception',
      scope: 'Leadership Suite',
      tag: 'Corporate Suite',
      title: 'Private Leadership Courtyard & Executive Waiting Suite',
      description:
        'Architectural brickwork, handcrafted timber finishes, ambient illumination, and bespoke leather lounge seating.',
      image: '/images/image-7-heritage-courtyard.jpg',
      specs: ['6,200 Sq. Ft.', 'Bespoke Millwork'],
    },
    {
      id: 4,
      categoryGroup: ['corporate', 'joinery'],
      sector: 'Cafeteria & Breakout',
      scope: 'Dining Zone',
      tag: 'Wellness & Social',
      title: 'Biophilic Breakout Lounge & Social Dining Zone',
      description:
        'Laminate banquette seating, solid ash timber dining tables, acoustic ceiling clouds, and modular pantry joinery.',
      image: '/images/image-35-cafeteria-dining-hall.jpg',
      specs: ['5,000 Sq. Ft.', 'Custom Seating'],
    },
    {
      id: 5,
      categoryGroup: ['healthcare'],
      sector: 'Hospital Reception & Atrium',
      scope: 'Medical Facility',
      tag: 'Healthcare Fitout',
      title: 'Vitrag Multispecialty Hospital Central Reception',
      description:
        'Double-height reception lobby, antimicrobial surface treatments, automated triage desks, and acoustic waiting zones.',
      image: '/images/image-17-hospital-reception-vitrag.jpg',
      specs: ['12,000 Sq. Ft.', 'Medical Grade Handover'],
    },
    {
      id: 6,
      categoryGroup: ['healthcare'],
      sector: 'Clinical Diagnostic Suite',
      scope: 'Consulting Cabins',
      tag: 'Clinical Hygiene',
      title: 'Specialized Clinical Consultation Facility Fitout',
      description:
        'Clean-room compliant consultation cabins, hygienic vinyl flooring, acoustic medical partitions, and doctor workstations.',
      image: '/images/image-15-healthcare-clinic.jpg',
      specs: ['4,800 Sq. Ft.', 'NABH Compliant'],
    },
    {
      id: 7,
      categoryGroup: ['institutional'],
      sector: 'Academic Auditoria',
      scope: '500 Seats',
      tag: 'Acoustic Balcony',
      title: 'Tiered 500-Seat Academic & Performing Arts Auditorium',
      description:
        'Custom acoustic red velvet seating, sound isolation ceilings, stage rigging, and comprehensive multi-channel audio setup.',
      image: '/images/image-33-cinema-auditorium-red-seats.jpg',
      specs: ['10,200 Sq. Ft.', 'Acoustic Isolation'],
    },
    {
      id: 8,
      categoryGroup: ['corporate', 'joinery'],
      sector: 'Open-Plan Workspaces',
      scope: 'Modular Desking',
      tag: 'High-Density Workstations',
      title: 'Modular High-Density Ergonomic Workstation Cluster',
      description:
        'Custom manufactured workstation clusters with cable raceways, acoustic dividers, and integrated pedestal storage.',
      image: '/images/image-26-workstations-yellow-pedestal.jpg',
      specs: ['18,000 Sq. Ft.', '180 Workstations'],
    },
    {
      id: 9,
      categoryGroup: ['executive', 'corporate'],
      sector: 'Executive Boardroom',
      scope: 'Boardroom AV & Seating',
      tag: 'Executive Suite',
      title: 'Executive Boardroom & Leadership Strategy Suite',
      description:
        'Solid timber board table with motorized AV popups, acoustic wood veneer wall paneling, and ergonomic executive seating.',
      image: '/images/image-14-luxury-lounge-2.jpg',
      specs: ['3,600 Sq. Ft.', 'Integrated AV'],
    },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? allProjects
      : allProjects.filter((p) => p.categoryGroup.includes(activeCategory));

  const ratios = ['aspect-[4/5]', 'aspect-[4/3]', 'aspect-square', 'aspect-[3/4]', 'aspect-[5/4]'];

  return (
    <section className="bg-[#FAFCF9] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 sm:mb-12">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Delivered Portfolio
          </span>
          <h2 className="mt-2.5 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight tracking-tight text-[#0D3B2E] whitespace-normal lg:whitespace-nowrap [text-wrap:nowrap]">
            Rigorous execution across <span className="italic text-emerald-700">multi-sector mandates.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-500 whitespace-normal lg:whitespace-nowrap [text-wrap:nowrap]">
            Every space reflects uncompromising craft, verified engineering and single-contract delivery.
          </p>
        </Reveal>

        <div key={activeCategory} className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {filteredProjects.map((project, i) => (
            <article
              key={project.id}
              className="animate-fade-up group relative mb-5 block break-inside-avoid overflow-hidden rounded-3xl bg-[#06221A] text-white shadow-lg"
              style={{ animationDelay: `${Math.min(i, 8) * 70}ms` }}
            >
              <img
                src={project.image.replace('/images/', '/images/hd/')}
                alt={project.title}
                loading="lazy"
                className={`${ratios[i % ratios.length]} w-full object-cover transition-transform duration-[900ms] group-hover:scale-110`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06221A] via-[#06221A]/40 to-transparent transition-colors duration-500 lg:group-hover:from-[#06221A]/95 lg:group-hover:via-[#06221A]/70" />
              <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#06221A]">{project.tag}</span>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                  {project.sector} • {project.scope}
                </div>
                <h3 className="mt-1.5 font-serif text-lg font-semibold leading-snug sm:text-xl">{project.title}</h3>
                <div className="grid grid-rows-[1fr] transition-all duration-500 lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="mt-2 text-xs leading-relaxed text-emerald-50/80">{project.description}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {project.specs.map((spec) => (
                        <span key={spec} className="rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[10px] font-medium backdrop-blur">{spec}</span>
                      ))}
                      <a href="#contact" className="ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-gold text-[#06221A] transition-transform hover:rotate-45" aria-label="Project details">
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
