// Performance optimization utilities
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => void>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Intersection Observer utility for lazy loading
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
  }
): IntersectionObserver | null => {
  if (typeof window === 'undefined') return null;
  return new IntersectionObserver(callback, options);
};

// RAF manager for smooth animations
export class RAFManager {
  private static instance: RAFManager;
  private callbacks: Set<(time: number) => void> = new Set();
  private isRunning = false;

  private constructor() {
    this.tick = this.tick.bind(this);
  }

  static getInstance(): RAFManager {
    if (!RAFManager.instance) {
      RAFManager.instance = new RAFManager();
    }
    return RAFManager.instance;
  }

  private tick(time: number): void {
    if (!this.isRunning) return;
    this.callbacks.forEach(callback => callback(time));
    requestAnimationFrame(this.tick);
  }

  addCallback(callback: (time: number) => void): void {
    this.callbacks.add(callback);
    if (!this.isRunning && this.callbacks.size > 0) {
      this.isRunning = true;
      requestAnimationFrame(this.tick);
    }
  }

  removeCallback(callback: (time: number) => void): void {
    this.callbacks.delete(callback);
    if (this.callbacks.size === 0) {
      this.isRunning = false;
    }
  }
}

export const measurePerformance = (action: string) => {
  if (process.env.NODE_ENV === 'development') {
    performance.mark(`${action}-start`);
    return () => {
      performance.mark(`${action}-end`);
      performance.measure(
        action,
        `${action}-start`,
        `${action}-end`
      );
      const measurements = performance.getEntriesByName(action);
      console.log(`${action} took ${measurements[0].duration}ms`);
    };
  }
  return () => {};
};