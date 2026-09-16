// Preloader → hero hand-off. A straight port of the reference's inline preloader script:
// two timelines (desktop ≥768 / mobile), same positions, durations and eases.
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

const ID = (s) => `w-node-f451bb51-2dd3-54c9-fb38-8c90f81878${s}-f818781b`;
// Desktop: 14 tiles converge on the centre; the outermost pair also fades.
const DESKTOP_MOVES = [
  { id: ID('41'), x: '30.8svw', opacity: 0 }, { id: ID('5d'), x: '-30.8svw', opacity: 0 },
  { id: ID('43'), x: '26.4svw', opacity: 0 }, { id: ID('5b'), x: '-26.4svw', opacity: 0 },
  { id: ID('45'), x: '22svw' }, { id: ID('59'), x: '-22svw' },
  { id: ID('47'), x: '17.6svw' }, { id: ID('57'), x: '-17.6svw' },
  { id: ID('49'), x: '13.2svw' }, { id: ID('55'), x: '-13.2svw' },
  { id: ID('4b'), x: '8.8svw' }, { id: ID('53'), x: '-8.8svw' },
  { id: ID('4d'), x: '4.4svw' }, { id: ID('51'), x: '-4.4svw' },
];
// Mobile: only the inner six move.
const MOBILE_MOVES = [
  { id: ID('49'), x: '37.5svw' }, { id: ID('55'), x: '-37.5svw' },
  { id: ID('4b'), x: '25svw' }, { id: ID('53'), x: '-25svw' },
  { id: ID('4d'), x: '12.5svw' }, { id: ID('51'), x: '-12.5svw' },
];
// The reference passes Webflow's undefined `wf4/wf5/wf6` eases — GSAP falls back to its default
// (power1.out). Reproduced by leaving them undefined.
const WF = undefined;

const stopLenis = () => window.lenis?.stop?.();
const finish = (preloader) => { if (preloader) gsap.set(preloader, { display: 'none' }); window.lenis?.start?.(); };

function moveTiles(tl, moves, at, stagger, duration, ease) {
  moves.forEach((m, i) => {
    const el = document.getElementById(m.id);
    if (!el) return;
    const vars = { x: m.x, duration, ease };
    if (m.opacity === 0) vars.opacity = 0;
    tl.to(el, vars, at + i * stagger);
  });
}

function fadeText(split, ease) {
  if (split.headChars.length) gsap.to(split.headChars, { opacity: 0, yPercent: 20, duration: 0.7, stagger: { each: 0.03, from: 'end' }, ease, force3D: true });
  if (split.bodyWords.length) gsap.to(split.bodyWords, { opacity: 0, yPercent: 20, duration: 0.7, stagger: { each: 0.03, from: 'end' }, ease, force3D: true });
}

function splitPreloaderText(root) {
  if (!root) return { headChars: [], bodyWords: [] };
  gsap.set(root, { visibility: 'hidden' });
  const head = root.querySelector('.u-head_one');
  const body = root.querySelector('.u-body_body');
  let headChars = [], bodyWords = [];
  if (head) {
    const s = new SplitText(head, { type: 'words,chars', charsClass: 'char-wrap', wordsClass: 'word-wrap' });
    head.splitInstance = s;
    gsap.set(s.words, { display: 'inline-block', whiteSpace: 'nowrap' });
    gsap.set(s.chars, { opacity: 0, yPercent: 20, willChange: 'transform,opacity', force3D: true, backfaceVisibility: 'hidden', display: 'inline-block' });
    headChars = s.chars;
  }
  if (body) {
    const s = new SplitText(body, { type: 'words', wordsClass: 'word-wrap' });
    body.splitInstance = s;
    gsap.set(s.words, { opacity: 0, yPercent: 20, willChange: 'transform,opacity', force3D: true, backfaceVisibility: 'hidden', display: 'inline-block' });
    bodyWords = s.words;
  }
  root.classList.add('is-text-ready');
  gsap.set(root, { visibility: 'visible' });
  return { headChars, bodyWords };
}

function splitHeroHeads(tl, at) {
  document.querySelectorAll('[data-preload="main-head"]').forEach((el) => {
    const s = new SplitText(el, { type: 'words,chars', charsClass: 'char-wrap', wordsClass: 'word-wrap' });
    gsap.set(el, { visibility: 'visible' });
    gsap.set(s.words, { display: 'inline-block', whiteSpace: 'nowrap' });
    gsap.set(s.chars, { opacity: 0, yPercent: 20, willChange: 'transform,opacity', force3D: true, backfaceVisibility: 'hidden', display: 'inline-block' });
    el.splitInstance = s;
    tl.to(s.chars, { opacity: 1, yPercent: 0, duration: 1.5, stagger: 0.03, ease: 'power2.out', force3D: true, clearProps: 'willChange' }, at);
  });
}

function play(el, split) {
  stopLenis();
  el.header?.classList.add('is-hide');
  if (split.headChars.length) gsap.to(split.headChars, { duration: 1.5, opacity: 1, yPercent: 0, stagger: 0.03, ease: 'power2.out', force3D: true, clearProps: 'willChange' });
  if (split.bodyWords.length) gsap.to(split.bodyWords, { duration: 1.5, opacity: 1, yPercent: 0, stagger: 0.03, ease: 'power2.out', force3D: true, clearProps: 'willChange' });

  if (window.innerWidth < 768) {
    const tl = gsap.timeline({ delay: 0, onComplete: () => finish(el.preloader) });
    tl.to(el.firstItems, { y: '-6.25svw', duration: 0.65, ease: 'power2.inOut' }, 0);
    tl.to(el.secondItems, { y: '6.25svw', duration: 0.65, ease: 'power2.inOut' }, 0.05);
    moveTiles(tl, MOBILE_MOVES, 0.9, 0.02, 0.55, 'power2.inOut');
    tl.call(() => fadeText(split, WF), null, 1.45);
    tl.to(el.preloaderImageAbs, { opacity: 0, duration: 0.35, ease: WF }, 1.9);
    tl.to(el.imageHero, { width: '60svw', height: '45svw', duration: 0.9, ease: 'power2.inOut' }, 1.9);
    tl.to(el.heroImg, { scale: 1.05, duration: 1.4, ease: 'power2.inOut' }, 2);
    tl.to(el.preloader, { backgroundColor: 'transparent', ease: WF }, 2.1);
    tl.to(el.preloaderBack, { opacity: 0, ease: WF }, 2.1);
    tl.to(el.imageHero, { width: '100svw', height: '100svh', duration: 1.1, ease: 'power2.inOut' }, 2.55);
    tl.call(() => el.header?.classList.remove('is-hide'), null, 3.9);
    tl.to(el.preloaderContent, { opacity: 0, duration: 0.35, ease: WF }, 2.45);
    tl.to(el.heroContent, { opacity: 1, y: '0%', duration: 0.55, ease: WF }, 2.75);
    splitHeroHeads(tl, 2.75);
    tl.to(el.heroContent, { y: '0%', duration: 0.55, ease: WF }, 2.75);
    return;
  }

  const tl = gsap.timeline({ delay: 1, onComplete: () => finish(el.preloader) });
  tl.to(el.firstItems, { y: '-2.2svw', duration: 0.608, ease: 'power2.out' }, 0);
  tl.to(el.secondItems, { y: '2.2svw', duration: 0.608, ease: 'power2.out' }, 0.07);
  moveTiles(tl, DESKTOP_MOVES, 1.05, 0.02, 0.52, 'power2.out');
  tl.call(() => fadeText(split, WF), null, 1.53);
  tl.to(el.preloader, { backgroundColor: 'transparent', ease: WF }, 1.9);
  tl.to(el.preloaderBack, { opacity: 0, ease: WF }, 1.9);
  tl.to(el.preloaderImageAbs, { opacity: 0, duration: 0.25, ease: WF }, 1.9);
  tl.to(el.imageHero, { width: '42svw', height: '28svw', duration: 0.77, ease: WF }, 1.9);
  tl.to(el.heroImg, { scale: 1.25, duration: 1.55, ease: WF }, 1.99);
  tl.to(el.imageHero, { width: '100svw', height: '100svh', duration: 0.76, ease: WF }, 2.68);
  tl.to(el.heroContent, { opacity: 1, y: '0%', duration: 0.45, ease: WF }, 2.76);
  splitHeroHeads(tl, 2.76);
  tl.call(() => el.header?.classList.remove('is-hide'), null, 3.76);
  tl.to(el.preloaderContent, { opacity: 0, duration: 0.25, ease: WF }, 2.78);
}

export function initPreloader() {
  const el = {
    preloader: document.querySelector('.preloader'),
    preloaderContent: document.querySelector('.preloader-content'),
    preloaderText: document.querySelector('.preloader_text'),
    preloaderBack: document.querySelector('.preloader_back'),
    preloaderImageAbs: document.querySelector('.preloader_image-abs'),
    firstItems: document.querySelectorAll('.preloader-image_item.first'),
    secondItems: document.querySelectorAll('.preloader-image_item.second'),
    imageHero: document.querySelector('.image-hero'),
    heroImg: document.querySelector('.image-hero .u-image'),
    heroContent: document.querySelector('.hero-content_wrapper'),
    header: document.querySelector('.header'),
  };
  if (!el.preloader) return;
  if (window.__PRELOADER_SKIP__) {
    // Returning visitor: the CSS already hides the preloader and shows the hero; the h1 still
    // needs to be made visible (it starts hidden for the split).
    document.querySelectorAll('[data-preload="main-head"]').forEach((h) => gsap.set(h, { visibility: 'visible' }));
    window.lenis?.start?.();
    return;
  }
  stopLenis();
  if (el.preloaderText) gsap.set(el.preloaderText, { visibility: 'hidden' });
  if (el.imageHero) gsap.set(el.imageHero, { position: 'relative', width: '4svw', height: '4svw', overflow: 'hidden' });
  if (el.heroImg) {
    el.heroImg.classList.remove('is-blur');
    gsap.set(el.heroImg, { opacity: 1, filter: 'none', scale: 1, transformOrigin: 'center center' });
  }
  gsap.set(el.heroContent, { opacity: 0, y: '3%' });
  el.header?.classList.add('is-hide');

  const start = () => {
    const split = splitPreloaderText(el.preloaderText);
    if (document.readyState === 'complete') play(el, split);
    else window.addEventListener('load', () => play(el, split), { once: true });
  };
  if (document.fonts?.ready) document.fonts.ready.then(start).catch(start); else start();
  // Nothing on the reference ever sets localStorage "1" — the preloader plays on every visit.
}
