// data-slider helper (Swiper) — port of the reference's inline helper. On this page the only
// slider is the pinned apartments section, which is locked until the scroll scrub reaches its
// unlock point (apart:ready) and destroyed again below it (apart:lock).
import Swiper from 'swiper/bundle';

const SEL = {
  swiper: '[data-slider="swiper"]', wrapper: '[data-slider="swiper-wrapper"]', slide: '[data-slider="swiper-slide"]',
  navigation: '[data-slider="navigation"]', trigger: '[data-slider="trigger"]', arrowLeft: '[data-slider="arrow-left"]',
  arrowRight: '[data-slider="arrow-right"]', scrollbar: '[data-slider="scrollbar"]',
};
const swiperByEl = new WeakMap(), initialized = new WeakSet(), pending = new WeakSet(), observed = new WeakSet();
let io = null;
const qs = (r, s) => (r || document).querySelector(s);
const qsa = (r, s) => Array.from((r || document).querySelectorAll(s));

function findRoot(from) {
  let el = from;
  if (el.matches?.(SEL.swiper)) el = el.parentElement;
  while (el && el !== document.documentElement) {
    if (qs(el, SEL.swiper) && el.contains(from)) return el;
    el = el.parentElement;
  }
  return null;
}
const getSwiperEl = (root) => qs(root, SEL.swiper);
const isApartRoot = (root) => !!(root?.closest?.('.u-section.is-apart') || root?.matches?.('.u-section.is-apart'));

function decorate(root) {
  getSwiperEl(root)?.classList.add('swiper');
  qs(root, SEL.wrapper)?.classList.add('swiper-wrapper');
  qs(root, SEL.navigation)?.classList.add('swiper-pagination');
  qsa(root, SEL.slide).forEach((s) => s.classList.add('swiper-slide'));
}
function setEnabled(root, on) {
  root.classList.toggle('is-slider-disabled', !on);
  root.classList.toggle('is-slider-enabled', on);
  getSwiperEl(root)?.setAttribute('aria-disabled', on ? 'false' : 'true');
}
function readOptions(root) {
  for (const n of [root, getSwiperEl(root)]) {
    const raw = n?.getAttribute('data-slider-options');
    if (raw) { try { return JSON.parse(raw); } catch (e) { console.warn('[data-slider] bad options', e); } }
  }
  return {};
}
function buildOptions(root, count) {
  const user = readOptions(root);
  const canLoop = count > 1;
  const nav = qs(root, SEL.navigation);
  const opts = {
    slidesPerView: 1, spaceBetween: 0, speed: 600, grabCursor: false, allowTouchMove: false, simulateTouch: false,
    loop: canLoop, loopAdditionalSlides: canLoop ? 2 : 0, ...user,
    autoplay: { delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: false },
  };
  opts.allowTouchMove = false; opts.simulateTouch = false; opts.grabCursor = false;
  if (count <= 1) opts.loop = false;
  if (nav) opts.pagination = { el: nav, clickable: true, type: 'bullets', ...(user.pagination || {}) };
  opts.navigation = { prevEl: qs(root, SEL.arrowLeft), nextEl: qs(root, SEL.arrowRight) };
  opts.scrollbar = { el: qs(root, SEL.scrollbar), draggable: false, hide: false };
  opts.on = { ...(opts.on || {}),
    init: (sw) => root.dispatchEvent(new CustomEvent('data-slider:init', { bubbles: true, detail: { root, swiper: sw } })),
    slideChange: (sw) => root.dispatchEvent(new CustomEvent('data-slider:change', { bubbles: true, detail: { root, swiper: sw, activeIndex: sw.activeIndex, realIndex: sw.realIndex } })),
  };
  return opts;
}
function initSlider(root) {
  if (!root) return null;
  if (initialized.has(root)) { const e = getSwiperEl(root); return (e && swiperByEl.get(e)) || null; }
  const swiperEl = getSwiperEl(root);
  if (!swiperEl || !qs(root, SEL.wrapper)) return null;
  const slides = qsa(root, SEL.slide);
  if (!slides.length) return null;
  decorate(root); setEnabled(root, true);
  const opts = buildOptions(root, slides.length);
  let sw;
  try { sw = new Swiper(swiperEl, opts); } catch (err) { opts.loop = false; opts.loopAdditionalSlides = 0; sw = new Swiper(swiperEl, opts); }
  sw.autoplay?.start?.();
  swiperByEl.set(swiperEl, sw); initialized.add(root); pending.add(root);
  root.dispatchEvent(new CustomEvent('data-slider:ready', { bubbles: true, detail: { root, swiper: sw } }));
  return sw;
}
function lockSlider(root) {
  if (!root) return;
  if (root.matches?.(SEL.swiper)) root = findRoot(root) || root.parentElement;
  const swiperEl = getSwiperEl(root);
  const inst = swiperEl ? swiperByEl.get(swiperEl) : null;
  if (inst) {
    inst.autoplay?.stop?.();
    try { inst.params?.loop && inst.slideToLoop ? inst.slideToLoop(0, 0) : inst.slideTo(0, 0); } catch (e) { try { inst.slideTo(0, 0); } catch (e2) {} }
    inst.destroy(true, true);
    swiperByEl.delete(swiperEl);
  }
  initialized.delete(root); pending.delete(root); setEnabled(root, false);
}
function scheduleInit(root) {
  if (!root || initialized.has(root) || pending.has(root)) return;
  if (isApartRoot(root)) return; // waits for apart:ready
  pending.add(root); initSlider(root);
}
function onTriggerVisible(trigger) {
  const root = findRoot(trigger);
  if (!root || initialized.has(root) || pending.has(root) || isApartRoot(root)) return;
  scheduleInit(root);
}
const observeSize = (el) => { const r = el.getBoundingClientRect(); return r.width === 0 && r.height === 0 && el.parentElement ? el.parentElement : el; };
function bindTrigger(trigger) {
  if (!io || observed.has(trigger)) return;
  const target = observeSize(trigger);
  io.observe(target); observed.add(trigger);
  const r = target.getBoundingClientRect();
  if (r.bottom > 0 && r.top < innerHeight && r.right > 0 && r.left < innerWidth) onTriggerVisible(trigger);
}
function collectTriggers() {
  const t = qsa(document, SEL.trigger);
  if (t.length) return t;
  const roots = [];
  qsa(document, SEL.swiper).forEach((el) => { const r = findRoot(el) || el.parentElement; if (r && !roots.includes(r)) roots.push(r); });
  return roots;
}
function registerAll() {
  const roots = [];
  qsa(document, SEL.swiper).forEach((el) => {
    const root = findRoot(el) || el.parentElement;
    if (!root || roots.includes(root)) return;
    roots.push(root); decorate(root);
    if (!initialized.has(root)) setEnabled(root, false);
  });
}
function bindAll() {
  registerAll();
  const triggers = collectTriggers();
  if (!io) {
    io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      collectTriggers().forEach((t) => { if (observeSize(t) === e.target || t === e.target) onTriggerVisible(t); });
    }), { root: null, rootMargin: '0px 0px -5% 0px', threshold: 0.01 });
  }
  triggers.forEach(bindTrigger);
}
const apartRoot = (ev) => { const s = ev?.detail?.section || ev.target; if (!s) return null; return (s.matches?.('.u-section.is-apart') && s) || s.closest('.u-section.is-apart') || s; };

export function initDataSlider() {
  document.addEventListener('apart:ready', (ev) => { const r = apartRoot(ev); if (r) initSlider(r); });
  document.addEventListener('apart:lock', (ev) => { const r = apartRoot(ev); if (r) lockSlider(r); });
  bindAll();
  window.addEventListener('load', bindAll);
  let moTimer = null;
  new MutationObserver(() => { clearTimeout(moTimer); moTimer = setTimeout(bindAll, 100); }).observe(document.documentElement, { childList: true, subtree: true });
  window.DataSlider = {
    init: (t) => { if (typeof t === 'string') t = qs(document, t); if (!t) return null; if (t.matches?.(SEL.swiper)) t = findRoot(t) || t.parentElement; return initSlider(t); },
    get: (t) => { if (typeof t === 'string') t = qs(document, t); if (!t) return null; if (t.matches?.(SEL.swiper)) return swiperByEl.get(t) || null; const e = getSwiperEl(t); return (e && swiperByEl.get(e)) || null; },
    destroy: (t) => { if (typeof t === 'string') t = qs(document, t); if (t) lockSlider(t); },
    lock: (t) => { if (typeof t === 'string') t = qs(document, t); if (t) lockSlider(t); },
  };
}
