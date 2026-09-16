// Minimal Webflow-IX2 semantics on GSAP: an action list is a sequence of groups; the actions
// in a group run together, the next group starts when the slowest action of the current one
// (delay + duration) has finished. Group 0 is the reset state and is applied instantly — on
// the reference its values always already match, so the tween never shows (measured on the
// nav: display block and the height tween start in the same frame as the hover).
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
gsap.registerPlugin(CustomEase);

// IX2 easing table (webflow.schunk): "" → ease, easeOut → (0,0,.58,1)
export const WF_EASE = CustomEase.create('wf-ease', '0.25,0.1,0.25,1');
export const WF_EASE_OUT = CustomEase.create('wf-easeOut', '0,0,0.58,1');

const running = new WeakMap();

/** groups: [[{targets, vars, duration(ms), delay(ms), ease}]] — vars are GSAP vars. */
export function runActionList(key, groups) {
  const prev = running.get(key);
  if (prev) prev.forEach((t) => t.kill());
  const tweens = [];
  running.set(key, tweens);
  let at = 0;
  groups.forEach((group, gi) => {
    let longest = 0;
    group.forEach((a) => {
      const targets = typeof a.targets === 'string' ? document.querySelectorAll(a.targets) : a.targets;
      if (!targets || (targets.length !== undefined && !targets.length)) return;
      if (gi === 0 || !a.duration) {
        tweens.push(gsap.set(targets, { ...a.vars, delay: at / 1000 }));
        if (gi !== 0) longest = Math.max(longest, a.delay || 0);
        return;
      }
      tweens.push(gsap.to(targets, { ...a.vars, duration: a.duration / 1000, delay: (at + (a.delay || 0)) / 1000, ease: a.ease || WF_EASE, overwrite: 'auto' }));
      longest = Math.max(longest, (a.delay || 0) + a.duration);
    });
    at += longest;
  });
  return at; // total ms
}
