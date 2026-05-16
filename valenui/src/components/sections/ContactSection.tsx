export default function ContactSection() {
return ( <section
   id="contact"
   className="relative py-32 px-6 overflow-hidden bg-white dark:bg-black text-gray-900 dark:text-white"
 >
{/* Background Effects */} <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.18),transparent_40%)]" /> <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_35%)]" />


  {/* Grid Overlay */}
  <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

  <div className="max-w-6xl mx-auto relative z-10">
    <div className="relative overflow-hidden rounded-[36px] border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-2xl">
      
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
        <p className="mt-8 text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Valen Labs is building scalable AI ecosystems focused on career
          intelligence, intelligent automation, productivity systems, and
          next-generation digital infrastructure.
        </p>

        <p className="mt-4 text-gray-500 dark:text-gray-500 max-w-2xl mx-auto leading-relaxed">
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
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 text-gray-900 dark:text-white"
          >
            Contact Us
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-14 max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-indigo-500 dark:text-indigo-300 font-semibold">
            Trusted by early adopters
          </p>
          <h3 className="mt-4 text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white">
            Strong momentum from real users and AI teams.
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-base leading-7">
            Even small numbers build trust. Valen.live is already helping early beta users improve interviews, generate AI evaluations, and build smarter career workflows.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-7 text-center">
            <p className="text-5xl font-bold text-gray-900 dark:text-white">50+</p>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] font-semibold">
              Beta Users
            </p>
          </div>
          <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-7 text-center">
            <p className="text-5xl font-bold text-gray-900 dark:text-white">500+</p>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] font-semibold">
              AI Evaluations Generated
            </p>
          </div>
          <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-7 text-center">
            <p className="text-5xl font-bold text-gray-900 dark:text-white">500+</p>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] font-semibold">
              Interview Simulations Completed
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img src="/assets/testimonial2.png" alt="Testimonial from a woman" className="h-14 w-14 rounded-full object-cover" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Maya K.</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Product Designer</p>
              </div>
            </div>
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
              “Valen.live helped our team train for interviews faster than any tool we’ve tried. The live coding rooms and feedback are excellent.”
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img src="/assets/testimonial3.png" alt="Testimonial from a man" className="h-14 w-14 rounded-full object-cover" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Arjun S.</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
              </div>
            </div>
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
              “The AI evaluation reports gave me clear guidance on how to improve my resume and interview performance. Definitely worth checking out.”
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img src="/assets/user1.png" alt="Testimonial from a woman" className="h-14 w-14 rounded-full object-cover" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Nina R.</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Career Coach</p>
              </div>
            </div>
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
              “I can recommend Valen.live to students and clients with total confidence. The interview simulation experience is polished and highly realistic.”
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


);
}
