// Text reveals. The reference runs two animators on window load, both once-per-element with
// an IntersectionObserver (threshold 0, rootMargin 0 0 -20%):
//   A — data-text head-two (chars, words kept together), head-three / head-four (opacity);
//   B — caption (chars), body / big-body (words). B marks its elements data-text-none=true at
//       DOMContentLoaded so A ignores them. data-text-none / data-text-split-none opt out.
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

const OBS = { threshold: 0, rootMargin: '0px 0px -20% 0px' };
const HIDDEN = { opacity: 0, yPercent: 20, willChange: 'transform,opacity', force3D: true, backfaceVisibility: 'hidden', display: 'inline-block' };

class AnimatorA {
  settings(el) {
    if (el.getAttribute('data-text-none') === 'true') return null;
    switch (el.getAttribute('data-text')) {
      case 'caption': return { type: 'opacity', duration: 0.3 };
      case 'bid-body': return { type: 'lines', duration: 0.6, stagger: 0.08 };
      case 'big-body': return { type: 'opacity', duration: 0.6 };
      case 'body': return { type: 'opacity', duration: 0.45 };
      case 'head-two': return { type: 'chars', duration: 1.5, stagger: 0.03, keepWordsTogether: true };
      case 'head-three': return { type: 'opacity', duration: 1.25 };
      case 'head-four': return { type: 'opacity', duration: 1 };
      default: return null;
    }
  }
  setup(el, s) {
    if (s.type === 'chars') {
      if (s.keepWordsTogether) {
        const sp = new SplitText(el, { type: 'words,chars', charsClass: 'char-wrap', wordsClass: 'word-wrap' });
        el.splitInstance = sp;
        gsap.set(sp.words, { display: 'inline-block', whiteSpace: 'nowrap' });
        gsap.set(sp.chars, HIDDEN);
        return sp.chars;
      }
      const sp = new SplitText(el, { type: 'chars', charsClass: 'char-wrap' });
      el.splitInstance = sp;
      gsap.set(sp.chars, { opacity: 0, yPercent: 20, willChange: 'transform,opacity', force3D: true, backfaceVisibility: 'hidden' });
      return sp.chars;
    }
    gsap.set(el, { opacity: 0, willChange: 'opacity', force3D: true, backfaceVisibility: 'hidden' });
    return el;
  }
  play(el, s) {
    const t = s.type === 'chars' ? el.splitInstance?.chars : el;
    if (!t || (Array.isArray(t) && !t.length)) return;
    gsap.to(t, { duration: s.duration, opacity: 1, yPercent: s.type === 'chars' ? 0 : undefined, stagger: s.stagger || 0, ease: 'power2.out', force3D: true, clearProps: 'willChange' });
  }
  init() {
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const s = this.settings(e.target);
      if (s) { this.play(e.target, s); io.unobserve(e.target); }
    }), OBS);
    document.querySelectorAll('[data-text="caption"], [data-text="big-body"], [data-text="body"], [data-text="head-two"], [data-text="head-three"], [data-text="head-four"]').forEach((el) => {
      const s = this.settings(el);
      if (s) { this.setup(el, s); io.observe(el); }
    });
  }
}

class AnimatorB {
  settings(el) {
    if (el.getAttribute('data-text-split-none') === 'true') return null;
    switch (el.getAttribute('data-text')) {
      case 'caption': return { type: 'chars', duration: 1.5, stagger: 0.03 };
      case 'body': case 'big-body': return { type: 'words', duration: 1.5, stagger: 0.03 };
      default: return null;
    }
  }
  setup(el, s) {
    if (s.type === 'chars') {
      const sp = new SplitText(el, { type: 'chars', charsClass: 'char-wrap' });
      el.splitInstance = sp; gsap.set(sp.chars, HIDDEN); return sp.chars;
    }
    const sp = new SplitText(el, { type: 'words', wordsClass: 'word-wrap' });
    el.splitInstance = sp; gsap.set(sp.words, HIDDEN); return sp.words;
  }
  play(el, s) {
    const t = s.type === 'chars' ? el.splitInstance?.chars : el.splitInstance?.words;
    if (!t || !t.length) return;
    gsap.to(t, { duration: s.duration, opacity: 1, yPercent: 0, stagger: s.stagger || 0, ease: 'power2.out', force3D: true, clearProps: 'willChange' });
  }
  init() {
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const s = this.settings(e.target);
      if (s) { this.play(e.target, s); io.unobserve(e.target); }
    }), OBS);
    document.querySelectorAll('[data-text="caption"], [data-text="big-body"], [data-text="body"]').forEach((el) => {
      const s = this.settings(el);
      if (s && this.setup(el, s)) io.observe(el);
    });
  }
}

export function initTextAnimators() {
  // B's DOMContentLoaded step: hand caption/body/big-body over to itself.
  document.querySelectorAll('[data-text="caption"], [data-text="big-body"], [data-text="body"]').forEach((el) => el.setAttribute('data-text-none', 'true'));
  const boot = async () => {
    try { await document.fonts?.ready; } catch (e) {}
    new AnimatorA().init();
    new AnimatorB().init();
  };
  if (document.readyState === 'complete') boot(); else window.addEventListener('load', boot);
}
