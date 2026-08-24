// src/components/Navbar.jsx
import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaXmark } from 'react-icons/fa6';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  {
    to: '/',
    label: 'Home',
  },
  {
    to: '/about',
    label: 'About',
  },
  {
    to: '/services',
    label: 'Services',
  },
  {
    to: '/projects',
    label: 'Projects',
  },
  {
    to: '/playground',
    label: 'Playground',
  },
  {
    to: '/contact',
    label: 'Contact',
  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isMenuOpen);

    return () => document.body.classList.remove('overflow-hidden');
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }
  const navLinkClass = ({ isActive }) => `nav-link ${isActive ? 'active' : ''}`;

  return (
    <>
      <nav
        className={`fixed left-0 top-0 w-full z-50 backdrop-blur-md border-b border-ink/10 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md' : 'bg-white/70'}`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="flex justify-between items-center py-4 sm:py-5">
            <Link to="/" className="font-display font-bold text-xl sm:text-2xl">
              Ola<span className="text-gold">Tech</span>
            </Link>

            <div className="hidden lg:flex items-center gap-9">
              {navLinks.map((link) => (
                <NavLink key={link.to} to={link.to} className={navLinkClass} end={link.to === '/'}>
                  {link.label}
                </NavLink>
              ))}
              <ThemeToggle />
              <Link to="/contact" className="btn btn-gold !py-2.5 !px-5 text-sm">
                Start a project
              </Link>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 text-body"
                aria-label="Open menu"
              >
                <FaBars className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed right-0 top-0 w-72 h-screen bg-ink text-white transition-transform duration-300 ease-out z-[999] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-5 border-b border-white/10">
          <span className="font-display font-bold text-lg">
            Ola<span className="text-gold">Tech</span>
          </span>
          <button
            onClick={closeMenu}
            className="p-2 text-white/60 hover:text-white"
            aria-label="Close menu"
          >
            <FaXmark className="text-xl" />
          </button>
        </div>
        <nav className="flex flex-col px-4 py-6 gap-1 font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className="px-4 py-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5"
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" onClick={closeMenu} className="mt-4 btn btn-gold justify-center">
            Start a project
          </Link>
        </nav>
      </div>

      {isMenuOpen && (
        <div onClick={closeMenu} className="fixed inset-0 bg-ink/60 backdrop-blur-sm z-[998]"></div>
      )}
    </>
  );
}

export default Navbar;
