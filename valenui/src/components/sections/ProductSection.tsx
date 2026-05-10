import { useEffect, useRef } from 'react';

type StatusType = 'active' | 'beta' | 'institutional' | 'dev' | 'research';

interface Product {
  id: string;
  icon: string;
  tag: string;
  title: string;
  status: StatusType;
  statusLabel: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref?: string;
  wide?: boolean;
}

const STATUS_STYLES: Record<StatusType, string> = {
  active:      'bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400',
  beta:        'bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400',
  institutional:'bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400',
  dev:         'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400',
  research:    'bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400',
};

const PRODUCTS: Product[] = [
  {
    id: 'valen-live',
    icon: '⚡',
    tag: 'Flagship Platform',
    title: 'Valen.live',
    status: 'active',
    statusLabel: 'Active Beta',
    description:
      'AI-powered career intelligence ecosystem focused on interview preparation, coding evaluation, resume intelligence, and hiring readiness.',
    features: [
      'AI Mock Interviews',
      'Live Coding Interviews',
      'Resume Intelligence',
      'Career Analytics',
      'ATS Optimization',
    ],
    ctaLabel: 'Visit Platform',
    ctaHref: 'https://valen.live',
  },
  {
    id: 'timetable',
    icon: '📅',
    tag: 'Institutional Platform',
    title: 'Timetable Automation System',
    status: 'institutional',
    statusLabel: 'Institutional Beta',
    description:
      'Intelligent academic scheduling platform designed for colleges and institutions to streamline scheduling workflows, faculty allocation, and timetable generation.',
    features: [
      'Automated Timetable Generation',
      'Faculty Scheduling',
      'Conflict Detection',
      'Academic Workflow Automation',
      'Department Management',
    ],
    ctaLabel: 'View System',
  },
  {
    id: 'resume',
    icon: '📄',
    tag: 'AI Infrastructure',
    title: 'Resume Intelligence',
    status: 'beta',
    statusLabel: 'Beta',
    description:
      'AI-powered resume analysis and enhancement infrastructure focused on ATS scoring, recruiter-style evaluation, and intelligent optimization.',
    features: [
      'Resume Grading',
      'ATS Analysis',
      'Resume Enhancement',
      'Smart Recommendations',
      'Resume Tracking',
    ],
    ctaLabel: 'Explore Features',
  },
  {
    id: 'code-arena',
    icon: '💻',
    tag: 'In Development',
    title: 'Code Arena',
    status: 'dev',
    statusLabel: 'Under Development',
    description:
      'Real-time intelligent coding ecosystem designed for DSA practice, coding interviews, compiler-based evaluation, and AI-assisted debugging.',
    features: [
      'Live Code Editor',
      'Coding Challenges',
      'Compiler Integration',
      'AI Code Review',
      'Interview Simulations',
    ],
    ctaLabel: 'Coming Soon',
  },
  {
    id: 'gen-ai',
    icon: '🎬',
    tag: 'Research Division',
    title: 'Generative AI Studio',
    status: 'research',
    statusLabel: 'Research & Development',
    description:
      'Future-focused generative AI infrastructure exploring text-to-video systems, AI media workflows, and multimodal content generation.',
    features: [
      'Text-to-Video Generation',
      'AI Media Systems',
      'Creative AI Workflows',
      'Multimodal Infrastructure',
    ],
    ctaLabel: 'Research Initiative',
    wide: true,
  },
];

function ProductCard({ product, delay }: { product: Product; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`
        group flex flex-col
        bg-white dark:bg-white/[0.03]
        border border-gray-100 dark:border-white/[0.07]
        rounded-2xl p-7
        hover:border-gray-200 dark:hover:border-white/[0.14]
        hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/[0.04]
        transition-all duration-300 cursor-default
        ${product.wide ? 'md:col-span-2 max-w-xl mx-auto w-full' : ''}
      `}
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        transition: `opacity 0.6s ${delay}s ease, transform 0.6s ${delay}s ease, box-shadow 0.3s, border-color 0.3s, translate 0.3s`,
      }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-3 mb-5">
        <div className="w-10 h-10 rounded-[10px] bg-indigo-50 dark:bg-indigo-500/[0.08] flex items-center justify-center text-[18px] flex-shrink-0">
          {product.icon}
        </div>
        <span className={`
          text-[10.5px] font-medium tracking-[0.06em] uppercase
          px-2.5 py-1 rounded-full font-mono flex-shrink-0
          ${STATUS_STYLES[product.status]}
        `}>
          {product.statusLabel}
        </span>
      </div>

      {/* Tag + Title */}
      <div className="text-[11px] font-medium tracking-[0.04em] text-indigo-500 dark:text-indigo-400 mb-2 font-mono">
        {product.tag}
      </div>
      <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-gray-900 dark:text-gray-100 mb-2.5">
        {product.title}
      </h3>
      <p className="text-[14px] font-light text-gray-500 dark:text-gray-400 leading-[1.65] mb-5">
        {product.description}
      </p>

      {/* Features */}
      <ul className="mb-5 flex-1">
        {product.features.map(f => (
          <li
            key={f}
            className="
              flex items-center gap-2 text-[12.5px] text-gray-400 dark:text-gray-500
              py-[5px] border-b border-gray-50 dark:border-white/[0.05] font-mono
              last:border-b-0
            "
          >
            <span className="text-indigo-400 text-[11px]">—</span>
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="pt-4 border-t border-gray-50 dark:border-white/[0.05] mt-auto">
        {product.ctaHref ? (
          <a
            href={product.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-1.5 text-[13px] font-medium
              text-indigo-600 dark:text-indigo-400 no-underline
              hover:opacity-70 transition-opacity duration-150
            "
          >
            {product.ctaLabel}
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 7h10M8 3l4 4-4 4" />
            </svg>
          </a>
        ) : (
          <span className="
            inline-flex items-center gap-1.5 text-[13px] font-medium
            text-indigo-600 dark:text-indigo-400
          ">
            {product.ctaLabel}
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 7h10M8 3l4 4-4 4" />
            </svg>
          </span>
        )}
      </div>
    </div>
  );
}

export function ProductSection() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="products" className="py-[120px] px-6 bg-gray-50 dark:bg-[#111110]">
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-[60px]"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
        >
          <span className="
            inline-block text-[11px] font-medium tracking-[0.12em] uppercase
            text-gray-400 border border-gray-200 dark:border-white/[0.1]
            px-3 py-1 rounded-full font-mono mb-5
          ">
            02 — Product Ecosystem
          </span>
          <h2 className="text-[clamp(28px,4vw,48px)] font-semibold tracking-[-0.03em] text-gray-900 dark:text-gray-50 leading-[1.1] mb-4">
            Intelligent Platforms
          </h2>
          <p className="text-[16px] font-light text-gray-500 dark:text-gray-400 max-w-[520px] mx-auto leading-[1.7]">
            A growing ecosystem of AI-powered platforms and scalable infrastructure
            built for the future of intelligent work.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} delay={i * 0.08} />
          ))}
        </div>

      </div>
    </section>
  );
}