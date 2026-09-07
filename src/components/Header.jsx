import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { COMPANY, NAV_LINKS } from '../data/content';
import { MenuIcon, CloseIcon } from './Icons';
import { withBase } from '../utils/url';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Chiude il menu mobile a ogni cambio pagina
  useEffect(() => {
    setMenuOpen(false);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? 'shadow-card' : ''
      }`}
    >
      <div className="border-b border-steel-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
          <Link to="/" className="group flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <span className="font-display text-2xl font-bold uppercase tracking-wide text-navy-800 transition-colors group-hover:text-navy-600">
              {COMPANY.name}
            </span>
          </Link>

          {/* Nav desktop */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `link-underline py-1 font-body text-sm font-semibold uppercase tracking-wide text-steel-700 transition-colors hover:text-navy-800 ${
                    isActive ? 'is-active text-navy-800' : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <Link to="/contatti" className="btn-primary hidden lg:inline-flex">
            Contattaci
          </Link>

          {/* Toggle mobile */}
          <button
            type="button"
            className="p-2 text-navy-800 lg:hidden"
            aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Nav mobile */}
      <div
        className={`overflow-hidden border-b border-steel-200 bg-white transition-[max-height] duration-300 ease-out lg:hidden ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-3">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `rounded-sm px-3 py-2.5 font-body text-sm font-semibold uppercase tracking-wide transition-colors ${
                  isActive ? 'bg-navy-50 text-navy-800' : 'text-steel-700 hover:bg-steel-50'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contatti"
            onClick={() => setMenuOpen(false)}
            className="btn-primary mt-2 w-full"
          >
            Contattaci
          </Link>
        </nav>
      </div>
    </header>
  );
}
