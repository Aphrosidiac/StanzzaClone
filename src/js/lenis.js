// Smooth scroll — same library and numbers as the reference (Lenis 1.0.33, lerp 0.1).
import Lenis from '@studio-freight/lenis';

export function initLenis() {
  const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
  window.lenis = lenis;
  const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);
  document.querySelectorAll('[data-lenis-start]').forEach((el) => el.addEventListener('click', () => lenis.start()));
  document.querySelectorAll('[data-lenis-stop]').forEach((el) => el.addEventListener('click', () => lenis.stop()));
  document.querySelectorAll('[data-lenis-toggle]').forEach((el) => el.addEventListener('click', function () {
    this.classList.toggle('stop-scroll');
    this.classList.contains('stop-scroll') ? lenis.stop() : lenis.start();
  }));
  return lenis;
}
