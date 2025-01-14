'use client'

import { useEffect } from 'react';

export const useParallax = () => {
  useEffect(() => {
    const root = document.documentElement;
    let scrollPos: number;
    let ticking = false;

    const updateScrollPos = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          root.style.setProperty('--scrollPos', `${scrollPos}px`);
          ticking = false;
        });
        ticking = true;
      }
    };

    const onScroll = () => {
      scrollPos = window.scrollY;
      updateScrollPos();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
};
