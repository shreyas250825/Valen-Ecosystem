import { ProductCardProps } from '../../types';
import { STATUS_THEME } from '../../constants/data';

export function ProductCard({
  tag,
  title,
  status,
  description,
  featureBullets,
  ctaLabel,
  ctaHref,
  icon,
  index
}: ProductCardProps) {
  const theme = STATUS_THEME[status];

  return (
    <div
      className={
        index === 0
          ? 'group relative p-10 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:shadow-[0_0_35px_rgba(139,92,246,0.18)] transition-all overflow-hidden md:col-span-2'
          : 'group relative p-10 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:shadow-[0_0_35px_rgba(139,92,246,0.18)] transition-all overflow-hidden'
      }
    >
      {/* Glass gradient sheen */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/15 via-transparent to-primary-blue/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Card glow */}
      <div
        className={`absolute -top-28 -right-28 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${theme.glowClass}`}
      />

      {/* Status + Tag */}
      <div className="relative flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: 'transparent' }}
          />
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${theme.labelClass}`}>
            <span className={`w-2.5 h-2.5 rounded-full ${theme.dotClass}`} />
            <span className="text-xs font-semibold tracking-wide">{status}</span>
          </div>
        </div>
        <div className="text-xs text-gray-300/90 font-medium px-3 py-1 rounded-full border border-gray-800 bg-gray-900/30">
          {tag}
        </div>
      </div>

      <div className="relative">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gradient transition-all">
              {title}
            </h3>
            <p className="text-gray-300/90 mb-7 leading-relaxed text-base">{description}</p>
          </div>

          {/* Icon/logo slot */}
          <div className="shrink-0">
            {icon ? (
              <img src={icon} alt={`${title} icon`} className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5" />
            ) : (
              <div className="w-12 h-12 rounded-2xl border border-white/10 bg-gradient-to-br from-primary-purple/20 to-primary-blue/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z" />
                </svg>
              </div>
            )}
          </div>
        </div>

        <ul className="space-y-3">
          {featureBullets.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 group/item">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/10 border border-white/10 flex items-center justify-center mt-0.5 group-hover/item:bg-primary-purple/25 transition-colors">
                <svg className="w-3 h-3 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-gray-200/90 group-hover/item:text-white transition-colors">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <div className="relative mt-8">
          <a
            href={ctaHref}
            className={`inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold border border-white/10 bg-white/5 hover:bg-white/10 transition-all backdrop-blur-md ${theme.glowClass}`}
          >
            {ctaLabel}
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

