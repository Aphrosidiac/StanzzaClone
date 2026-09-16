// Webflow dropdown behaviour (from the runtime source) + the page's IX2 action lists.
//  - hover dropdowns (nav, data-hover=true, non-touch): open on toggle mouseenter, close on
//    mouseleave of the whole .w-dropdown; the w--open class is removed data-delay ms after the
//    close starts, which is when the IX2 close animation has collapsed the panel.
//  - click dropdowns (FAQ): toggle on mouseup/click, close on outside mouseup, Escape, focusout.
//  - opening one dropdown closes every other one (the FAQ behaves as an accordion).
import { gsap } from 'gsap';
import { runActionList, WF_EASE_OUT, WF_EASE } from './ix2.js';

const isTouch = 'ontouchstart' in window || (window.DocumentTouch && document instanceof window.DocumentTouch);
const bp = () => (innerWidth >= 992 ? 'main' : innerWidth >= 768 ? 'medium' : innerWidth >= 480 ? 'small' : 'tiny');
const within = (root, sel) => root.querySelectorAll(sel);

// ---- IX2 action lists (docs/reference/2026-09-16/js/ix2.json) ---------------------------
function navOpen(el) {
  const inline = within(el, '.nav_content-inline'), sep = within(el, '.separator-line'), list = within(el, '.nav_content');
  if (bp() === 'main' || bp() === 'medium') {
    // a-3 "Navbar pc [hover on]"
    return runActionList(el, [
      [{ targets: list, vars: { display: 'none' } }, { targets: inline, vars: { height: 0 } }, { targets: sep, vars: { width: 0 } }],
      [{ targets: list, vars: { display: 'block' } }],
      [{ targets: inline, vars: { height: 'auto' }, duration: 450, ease: WF_EASE_OUT },
       { targets: sep, vars: { width: 'auto' }, duration: 200, delay: 400, ease: WF_EASE }],
    ]);
  }
  // a-5 "Navbar mobile [tap on]"
  const overflow = within(el, '.nav_overflow'), closeIcon = within(el, '.icon-close-mobile'), menuIcon = within(el, '.icon-menu-main');
  return runActionList(el, [
    [{ targets: list, vars: { display: 'none' } }, { targets: overflow, vars: { opacity: 0 } }, { targets: inline, vars: { height: 0 } },
     { targets: sep, vars: { width: 0 } }, { targets: closeIcon, vars: { opacity: 0 } }, { targets: menuIcon, vars: { opacity: 1 } }],
    [{ targets: list, vars: { display: 'block' } }],
    [{ targets: overflow, vars: { opacity: 1 }, duration: 100, ease: WF_EASE_OUT },
     { targets: menuIcon, vars: { opacity: 0 }, duration: 250, ease: WF_EASE_OUT },
     { targets: closeIcon, vars: { opacity: 1 }, duration: 250, ease: WF_EASE_OUT }],
    [{ targets: inline, vars: { height: 'auto' }, duration: 350, ease: WF_EASE_OUT },
     { targets: '.logo-mobile', vars: { color: 'rgb(15,15,15)' }, duration: 50, delay: 150, ease: WF_EASE },
     { targets: sep, vars: { width: 'auto' }, duration: 300, delay: 450, ease: WF_EASE }],
  ]);
}
function navClose(el) {
  const inline = within(el, '.nav_content-inline'), sep = within(el, '.separator-line'), list = within(el, '.nav_content');
  if (bp() === 'main' || bp() === 'medium') {
    // a-4 "Navbar pc [hover out]"
    return runActionList(el, [
      [{ targets: list, vars: { display: 'block' } }, { targets: inline, vars: { height: 'auto' } }, { targets: sep, vars: { width: 'auto' } }],
      [{ targets: inline, vars: { height: 0 }, duration: 450, ease: WF_EASE_OUT },
       { targets: sep, vars: { width: 0 }, duration: 200, delay: 400, ease: WF_EASE }],
      [{ targets: list, vars: { display: 'none' } }],
    ]);
  }
  // a-16 "Navbar mobile [tap off]"
  const overflow = within(el, '.nav_overflow'), closeIcon = within(el, '.icon-close-mobile'), menuIcon = within(el, '.icon-menu-main');
  return runActionList(el, [
    [{ targets: inline, vars: { height: 0 }, duration: 500, ease: WF_EASE },
     { targets: sep, vars: { width: '0%' }, duration: 300, ease: WF_EASE },
     { targets: '.logo-mobile', vars: { color: 'rgb(244,243,235)' }, duration: 50, ease: WF_EASE }],
    [{ targets: overflow, vars: { opacity: 0 }, duration: 500, ease: WF_EASE },
     { targets: menuIcon, vars: { opacity: 1 }, duration: 500, ease: WF_EASE },
     { targets: closeIcon, vars: { opacity: 0 }, duration: 500, ease: WF_EASE }],
    [{ targets: list, vars: { display: 'none' } }],
  ]);
}
// The mobile tap-off list has no reset group; every group animates (IX2 group 0 there is a
// real 500 ms tween, so pass a leading empty group to keep the "group 0 is instant" rule).
const navCloseMobileFix = (el) => {
  const inline = within(el, '.nav_content-inline'), sep = within(el, '.separator-line'), list = within(el, '.nav_content');
  const overflow = within(el, '.nav_overflow'), closeIcon = within(el, '.icon-close-mobile'), menuIcon = within(el, '.icon-menu-main');
  return runActionList(el, [
    [],
    [{ targets: inline, vars: { height: 0 }, duration: 500, ease: WF_EASE },
     { targets: sep, vars: { width: '0%' }, duration: 300, ease: WF_EASE },
     { targets: '.logo-mobile', vars: { color: 'rgb(244,243,235)' }, duration: 50, ease: WF_EASE }],
    [{ targets: overflow, vars: { opacity: 0 }, duration: 500, ease: WF_EASE },
     { targets: menuIcon, vars: { opacity: 1 }, duration: 500, ease: WF_EASE },
     { targets: closeIcon, vars: { opacity: 0 }, duration: 500, ease: WF_EASE }],
    [{ targets: list, vars: { display: 'none' } }],
  ]);
};

function faqOpen(el) {
  const content = within(el, '.faq-item_content'), inline = within(el, '.faq-item_content-inline'), arrow = within(el, '.faq-item_trigger-arrow');
  // a "faq-item [click one]"
  return runActionList(el, [
    [{ targets: content, vars: { display: 'none' } }, { targets: inline, vars: { height: 0 } }, { targets: arrow, vars: { rotation: 0 } }],
    [{ targets: content, vars: { display: 'block' } }],
    [{ targets: inline, vars: { height: 'auto' }, duration: 650, ease: WF_EASE_OUT },
     { targets: arrow, vars: { rotation: 180 }, duration: 650, ease: WF_EASE_OUT }],
  ]);
}
function faqClose(el) {
  const content = within(el, '.faq-item_content'), inline = within(el, '.faq-item_content-inline'), arrow = within(el, '.faq-item_trigger-arrow');
  // a-2 "faq-item [click two]"
  return runActionList(el, [
    [{ targets: content, vars: { display: 'block' } }, { targets: inline, vars: { height: 'auto' } }, { targets: arrow, vars: { rotation: 180 } }],
    [{ targets: inline, vars: { height: 0 }, duration: 650, ease: WF_EASE_OUT },
     { targets: arrow, vars: { rotation: 0 }, duration: 650, ease: WF_EASE_OUT }],
    [{ targets: content, vars: { display: 'none' } }],
  ]);
}

// ---- dropdown runtime ------------------------------------------------------------------
const all = [];
function setup(el, idx) {
  const toggle = el.querySelector(':scope > .w-dropdown-toggle');
  const list = el.querySelector(':scope > .w-dropdown-list');
  if (!toggle || !list) return;
  const isNav = el.classList.contains('nav');
  const st = { el, toggle, list, open: false, hovering: false, delayId: null,
    hover: el.getAttribute('data-hover') === 'true' && !isTouch, delay: +el.getAttribute('data-delay') || 0 };
  const links = list.querySelectorAll('a');
  toggle.id ||= `w-dropdown-toggle-${idx}`; list.id ||= `w-dropdown-list-${idx}`;
  toggle.setAttribute('aria-controls', list.id); toggle.setAttribute('aria-haspopup', 'menu'); toggle.setAttribute('aria-expanded', 'false');
  if (toggle.tagName !== 'BUTTON') { toggle.setAttribute('role', 'button'); toggle.hasAttribute('tabindex') || toggle.setAttribute('tabindex', '0'); }
  list.setAttribute('aria-labelledby', toggle.id);
  links.forEach((a) => { a.hasAttribute('tabindex') || a.setAttribute('tabindex', '0'); if (/^#[\w-]+$/.test(a.hash)) a.addEventListener('click', () => close(st)); });

  const complete = () => { list.classList.remove('w--open'); toggle.classList.remove('w--open'); };
  const open = () => {
    if (st.open) return;
    all.forEach((o) => { if (o !== st) close(o, { forceClose: true }); });
    st.open = true;
    list.classList.add('w--open'); toggle.classList.add('w--open'); toggle.setAttribute('aria-expanded', 'true');
    isNav ? navOpen(el) : faqOpen(el);
    document.addEventListener(isTouch ? 'click' : 'mouseup', st.outside);
    if (st.hovering) el.addEventListener('mouseleave', st.leave);
    clearTimeout(st.delayId);
  };
  const close = (s, { immediate, forceClose } = {}) => {
    if (!(s.open && (!s.hover || !s.hovering || forceClose))) return;
    s.toggle.setAttribute('aria-expanded', 'false'); s.open = false;
    isNav ? (bp() === 'main' || bp() === 'medium' ? navClose(s.el) : navCloseMobileFix(s.el)) : faqClose(s.el);
    document.removeEventListener(isTouch ? 'click' : 'mouseup', s.outside);
    s.el.removeEventListener('mouseleave', s.leave);
    clearTimeout(s.delayId);
    if (!s.delay || immediate) return s.complete();
    s.delayId = setTimeout(s.complete, s.delay);
  };
  st.complete = complete; st.close = close;
  st.leave = () => { st.hovering = false; if (!list.querySelector('a:focus')) close(st); };
  st.outside = (e) => {
    if (!st.open) return;
    if (e.target.closest('.w-dropdown-toggle')) return;
    if (!el.contains(e.target)) close(st);
  };
  const toggleHandler = (e) => { if (e?.type === 'w-close') return close(st, { forceClose: true }); st.open ? close(st, { forceClose: true }) : open(); };
  if (st.hover) toggle.addEventListener('mouseenter', () => { st.hovering = true; open(); });
  toggle.addEventListener(isTouch ? 'click' : 'mouseup', toggleHandler);
  toggle.addEventListener('keydown', (e) => { if (e.key === ' ' || e.key === 'Enter') { toggleHandler(); e.preventDefault(); e.stopPropagation(); } });
  el.addEventListener('keydown', (e) => { if (st.open && e.key === 'Escape') { close(st); toggle.focus(); e.stopPropagation(); } });
  el.addEventListener('focusout', (e) => { if (!el.contains(e.relatedTarget) && !el.contains(e.target)) close(st); });
  all.push(st);
}

export function initDropdowns() {
  document.querySelectorAll('.w-dropdown').forEach(setup);
  // FAQ "show more" button: a-14 / a-15 on its sibling .faq-more_wrapper
  const btn = document.querySelector('[data-button-swap="swap-trigger"]');
  const wrap = btn?.parentElement?.querySelector('.faq-more_wrapper');
  if (btn && wrap) {
    let openMore = false;
    btn.addEventListener('click', () => {
      openMore = !openMore;
      if (openMore) runActionList(wrap, [[{ targets: wrap, vars: { height: 0 } }], [{ targets: wrap, vars: { height: 'auto' }, duration: 580, ease: WF_EASE_OUT }]]);
      else runActionList(wrap, [[], [{ targets: wrap, vars: { height: 0 }, duration: 580, ease: WF_EASE_OUT }]]);
    });
  }
}
