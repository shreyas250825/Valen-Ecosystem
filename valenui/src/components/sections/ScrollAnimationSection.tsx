import { useEffect, useRef } from 'react';

const STATS = [
  {
    n: '5+',
    l: 'Active Platforms',
    style: 'bg-indigo-50 dark:bg-indigo-500/10 border-indigo-100 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300',
  },
  {
    n: '2026',
    l: 'Founded',
    style: 'bg-cyan-50 dark:bg-cyan-500/10 border-cyan-100 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-300',
  },
  {
    n: '120+',
    l: 'Live Integrations',
    style: 'bg-violet-50 dark:bg-violet-500/10 border-violet-100 dark:border-violet-500/20 text-violet-700 dark:text-violet-300',
  },
  {
    n: '4.9/5',
    l: 'Product Satisfaction',
    style: 'bg-amber-50 dark:bg-amber-500/10 border-amber-100 dark:border-amber-500/20 text-amber-700 dark:text-amber-300',
  },
];

const PILLARS = [
  {
    title: 'Career Intelligence',
    desc: 'Systems that understand career trajectories, evaluate hiring readiness, and surface actionable intelligence.',
  },
  {
    title: 'Automation',
    desc: 'Intelligent workflow automation that removes friction from institutional and enterprise processes at scale.',
  },
  {
    title: 'Generative AI',
    desc: 'Research-grade infrastructure exploring multimodal content generation and AI media systems.',
  },
  {
    title: 'Scalable Ecosystem',
    desc: 'Every product we build is part of a unified AI ecosystem — composable, interoperable, and production-ready.',
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
            {STATS.map(({ n, l, style }) => (
              <div
                key={l}
                className={`
                  ${style}
                  border rounded-xl p-5
                `}
              >
                <div className="text-[28px] font-semibold tracking-[-0.03em]">
                  {n}
                </div>
                <div className="text-[12px] mt-1 font-mono tracking-[0.02em] text-slate-600 dark:text-slate-300">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILLARS.map(({ title, desc }, i) => {
            const pillarColors = [
              'from-indigo-50 to-violet-50 text-slate-900 border-indigo-100 dark:from-indigo-500/10 dark:to-violet-500/10 dark:text-gray-100 dark:border-indigo-500/20',
              'from-cyan-50 to-sky-50 text-slate-900 border-cyan-100 dark:from-cyan-500/10 dark:to-sky-500/10 dark:text-gray-100 dark:border-cyan-500/20',
              'from-fuchsia-50 to-pink-50 text-slate-900 border-fuchsia-100 dark:from-fuchsia-500/10 dark:to-pink-500/10 dark:text-gray-100 dark:border-fuchsia-500/20',
              'from-amber-50 to-yellow-50 text-slate-900 border-amber-100 dark:from-amber-500/10 dark:to-yellow-500/10 dark:text-gray-100 dark:border-amber-500/20',
            ];
            return (
              <div
                key={title}
                className={`fade-in-up bg-gradient-to-br ${pillarColors[i]} border rounded-3xl p-6 shadow-sm shadow-slate-200/40 dark:shadow-none hover:shadow-xl hover:shadow-slate-300/20 transition-all duration-300`}
                style={{
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: `opacity 0.6s ${0.1 * (i + 1)}s ease, transform 0.6s ${0.1 * (i + 1)}s ease`,
                }}
              >
                <div className="mb-4 h-2.5 w-16 rounded-full bg-white/80" />
                <div className="text-[14px] font-semibold mb-2 tracking-[-0.01em]">
                  {title}
                </div>
                <div className="text-[13px] font-light leading-[1.8]">
                  {desc}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}