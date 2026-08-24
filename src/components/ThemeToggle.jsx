// src/components/ThemeToggle.jsx
import { FaSun, FaMoon } from 'react-icons/fa6';
import { useTheme } from '../hooks/useTheme';

function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`w-9 h-9 rounded-full border border-ink/10 flex items-center justify-center text-body hover:border-gold hover:text-gold transition ${className}`}
    >
      {theme === 'dark' ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
    </button>
  );
}

export default ThemeToggle;
