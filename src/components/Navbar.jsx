import { useEffect, useRef, useState } from 'react';
import { navigation, site } from '../data/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';
import { SECTION_X } from '../constants/layout';

const sectionIds = navigation.map((item) => item.id);
const LERP = 0.1;

function getScrollProgress() {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollHeight <= 0) return 0;
  return Math.min(1, Math.max(0, window.scrollY / scrollHeight));
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const { active, setActiveSection } = useActiveSection(sectionIds, 140);

  const targetProgress = useRef(0);
  const smoothProgress = useRef(0);
  const fillRef = useRef(null);
  const edgeRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const applyProgress = (value) => {
      const scale = Math.max(0, Math.min(1, value));
      if (fillRef.current) fillRef.current.style.transform = `scaleX(${scale})`;
      if (edgeRef.current) edgeRef.current.style.transform = `scaleX(${scale})`;
      setProgressPercent(Math.round(scale * 100));
    };

    const tick = () => {
      const target = targetProgress.current;
      const current = smoothProgress.current;
      const next = reducedMotion
        ? target
        : current + (target - current) * LERP;

      smoothProgress.current = Math.abs(next - target) < 0.0005 ? target : next;
      applyProgress(smoothProgress.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
      targetProgress.current = getScrollProgress();
    };

    onScroll();
    rafRef.current = requestAnimationFrame(tick);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollTo = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const renderLink = (item, isMobile = false) => {
    const isActive = active != null && active === item.id;
    const base = isMobile
      ? 'block w-full cursor-pointer border-b border-white/5 py-3 text-left text-lg font-semibold transition-all duration-300'
      : 'relative cursor-pointer px-2 py-1 text-sm font-medium transition-all duration-300 group lg:text-base';

    const color = isActive ? 'text-red-500 font-bold' : 'text-slate-300 hover:text-white';

    return (
      <button
        key={item.id}
        type="button"
        onClick={() => scrollTo(item.id)}
        className={`${base} ${color}`}
        aria-current={isActive ? 'true' : undefined}
      >
        {item.label}
        {!isMobile && (
          <span
            className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-600 to-red-900 transition-all duration-300 ${
              isActive ? 'w-full' : 'w-0 group-hover:w-full'
            }`}
          />
        )}
      </button>
    );
  };

  return (
    <nav
      className={`sticky top-0 z-[9999] overflow-hidden transition-[padding] duration-500 ${SECTION_X} ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
      role="progressbar"
      aria-valuenow={progressPercent}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    >
      {/* Full-header light progress fill */}
      <div
        ref={fillRef}
        className="pointer-events-none absolute inset-0 origin-left will-change-transform"
        style={{ transform: 'scaleX(0)' }}
        aria-hidden
      >
        <div className="h-full w-full bg-gradient-to-r from-red-500/25 via-red-500/12 to-red-950/5" />
      </div>

      {/* Base header backdrop */}
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
          isScrolled ? 'bg-[#050505]/70 backdrop-blur-xl' : 'bg-[#050505]/20 backdrop-blur-sm'
        }`}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="transition-transform duration-300 hover:scale-105"
        >
          <img
            src="/logo.svg"
            alt={site.logoAlt}
            width={isScrolled ? 50 : 60}
            height={isScrolled ? 50 : 60}
            className="brightness-125 transition-all duration-500"
          />
        </button>

        <div className="hidden items-center space-x-8 md:flex">
          {navigation.map((item) => renderLink(item))}
        </div>

        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-white transition-colors hover:bg-white/10"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="relative z-10 mt-2 border-t border-white/5 bg-[#050505]/95 py-2 backdrop-blur-xl md:hidden">
          {navigation.map((item) => renderLink(item, true))}
        </div>
      )}

      {/* Bottom accent line */}
      <div
        ref={edgeRef}
        className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-left will-change-transform"
        style={{ transform: 'scaleX(0)' }}
        aria-hidden
      >
        <div className="h-full w-full bg-gradient-to-r from-red-500 via-red-600 to-red-800 shadow-[0_0_10px_rgba(239,68,68,0.45)]" />
      </div>
    </nav>
  );
}
