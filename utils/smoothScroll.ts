export function smoothScroll(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const targetPosition = elementPosition + startPosition - headerOffset;
    const duration = 2000;
    const startTime = performance.now();

    const perfectEase = (t: number): number => {
      // Smooth acceleration throughout with gentle start and end
      const easeIn = t * t * t; // Cubic ease-in
      const easeOut = 1 - Math.pow(1 - t, 4); // Quartic ease-out
      
      // Blend between ease-in and ease-out using a smooth cosine interpolation
      const blend = (1 - Math.cos(t * Math.PI)) / 2;
      return easeIn * (1 - blend) + easeOut * blend;
    };

    const scrollAnimation = (currentTime: number): void => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const run = perfectEase(progress);
      const newPosition = startPosition + (targetPosition - startPosition) * run;
      
      window.scrollTo(0, newPosition);

      if (progress < 1) {
        requestAnimationFrame(scrollAnimation);
      }
    };

    requestAnimationFrame(scrollAnimation);
  }
}
