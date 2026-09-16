// node tools/mobile_nav.mjs <url> — touch-emulated 390x844: tap the menu open/close, open a FAQ,
// and report the measured states. Run on both sites and compare.
import { launch, sleep } from './browser.mjs';
const [,, url] = process.argv;
const browser = await launch();
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, hasTouch: true, isMobile: true });
const page = await ctx.newPage();
await page.goto(url, { waitUntil: 'load' });
for (let i = 0; i < 40; i++) { if (await page.evaluate(() => getComputedStyle(document.querySelector('.preloader')).display === 'none')) break; await sleep(500); }
await sleep(1000);
const state = () => page.evaluate(() => {
  const g = (s) => document.querySelector(s); const cs = (s, p) => getComputedStyle(g(s))[p];
  return { navDisp: cs('.nav_content', 'display'), inlineH: Math.round(g('.nav_content-inline').getBoundingClientRect().height), sepW: Math.round(g('.separator-line').getBoundingClientRect().width),
    overflow: cs('.nav_overflow', 'opacity'), closeIcon: cs('.icon-close-mobile', 'opacity'), menuIcon: cs('.icon-menu-main', 'opacity'), logoColor: cs('.logo-mobile', 'color'), open: g('.nav_content').classList.contains('w--open'), hidden: g('.header').classList.contains('is-hide') };
});
console.log('closed', JSON.stringify(await state()));
await page.tap('.nav_trigger');
await sleep(1200);
console.log('open  ', JSON.stringify(await state()));
await page.screenshot({ path: `docs/qa/mobile-nav-${url.includes('localhost') ? 'ours' : 'ref'}.png` });
await page.tap('.nav_trigger');
await sleep(1500);
console.log('closed', JSON.stringify(await state()));
// FAQ
await page.evaluate(() => window.lenis.scrollTo(document.querySelector('.u-section.is-faq').getBoundingClientRect().top + scrollY, { immediate: true }));
await sleep(1200);
await page.tap('.faq-item_trigger');
await sleep(900);
console.log('faq', JSON.stringify(await page.evaluate(() => ({ disp: getComputedStyle(document.querySelector('.faq-item_content')).display, h: Math.round(document.querySelector('.faq-item_content-inline').getBoundingClientRect().height), rot: getComputedStyle(document.querySelector('.faq-item_trigger-arrow')).transform }))));
await browser.close();
