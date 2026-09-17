// Shared requestAnimationFrame loop so multiple consumers drive one rAF cycle.
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
