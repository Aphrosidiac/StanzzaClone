# QA log — FF Stanzza

## 2026-09-16 — research instruments

- **Reference tab froze at ~1 frame per screenshot** in claude-in-chrome while the Chrome window
  sat behind the Claude app: `visibilityState "hidden"`, rAF only on screenshot, JS evaluation
  timed out (45 s). The preloader took >60 s to "play". Fix: `tools/tab.sh <url-substring>`
  fronts the window and activates the tab via AppleScript; after that 61 rAF/s and the same
  page finished its preloader in ~4 s. Every motion judgement below was made in a fronted tab.
- `resize_window` reported success but `innerWidth` stayed 1920 until the tab was active; the
  measuring viewport is 1440×708 in Chrome (window height is capped by the display) and
  1440×900 / 390×844 in Playwright.
- Webflow IX3 payload extracted by slicing the `t.register(...)` call out of the page bundle
  and evaluating it (`docs/reference/2026-09-16/js/extract_ix3.js`) — 18 interactions,
  18 timelines. IX2 via the `Webflow.require("ix2").init(...)` object. Ease index table and
  breakpoint table read from `webflow.schunk.1ebde7679aa0b6c9.js`.
- IX2 group-0 timing: measured the nav hover (40 ms sampler) — the "reset" group with a 500 ms
  duration does not delay the open, so the runner applies group 0 instantly.

## 2026-09-16 — Gate 2 (hero + preloader)

Desktop: preloader sequence, hero hand-off and header un-hide screenshot-matched against the
reference in the same Chrome window (tiles, text split, morph, slogan video). Mobile: hero-390
diff mean 0.09.

## 2026-09-16 — Pass 1 functional (per surface, fronted Chrome 1440×708)

nav hover open/close timings (see parity NAV-01), header hide/dark, card hover + pill,
apartments unlock/autoplay/arrows, FAQ accordion + show more, footer, both modals, form submit
→ success, close via ✕. Mobile nav/FAQ via `tools/mobile_nav.mjs` (touch emulation) on both
sites — identical state tables.

## 2026-09-16 — Pass 2 measured visual

- `tools/capture.mjs` → 43 frames at 1440×900 and 40 at 390×844 per site, every 600 px after
  an immediate Lenis jump and a 1.4 s dwell. `tools/diff.py`: **avg mean abs diff 0.43 (1440)
  and 0.51 (390)**, worst frames 3.8 / 4.0 — all explained: word-reveal staggers caught
  mid-flight (probed: both sites fire the observers at the same scroll positions), card videos
  on different frames, marquee phase, and the brand copy that differs by design.
- `extract_tokens.js` on both: type scale, colour census, spacing, radii, motion durations,
  easings and z-index layers identical; the only extra values are our static scheduler panel
  (the reference's is an iframe the extractor cannot see).
- Six widths (320…1920): scrollWidth = viewport, scrollHeight, root font-size and h1 size
  identical to the reference at every width.
- Production build (`vite build` → `vite preview`): same capture/diff, avg 0.38.

## 2026-09-16 — Pass 3 adversarial (SITE scope)

- Reload at every scroll position: `ScrollTrigger.refresh()` on load; no route → no client
  navigation blanking. Hard refresh mid-page lands with the preloader (as the reference).
- Prefers-reduced-motion: only the about highlight is skipped (reference behaviour). Recorded,
  not extended — visual parity was the ask.
- Keyboard: dropdown toggles are buttons/roles with aria-expanded, Escape closes, focus-out
  closes; form uses `reportValidity()`.
- Two-session/race: n/a (no state).

## Fixed while verifying

- `<buttton>` typo → real `<button>`, then UA chrome stripped so the ✕ lands on the same pixels.
- `:focused` (invalid pseudo-class, three rules) → `:focus-visible`; lightningcss no longer warns.
- HubSpot iframe → static scheduler panel of the same size (calendar + KL slots → WhatsApp).
- Native checkbox was rendering on top of the styled one — Webflow's redirect implemented.
- Founder location link still said Barcelona after the brand pass → Kuala Lumpur.

## Known gaps

See `docs/parity.md`: internal links are SPA-fallback stubs, the reference's dead
slider-number IX2 and cookie script are not reproduced, portrait/logo wall/photography are the
reference's assets pending replacement before any public deploy.
