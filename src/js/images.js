// Blur reveal: every .u-image starts with .is-blur (CSS filter + transition) and loses it the
// first time it enters the viewport. data-animation="false" opts an image out.
export function initImageReveal() {
  const all = document.querySelectorAll('.u-image');
  document.querySelectorAll('[data-animation="false"]').forEach((el) => el.classList.remove('is-blur'));
  const targets = Array.from(all).filter((el) => !el.hasAttribute('data-animation') || el.getAttribute('data-animation') !== 'false');
  const inView = (el) => { const r = el.getBoundingClientRect(); return r.top < innerHeight && r.bottom > 0 && r.left < innerWidth && r.right > 0; };
  targets.forEach((el) => { if (el.classList.contains('is-blur') && inView(el)) el.classList.remove('is-blur'); });
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting && e.target.classList.contains('is-blur')) e.target.classList.remove('is-blur'); });
  }, { threshold: 0.01 });
  targets.forEach((el) => io.observe(el));
  window.observeNewImages = (root) => {
    Array.from(root.querySelectorAll ? root.querySelectorAll('.u-image') : []).forEach((el) => {
      if ((!el.hasAttribute('data-animation') || el.getAttribute('data-animation') !== 'false') && el.classList.contains('is-blur')) {
        inView(el) ? el.classList.remove('is-blur') : io.observe(el);
      }
    });
  };
}
