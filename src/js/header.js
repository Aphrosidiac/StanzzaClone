// Header: hides while scrolling down (past 5vh), shows on scroll up; goes dark whenever its
// bottom edge sits inside a [data-scroll="dark"] section. Frozen while the mobile menu is open.
export function initHeader() {
  const header = document.querySelector('header[data-scroll="header"]');
  const sections = document.querySelectorAll('[data-scroll]:not([data-scroll="header"])');
  const nav = document.querySelector('.nav_content');
  if (!header || !sections.length) return;
  let last = 0;
  const dark = () => {
    const bottom = header.getBoundingClientRect().bottom;
    let hit = false;
    for (const s of sections) {
      if (s.dataset.scroll !== 'dark') continue;
      const r = s.getBoundingClientRect();
      if (bottom >= r.top && bottom <= r.bottom) { hit = true; break; }
    }
    header.classList.toggle('header--dark', hit);
  };
  const hide = () => {
    if (nav && nav.classList.contains('w--open')) return;
    const y = window.pageYOffset || document.documentElement.scrollTop;
    const threshold = 5 * (0.01 * innerHeight);
    const down = y > last;
    if (y > threshold && down) header.classList.add('is-hide'); else header.classList.remove('is-hide');
    last = y <= 0 ? 0 : y;
  };
  const all = () => { dark(); hide(); };
  window.addEventListener('scroll', all);
  window.addEventListener('resize', all);
  dark(); hide();
}
