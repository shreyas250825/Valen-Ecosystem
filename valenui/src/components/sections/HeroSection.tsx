export function HeroSection() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 pt-[120px] pb-20">

      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-[480px] h-[480px] bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[360px] h-[360px] bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[840px] mx-auto">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-9 px-3.5 py-[5px] rounded-full border border-indigo-300/40 bg-indigo-50/60">
          <span className="relative flex h-[6px] w-[6px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-60" />
            <span className="relative inline-flex rounded-full h-[6px] w-[6px] bg-indigo-500" />
          </span>
          <span className="text-[12.5px] font-medium text-indigo-600 tracking-[0.01em]">
            Now in Active Beta
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(42px,7.5vw,88px)] font-semibold tracking-[-0.04em] leading-[1.02] text-gray-900 mb-7">
          Building Intelligent
          <br />
          <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
            Systems For The Future
          </span>
        </h1>

        {/* Sub */}
        <p className="text-[17px] font-light text-gray-500 max-w-[560px] mx-auto leading-[1.75] mb-11">
          Valen Labs develops AI-powered platforms and intelligent infrastructure
          focused on career intelligence, automation, productivity, and scalable
          digital ecosystems.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          <button
            onClick={() => scrollTo('#products')}
            className="
              px-6 py-[11px] rounded-[10px]
              bg-indigo-600
              text-white
              text-[14px] font-medium
              hover:opacity-80 hover:-translate-y-[1px]
              transition-all duration-150 cursor-pointer border-none
            "
          >
            Explore Ecosystem
          </button>
          <a
            href="https://valen.live"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6 py-[11px] rounded-[10px]
              border border-gray-300
              text-gray-700
              text-[14px] font-medium no-underline
              hover:bg-gray-50
              hover:-translate-y-[1px]
              transition-all duration-150
            "
          >
            Visit Valen.live ↗
          </a>
          <button
            onClick={() => scrollTo('#beta')}
            className="
              px-6 py-[11px] rounded-[10px]
              border border-indigo-300
              bg-indigo-50
              text-indigo-600
              text-[14px] font-medium
              hover:-translate-y-[1px]
              transition-all duration-150 cursor-pointer
            "
          >
            Join Beta
          </button>
        </div>

        {/* Stats bar */}
        <div className="flex justify-center">
          <div className="
            inline-flex divide-x
            divide-gray-200
            border border-gray-200
            rounded-[14px] overflow-hidden
            bg-white
            backdrop-blur-md
          ">
            {[
              { n: '5+',      l: 'Platforms'     },
              { n: '<100ms',  l: 'Response'       },
              { n: '99.9%',   l: 'Accuracy'       },
              { n: '24 / 7',  l: 'Availability'   },
            ].map(({ n, l }) => (
              <div key={l} className="px-7 py-5 text-center">
                <div className="text-[22px] font-semibold tracking-[-0.03em] text-gray-900">
                  {n}
                </div>
                <div className="text-[11px] text-gray-500 mt-0.5 font-mono tracking-[0.02em]">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}