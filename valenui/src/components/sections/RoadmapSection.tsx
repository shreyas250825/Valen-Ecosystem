const roadmap = [
  {
    phase: 'Current',
    items: ['Valen.live Beta', 'Resume Intelligence', 'Institutional Scheduling Systems'],
  },
  {
    phase: 'Upcoming',
    items: ['AI Coding Environment', 'Interview Intelligence Expansion', 'Generative AI Systems'],
  },
  {
    phase: 'Long Term',
    items: ['Enterprise AI Infrastructure', 'Intelligent Workflow Systems', 'AI Ecosystem Expansion'],
  },
];

export function RoadmapSection() {
  return (
    <section

      className="py-28 px-6 bg-zinc-950 text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <span className="px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300">
            Roadmap
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold">
            Building The Future Of
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {' '}
              Intelligent Systems
            </span>
          </h2>

          <p className="mt-6 text-zinc-400 max-w-3xl mx-auto text-lg">
            The long-term vision of Valen Labs is to build scalable AI ecosystems that
            combine productivity, automation, career intelligence, and intelligent
            infrastructure into connected digital systems.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {roadmap.map((phase) => (
            <div
              key={phase.phase}
              className="relative rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl p-8"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-60" />

              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-6 text-white">{phase.phase}</h3>

                <div className="space-y-4">
                  {phase.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-zinc-300">
                      <div className="w-2 h-2 rounded-full bg-purple-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

