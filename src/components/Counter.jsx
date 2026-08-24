// src/components/Counter.jsx
import { useEffect, useRef, useState } from 'react';

function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          animateCount();
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.4,
      }
    );
    if (elementRef.current) observer.observe(elementRef.current);

    return () => observer.disconnect();

    function animateCount() {
      const duration = 1400;
      const startTime = performance.now();

      function tick(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * target));
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          setCount(target);
        }
      }
      requestAnimationFrame(tick);
    }
  }, [target]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
}

export default Counter;
