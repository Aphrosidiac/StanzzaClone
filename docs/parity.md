# Parity ledger

**39/42 complete** — 36 done, 1 deferred, 2 omitted, 3 improved

## a11y

| ID | Feature | Status | Evidence | Notes |
| --- | --- | --- | --- | --- |
| A11Y-01 | Split text keeps aria-label + aria-hidden spans; user-scalable restriction dropped; :focused typo fixed to :focus-visible | improved | Rendered DOM inspected; build has no lightningcss warnings after the fix | Deliberate deviations recorded in the spec |

## about

| ID | Feature | Status | Evidence | Notes |
| --- | --- | --- | --- | --- |
| ABT-01 | Counters 10/20/38/182 (1s quad-out at 20% visibility) | done | Playwright capture at 1440×900 + 390×844 diffed against the reference shots (tools/diff.py), 2026-09-16: s14400–s19800 mean ≤0.57; counters seen mid-flight in both sequences |  |
| ABT-02 | Highlight sweep across the four cards (overlay opacity + text colour) | done | Playwright capture at 1440×900 + 390×844 diffed against the reference shots (tools/diff.py), 2026-09-16: s15000–s19800 mean ≤0.57 | Skipped under prefers-reduced-motion, as on the reference |
| ABT-03 | Cards slide −56vw/−95.5vw/−214.25vw on medium/small/tiny | done | Playwright capture at 1440×900 + 390×844 diffed against the reference shots (tools/diff.py), 2026-09-16 at 390: s14400–s18600 mean ≤1.95 (photo timing) |  |

## apartments

| ID | Feature | Status | Evidence | Notes |
| --- | --- | --- | --- | --- |
| APT-01 | Chess bars 65svh/25svh→0 on entry | done | Playwright capture at 1440×900 + 390×844 diffed against the reference shots (tools/diff.py), 2026-09-16: s01800 mean 0.50 |  |
| APT-02 | Pinned scrub: backs scale, slider scale, head/advantages slide, numbers/tools/buttons/overlay steps | done | Playwright capture at 1440×900 + 390×844 diffed against the reference shots (tools/diff.py), 2026-09-16: s02400–s04800 mean 0.00–0.13 |  |
| APT-03 | Swiper locked until progress 1.5/3.12, unlocked → autoplay 5s, arrows, scrollbar; re-lock below | done | Driven in a fronted Chrome tab (claude-in-chrome) at 1440×708 and compared with the reference tab, 2026-09-16: slider enabled at y=3300, autoplay advanced 01→02 after 6.5s, arrow click → 03 |  |
| APT-04 | Mobile variant of the scrub (95%/35% slider, x/y slides) | done | Playwright capture at 1440×900 + 390×844 diffed against the reference shots (tools/diff.py), 2026-09-16 at 390: s03000–s06000 mean ≤1.65 |  |
| APT-05 | Webflow SLIDER_ACTIVE/INACTIVE number fade (IX2) | omitted | Reference dead code: those events only fire for a Webflow slider, and the section uses Swiper | Not reproduced |

## approach

| ID | Feature | Status | Evidence | Notes |
| --- | --- | --- | --- | --- |
| APR-01 | Pinned blue section: back/main fade in at top top; horizontal track −120svh→−80svh→−260svh (scrub 1); item reveals with Webflow letter/word split and stagger amount 0.375; image width wipes | done | Playwright capture at 1440×900 + 390×844 diffed against the reference shots (tools/diff.py), 2026-09-16: s09000–s13800 mean ≤0.56 | Own splitter emits the same .gsap_split_word/.gsap_split_letter markup |
| APR-02 | Mobile variant (−134svw→−100svw→−300svw) | done | Playwright capture at 1440×900 + 390×844 diffed against the reference shots (tools/diff.py), 2026-09-16 at 390: s09000–s13200 mean ≤0.67 |  |

## blog

| ID | Feature | Status | Evidence | Notes |
| --- | --- | --- | --- | --- |
| BLG-01 | Three items in the 4/8 grid, cover wipe, hover underline, All journal button | done | Playwright capture at 1440×900 + 390×844 diffed against the reference shots (tools/diff.py), 2026-09-16: s21000–s22200 mean 0.00 |  |

## composition

| ID | Feature | Status | Evidence | Notes |
| --- | --- | --- | --- | --- |
| COMP-01 | Chess bars grow 0→55svh/35svh as the section enters | done | Playwright capture at 1440×900 + 390×844 diffed against the reference shots (tools/diff.py), 2026-09-16: s00600 mean 0.08 |  |
| COMP-02 | Caption/heading/body reveals (chars/words) | done | Playwright capture at 1440×900 + 390×844 diffed against the reference shots (tools/diff.py), 2026-09-16; reveal timing probed on both sites at 5 scroll positions (tools/probe.mjs) — same firing positions |  |
| COMP-03 | 5 project cards absolutely placed, cover wipe (is-active), hover overlay + video, cursor-following “view” pill (lerp 0.12) | done | Driven in a fronted Chrome tab (claude-in-chrome) at 1440×708 and compared with the reference tab, 2026-09-16: pill transform 117.93/171.70 vs 117.94/171.73 on the reference at the same pointer position |  |
| COMP-04 | Card image parallax y→−24% over top 100%→top −100% | done | Playwright capture at 1440×900 + 390×844 diffed against the reference shots (tools/diff.py), 2026-09-16: s01200–s01800 within 0.5 mean once reveal timing is excluded |  |
| COMP-05 | Horizontal track on small/tiny (−145.5vw / −290vw) | done | Playwright capture at 1440×900 + 390×844 diffed against the reference shots (tools/diff.py), 2026-09-16 at 390: s01200–s02400 mean ≤1.42 (video frames) |  |

## cookies

| ID | Feature | Status | Evidence | Notes |
| --- | --- | --- | --- | --- |
| CKE-01 | Cookie banner script | omitted | The reference DOM has no [data-cookie] element; the script is a no-op there | Not reproduced |

## delivery

| ID | Feature | Status | Evidence | Notes |
| --- | --- | --- | --- | --- |
| DEL-01 | Text + CTA, caption + two h2, four sticky cards with image/video, overlay fade top 35%→5% | done | Playwright capture at 1440×900 + 390×844 diffed against the reference shots (tools/diff.py), 2026-09-16: s05400–s08400 mean ≤2.79 (card videos on different frames) |  |

## faq

| ID | Feature | Status | Evidence | Notes |
| --- | --- | --- | --- | --- |
| FAQ-01 | 13 dropdowns, one open at a time, 650ms open/close, arrow rotate | done | Driven in a fronted Chrome tab (claude-in-chrome) at 1440×708 and compared with the reference tab, 2026-09-16: open, accordion switch, close all verified; mobile via tools/mobile_nav.mjs (height 385 both) |  |
| FAQ-02 | Show more / show less (580ms) + label swap | done | Driven in a fronted Chrome tab (claude-in-chrome) at 1440×708 and compared with the reference tab, 2026-09-16: wrapper 0→1011px, label SHOW LESS |  |

## footer

| ID | Feature | Status | Evidence | Notes |
| --- | --- | --- | --- | --- |
| FTR-01 | Get in touch block, menu/logo/©/socials, call/back-to-top/docs, looping video, SVG back | done | Playwright capture at 1440×900 + 390×844 diffed against the reference shots (tools/diff.py), 2026-09-16: bottom-1440 mean 0.48; s24000 mean 0.20 | © and socials are FF |

## founder

| ID | Feature | Status | Evidence | Notes |
| --- | --- | --- | --- | --- |
| FND-01 | Avatar, Katherine Plus quote, name/role, bio, email/location, CTA + socials (pc + mobile) | done | Playwright capture at 1440×900 + 390×844 diffed against the reference shots (tools/diff.py), 2026-09-16: s22800 mean 0.49 (copy differs by brand) | Name/role/bio/contact are FF; portrait is the reference's — placeholder until Fakhrul supplies one |

## header

| ID | Feature | Status | Evidence | Notes |
| --- | --- | --- | --- | --- |
| HDR-01 | Logo lockup (centre), menu button (left), Request a call (right) | done | Playwright capture at 1440×900 + 390×844 diffed against the reference shots (tools/diff.py), 2026-09-16: hero-1440 mean 0.27 | Wordmark swapped for the //FF lockup |
| HDR-02 | Hide on scroll-down past 5vh, show on scroll-up | done | Driven in a fronted Chrome tab (claude-in-chrome) at 1440×708 and compared with the reference tab, 2026-09-16: class is-hide toggles at the same scroll positions |  |
| HDR-03 | header--dark while over [data-scroll=dark] sections | done | Driven in a fronted Chrome tab (claude-in-chrome) at 1440×708 and compared with the reference tab, 2026-09-16: header--dark set at y=800/1000 |  |

## hero

| ID | Feature | Status | Evidence | Notes |
| --- | --- | --- | --- | --- |
| HERO-01 | Full-bleed image, slogan row with handwriting video (data-delay 2.76), h1 char split-in, body-big | improved | Driven in a fronted Chrome tab (claude-in-chrome) at 1440×708 and compared with the reference tab, 2026-09-16 and Playwright capture at 1440×900 + 390×844 diffed against the reference shots (tools/diff.py), 2026-09-16 | h1 now carries the demo disclaimer (Fakhrul, 2026-09-16) at the h2 scale in a 56rem column; slogan video kept |

## images

| ID | Feature | Status | Evidence | Notes |
| --- | --- | --- | --- | --- |
| IMG-01 | Blur reveal on every .u-image (IO + IX3 top 130%) | done | Playwright capture at 1440×900 + 390×844 diffed against the reference shots (tools/diff.py), 2026-09-16 — no blurred image left in any settled frame |  |

## links

| ID | Feature | Status | Evidence | Notes |
| --- | --- | --- | --- | --- |
| LNK-01 | Internal links to /projects, /blog, /documents | deferred | Hrefs kept; Vite serves index.html for them (SPA fallback) | Out of scope per brief |

## marquee

| ID | Feature | Status | Evidence | Notes |
| --- | --- | --- | --- | --- |
| MRQ-01 | Three rows × three copies of 13 logos, 20s linear, row 2 reversed | done | Playwright capture at 1440×900 + 390×844 diffed against the reference shots (tools/diff.py), 2026-09-16: s20400 mean 0.44 (phase differs by capture time) | Logo wall kept as placeholder — third-party marks, replace before going live |

## modals

| ID | Feature | Status | Evidence | Notes |
| --- | --- | --- | --- | --- |
| MDL-01 | Start a project modal: open/close (button, ✕, overlay), Lenis stop/start, transitions | done | Driven in a fronted Chrome tab (claude-in-chrome) at 1440×708 and compared with the reference tab, 2026-09-16: modal_state-open toggles, lenis.isStopped true while open |  |
| MDL-02 | Inquiry form: fields, custom checkbox, submit → success panel | done | Driven in a fronted Chrome tab (claude-in-chrome) at 1440×708 and compared with the reference tab, 2026-09-16: typed name/email, submit → “Your request has been sent.” | No backend by scope; Webflow checkbox redirect implemented in form.js |
| MDL-03 | Request a call modal (HubSpot scheduler on the reference) | improved | Driven in a fronted Chrome tab (claude-in-chrome) at 1440×708 and compared with the reference tab, 2026-09-16: same 632×720 panel, calendar + slots rendered from the current month; slots hand off to WhatsApp | Third-party embed replaced by our own static scheduler (brief scope) |

## nav

| ID | Feature | Status | Evidence | Notes |
| --- | --- | --- | --- | --- |
| NAV-01 | Hover dropdown (pc): panel height 450ms, separator 200ms@400, close after mouseleave, class removed after 450ms | done | Driven in a fronted Chrome tab (claude-in-chrome) at 1440×708 and compared with the reference tab, 2026-09-16: sampled every 40ms — open 282→640ms, separator 682→841, close 2202→2607, display none 2802 vs reference 241→642 / 642→840 / 2201→2606 / 2801 |  |
| NAV-02 | Tap dropdown (mobile): overflow, icon swap, logo colour, inline height, separator | done | tools/mobile_nav.mjs on both sites: identical states (display/opacity/colour/width) open and closed |  |
| NAV-03 | menu label swap + icon scale on hover (CSS) | done | Playwright capture at 1440×900 + 390×844 diffed against the reference shots (tools/diff.py), 2026-09-16 and live hover | CSS carried verbatim |

## preloader

| ID | Feature | Status | Evidence | Notes |
| --- | --- | --- | --- | --- |
| PRE-01 | Tile grid + striped backdrop, text split-in, tile convergence, hero image morph 4svw→42×28svw→100svw×100svh, header un-hide (desktop timeline) | done | Driven in a fronted Chrome tab (claude-in-chrome) at 1440×708 and compared with the reference tab, 2026-09-16; frame-by-frame screenshots match the reference sequence; timeline numbers ported from the reference script | ease "wf4/5/6" are undefined on the reference too — GSAP default applies in both |
| PRE-02 | Mobile (<768) preloader variant | done | Playwright capture at 1440×900 + 390×844 diffed against the reference shots (tools/diff.py), 2026-09-16: hero-390 mean diff 0.09; Playwright touch run reaches the hero |  |
| PRE-03 | localStorage "1" skip path | done | Code path present; nothing on the reference ever sets the key, so it never fires there either | Kept for parity |

## responsive

| ID | Feature | Status | Evidence | Notes |
| --- | --- | --- | --- | --- |
| RSP-01 | No horizontal overflow, identical document height and root font-size at 320/375/768/1024/1440/1920 | done | tools/probe.mjs at six widths: scrollWidth = viewport and scrollHeight/root/h1 identical to the reference at every width |  |

## seo

| ID | Feature | Status | Evidence | Notes |
| --- | --- | --- | --- | --- |
| SEO-01 | Title, description, OG image, favicon/webclip | done | index.html head; favicon = FF favicon SVG, webclip = FF apple-touch-icon | Reference had title “Stanzza” only |

## video

| ID | Feature | Status | Evidence | Notes |
| --- | --- | --- | --- | --- |
| VID-01 | data-autoplay videos play when visible, pause when not, data-delay honoured, codec fallback | done | Driven in a fronted Chrome tab (claude-in-chrome) at 1440×708 and compared with the reference tab, 2026-09-16: card and footer videos playing in screenshots |  |

