# Build brief — FF Stanzza (StanzzaClone)

Resolved 2026-09-16 from Fakhrul's instruction ("recreate https://stanzza.design/awards full end to
end … exactly the same visually … reuse the images and video … branding FF / FF Dev Studio … no
questions asked"). Gates are self-resolved under that instruction and recorded in `docs/qa-log.md`.

## Identity

- **Product name:** FF Stanzza (working name; folder `StanzzaClone`, package `ff-stanzza`)
- **Owner / brand:** FF Dev Studio (Fakhrul's studio — see apmemory `project_ffdevstudio`)
- **Whose site is the reference?** a third party's (Stanzza design, Barcelona interior studio,
  Webflow build). Assets taken as working material; Fakhrul explicitly authorised reusing the
  photography and video for this LOCAL test — they are to be replaced before anything goes live.
- **Existing brand assets supplied?** `//FF` mark + lockups from `ffdevstudio/brand-system/assets/svg`
  (ink / cream / white). Palette and type stay the reference's (visual parity was the ask).
- **Tone of the product voice:** editorial, calm, short declaratives (reference register).

## Reference

- **Reference URL:** https://stanzza.design/awards (single page; internal links point to
  /projects, /blog, /documents/* which are NOT rebuilt)
- **What we want from it:** the whole page, 1:1 visually including every animation.
- **Access:** public surface only. Nothing behind a login.
- **Snapshot date:** 2026-09-16 (Webflow "Last Published: Tue Sep 15 2026 14:33:07 GMT")
- **Assets pulled to:** `docs/reference/2026-09-16/assets/` (`manifest.tsv` has the provenance,
  80 files, 11.65 MB) + `docs/reference/2026-09-16/js/` (Webflow runtime, IX2/IX3 payloads
  extracted to `ix2.json` / `ix3.json`).

## Mode

- **Mode:** SITE (one page, no auth, no persistent state).

## Scope line

- **In scope:**
  1. The /awards page: preloader → hero → composition cards → pinned apartments slider →
     delivery cards → approach horizontal scroll → about counters → marquee → blog → founder →
     FAQ → footer, plus the menu dropdown, "Request a call" modal, "Start a project" modal
     (form UI + success state, no backend), cookie banner.
  2. Every scripted / Webflow interaction on that page (see `docs/reference-spec.md` §6).
  3. Desktop (≥992), tablet (768–991), small (480–767) and tiny (<480) breakpoints as the
     reference defines them.
- **Explicitly NOT building:**
  - /projects, /projects/*, /blog, /blog/*, /documents/* — links stay as hrefs to `#`-anchored
    stubs or the reference paths; no pages behind them.
  - Form submission backend (Webflow form → nothing); HubSpot meetings embed (replaced by a
    static "Request a call" panel with the same chrome).
  - Webflow CMS. Content is static HTML.
- **Parity target:** visual + motion parity of the one page.
- **Deadline:** none stated.

## Technical

- **Repo:** `~/Desktop/dev/StanzzaClone`, private until Fakhrul says otherwise
- **Stack:** Vite (vanilla HTML/CSS/ES modules) — the reference is a static Webflow export, so a
  static build is the framework-appropriate answer. Deps: gsap 3.15 (same as reference, incl.
  SplitText/ScrollTrigger), @studio-freight/lenis 1.0.33 (same), swiper 11 (same major).
- **Auth / tenancy / data volume / integrations:** none.
- **Hosting target:** not decided; static `dist/` deploys anywhere (CF Pages direct upload is the
  house pattern). **No deploy without asking.**
- **Domain:** none.

## Environment and safety

- Safe to test freely: yes (local only).
- Actions requiring confirmation: any deploy, any push to a public repo.

## Deliverables

- `docs/brief.md` (this), `docs/reference-spec.md`, `docs/reference/2026-09-16/`,
  `docs/qa-log.md`, `docs/parity.json` + `docs/parity.md`, the build.

## Gates

- [x] Gate 1 — spec + token set (self-resolved: Fakhrul said proceed without questions)
- [ ] Gate 2 — hero + preloader complete at desktop and mobile
- [ ] Gate 3 — every section and interaction working end to end
- [ ] Gate 4 — measured visual pass + parity ledger
