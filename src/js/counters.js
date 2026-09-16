// [data-text-counter=N]: counts 0 → N over 1s (quad-out) the first time 20% of it is visible.
export function initCounters() {
  const els = document.querySelectorAll('[data-text-counter]');
  const run = (el) => {
    const target = parseFloat(el.getAttribute('data-text-counter')) || 0;
    const t0 = performance.now();
    const step = (now) => {
      const p = Math.min((now - t0) / 1000, 1);
      const e = 1 - (1 - p) * (1 - p);
      el.textContent = Math.round(target * e);
      if (p < 1) requestAnimationFrame(step); else el.textContent = target;
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver((entries, obs) => entries.forEach((e) => { if (e.isIntersecting) { run(e.target); obs.unobserve(e.target); } }), { threshold: 0.2 });
  els.forEach((el) => { el.textContent = '0'; io.observe(el); });
}
