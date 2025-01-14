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