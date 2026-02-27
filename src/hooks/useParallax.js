import { useEffect, useRef, useState, useCallback } from 'react';

export function useParallax(speed = 0.1) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const windowH = window.innerHeight;
    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = windowH / 2;
    const distance = elementCenter - viewportCenter;
    setOffset(distance * speed);
  }, [speed]);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { ref, offset };
}
