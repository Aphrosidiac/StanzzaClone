// node tools/check.mjs <url> [w] [h] — load, list console errors/warnings and page errors.
import { launch, sleep } from './browser.mjs';
const [,, url = 'http://localhost:3162/', W = '1440', H = '900'] = process.argv;
const browser = await launch();
const page = await browser.newPage({ viewport: { width: +W, height: +H } });
const msgs = [];
page.on('console', (m) => { if (['error', 'warning'].includes(m.type())) msgs.push(`[${m.type()}] ${m.text()}`); });
page.on('pageerror', (e) => msgs.push(`[pageerror] ${e.message}`));
page.on('requestfailed', (r) => msgs.push(`[reqfail] ${r.url()} ${r.failure()?.errorText}`));
page.on('response', (r) => { if (r.status() >= 400) msgs.push(`[${r.status()}] ${r.url()}`); });
await page.goto(url, { waitUntil: 'load' });
await sleep(+(process.env.WAIT || 6000));
const info = await page.evaluate(() => ({
  h: document.documentElement.scrollHeight, preloader: getComputedStyle(document.querySelector('.preloader')).display,
  sts: window.ScrollTrigger ? ScrollTrigger.getAll().length : null, lenis: !!window.lenis,
  hero: getComputedStyle(document.querySelector('.hero-content_wrapper')).opacity,
}));
console.log(JSON.stringify(info));
console.log(msgs.length ? msgs.join('\n') : 'no console errors');
await browser.close();
