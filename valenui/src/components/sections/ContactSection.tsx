export default function ContactSection() {
return ( <section
   id="contact"
   className="relative py-32 px-6 overflow-hidden bg-black text-white"
 >
{/* Background Effects */} <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.18),transparent_40%)]" /> <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_35%)]" />


  {/* Grid Overlay */}
  <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

  <div className="max-w-6xl mx-auto relative z-10">
    <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl">
      
      {/* Glow Effects */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 px-8 py-20 md:px-16 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-sm mb-8">
          Building The Future Of Intelligent Systems
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
          Build The Future With
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {" "}
            Valen Labs
          </span>
        </h2>

        {/* Description */}
        <p className="mt-8 text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Valen Labs is building scalable AI ecosystems focused on career
          intelligence, intelligent automation, productivity systems, and
          next-generation digital infrastructure.
        </p>

        <p className="mt-4 text-zinc-500 max-w-2xl mx-auto leading-relaxed">
          We are continuously expanding our ecosystem through intelligent
          products, research initiatives, and scalable infrastructure
          platforms designed for the future.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          
          <a
            href="https://valen.live"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Visit Valen.live
          </a>

          <a
            href="mailto:contact@valenlabs.in"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 text-zinc-200"
          >
            Contact Us
          </a>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-3xl font-bold text-white">AI</h3>
            <p className="mt-2 text-zinc-400">
              Intelligent Systems & Infrastructure
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-3xl font-bold text-white">Beta</h3>
            <p className="mt-2 text-zinc-400">
              Expanding Product Ecosystem
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-3xl font-bold text-white">Future</h3>
            <p className="mt-2 text-zinc-400">
              Building Scalable AI Infrastructure
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>


);
}
