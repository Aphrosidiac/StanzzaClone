// Small behaviours that each had their own inline script on the reference.

// Copy-link buttons (none on this page, kept for parity with the shared component).
export function initCopyLink() {
  document.querySelectorAll('[data-copy="link"]').forEach((el) => {
    const done = el.querySelector('[data-copy="clicked"]');
    if (!done) return;
    el.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        done.style.display = 'block';
        clearTimeout(done._hideTimer);
        done._hideTimer = setTimeout(() => { done.style.display = 'none'; }, 5000);
      } catch (e) { /* clipboard refused */ }
    });
  });
}

// FAQ "show more" ↔ "show less" label swap (the height animation is in dropdown.js).
export function initShowMoreSwap() {
  const btn = document.querySelector('[data-button-swap="swap-trigger"]');
  const label = btn?.querySelector('[data-text="show-swap"]');
  if (!btn || !label) return;
  let open = false;
  btn.addEventListener('click', () => { open = !open; label.innerText = open ? 'show less' : 'show more'; });
}

// Cover wipe on project / blog cards: .is-active collapses the cover (CSS height 0%, 0.65s).
export function initAwardsScroll() {
  const els = document.querySelectorAll('[data-awards="scroll"]');
  if (!els.length) return;
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-active'); obs.unobserve(e.target); } });
  }, { root: null, rootMargin: '0px 0px -35% 0px', threshold: 0 });
  els.forEach((el) => io.observe(el));
}
