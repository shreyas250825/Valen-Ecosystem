export function VisionSection() {
  return (
    <section
      className="relative py-28 px-6 overflow-hidden bg-white text-gray-900"
    >
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.25),transparent_60%)]" />

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <div>
          <span className="px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm tracking-wide text-purple-300">
            Our Vision
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
            Designing The Next Generation Of
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {' '}
              Intelligent Infrastructure
            </span>
          </h2>

          <p className="mt-8 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Valen Labs is focused on building scalable AI ecosystems that combine
            intelligent automation, productivity systems, career intelligence, and
            future-ready infrastructure into one connected digital environment.
          </p>

          <p className="mt-6 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We believe the future belongs to integrated systems that augment human
            capability through practical AI, scalable architecture, and intelligent
            digital workflows.
          </p>
        </div>
      </div>
    </section>
  );
}

