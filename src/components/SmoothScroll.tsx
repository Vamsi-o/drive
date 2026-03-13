'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

/**
 * Initializes Lenis smooth scrolling with premium feel.
 * Provides buttery-smooth momentum-based scrolling with
 * natural deceleration — the hallmark of luxury websites.
 */
const SmoothScroll = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,           // Scroll duration (higher = smoother/slower)
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,      // Makes touch scroll feel responsive
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle anchor links — Lenis needs to be told to scroll to hash targets
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          const el = document.querySelector(href);
          if (el) {
            e.preventDefault();
            lenis.scrollTo(el as HTMLElement, { offset: -80 });
          }
        }
      }
    };

    document.addEventListener('click', handleHashClick);

    return () => {
      document.removeEventListener('click', handleHashClick);
      lenis.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;
