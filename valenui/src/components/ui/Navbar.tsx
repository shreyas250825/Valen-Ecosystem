import { useEffect, useMemo, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('');
  const { isDark, toggleTheme } = useTheme();

  const navLinks = useMemo(
    () => [
      { label: 'About', href: '#about' },
      { label: 'Products', href: '#products' },
      { label: 'Ecosystem', href: '#ecosystem' },
      { label: 'Vision', href: '#vision' },
      { label: 'Beta', href: '#beta' },
      { label: 'Contact', href: '#contact' },
    ],
    [],
  );





  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);

    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map(l => l.href);

    const computeActive = () => {
      const viewportMid = window.scrollY + window.innerHeight * 0.35;

      let best: { href: string; dist: number } | null = null;
      for (const href of sectionIds) {
        const el = document.querySelector(href) as HTMLElement | null;
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const top = window.scrollY + rect.top;
        const dist = Math.abs(top - viewportMid);

        if (!best || dist < best.dist) {
          best = { href, dist };
        }
      }

      // Only mark a section active if it's reasonably close to the viewport center.
      if (best) {
        const threshold = window.innerHeight * 0.45;
        if (best.dist < threshold) setActiveHref(best.href);
        else setActiveHref('');
      } else {
        setActiveHref('');
      }
    };

    computeActive();
    window.addEventListener('scroll', computeActive, { passive: true });
    window.addEventListener('resize', computeActive);
    return () => {
      window.removeEventListener('scroll', computeActive);
      window.removeEventListener('resize', computeActive);
    };
  }, []);





  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${scrolled
            ? 'border-b border-gray-200/60 dark:border-white/[0.09] bg-white/75 dark:bg-[rgba(10,10,9,0.72)] backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)]'
            : 'bg-transparent border-b border-transparent'}
        `}
      >
        <div className="max-w-[1200px] mx-auto px-8 h-[72px] flex items-center gap-0">


          {/* Logo — left */}
          <a
            href="#"
            className="flex items-center gap-2.5 no-underline flex-shrink-0"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <img
              src="/assets/Valen%20Labs%20Logo.png"
              alt="Valen Labs"
              className="w-7 h-7 rounded-[7px] object-contain"
            />
            <span className="font-semibold text-[16.5px] tracking-[-0.02em] text-gray-900 dark:text-gray-100">
              Valen Labs
            </span>

          </a>

          {/* Center nav — desktop */}
          <div className="hidden md:flex items-center gap-0.5 mx-auto">
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={
                  `
                  text-[15px] font-medium
                  px-4 py-2 rounded-xl

                  transition-all duration-150 cursor-pointer
                  border
                  border-transparent
                  bg-transparent
                  hover:bg-gray-100/80 dark:hover:bg-white/[0.07]
                  hover:border-gray-200/80 dark:hover:border-white/[0.10]
                  hover:text-gray-900 dark:hover:text-gray-100
                  ${activeHref === link.href
                    ? 'bg-gray-100/80 dark:bg-white/[0.08] border-gray-200/80 dark:border-white/[0.12] text-gray-900 dark:text-gray-100 shadow-[0_8px_24px_rgba(0,0,0,0.06)]'
                    : 'text-gray-600 dark:text-gray-400'
                  }
                `
                }
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2.5 flex-shrink-0 ml-auto md:ml-0">

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="
                w-[34px] h-[34px] rounded-[8px]
                border border-gray-200 dark:border-white/[0.1]
                flex items-center justify-center
                text-gray-600 dark:text-gray-400
                hover:bg-gray-100 dark:hover:bg-white/[0.06]
                transition-all duration-150 cursor-pointer bg-transparent
              "
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-8-1h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zm16 0h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zM12 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 16a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zM5.636 4.222a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414L5.636 5.636a1 1 0 0 1 0-1.414zm12.728 12.728a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 0-1.414zM4.222 18.364a1 1 0 0 1 0-1.414l1.414-1.414a1 1 0 1 1 1.414 1.414l-1.414 1.414a1 1 0 0 1-1.414 0zm12.728-12.728a1 1 0 0 1 0-1.414l1.414-1.414a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 0 1-1.414 0z" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 7a7 7 0 0 0 12.2 7.862.9.9 0 0 1 1.341-.98A8.991 8.991 0 0 1 10 22C4.477 22 0 17.523 0 12s4.477-10 10-10a8.99 8.99 0 0 1 3.162 17.162.9.9 0 0 1-.98 1.341A7 7 0 0 0 10 7z" />
                </svg>
              )}
            </button>

            {/* CTA removed (per request) */}

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="
                md:hidden w-[34px] h-[34px] rounded-[8px]
                border border-gray-200 dark:border-white/[0.1]
                flex items-center justify-center
                text-gray-500 dark:text-gray-400
                hover:bg-gray-100 dark:hover:bg-white/[0.07]
                transition-all duration-150 cursor-pointer bg-transparent
              "
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                {mobileOpen
                  ? <path d="M3.5 3.5L12.5 12.5M12.5 3.5L3.5 12.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  : <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                }
              </svg>
            </button>

          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300
            border-t border-gray-200 dark:border-white/[0.06]
            bg-white dark:bg-[#0a0a09] backdrop-blur-xl
            ${mobileOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="px-4 py-3 flex flex-col gap-0.5">
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={
                  `
                  text-left text-[15px] font-medium
                  px-4 py-3 rounded-xl

                  transition-all duration-150 cursor-pointer
                  border
                  border-transparent
                  bg-transparent
                  hover:bg-gray-50 dark:hover:bg-white/[0.05]
                  hover:border-gray-200/80 dark:hover:border-white/[0.10]
                  hover:text-gray-900 dark:hover:text-gray-100
                  ${activeHref === link.href
                    ? 'bg-gray-50 dark:bg-white/[0.07] border-gray-200/80 dark:border-white/[0.12]'
                    : 'text-gray-600 dark:text-gray-400'
                  }
                `
                }
              >
                {link.label}
              </button>
            ))}

          </div>
        </div>
      </nav>
    </>
  );
}