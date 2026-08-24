// src/components/BackToTopButton.jsx
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY >= 500);
    }
    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-ink text-white shadow-2xl hover:bg-inksoft transition z-[60] flex items-center justify-center"
    >
      <FaArrowUp />
    </button>
  );
}

export default BackToTopButton;
