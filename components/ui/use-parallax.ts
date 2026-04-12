'use client'

import { useEffect } from 'react';
import { RAFManager } from '@/utils/performance';

export const useParallax = () => {
  useEffect(() => {
    if (typeof CSS !== 'undefined' && CSS.supports('animation-timeline', 'scroll()')) {
      return;
    }

    const root = document.documentElement;
    const rafManager = RAFManager.getInstance();
    let lastApplied = -1;

    const updateParallax = () => {
      const sy = window.scrollY;
      if (sy === lastApplied) return;
      lastApplied = sy;
      root.style.setProperty('--scrollPos', `${sy}px`);
    };

    rafManager.addCallback(updateParallax);

    return () => {
      rafManager.removeCallback(updateParallax);
    };
  }, []);
};
