import { useEffect, useRef } from 'react';

const STATS = [
  { n: '5+',    l: 'Active Platforms'    },
  { n: '2026',  l: 'Founded'             },
  { n: 'AI',    l: 'Core Infrastructure' },
  { n: '∞',     l: 'Scale Potential'     },
];

const PILLARS = [
  {
    icon: '⚡',
    title: 'Career Intelligence',
    desc: 'AI systems that understand career trajectories, evaluate hiring readiness, and surface actionable intelligence.',
  },
  {
    icon: '🔁',
    title: 'Automation',
    desc: 'Intelligent workflow automation that removes friction from institutional and enterprise processes at scale.',
  },
  {
    icon: '🧠',
    title: 'Generative AI',
    desc: 'Research-grade generative infrastructure exploring multimodal content generation and AI media systems.',
  },
  {
    icon: '📡',
    title: 'Scalable Ecosystem',
    desc: 'Every product we build connects into a unified AI ecosystem — composable, interoperable, and production-ready.',
  },
];

export function ScrollAnimationSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll<HTMLElement>('.fade-in-up');
    if (!els) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity = '1';
          (e.target as HTMLElement).style.transform = 'translateY(0)';
        }
      }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-[120px] px-6">
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <div
          className="fade-in-up mb-[60px]"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
        >
          <span className="
            inline-block text-[11px] font-medium tracking-[0.12em] uppercase
            text-gray-400 border border-gray-200 dark:border-white/[0.1]
            px-3 py-1 rounded-full font-mono mb-5
          ">
            01 — About
          </span>
          <h2 className="text-[clamp(28px,4vw,48px)] font-semibold tracking-[-0.03em] text-gray-900 dark:text-gray-50 leading-[1.1] mb-4">
            An Intelligent<br />Systems Company
          </h2>
        </div>

        {/* Two-col: text + stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start mb-16">
          <div
            className="fade-in-up"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s 0.1s ease, transform 0.6s 0.1s ease' }}
          >
            <p className="text-[16px] font-light text-gray-500 dark:text-gray-400 leading-[1.8] mb-4">
              Valen Labs is an emerging AI systems and intelligent infrastructure
              company focused on building scalable platforms across career intelligence,
              automation, productivity, and generative AI.
            </p>
            <p className="text-[16px] font-light text-gray-500 dark:text-gray-400 leading-[1.8] mb-4">
              We believe the next generation of software is defined not by features,
              but by intelligence — systems that understand context, adapt in real-time,
              and augment human capability at scale.
            </p>
            <p className="text-[16px] font-light text-gray-500 dark:text-gray-400 leading-[1.8]">
              Every product we build is part of a connected ecosystem — a unified
              infrastructure designed for the intelligent future of work.
            </p>
          </div>

          <div
            className="fade-in-up grid grid-cols-2 gap-3"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s 0.2s ease, transform 0.6s 0.2s ease' }}
          >
            {STATS.map(({ n, l }) => (
              <div
                key={l}
                className="
                  bg-white dark:bg-white/[0.03]
                  border border-gray-100 dark:border-white/[0.07]
                  rounded-xl p-5
                "
              >
                <div className="text-[28px] font-semibold tracking-[-0.03em] text-gray-900 dark:text-gray-100">
                  {n}
                </div>
                <div className="text-[12px] text-gray-400 mt-1 font-mono tracking-[0.02em]">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILLARS.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className="fade-in-up bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-white/[0.07] rounded-xl p-5 hover:border-gray-200 dark:hover:border-white/[0.12] transition-all duration-300"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: `opacity 0.6s ${0.1 * (i + 1)}s ease, transform 0.6s ${0.1 * (i + 1)}s ease`,
              }}
            >
              <div className="text-2xl mb-3">{icon}</div>
              <div className="text-[14px] font-semibold text-gray-900 dark:text-gray-100 mb-2 tracking-[-0.01em]">
                {title}
              </div>
              <div className="text-[13px] font-light text-gray-500 dark:text-gray-400 leading-[1.65]">
                {desc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}