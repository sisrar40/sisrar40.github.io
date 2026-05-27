import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { site } from '../data/portfolio';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-[9998] flex h-12 w-12 items-center justify-center rounded-xl border border-red-600/30 bg-[#050505]/90 text-red-500 shadow-[0_0_20px_rgba(220,38,38,0.3)] backdrop-blur-xl transition hover:scale-110 hover:border-red-500 hover:text-white"
      aria-label={site.scrollToTopAria}
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  );
}
