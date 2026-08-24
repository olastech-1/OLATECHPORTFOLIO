// src/components/ScrollProgressBar.jsx
import { useEffect, useState } from 'react';

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollableHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const percentage = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
      setProgress(percentage);
    }
    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 h-[3px] z-[9998] bg-gold"
      style={{
        width: `${progress}%`,
      }}
    ></div>
  );
}

export default ScrollProgressBar;
