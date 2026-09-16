// Apartments section: pinned scroll-scrub (desktop and mobile variants) — a port of the
// reference's "Apartments section scroll animations" script. Numbers are its numbers.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SECTION = '.u-section.is-apart';
const EASE = 'power2.inOut';
const UNLOCK_AT = { desktop: 1.5 / 3.12, mobile: 1.0 / 2.5 };
let unlocked = false;
const qa = (r, s) => Array.from(r.querySelectorAll(s));

function unlock(section) {
  if (unlocked) return; unlocked = true;
  section.dispatchEvent(new CustomEvent('apart:ready', { bubbles: true, detail: { section } }));
  window.DataSlider?.init?.(section);
}
function lock(section) {
  if (!unlocked) return; unlocked = false;
  section.dispatchEvent(new CustomEvent('apart:lock', { bubbles: true, detail: { section } }));
  if (window.DataSlider?.lock) window.DataSlider.lock(section); else window.DataSlider?.destroy?.(section);
}
const onProgress = (section, threshold, p) => (p >= threshold ? unlock(section) : lock(section));

function buildDesktop(section) {
  const sliders = qa(section, '.content_apatments-slider'), backsFirst = qa(section, '.content_apatments-back.is-first'),
    backsSecond = qa(section, '.content_apatments-back.is-second'), numbers = qa(section, '.content_apatments-slide-number'),
    tools = qa(section, '.swiper-tools'), overlays = qa(section, '.content_apatments-slider--overlay'),
    footerAnims = qa(section, '.apartments_footer.is-pc.is-anim'), bttnSlides = qa(section, '.apartments_footer_bttn'),
    bttnOpacity = qa(section, '.apartments_footer.is-pc.is-pc-main'), heads = qa(section, '.apartments_main_head'),
    advantages = qa(section, '.apartments_main_advantages');
  const tl = gsap.timeline({ scrollTrigger: { trigger: section, start: 'top -50%', end: 'bottom bottom', scrub: 0.8,
    onUpdate: (self) => onProgress(section, UNLOCK_AT.desktop, self.progress) } });
  if (backsSecond.length) tl.fromTo(backsSecond, { scale: 0.65 }, { scale: 1.5, duration: 3, ease: EASE }, 0);
  if (backsFirst.length) tl.fromTo(backsFirst, { scale: 0.65 }, { scale: 1.25, duration: 3, ease: EASE }, 0.1);
  if (sliders.length) tl.fromTo(sliders, { scale: 0.65 }, { scale: 1, duration: 3, ease: EASE }, 0.2);
  if (heads.length) tl.fromTo(heads, { x: '2.2222222222222223rem', y: '-120%' }, { x: '0rem', y: '0%', duration: 1, ease: EASE }, 0.5);
  if (advantages.length) tl.fromTo(advantages, { x: '-2.22222rem', y: '-85%' }, { x: '0rem', y: '0%', duration: 1, ease: EASE }, 0.5);
  if (numbers.length) tl.fromTo(numbers, { opacity: 0 }, { opacity: 1, duration: 0.001, ease: EASE }, 1);
  if (tools.length) tl.fromTo(tools, { opacity: 0 }, { opacity: 1, duration: 0.001, ease: EASE }, 1);
  if (bttnSlides.length) tl.fromTo(bttnSlides, { y: '-3rem' }, { y: '0rem', duration: 2, ease: EASE }, 1);
  if (footerAnims.length) tl.to(footerAnims, { height: 0, duration: 0.001, ease: EASE }, 1);
  if (bttnOpacity.length) tl.fromTo(bttnOpacity, { opacity: 0 }, { opacity: 1, duration: 0.001, ease: EASE }, 1);
  if (overlays.length) tl.fromTo(overlays, { opacity: 0 }, { opacity: 1, duration: 0.001, ease: 'none' }, 1.5);
  if (tools.length) tl.to(tools, { opacity: 0, duration: 0.12, ease: EASE }, 3);
  return tl;
}
function buildMobile(section) {
  const sliders = qa(section, '.content_apatments-slider'), slides = qa(section, '.content_apatments-slide'),
    heads = qa(section, '.apartments_main_head'), advantages = qa(section, '.apartments_main_advantages'),
    advOne = qa(section, '.apartments_main_advantage.is-one'), advTwo = qa(section, '.apartments_main_advantage.is-two'),
    advThree = qa(section, '.apartments_main_advantage.is-three'), tagTwo = qa(section, '.apartments_main_advantage-tag.is-relative.is-two'),
    tagThree = qa(section, '.apartments_main_advantage-tag.is-relative.is-three'), captions = qa(section, '.caption-mobile'),
    headContainers = qa(section, '.apartments_main_head-container');
  const tl = gsap.timeline({ scrollTrigger: { trigger: section, start: 'top -50%', end: 'bottom bottom', scrub: 0.8,
    onUpdate: (self) => onProgress(section, UNLOCK_AT.mobile, self.progress) } });
  if (sliders.length) tl.fromTo(sliders, { width: '95%', height: '35%', x: '2.5%', y: '55%' }, { width: '100%', height: '100%', x: '0%', y: '0%', duration: 2.5, ease: EASE }, 0);
  if (slides.length) tl.fromTo(slides, { y: '-9%' }, { y: '0%', duration: 2.5, ease: EASE }, 0);
  if (heads.length) tl.fromTo(heads, { x: '50%' }, { x: '0%', duration: 0.35, ease: EASE }, 0.5);
  if (advantages.length) tl.fromTo(advantages, { x: '50%', y: '-4rem' }, { x: '0%', y: '0rem', duration: 0.35, ease: EASE }, 0.5);
  [advOne, advTwo, advThree].forEach((els) => { if (els.length) tl.fromTo(els, { x: '-50%' }, { x: '0%', duration: 0.35, ease: EASE }, 0.5); });
  [tagTwo, tagThree].forEach((els) => { if (els.length) tl.fromTo(els, { x: '50%' }, { x: '0%', duration: 0.35, ease: EASE }, 0.5); });
  if (captions.length) tl.fromTo(captions, { x: '-50%' }, { x: '0%', duration: 0.35, ease: EASE }, 0.5);
  if (headContainers.length) tl.fromTo(headContainers, { x: '-50%' }, { x: '0%', duration: 0.35, ease: EASE }, 0.5);
  return tl;
}

export function initApart() {
  const section = document.querySelector(SECTION);
  if (!section) return;
  unlocked = false;
  // The chess-bar intro for this section is registered in ix3.js (the Webflow copy wins on the
  // reference because it is created later; only one is kept here).
  if (innerWidth < 768) buildMobile(section); else buildDesktop(section);
  window.addEventListener('load', () => ScrollTrigger.refresh());
}
