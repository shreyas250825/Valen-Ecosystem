import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Navbar }                 from './components/ui/Navbar';
import { HeroSection }            from './components/sections/HeroSection';
import { ScrollAnimationSection } from './components/sections/ScrollAnimationSection';
import { ProductSection }         from './components/sections/ProductSection';
import { VisionSection }          from './components/sections/VisionSection';
import { FounderSection }         from './components/sections/FounderSection';
import { RoadmapSection }         from './components/sections/RoadmapSection';
import { BetaSection }            from './components/sections/BetaSection'; 
import ContactSection              from './components/sections/ContactSection';
import { Footer }                 from './components/sections/Footer';
import { Admin }                  from './pages/Admin';

/* ─── Theme hook ─────────────────────────────────────────────────────────── */
function useTheme() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const stored = localStorage.getItem('vl-theme');
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('vl-theme', theme);
  }, [theme]);

  const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));
  return { theme, toggle };
}

/* ─── Grid background ────────────────────────────────────────────────────── */
function GridBg() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)
        `,
        backgroundSize: '64px 64px',
        opacity: 0.5,
      }}
    />
  );
}

/* ─── Landing page ───────────────────────────────────────────────────────── */
function LandingPage({ theme, onToggleTheme }: { theme: 'dark' | 'light'; onToggleTheme: () => void }) {
  return (
    <div className="relative min-h-screen bg-white dark:bg-[#0a0a09] text-gray-900 dark:text-gray-100">
      <GridBg />

      <Navbar theme={theme} onToggleTheme={onToggleTheme} />

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
        <BetaSection onSubmit={async () => {}} />
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
  const { theme, toggle } = useTheme();

  return (
    <Routes>
      <Route
        path="/"
        element={<LandingPage theme={theme} onToggleTheme={toggle} />}
      />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}