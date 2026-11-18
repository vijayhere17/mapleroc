import Reveal from '../../common/Reveal';

export default function InstitutionalTestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote:
        'MapleRoc delivered our high-speed rail regional administrative office in record time. Their single-contract model eliminated vendor runarounds and delivered impeccable finish quality.',
      author: 'Chief Project Manager (Civil)',
      org: 'National High Speed Rail Corp (NHSRCL)',
      sector: 'Government Infrastructure',
    },
    {
      id: 2,
      quote:
        'From exterior architectural coordination to the executive boardroom joinery, Dharmendra Surelia and the MapleRoc team exhibited unmatched dedication and engineering rigor.',
      author: 'Head of Corporate Infrastructure',
      org: 'AM/NS India (ArcelorMittal Nippon)',
      sector: 'Heavy Industry & Corporate HQ',
    },
    {
      id: 3,
      quote:
        'Finding a turnkey contractor who respects architectural detailing as much as the design studio is rare. MapleRoc is that rare partner. We specify them with total confidence.',
      author: 'Director of Workplace Design',
      org: 'Leading Pan-India PMC Studio',
      sector: 'Architectural Consultancy',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAFCF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header: Headline & Paragraph in ONE single line on desktop */}
        <Reveal className="mb-12 sm:mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Client & Associate Voices
          </span>
          <h2 className="mt-2.5 font-serif text-3xl sm:text-4xl lg:text-[44px] font-medium leading-tight tracking-tight text-[#0D3B2E] whitespace-normal lg:whitespace-nowrap [text-wrap:nowrap]">
            Institutional testimonials,{' '}
            <span className="italic text-emerald-700">proven at scale.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600 whitespace-normal lg:whitespace-nowrap [text-wrap:nowrap]">
            What government project heads, corporate real estate directors, and PMCs say about executing with MapleRoc.
          </p>
        </Reveal>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {testimonials.map((item, idx) => (
            <Reveal
              key={item.id}
              delay={idx * 100}
              className="bg-white rounded-3xl border border-stone-200/90 p-7 sm:p-8 shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-4xl text-emerald-400 font-bold leading-none">
                    &ldquo;
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                    {item.sector}
                  </span>
                </div>
                <p className="text-stone-700 text-sm leading-relaxed mb-6 italic">
                  {item.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <p className="text-xs sm:text-sm font-bold text-[#0D3B2E] leading-tight">
                  {item.author}
                </p>
                <p className="text-[11px] text-stone-500 mt-1 font-medium">
                  {item.org}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
