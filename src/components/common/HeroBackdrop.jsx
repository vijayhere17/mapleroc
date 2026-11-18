/** Photographic backdrop for dark page heroes. Parent needs `relative isolate overflow-hidden`. */
export default function HeroBackdrop({ src }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[#06221A]">
      <img src={src} alt="" className="h-full w-full object-cover opacity-55 animate-kenburns" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#06221A]/95 via-[#06221A]/65 to-[#06221A]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#06221A]/90 via-transparent to-[#06221A]/50" />
      <div className="absolute inset-0 bg-grid-lines" />
      <div className="absolute -left-24 top-1/3 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl animate-glow" />
    </div>
  );
}
