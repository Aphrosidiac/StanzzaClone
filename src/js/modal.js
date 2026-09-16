// Modals: [data-trigger=X] opens [data-modal=X], [data-close-modal=X] closes it. The visual
// transitions live in custom.css (.modal_state-open). Lenis stop/start is wired by lenis.js
// through data-lenis-stop / data-lenis-start on the same elements.
export function initModals() {
  const OPEN = 'modal_state-open';
  document.querySelectorAll('[data-trigger]').forEach((t) => {
    const name = t.getAttribute('data-trigger');
    if (!name) return;
    t.addEventListener('click', () => document.querySelector(`[data-modal="${name}"]`)?.classList.add(OPEN));
  });
  document.querySelectorAll('[data-close-modal]').forEach((t) => {
    const name = t.getAttribute('data-close-modal');
    t.addEventListener('click', () => document.querySelector(`[data-modal="${name}"]`)?.classList.remove(OPEN));
  });
}
