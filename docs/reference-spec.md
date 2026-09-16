# Reference spec — stanzza.design/awards → FF Stanzza

Provenance markers: `[measured]` extracted from the page / its source; `[observed]` seen in the
live page; `[inferred]` reasoning. Everything below is `[measured]` unless marked.

## 1. Snapshot

- URL https://stanzza.design/awards, crawled 2026-09-16 (raw HTML `docs/reference/2026-09-16/awards.html`,
  365 KB, Webflow export "Last Published Tue Sep 15 2026 14:33:07 GMT").
- Widths measured: 1440×900 and 390×844 headless (tokens + shots), 1440×708 in real Chrome
  (motion). No A/B variant seen; the page has no cookie banner element (the cookie script finds
  nothing) and no auth.
- Stack: Webflow + jQuery 3.5.1 runtime, Lenis 1.0.33 (lerp 0.1), GSAP 3.15.0 + SplitText + Flip +
  ScrollTrigger, Swiper 11, HubSpot meetings embed (Request a call modal). Interactions are a
  mix of Webflow IX2 (dropdowns, FAQ), Webflow IX3 (GSAP ScrollTriggers, `docs/reference/2026-09-16/js/ix3.json`)
  and ~20 custom inline scripts (`inline_scripts.pretty.js`).

## 2. Sitemap (this build = one page)

`/awards` only. Links out: `/`, `/projects`, `/projects/<slug>` ×5, `/blog`, `/blog/<slug>` ×3,
`/documents/privacy-policy|terms-of-use|cookies`, `/#composition`, `/#story`, `#footer`,
`#hero`, tel:, mailto:, Instagram/LinkedIn/Behance/Facebook, Google Maps. Not rebuilt — see
brief scope line.

## 3. Page anatomy (section stack, top → bottom)

1. `.preloader` (variant second) — logo, 3× slogan caption "Architecture", handwriting video,
   16 image tiles in a 14-column grid + 1 "big" tile, two-line text, striped SVG backdrop.
2. `header.header` — left: `.nav` dropdown ("menu" button, blur variant) → `.nav_content`
   (5 links, address + telephone); middle: logo (pc lockup / mobile symbol) + handwriting video
   (is-header, hidden on awards); right: "Request a call" (opens `calling-form` modal).
3. `section.is-hero` (`data-scroll=light`) — full-bleed `.image-hero` (avif 4000px, blur-reveal),
   overlay, `.hero-content_wrapper`: slogan row (Architecture ✕ Design ✕ Delivery + handwriting
   video), h1 (pc/mobile duplicates), body-big, mobile CTA.
4. `.scroll-chess.is-vis` (two bars, left 55svh / right 35svh grow from 0 as the composition
   section enters).
5. `section.is-composition-awards` (`dark`) — caption [COMPOSED], h2 "A home / is a composition."
   (two h2 on pc, one on mobile), two body paragraphs, CMS list of 5 project cards positioned
   absolutely on pc (nth-child 2..5 rules in inline CSS), 4 vertical hairlines.
6. `section.is-apart` (`light`, green #525c2f→#7a8452 gradient) — pinned 5-slide Swiper; each
   slide: head, 3 advantages (days / m² / city), footer buttons (pc-anim, pc-main, mob), slider
   image with 01/05 counter, two scaled background copies, gradient. Tools: two arrows +
   scrollbar. Chess bars (65svh / 25svh → 0) at top.
7. `section` (`dark`) `.content_composed` — text + "Request a call", caption + two h2, four
   sticky `.composed-card`s (01–04) each: image (+ video on 02–04), overlay, tag, h3, body.
8. `.scroll-container.is-awards` (height 700vh) → `section.is-approach` (sticky, blue gradient
   #030b24→#2c3c66) — caption, 3 h2 lines, two line-art images left/right, `.content_approach-scroll`
   horizontal track of 3 items (Architecture / Design / Delivery) with SVG backs.
9. `.scroll-container--lvl-2` (700vh) → `section.is-sticky` — [in years] "About us.", 4 stat
   cards with counters (10 / 20 / 38 / 182) + photo, overlay, second overlay; text column +
   "view projects".
10. `section` (`dark`) marquee — [Trusted by] "Built together with.", three rows × three copies
    of 13 logos (row 2 reversed).
11. `section.is-gray` blog — [From the studio] "Blog.", 3 CMS items in a 12-col grid
    (4/8, then 4/4/4 per inline CSS; only 3 present), "All journal".
12. `section` founder — avatar, Katherine Plus italic quote, name + role, bio, email/location,
    "Request a call" + 3 social buttons (pc + mobile variants).
13. `section.is-faq` — [FAQs] "Questions clients often ask", 4 visible FAQ dropdowns + `.faq-more`
    wrapper with 9 more, "show more / show less" button.
14. `footer` — [GET IN TOUCH] "Start with a conversation.", body, "START A PROJECT" (modal-form);
    middle: 5 menu links, logo + ©, 4 social links; second row: "Call us" + phone, "Back to top",
    3 doc links; bottom: looping video; `.footer_back` SVG.
15. Modals: `modal-form` (image + heading + form: Name, Email, Message, upload placeholder,
    checkbox, submit; success panel) and `calling-form` (HubSpot iframe → replaced by a static
    panel with the same chrome).

## 4. Component inventory

- `.u-btn` (variants: base milk, dark `e90b2c05`, white `fe8b5c72`, menu `441b9f6b`, blur,
  form): glide wipe `::before` scaleX 0→1, 0.6s cubic-bezier(0.21,1,0.34,1), colour 0.3s ease-out.
- `.u-btn-link` (base / white-main / blur), `.u-btn-arrow` (is-left/right, is-disable),
  `.u-btn-social`, `.u-link` text links (underline ::before width 0→100% 0.35s ease-out; address /
  cms variants no underline; docs variant always underlined), `.u-link.is-cms` (blog hover
  underline from parent).
- `.caption-wrapper` = `[` caption `]` bracket pair (`.braket-wrapper`), light / dark variants.
- `.u-image.is-blur` → blur reveal on intersection (class removed, CSS transition).
- Dropdown (Webflow): `.w-dropdown` + `.w-dropdown-toggle` + `.w-dropdown-list`; open state
  class `w--open` on both. Nav: hover, close delay 450 ms (pc), tap on mobile. FAQ: click, delay 650.
- Swiper (apart): `[data-slider=swiper]`, arrows, scrollbar, 600 ms slide, loop, autoplay 5 s,
  no touch; locked until the pinned scrub passes 1.5/3.12 (desktop) / 1/2.5 (mobile).
- Modal `.u-modal[data-modal]`: `.modal_state-open` → overlay opacity 0.5s, wrapper
  translateY(3rem)→0 0.35s ease-out delay 0.2s; opens by `[data-trigger]`, closes by
  `[data-close-modal]`; Lenis stopped while open (`data-lenis-stop/start`).
- Form (Webflow): submit → hide `.u-form-default`, show `.u-form-success`.
- Counter `[data-text-counter]`: 0→N over 1 s, easeOutQuad, starts at 20% visibility, once.
- Cursor: custom SVG cursor on `button, a` (inline CSS).

## 5. Design tokens (from `docs/reference/2026-09-16/tokens/*.json` + `:root` in the CSS)

- Root font-size is fluid: 20px at 1920–2400, 18→20 between 1440–1920, 16→18 between 768–1440,
  16 at 375–768, 14→16 below 375 (inline `<style>`). Everything else is rem.
- Type: heading "Instrument Serif" 400; text "Helioscond" 400/700 (condensed grotesk, self-hosted
  woff); design "Katherine Plus" (handwriting). Sizes (rem): h1 4 (lh 0.88), h2 3.111, h3 2.222,
  h4 1.778 (lh 1.12), body 1 (lh 1.32, ls −1%), body-big 1.333, caption 0.667 (lh 1.18, ls +16%,
  uppercase). At 1440: 18px body ×226 nodes, 24px ×85, 12px caption ×39, 32px ×14, 56px h1/h2.
  Body measure 57ch (1440) / 47ch (390).
- Colour: white #f4f3eb (page), whitness #fff, main #1e1e1e, milk #e5e4dc, grey-dark #3a3a3a,
  hover-milk-btn #dbdad2, black #0f0f0f, gret-soft-light #d8d6cb, grey-soft-dark #8c8c8c (most
  frequent text colour — captions/muted), about-card-default #c4c2b7, overlay-card-about
  #eeece4, back #fffbf5, preloader-back #efeee6, gradient-green #525c2f/#7a8452, gradient-blue
  #030b24/#2c3c66, footer-gradient-second #b0aea3, breadcrumbs #b3b3b3, grey-middle #5f5f5f.
- Spacing: separators 2px / 0.444 / 0.666 / 0.888 / 1.333 / 1.777 / 2.222 / 3.555 / 4.444 / 6.666 rem;
  gaps at 1440: 8px ×47, 18px, 4px, 2px, 24px, 6px, 64px, 32px, 40px. Radii 2px (×47), 4px.
- Motion: CSS transitions 0.65s ×41 (blur reveal), 0.3s ×36, 0.35s ×27, 0.46s, 0.58s, 1.25s;
  easing ease-out ×135. Marquee 20s linear infinite (row 2 reversed).
- Breakpoints (Webflow): main ≥992, medium 768–991, small 480–767, tiny ≤479 (+ font-size
  steps at 1920 / 1440 / 768 / 375).
- z-index layers: 0,1,2,3,5,10,15,20,333 (modals),900 (header/preloader).

## 6. Motion spec (numbers from the inline scripts and `ix3.json`; ease 5 = power2.out, 0 = none)

### 6.1 Load sequence (`preloader` script, desktop ≥768) — `[measured]`
Before load: preloader visible, hero image forced to 4svw×4svw relative, hero content opacity 0 /
y 3%, header `.is-hide`. Preloader text split (head chars / body words) hidden. On fonts.ready +
window load: head chars and body words fade/rise in (1.5s, stagger 0.03, power2.out). Timeline
(delay 1s): first tiles y −2.2svw (0.608s power2.out @0), second tiles y +2.2svw (@0.07); 14
tiles slide to the centre by id (x 30.8/26.4/22/17.6/13.2/8.8/4.4 svw, outer two also fade out,
0.52s power2.out, staggered 0.02 from 1.05); @1.53 text fades out (0.7s, stagger 0.03 from end);
@1.9 preloader bg → transparent, back opacity 0, image-abs opacity 0 (0.25s), `.image-hero` →
42svw×28svw (0.77s); @1.99 hero img scale 1.25 (1.55s); @2.68 `.image-hero` → 100svw×100svh
(0.76s); @2.76 hero content opacity 1 / y 0 (0.45s) and h1 chars in (1.5s, stagger 0.03);
@2.78 preloader content opacity 0; @3.76 header un-hides; then preloader display none + Lenis
start. Mobile (<768) uses the variant with 6.25svw / 6 tile ids / 60×45svw / 100svw×100svh and
no 1s delay. Hero videos start with data-delay 2.76/2.75 s.
`localStorage["1"]` set → `html.preloader-skip` skips it all.

### 6.2 Scroll-driven (ScrollTrigger, all scrub 0.8 unless noted, clamp) — `[measured]`
- Chess bars, hero→composition: trigger `.is-composition-awards` top bottom → top 60px; left
  0→55svh, right 0→35svh (power2.out).
- Composition cards parallax: each `.content_composition-card` top 100% → top −100%;
  `.content_composition-card-image` y → −24% (awards variant; base −12%), 3s track, power2.out.
- Composition horizontal (small 480–767 only): `.content_composition_back` x → −145.5vw over
  `.content.is-composition` top −25% → bottom bottom; tiny (<480): −290vw. Not on ≥768.
- Chess bars, apart: `.is-apart` top bottom → top 35%; left 65svh→0, right 25svh→0.
- Apart pinned scrub: `.is-apart` top −50% → bottom bottom: backs-second scale .65→1.5 (3s @0),
  backs-first .65→1.25 (@0.1), slider .65→1 (@0.2), head x 2.222rem/y −120% → 0 (1s @0.5),
  advantages x −2.222rem/y −85% → 0 (@0.5), numbers + tools opacity 0→1 (@1), footer buttons
  y −3rem→0 (2s @1), `.is-anim` height→0 and `.is-pc-main` opacity→1 (@1), overlay 0→1 (@1.5),
  tools opacity→0 (0.12s @3). All power2.inOut. Swiper unlocks at progress ≥ 1.5/3.12 (desktop)
  and re-locks (slideTo 0, destroy) below it. Mobile variant: slider width 95%/height 35%/x 2.5%/
  y 55% → full (2.5s), slides y −9%→0, head x 50%→0, advantages x 50% y −4rem → 0, adv items and
  captions x ∓50%→0 (0.35s @0.5).
- Composed cards: each `.composed-card` top 35% → top 5%: overlay opacity → 0 (power2.out).
- Approach (≥768): `.is-approach` top −30% → bottom bottom, scrub 1: `.content_approach-scroll`
  x −120svh→−80svh, y 50%→0, scale 0→1 (1s @0, linear) then x → −260svh (3s @1). Item reveals:
  head-1/text-1 (Webflow letter/word split) opacity 0→1, x −5%→0, 0.38s + stagger amount 0.375
  @0.72; tag-1 opacity 0→1 y 10%→0 (0.58s @0.72); image-1 width 0→100% (0.65s @0.72). Group 2
  @1.6 (images 2–6 @1.67/1.71/1.75/1.79/1.83). Group 3 @3.22. Mobile (<768): x −134svw→−100svw,
  y 50svh→0, scale 0→1 (0.8s) then x → −300svw (3s @0.8).
- About cards horizontal: `.scroll-container--lvl-2` top −35% → bottom bottom;
  `.card_about-flex` x → −56vw (medium) / −95.5vw (small) / −214.25vw (tiny); none on ≥992.
- About highlight (top −20% → bottom bottom, toggleActions play pause reverse none, not under
  reduced-motion): card N overlay-second opacity → 0 and text → white at position N−1, back to
  1 / #c4c2b7 at N (1s each, power2.out) — a moving highlight across the 4 cards.
- Blur reveal: `.u-image.is-blur` loses `is-blur` at top 130% (IX3) and on IntersectionObserver
  (custom script, threshold 0.01).
- `[data-awards=scroll]` cover (`.content_composition-card-over`, blog items): `.is-active` →
  height 0% when 35% from the bottom (CSS transition, 0.65s).
- Header: hides (`is-hide`, translateY −110%) when scrolling down past 5vh; `header--dark` when
  the header bottom overlaps a `[data-scroll=dark]` section.
- Counters: 1s quad-out on 20% visibility.

### 6.3 Text reveals (IntersectionObserver rootMargin 0 0 −20%, once) — `[measured]`
- `data-text=head-two`: chars (words kept together) opacity 0→1, yPercent 20→0, 1.5s, stagger
  0.03, power2.out. `head-three` opacity 1.25s; `head-four` opacity 1s; `caption`/`body`/`big-body`
  are handled by the second animator: caption chars 1.5s stagger 0.03, body/big-body words 1.5s
  stagger 0.03 (first animator opts out via `data-text-none=true`).
- `[data-text-none=true]` (already set in markup) means no animation for that node.

### 6.4 Pointer — `[measured]`
- Composition card: cursor-following "view" button (`.is-compos-anim`) lerp 0.12 toward the
  pointer, centred on it; hover shows content + overlay (opacity 100%), video scale 0.95.
- Nav hover: `.icon-menu-main` scale 0.85, `.u-btn-awards span` translateY −100% (swap "menu").
- Buttons: glide wipe; links: underline grow; blog item hover: underline.
- Nav dropdown (pc): open → display block, `.nav_content-inline` height 0→auto 450ms ease-out,
  `.separator-line` width 0→auto 200ms delay 400; close reverses (450ms, 200ms delay 400).
  Mobile: also `.nav_overflow` opacity 0→1 100ms, icon swap 250ms, logo colour to #0f0f0f after
  150ms, inline height 350ms, separator 300ms delay 450; close: inline 500ms, separator 300ms,
  logo back to #f4f3eb, overflow/icons 500ms.
- FAQ: open → display block, inline height 0→auto 650ms ease-out, arrow rotate 0→180°; close
  reverses 650ms then display none. Show more: `.faq-more_wrapper` height 0→auto 580ms
  ease-out, second click back to 0; label swaps "show more"/"show less".
- Modal open/close as in §4.

## 7. Content model
CMS items rendered statically: Projects (5: name, days, area, city, country, slug, cover, video),
Composition cards (same 5), Blog (3: title, cover, slug), FAQ (13: question, rich answer),
Marquee logos (13), Stats (4: label, number, photo).

## 8. Responsive behaviour
- ≥992: pc duplicates shown (`.is-pc`), mobile ones hidden; composition cards absolute; about
  cards 4-up; approach track in svh; nav hover.
- 768–991: about cards slide −56vw; nav hover; composition still absolute (min-width 768 rules).
- 480–767: composition cards become a horizontal track (−145.5vw); about −95.5vw; approach
  mobile variant; nav tap with overflow; preloader mobile variant; hero image 100svw×210svw.
- ≤479: as small with −290vw / −214.25vw; root font 14→16px.

## 9. SEO / social
`<title>Stanzza</title>`, no description, OG image `69ee36ed…_OG.avif`, favicon + webclip PNG,
`meta viewport maximum-scale=1 user-scalable=no` (reference defect — we allow zoom).

## 10. Performance profile `[observed]`
25460px tall at 1440×900, 2732 elements, 11.65 MB of assets (writer.mov 3 MB ProRes 4444 with
alpha — Chrome falls back to the 22 KB VP9 webm), hero avif 4000px. Heavy: filter blur on
large images + backdrop-filter buttons. In an occluded Chrome window the page ran at ≈1 frame
per screenshot — verify motion only in a fronted window (see qa-log).

## 11. Accessibility `[observed]`
Hero h1 duplicated (pc/mobile) — both in DOM (reference defect, kept for parity but mobile copy
is display:none). Custom cursor on every link/button. Split text gets aria-label + aria-hidden
spans (Webflow) — we do the same for our splits. `user-scalable=no` not reproduced.

## 12. Provenance (see `docs/reference/2026-09-16/assets/manifest.tsv`)
Kept for this local test (Fakhrul's instruction): all photography, project videos, logo-wall
marks, handwriting slogan video, line-art SVGs, three fonts. Replaced: Stanzza wordmark and
symbol → `//FF` lockup / mark; name, contact, ©, socials → FF Dev Studio. Copy left as-is
except brand identifiers (visual parity was the ask; re-casting copy changes line breaks).
