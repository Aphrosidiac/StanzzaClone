// FF Stanzza — entry. Order matters: the reference registers its scripts head → body → footer
// and several of them assume the earlier ones ran (window.lenis, gsap plugins, DataSlider).
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { Flip } from 'gsap/Flip';

import { initLenis } from './js/lenis.js';
import { initPreloader } from './js/preloader.js';
import { initModals } from './js/modal.js';
import { initCopyLink, initShowMoreSwap, initAwardsScroll } from './js/misc.js';
import { initImageReveal } from './js/images.js';
import { initVideoAutoplay } from './js/video.js';
import { initHeader } from './js/header.js';
import { initDropdowns } from './js/dropdown.js';
import { initCompositionCursor } from './js/composition.js';
import { initTextAnimators } from './js/text.js';
import { initCounters } from './js/counters.js';
import { initApart } from './js/apart.js';
import { initDataSlider } from './js/slider.js';
import { initScrollInteractions } from './js/ix3.js';
import { initForms } from './js/form.js';

gsap.registerPlugin(ScrollTrigger, SplitText, Flip);
window.gsap = gsap; window.ScrollTrigger = ScrollTrigger; window.SplitText = SplitText;

initLenis();
initPreloader();
initModals();
initCopyLink();
initImageReveal();
initVideoAutoplay();
initHeader();
initDropdowns();
initCompositionCursor();
initTextAnimators();
initShowMoreSwap();
initAwardsScroll();
initCounters();
initDataSlider();
initApart();
initScrollInteractions();
initForms();
