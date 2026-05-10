import { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = [
    { label: 'About',     href: '#about'     },
    { label: 'Products',  href: '#products'  },
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'Vision',    href: '#vision'    },
    { label: 'Beta',      href: '#beta'      },
    { label: 'Contact',   href: '#contact'   },
  ];

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
            ? 'border-b border-white/[0.07] dark:bg-[rgba(10,10,9,0.88)] bg-[rgba(250,250,249,0.88)] backdrop-blur-xl shadow-sm'
            : 'bg-transparent border-b border-transparent'}
        `}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-[60px] flex items-center gap-0">

          {/* Logo — left */}
          <a
            href="#"
            className="flex items-center gap-2.5 no-underline flex-shrink-0"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <div className="w-7 h-7 rounded-[7px] bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center flex-shrink-0">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="white">
                <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" />
              </svg>
            </div>
            <span className="font-semibold text-[15px] tracking-[-0.02em] text-gray-900 dark:text-gray-100">
              Valen Labs
            </span>
          </a>

          {/* Center nav — desktop */}
          <div className="hidden md:flex items-center gap-0.5 mx-auto">
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="
                  text-[13.5px] font-normal text-gray-500 dark:text-gray-400
                  px-3.5 py-1.5 rounded-lg
                  hover:text-gray-900 dark:hover:text-gray-100
                  hover:bg-black/[0.05] dark:hover:bg-white/[0.06]
                  transition-all duration-150 cursor-pointer
                  border-none bg-transparent
                "
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2.5 flex-shrink-0 ml-auto md:ml-0">

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
            border-t border-gray-100 dark:border-white/[0.06]
            bg-white/90 dark:bg-[#0a0a09]/90 backdrop-blur-xl
            ${mobileOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="px-4 py-3 flex flex-col gap-0.5">
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="
                  text-left text-[14px] text-gray-600 dark:text-gray-400
                  px-3 py-2.5 rounded-lg
                  hover:bg-gray-50 dark:hover:bg-white/[0.05]
                  hover:text-gray-900 dark:hover:text-gray-100
                  transition-all duration-150 cursor-pointer
                  border-none bg-transparent w-full
                "
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