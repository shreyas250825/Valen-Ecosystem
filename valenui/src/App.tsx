import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Navbar } from './components/ui/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { ScrollAnimationSection } from './components/sections/ScrollAnimationSection';
import { ProductSection } from './components/sections/ProductSection';
import { VisionSection } from './components/sections/VisionSection';
import { FounderSection } from './components/sections/FounderSection';
import { RoadmapSection } from './components/sections/RoadmapSection';
import { BetaSection } from './components/sections/BetaSection';
import ContactSection from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';
import { Admin } from './pages/Admin';

/* ─── Grid background ────────────────────────────────────────────────────── */
function GridBg() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(200,200,200,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,200,200,0.08) 1px, transparent 1px)
        `,
        backgroundSize: '64px 64px',
        opacity: 0.3,
      }}
    />
  );
}

/* ─── Landing page ───────────────────────────────────────────────────────── */
function LandingPage() {
  const [showValenPopup, setShowValenPopup] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem('valen-live-cta-shown');
    if (!shown) {
      const timer = window.setTimeout(() => setShowValenPopup(true), 20000);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, []);

  const closePopup = () => {
    sessionStorage.setItem('valen-live-cta-shown', '1');
    setShowValenPopup(false);
  };

  const openValenLive = () => {
    window.open('https://valen.live', '_blank');
    closePopup();
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#0a0a09] text-gray-900 dark:text-gray-100">
      <GridBg />

      <Navbar />

      {showValenPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-black/45 backdrop-blur-sm" onClick={closePopup} />
          <div className="relative w-full max-w-lg rounded-[32px] border border-gray-200/90 bg-white p-6 shadow-2xl shadow-indigo-500/10 dark:border-white/10 dark:bg-[#0b0b09]">
            <button
              onClick={closePopup}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200 dark:bg-white/[0.05] dark:text-gray-300 dark:hover:bg-white/[0.1]"
              aria-label="Close popup"
            >
              X
            </button>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.18em] text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
              Flagship Product
            </span>
            <h2 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-gray-900 dark:text-gray-50">
              Try Valen.live for free
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
              Valen.live is our flagship product. Start a free session now to explore AI mock interviews, resume intelligence, and live coding labs.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                onClick={openValenLive}
                className="inline-flex items-center justify-center rounded-[14px] bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
              >
                Try now for free
              </button>
              <button
                onClick={closePopup}
                className="inline-flex items-center justify-center rounded-[14px] border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:border-white/10 dark:bg-[#111] dark:text-gray-200 dark:hover:bg-white/[0.04]"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 1 — Hero */}
      <HeroSection />

      {/* 2 — About */}
      <ScrollAnimationSection />

      {/* 3 — Products */}
      <ProductSection />

      {/* 4 — Vision */}
      <div id="vision">
        <VisionSection />
      </div>

      {/* 5 — Founder */}
      <div id="ecosystem">
        <FounderSection />
      </div>

      {/* 6 — Roadmap */}
      <div id="roadmap">
        <RoadmapSection />
      </div>

      {/* 7 — Beta */}
      <div id="beta">
        <BetaSection
          onSubmit={async (email) => {
            // Route to local Vercel API (/api/beta-signup)
            const res = await fetch('/api/beta-signup', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email, timestamp: Date.now() }),
            });

            if (!res.ok) {
              throw new Error('Beta signup failed');
            }
          }}
        />
      </div>

      {/* 8 — Contact */}
      <div id="contact">
        <ContactSection />
      </div>

      {/* 9 — Footer */}
      <Footer />
    </div>
  );
}

/* ─── App root ───────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

