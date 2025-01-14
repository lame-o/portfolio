export function smoothScroll(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const targetPosition = elementPosition + startPosition - headerOffset;
    const duration = 2000; // Even longer duration
    const startTime = performance.now();

    const easeInOutQuint = (t: number): number => {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
    };

    const scrollAnimation = (currentTime: number): void => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const run = easeInOutQuint(progress);
      const newPosition = startPosition + (targetPosition - startPosition) * run;
      
      window.scrollTo(0, newPosition);

      if (progress < 1) {
        requestAnimationFrame(scrollAnimation);
      }
    };

    requestAnimationFrame(scrollAnimation);
  }
}
