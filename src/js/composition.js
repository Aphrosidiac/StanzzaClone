// Project cards: the "view" pill follows the pointer with a 0.12 lerp (desktop pointers only).
export function initCompositionCursor() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  document.querySelectorAll('.content_composition-card').forEach((card) => {
    const pill = card.querySelector('.is-compos-anim');
    if (!pill) return;
    let rect = card.getBoundingClientRect();
    let tx = rect.width / 2, ty = rect.height / 2, x = tx, y = ty, raf = null, inside = false;
    const measure = () => { rect = card.getBoundingClientRect(); };
    const tick = () => {
      x += (tx - x) * 0.12; y += (ty - y) * 0.12;
      pill.style.transform = `translate3d(${x - pill.offsetWidth / 2}px, ${y - pill.offsetHeight / 2}px, 0)`;
      raf = inside || Math.abs(tx - x) > 0.1 || Math.abs(ty - y) > 0.1 ? requestAnimationFrame(tick) : null;
    };
    card.addEventListener('pointerenter', (e) => { inside = true; measure(); tx = e.clientX - rect.left; ty = e.clientY - rect.top; if (!raf) tick(); });
    card.addEventListener('pointermove', (e) => { measure(); tx = e.clientX - rect.left; ty = e.clientY - rect.top; if (!raf) { inside = true; tick(); } });
    card.addEventListener('pointerleave', () => { inside = false; });
    window.addEventListener('resize', measure);
  });
}
