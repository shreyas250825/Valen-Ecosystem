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
  return (
    <div className="relative min-h-screen bg-white dark:bg-[#0a0a09] text-gray-900 dark:text-gray-100">
      <GridBg />

      <Navbar />

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

