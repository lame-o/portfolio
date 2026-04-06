'use client'

import { useEffect } from 'react';
import { RAFManager } from '@/utils/performance';

export const useParallax = () => {
  useEffect(() => {
    const root = document.documentElement;
    const rafManager = RAFManager.getInstance();
    let scrollPos = window.scrollY;

    const updateParallax = () => {
      root.style.setProperty('--scrollPos', `${scrollPos}px`);
    };

    const onScroll = () => {
      scrollPos = window.scrollY;
    };

    rafManager.addCallback(updateParallax);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      rafManager.removeCallback(updateParallax);
    };
  }, []);
};
