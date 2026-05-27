import { useCallback, useEffect, useState } from 'react';

const TOP_THRESHOLD = 80;

/**
 * Returns the section that contains the activation line (below the sticky header).
 * Uses getBoundingClientRect so nested layouts don't break scroll spy.
 */
function pickSectionFromViewport(sectionIds, activationLine) {
  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (!el) continue;

    const { top, bottom } = el.getBoundingClientRect();
    if (top <= activationLine && bottom > activationLine) {
      return id;
    }
  }

  // Between sections or near page bottom: last section whose top crossed the line
  let current = null;
  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= activationLine) {
      current = id;
    }
  }

  return current;
}

/**
 * Highlights the nav item for the section in view while scrolling.
 * No item is active at the top until the user scrolls or clicks a nav link.
 */
export function useActiveSection(sectionIds, offset = 120) {
  const [active, setActive] = useState(null);

  const updateFromScroll = useCallback(() => {
    if (window.scrollY < TOP_THRESHOLD) {
      setActive(null);
      return;
    }
    setActive(pickSectionFromViewport(sectionIds, offset));
  }, [sectionIds, offset]);

  useEffect(() => {
    updateFromScroll();
    window.addEventListener('scroll', updateFromScroll, { passive: true });
    window.addEventListener('resize', updateFromScroll);

    return () => {
      window.removeEventListener('scroll', updateFromScroll);
      window.removeEventListener('resize', updateFromScroll);
    };
  }, [updateFromScroll]);

  const setActiveSection = useCallback((id) => {
    setActive(id);
  }, []);

  return { active, setActiveSection };
}
