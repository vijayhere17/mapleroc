import { useEffect, useRef, useState } from 'react';

/** Animates a value like "25+", "4.8M+" or "100%" from 0 when scrolled into view. */
export default function CountUp({ value, duration = 1800 }) {
  const match = String(value).match(/^(\d+(?:\.\d+)?)([A-Za-z]?[+%]*)$/);
  const target = match ? parseFloat(match[1]) : null;
  const suffix = match ? match[2] : '';
  const decimals = match && match[1].includes('.') ? match[1].split('.')[1].length : 0;

  const ref = useRef(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (target === null) return undefined;
    const el = ref.current;
    if (!el) return undefined;
    let raf;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setCurrent(target * eased);
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration]);

  if (target === null) return <span>{value}</span>;
  return (
    <span ref={ref}>
      {current.toFixed(decimals)}
      {suffix}
    </span>
  );
}
