export function Footer() {
  const COLS = [
    {
      heading: 'Products',
      links: [
        { label: 'Valen.live',          href: 'https://valen.live' },
        { label: 'Resume Intelligence', href: '#products' },
        { label: 'Timetable System',    href: '#products' },
        { label: 'Code Arena',          href: '#products' },
        { label: 'Gen AI Studio',       href: '#products' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About',   href: '#about'   },
        { label: 'Vision',  href: '#vision'  },
        { label: 'Roadmap', href: '#roadmap' },
        { label: 'Privacy', href: '#'        },
        { label: 'Terms',   href: '#'        },
      ],
    },
    {
      heading: 'Ecosystem',
      links: [
        { label: 'Career Intelligence', href: '#products' },
        { label: 'Automation',          href: '#products' },
        { label: 'Generative AI',       href: '#products' },
        { label: 'Beta Access',         href: '#beta'     },
        { label: 'Contact',             href: '#contact'  },
      ],
    },
  ];

  const SOCIALS = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/valen-labs/',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: 'GitHub',
      href: '#',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      label: 'X',
      href: '#',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="border-t border-gray-200 bg-white pt-[60px] pb-10 px-6">
      <div className="max-w-[1100px] mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-[7px] bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center flex-shrink-0">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="white">
                  <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" />
                </svg>
              </div>
              <span className="font-semibold text-[15px] tracking-[-0.02em] text-gray-900">
                Valen Labs
              </span>
            </div>
            <p className="text-[14px] font-light text-gray-500 leading-[1.7] max-w-[220px]">
              Intelligent systems & AI infrastructure for the future of intelligent work.
            </p>
          </div>

          {/* Link columns */}
          {COLS.map(col => (
            <div key={col.heading}>
              <h4 className="text-[11px] font-semibold tracking-[0.1em] uppercase text-gray-500 font-mono mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] font-light text-gray-600 hover:text-gray-900 transition-colors duration-150 no-underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12.5px] text-gray-500 font-mono">
            © Valen Labs — Intelligent Systems & AI Infrastructure
          </p>
          <div className="flex items-center gap-4">
            {SOCIALS.map(s => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-gray-500 hover:text-gray-900 transition-colors duration-150"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}