/** Infinite horizontal ticker. Pass an array of strings/nodes as `items`. */
export default function Marquee({ items, className = '', itemClassName = '', reverse = false }) {
  const row = [...items, ...items];
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className={`flex w-max items-center gap-10 sm:gap-16 whitespace-nowrap ${reverse ? 'animate-marquee-rev' : 'animate-marquee'}`}>
        {row.map((item, i) => (
          <span key={i} className={`flex items-center gap-10 sm:gap-16 ${itemClassName}`}>
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}
