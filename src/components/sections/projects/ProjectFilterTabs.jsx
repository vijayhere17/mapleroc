const categories = [
  { id: 'all', label: 'All Projects', count: 24 },
  { id: 'corporate', label: 'Corporate & Tech', count: 10 },
  { id: 'executive', label: 'Executive Suites', count: 4 },
  { id: 'institutional', label: 'Institutional & Campus', count: 5 },
  { id: 'healthcare', label: 'Healthcare', count: 3 },
  { id: 'joinery', label: 'Bespoke Joinery', count: 6 },
];

export default function ProjectFilterTabs({ activeCategory, onSelectCategory }) {
  return (
    <div id="projects-gallery" className="sticky top-[88px] z-30 border-b border-stone-200/70 bg-[#FAFCF9]/90 py-3 backdrop-blur-xl sm:top-[96px]">
      <div className="mx-auto max-w-7xl overflow-x-auto px-4 sm:px-6 lg:px-8 touch-pan-x scrollbar-none">
        <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
          {categories.map((c) => {
            const active = activeCategory === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => onSelectCategory(c.id)}
                className={`flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 sm:text-[13px] ${
                  active
                    ? 'border-[#0D3B2E] bg-[#0D3B2E] text-white shadow-lg'
                    : 'border-stone-300 bg-white text-stone-700 hover:-translate-y-0.5 hover:border-gold'
                }`}
              >
                {c.label}
                <span className={`rounded-full px-1.5 py-0.5 text-[10px] ${active ? 'bg-gold text-[#06221A]' : 'bg-stone-100 text-stone-500'}`}>{c.count}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
