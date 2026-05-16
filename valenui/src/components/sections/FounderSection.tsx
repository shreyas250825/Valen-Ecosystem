export function FounderSection() {
  const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM0.5 8H4.5V24H0.5V8ZM8 8H12V10.06h.06C12.74 8.81 14.32 8 16.11 8c3.78 0 5.89 2.48 5.89 6.6V24h-4V15.62c0-1.96-.71-3.3-2.49-3.3-1.36 0-2.17.92-2.53 1.81-.13.33-.16.78-.16 1.24V24h-4V8Z"/>
    </svg>
  );
  return (
    <section

      className="py-28 px-6 bg-white dark:bg-black text-black dark:text-white transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-500">
              Founder
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold">Founder & CEO</h2>

            <h3 className="mt-4 text-2xl font-semibold text-purple-500">
              Shreyas Salian
            </h3>

            <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              Shreyas Salian is the Founder & CEO of Valen Labs, focused on building
              scalable intelligent systems and AI-powered digital infrastructure.
            </p>

            <p className="mt-4 text-gray-600 dark:text-gray-500 leading-relaxed">
              His work focuses on combining artificial intelligence, automation,
              intelligent workflows, and system-driven product architecture to create
              practical platforms with long-term real-world impact.
            </p>

            <a
              href="https://www.linkedin.com/in/shreyas-salian25"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium shadow-lg hover:scale-105 transition-transform"
            >
              <LinkedinIcon size={18} />
            Connect on LinkedIn
            </a>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-3xl" />

            <div className="relative rounded-3xl border border-zinc-800 bg-zinc-950 p-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full" />

              <div className="space-y-6 relative z-10">
                <div>
                  <p className="text-zinc-500 text-sm">Position</p>
                  <h4 className="text-xl font-semibold text-white">Founder & CEO</h4>
                </div>

                <div>
                  <p className="text-zinc-500 text-sm">Focus Areas</p>
                  <div className="flex flex-wrap gap-3 mt-3">
                    {[
                      'Artificial Intelligence',
                      'Automation',
                      'Career Intelligence',
                      'AI Infrastructure',
                      'System Design',
                    ].map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-zinc-500 text-sm">Vision</p>
                  <p className="mt-2 text-zinc-400 leading-relaxed">
                    Building intelligent ecosystems that combine AI, productivity, and scalable
                    digital infrastructure for the future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

