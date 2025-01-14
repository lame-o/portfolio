import { RAFManager } from './performance';

export function smoothScroll(elementId: string) {
  const rafManager = RAFManager.getInstance();
  
  // For "scroll to top", elementId will be null/undefined
  if (!elementId) {
    const startPosition = window.pageYOffset;
    const targetPosition = 0;
    animateScroll(startPosition, targetPosition);
    return;
  }

  // For scrolling to specific element
  const element = document.getElementById(elementId);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const targetPosition = elementPosition + startPosition - headerOffset;
    
    animateScroll(startPosition, targetPosition);
  }
}

function animateScroll(start: number, target: number) {
  const rafManager = RAFManager.getInstance();
  const duration = 2000; // Match the scroll to top duration
  const startTime = performance.now();

  const perfectEase = (t: number): number => {
    // Smooth acceleration throughout with gentle start and end
    const easeIn = t * t * t; // Cubic ease-in
    const easeOut = 1 - Math.pow(1 - t, 4); // Quartic ease-out
    
    // Blend between ease-in and ease-out using a smooth cosine interpolation
    const blend = (1 - Math.cos(t * Math.PI)) / 2;
    return easeIn * (1 - blend) + easeOut * blend;
  };

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const easing = perfectEase(progress);
    const currentPosition = start + (target - start) * easing;
    window.scrollTo(0, currentPosition);

    if (progress < 1) {
      rafManager.addCallback(animate);
    } else {
      rafManager.removeCallback(animate);
    }
  };

  rafManager.addCallback(animate);
}
