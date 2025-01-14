'use client'

import { useEffect } from 'react';
import { throttle, RAFManager } from '@/utils/performance';

export const useParallax = () => {
  useEffect(() => {
    const root = document.documentElement;
    const rafManager = RAFManager.getInstance();
    let scrollPos = window.scrollY;

    // Use RAF for smooth updates
    const updateParallax = (time: number) => {
      root.style.setProperty('--scrollPos', `${scrollPos}px`);
    };

    // Throttle scroll events to reduce performance impact
    const onScroll = throttle(() => {
      scrollPos = window.scrollY;
      rafManager.addCallback(updateParallax);
    }, 16); // ~60fps

    window.addEventListener('scroll', onScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      rafManager.removeCallback(updateParallax);
    };
  }, []);
};
