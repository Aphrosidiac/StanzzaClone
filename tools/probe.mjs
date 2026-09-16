// node tools/probe.mjs <url> <script.js> [width] [height]  — run a script file in the page, print the JSON result.
import fs from 'node:fs';
import { launch, sleep } from './browser.mjs';
const [,, url, scriptPath, W = '1440', H = '900'] = process.argv;
const browser = await launch();
const ctx = await browser.newContext({ viewport: { width: +W, height: +H }, deviceScaleFactor: 1 });
const page = await ctx.newPage();
page.on('console', (m) => { if (m.text().startsWith('PROBE')) console.error(m.text()); });
await page.goto(url, { waitUntil: 'load' });
await sleep(+(process.env.WAIT || 6000));
const src = fs.readFileSync(scriptPath, 'utf8');
const res = await page.evaluate(src);
console.log(JSON.stringify(res, null, 1));
await browser.close();
