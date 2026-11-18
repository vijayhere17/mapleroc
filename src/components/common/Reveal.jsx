import { useEffect, useRef, useState } from 'react';

/**
 * Fades/slides its children in when they scroll into view.
 * direction: 'up' (default) | 'left' | 'right' | 'zoom'
 */
export default function Reveal({
  as: Tag = 'div',
  direction = 'up',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const dir = direction === 'up' ? '' : `reveal-${direction}`;

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${dir} ${shown ? 'is-visible' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
