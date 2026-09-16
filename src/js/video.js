// video[data-autoplay=true]: play when visible (after data-delay seconds), pause when not,
// muted/inline forced. Skips sources the browser cannot decode (ProRes .mov → webm fallback).
export function initVideoAutoplay() {
  const vids = () => document.querySelectorAll('video[data-autoplay="true"]');
  const canPlay = (v) => {
    if (!v.canPlayType) return true;
    const src = v.currentSrc || v.src || '';
    if (/\.webm(\?|$)/i.test(src)) return Boolean(v.canPlayType('video/webm; codecs="vp9"') || v.canPlayType('video/webm; codecs="vp8"'));
    if (/\.mov(\?|$)/i.test(src) || /ap4h|apch|hvc1|hev1/i.test(src)) {
      return Boolean(v.canPlayType('video/quicktime; codecs="ap4h"') || v.canPlayType('video/mp4; codecs="ap4h"') || v.canPlayType('video/mp4; codecs="hvc1"') || v.canPlayType('video/mp4; codecs="hev1"'));
    }
    return true;
  };
  const prep = (v) => { v.autoplay = false; v.defaultMuted = true; v.muted = true; v.playsInline = true; v.setAttribute('muted', ''); v.setAttribute('playsinline', ''); v.setAttribute('webkit-playsinline', ''); };
  const visible = (v) => {
    if (!v.offsetParent && v.getClientRects().length === 0) return false;
    const cs = getComputedStyle(v);
    if (cs.display === 'none' || cs.visibility === 'hidden' || parseFloat(cs.opacity) <= 0) return false;
    const r = v.getBoundingClientRect();
    return r.bottom > 0 && r.top < innerHeight && r.right > 0 && r.left < innerWidth;
  };
  const clear = (v) => { if (v._autoplayTimer) { clearTimeout(v._autoplayTimer); v._autoplayTimer = null; } };
  const playNow = (v) => {
    clear(v);
    if (visible(v) && !v.ended && v.paused && canPlay(v)) { prep(v); const p = v.play(); if (p?.catch) p.catch(() => {}); }
  };
  const playLater = (v) => {
    clear(v);
    if (!(visible(v) && !v.ended && v.paused && canPlay(v))) return;
    const d = parseFloat(v.getAttribute('data-delay'));
    const ms = !Number.isFinite(d) || d < 0 ? 0 : d * 1000;
    if (ms === 0) return playNow(v);
    v._autoplayTimer = setTimeout(() => { v._autoplayTimer = null; if (visible(v)) playNow(v); }, ms);
  };
  const pause = (v) => { clear(v); if (!v.paused) v.pause(); };
  let interacted = false;
  const sweep = () => vids().forEach((v) => (visible(v) ? playLater(v) : pause(v)));
  const onInteract = () => { interacted = true; sweep(); };
  const list = vids();
  if (!list.length) return;
  const io = new IntersectionObserver((entries) => entries.forEach((e) => (e.isIntersecting ? playLater(e.target) : pause(e.target))), { threshold: 0 });
  list.forEach((v) => {
    prep(v); io.observe(v);
    v.addEventListener('loadeddata', () => { if (interacted && visible(v)) playLater(v); }, { once: true });
    v.addEventListener('ended', () => clear(v));
  });
  const evs = ['pointerdown', 'touchstart', 'touchmove', 'touchend', 'click', 'keydown', 'scroll', 'wheel'];
  evs.forEach((e) => window.addEventListener(e, onInteract, { capture: true, passive: true }));
  interacted = true; sweep();
}
