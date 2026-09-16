// Webflow IX3 scroll interactions for this page, re-expressed as GSAP ScrollTriggers.
// Source of every number: docs/reference/2026-09-16/js/ix3.json (ease 5 = power2.out,
// 0 = none; tt 2 = fromTo). Breakpoints are Webflow's: main ≥992, medium 768–991,
// small 480–767, tiny ≤479.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const OUT = 'power2.out';
const q = (s) => document.querySelector(s);
const qa = (s) => Array.from(document.querySelectorAll(s));

// Webflow's own text splitter (letters for headings, words for paragraphs) — same markup so
// the CSS rules for .gsap_split_letter apply. Idempotent.
function wfSplit(el, mode) {
  if (!el || el.dataset.wfSplit) return el ? qa2(el, mode) : [];
  const text = el.textContent;
  el.setAttribute('aria-label', text);
  el.textContent = '';
  const words = text.split(/(\s+)/);
  let wi = 0, li = 0;
  words.forEach((w) => {
    if (!w) return;
    if (/^\s+$/.test(w)) { el.appendChild(document.createTextNode(w)); return; }
    wi++;
    const ws = document.createElement('span');
    ws.className = `gsap_split_word gsap_split_word${wi}`; ws.setAttribute('aria-hidden', 'true');
    ws.style.cssText = 'position:relative;display:inline-block;';
    if (mode === 'letters') {
      for (const ch of w) {
        li++;
        const ls = document.createElement('span');
        ls.className = `gsap_split_letter gsap_split_letter${li}`; ls.setAttribute('aria-hidden', 'true');
        ls.style.cssText = 'position:relative;display:inline-block;'; ls.textContent = ch;
        ws.appendChild(ls);
      }
    } else ws.textContent = w;
    el.appendChild(ws);
  });
  el.dataset.wfSplit = mode;
  return qa2(el, mode);
}
const qa2 = (el, mode) => Array.from(el.querySelectorAll(mode === 'letters' ? '.gsap_split_letter' : '.gsap_split_word'));

function approachReveals(tl) {
  const D = (n) => `[data-scroll-delievery="${n}"]`;
  const group = (n, at) => {
    const head = wfSplit(q(D(`head-${n}`)), 'letters');
    const text = wfSplit(q(D(`text-${n}`)), 'words');
    if (head.length) tl.fromTo(head, { opacity: 0, x: '-5%' }, { opacity: 1, x: '0%', duration: 0.38, stagger: { amount: 0.375 }, ease: OUT }, at);
    if (text.length) tl.fromTo(text, { opacity: 0, x: '-5%' }, { opacity: 1, x: '0%', duration: 0.38, stagger: { amount: 0.375 }, ease: OUT }, at);
    const tag = q(D(`tag-${n}`));
    if (tag) tl.fromTo(tag, { opacity: 0, y: '10%' }, { opacity: 1, y: '0%', duration: 0.58, ease: OUT }, at);
  };
  const img = (n, at) => { const el = q(D(`image-${n}`)); if (el) tl.fromTo(el, { width: '0%' }, { width: '100%', duration: 0.65, ease: OUT }, at); };
  group(1, 0.72); img(1, 0.72);
  group(2, 1.6); img(2, 1.67); img(3, 1.71); img(4, 1.75); img(5, 1.79); img(6, 1.83);
  group(3, 3.22); img(7, 3.22);
}

export function initScrollInteractions() {
  const st = (trigger, start, end, extra = {}) => ({ trigger, start: `clamp(${start})`, end: `clamp(${end})`, scrub: 0.8, ...extra });

  // Hero → composition chess bars (i-a0ab4441)
  const comp = q('.u-section.is-composition-awards');
  if (comp) {
    const tl = gsap.timeline({ scrollTrigger: st(comp, 'top bottom', 'top 60') });
    tl.fromTo('.scroll-chess.is-vis .scroll-chess-item.is-left', { height: '0svh' }, { height: '55svh', duration: 1, ease: OUT }, 0);
    tl.fromTo('.scroll-chess.is-vis .scroll-chess-item.is-right', { height: '0svh' }, { height: '35svh', duration: 1, ease: OUT }, 0);
  }
  // Project card parallax (i-3790f9a1, awards variant −24%)
  qa('.content_composition-card').forEach((card) => {
    const img = card.querySelector('.content_composition-card-image');
    if (img) gsap.timeline({ scrollTrigger: st(card, 'top 100%', 'top -100%') }).to(img, { y: '-24%', duration: 3, ease: OUT }, 0);
  });
  // Apartments chess bars (i-936a8659)
  const apart = q('.u-section.is-apart');
  if (apart) {
    const tl = gsap.timeline({ scrollTrigger: st(apart, 'top bottom', 'top 35%') });
    tl.fromTo(apart.querySelector('.scroll-chess-item.is-left'), { height: '65svh' }, { height: '0svh', duration: 1, ease: OUT }, 0);
    tl.fromTo(apart.querySelector('.scroll-chess-item.is-right'), { height: '25svh' }, { height: '0svh', duration: 1, ease: OUT }, 0);
  }
  // Delivery cards: image overlay fades out (i-5a9800ee)
  qa('.composed-card').forEach((card) => {
    const ov = card.querySelector('.composed-card_image-overlay');
    if (ov) gsap.timeline({ scrollTrigger: st(card, 'top 35%', 'top 5%') }).to(ov, { opacity: 0, duration: 0.5, ease: OUT }, 0);
  });
  // Approach: back + main fade in while the section is pinned (i-8b6d923f)
  const approach = q('.u-section.is-approach');
  if (approach) {
    const tl = gsap.timeline({ scrollTrigger: { trigger: approach, start: 'clamp(top top)', end: 'clamp(bottom bottom)', toggleActions: 'play reverse play reverse' } });
    tl.fromTo('.content_approach-back', { opacity: 0 }, { opacity: 1, duration: 0.65, ease: OUT }, 0);
    tl.fromTo('.content_approach-main', { opacity: 0 }, { opacity: 1, duration: 0.65, ease: OUT }, 0);
  }
  // About cards highlight sweep (i-fd602d16) — skipped under prefers-reduced-motion
  const lvl2 = q('.scroll-container--lvl-2');
  if (lvl2 && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const tl = gsap.timeline({ scrollTrigger: { ...st(lvl2, 'top -20%', 'bottom bottom'), toggleActions: 'play pause reverse none' } });
    for (let n = 1; n <= 4; n++) {
      const ov = `[card-about-overlay="${n}"]`, tx = `[card-about-text="${n}"]`;
      tl.to(ov, { opacity: 0, duration: 1, ease: OUT }, n - 1);
      tl.to(tx, { color: 'var(--_color---whitness)', duration: 1, ease: OUT }, n - 1);
      if (n < 4) {
        tl.to(ov, { opacity: 1, duration: 1, ease: OUT }, n);
        tl.to(tx, { color: 'var(--_color---about-card-default)', duration: 1, ease: OUT }, n);
      }
    }
  }
  // Blur reveal, IX3 flavour: strip .is-blur 30% before the image enters (i-ef482ddd)
  qa('.u-image.is-blur').forEach((img) => ScrollTrigger.create({ trigger: img, start: 'clamp(top 130%)', once: true, onEnter: () => img.classList.remove('is-blur') }));

  // ---- breakpoint-conditional timelines ----------------------------------------------
  const mm = gsap.matchMedia();
  mm.add({ main: '(min-width: 992px)', medium: '(min-width: 768px) and (max-width: 991px)', small: '(min-width: 480px) and (max-width: 767px)', tiny: '(max-width: 479px)' }, (ctx) => {
    const { main, medium, small, tiny } = ctx.conditions;
    // Approach horizontal track (i-b9382e55 ≥768 / i-f0a18158 <768)
    if (approach) {
      const track = '.content_approach-scroll';
      const tl = gsap.timeline({ scrollTrigger: { trigger: approach, start: 'clamp(top -30%)', end: 'clamp(bottom bottom)', scrub: 1 } });
      if (main || medium) {
        tl.fromTo(track, { x: '-120svh', y: '50%', scale: 0 }, { x: '-80svh', y: '0%', scale: 1, duration: 1, ease: 'none' }, 0);
        tl.fromTo(track, { x: '-80svh' }, { x: '-260svh', duration: 3, ease: 'none' }, 1);
      } else {
        tl.fromTo(track, { x: '-134svw', y: '50svh', scale: 0 }, { x: '-100svw', y: '0svh', scale: 1, duration: 0.8, ease: 'none' }, 0);
        tl.to(track, { x: '-300svw', y: '0svh', duration: 3, ease: 'none' }, 0.8);
      }
      approachReveals(tl);
    }
    // About cards slide (i-6bcca0b5 medium −56vw, i-98b4f562 small −95.5vw, i-e6ffc0ab tiny −214.25vw)
    if (lvl2 && !main) {
      const x = medium ? '-56vw' : small ? '-95.5vw' : '-214.25vw';
      gsap.timeline({ scrollTrigger: st(lvl2, 'top -35%', 'bottom bottom') }).to('.card_about-flex', { x, ease: 'none' }, 0);
    }
    // Composition cards slide (i-3b9b480c small −145.5vw, i-da603f06 tiny −290vw)
    const compContent = q('.content.is-composition');
    if (compContent && (small || tiny)) {
      gsap.timeline({ scrollTrigger: st(compContent, 'top -25%', 'bottom bottom') }).to('.content_composition_back', { x: small ? '-145.5vw' : '-290vw', ease: 'none' }, 0);
    }
  });

  document.documentElement.classList.remove('ix-pending');
  window.addEventListener('load', () => ScrollTrigger.refresh());
}
