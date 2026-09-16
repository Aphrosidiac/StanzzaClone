// node tools/capture.mjs <url> <outDir> [WxH,...] [step]
// Loads the page, waits for the preloader to finish, then steps down the page taking a
// viewport screenshot at every `step` px (scrollY in the filename). Same tool for both
// sites so the numeric diff compares like with like.
import fs from 'node:fs';
import { launch, sleep } from './browser.mjs';
const [,, url, out, sizesArg = '1440x900,390x844', stepArg = '600'] = process.argv;
fs.mkdirSync(out, { recursive: true });
const browser = await launch();
for (const [w, h] of sizesArg.split(',').map((s) => s.split('x').map(Number))) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: 'load' });
  // preloader: wait until it is display:none (max 25s)
  for (let i = 0; i < 50; i++) {
    const done = await page.evaluate(() => { const p = document.querySelector('.preloader'); return !p || getComputedStyle(p).display === 'none'; });
    if (done) break; await sleep(500);
  }
  await sleep(1500);
  await page.screenshot({ path: `${out}/hero-${w}.png` });
  const H = await page.evaluate(() => document.documentElement.scrollHeight);
  const step = +stepArg;
  for (let y = 0; y < H - h; y += step) {
    await page.evaluate((y) => { if (window.lenis) window.lenis.scrollTo(y, { immediate: true }); else window.scrollTo(0, y); }, y);
    await sleep(1400);
    await page.screenshot({ path: `${out}/s${String(y).padStart(5, '0')}-${w}.png` });
  }
  await page.evaluate(() => { if (window.lenis) window.lenis.scrollTo(document.documentElement.scrollHeight, { immediate: true }); });
  await sleep(1400);
  await page.screenshot({ path: `${out}/bottom-${w}.png` });
  console.log(w, 'x', h, 'scrollHeight', H, 'shots', Math.ceil((H - h) / step) + 2);
  await ctx.close();
}
await browser.close();
