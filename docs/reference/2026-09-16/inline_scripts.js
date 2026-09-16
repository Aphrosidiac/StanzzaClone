!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);

/* ===== SCRIPT ===== */

document.addEventListener("DOMContentLoaded",function(){var t=new Lenis({lerp:.1,wheelMultiplier:1});function e(n){t.raf(n),requestAnimationFrame(e)}window.lenis=t,requestAnimationFrame(e),document.querySelectorAll("[data-lenis-start]").forEach(function(e){e.addEventListener("click",function(){t.start()})}),document.querySelectorAll("[data-lenis-stop]").forEach(function(e){e.addEventListener("click",function(){t.stop()})}),document.querySelectorAll("[data-lenis-toggle]").forEach(function(e){e.addEventListener("click",function(){this.classList.toggle("stop-scroll"),this.classList.contains("stop-scroll")?t.stop():t.start()})})});

/* ===== SCRIPT ===== */

!function(){let e="cookie-banner-closed";function t(){let t=document.querySelector('[data-cookie="trigger"]');if(t){if(localStorage.getItem(e))return;setTimeout(function e(){t.classList.add("active")},6e3),document.addEventListener("click",function(i){let n=i.target.closest('[data-cookie="close"]');n&&(localStorage.setItem(e,"1"),t.classList.remove("active"))})}}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",t):t()}();

/* ===== SCRIPT ===== */

!function(){"use strict";try{if(null===localStorage.getItem("1"))return}catch(t){return}document.documentElement.classList.add("preloader-skip"),window.__PRELOADER_SKIP__=!0}();

/* ===== SCRIPT ===== */

!function(){"use strict";var e=[{id:"w-node-f451bb51-2dd3-54c9-fb38-8c90f8187841-f818781b",x:"30.8svw",opacity:0},{id:"w-node-f451bb51-2dd3-54c9-fb38-8c90f818785d-f818781b",x:"-30.8svw",opacity:0},{id:"w-node-f451bb51-2dd3-54c9-fb38-8c90f8187843-f818781b",x:"26.4svw",opacity:0},{id:"w-node-f451bb51-2dd3-54c9-fb38-8c90f818785b-f818781b",x:"-26.4svw",opacity:0},{id:"w-node-f451bb51-2dd3-54c9-fb38-8c90f8187845-f818781b",x:"22svw"},{id:"w-node-f451bb51-2dd3-54c9-fb38-8c90f8187859-f818781b",x:"-22svw"},{id:"w-node-f451bb51-2dd3-54c9-fb38-8c90f8187847-f818781b",x:"17.6svw"},{id:"w-node-f451bb51-2dd3-54c9-fb38-8c90f8187857-f818781b",x:"-17.6svw"},{id:"w-node-f451bb51-2dd3-54c9-fb38-8c90f8187849-f818781b",x:"13.2svw"},{id:"w-node-f451bb51-2dd3-54c9-fb38-8c90f8187855-f818781b",x:"-13.2svw"},{id:"w-node-f451bb51-2dd3-54c9-fb38-8c90f818784b-f818781b",x:"8.8svw"},{id:"w-node-f451bb51-2dd3-54c9-fb38-8c90f8187853-f818781b",x:"-8.8svw"},{id:"w-node-f451bb51-2dd3-54c9-fb38-8c90f818784d-f818781b",x:"4.4svw"},{id:"w-node-f451bb51-2dd3-54c9-fb38-8c90f8187851-f818781b",x:"-4.4svw",}],o=[{id:"w-node-f451bb51-2dd3-54c9-fb38-8c90f8187849-f818781b",x:"37.5svw"},{id:"w-node-f451bb51-2dd3-54c9-fb38-8c90f8187855-f818781b",x:"-37.5svw"},{id:"w-node-f451bb51-2dd3-54c9-fb38-8c90f818784b-f818781b",x:"25svw"},{id:"w-node-f451bb51-2dd3-54c9-fb38-8c90f8187853-f818781b",x:"-25svw"},{id:"w-node-f451bb51-2dd3-54c9-fb38-8c90f818784d-f818781b",x:"12.5svw"},{id:"w-node-f451bb51-2dd3-54c9-fb38-8c90f8187851-f818781b",x:"-12.5svw",}];function r(){window.lenis&&"function"==typeof window.lenis.stop&&window.lenis.stop()}function t(e){e&&gsap.set(e,{display:"none"}),window.lenis&&"function"==typeof window.lenis.start&&window.lenis.start()}function a(e,o,r,t,a,d){o.forEach(function(o,i){var n=document.getElementById(o.id);if(n){var s={x:o.x,duration:a,ease:d};0===o.opacity&&(s.opacity=0),e.to(n,s,r+i*t)}})}function d(e,o){e.headChars.length&&gsap.to(e.headChars,{opacity:0,yPercent:20,duration:.7,stagger:{each:.03,from:"end"},ease:o,force3D:!0}),e.bodyWords.length&&gsap.to(e.bodyWords,{opacity:0,yPercent:20,duration:.7,stagger:{each:.03,from:"end"},ease:o,force3D:!0})}function i(i,n){if(r(),i.header&&i.header.classList.add("is-hide"),(s=n).headChars.length&&gsap.to(s.headChars,{duration:1.5,opacity:1,yPercent:0,stagger:.03,ease:"power2.out",force3D:!0,clearProps:"willChange"}),s.bodyWords.length&&gsap.to(s.bodyWords,{duration:1.5,opacity:1,yPercent:0,stagger:.03,ease:"power2.out",force3D:!0,clearProps:"willChange"}),window.innerWidth<768){var s,c=gsap.timeline({delay:0,onComplete:function(){t(i.preloader)}});c.to(i.firstItems,{y:"-6.25svw",duration:.65,ease:"power2.inOut"},0),c.to(i.secondItems,{y:"6.25svw",duration:.65,ease:"power2.inOut"},.05),a(c,o,.9,.02,.55,"power2.inOut"),c.call(function(){d(n,i.wf5)},null,1.45),c.to(i.preloaderImageAbs,{opacity:0,duration:.35,ease:i.wf4},1.9),c.to(i.imageHero,{width:"60svw",height:"45svw",duration:.9,ease:"power2.inOut"},1.9),c.to(i.heroImg,{scale:1.05,duration:1.4,ease:"power2.inOut"},2),c.to(i.preloader,{backgroundColor:"transparent",ease:i.wf5},2.1),c.to(i.preloaderBack,{opacity:0,ease:i.wf5},2.1),c.to(i.imageHero,{width:"100svw",height:"100svh",duration:1.1,ease:"power2.inOut"},2.55),c.call(function(){i.header&&i.header.classList.remove("is-hide")},null,3.9),c.to(i.preloaderContent,{opacity:0,duration:.35,ease:i.wf6},2.45),c.to(i.heroContent,{opacity:1,y:"0%",duration:.55,ease:i.wf5},2.75);var u=document.querySelectorAll('[data-preload="main-head"]');u.length&&"undefined"!=typeof SplitText&&u.forEach(function(e){var o=new SplitText(e,{type:"words,chars",charsClass:"char-wrap",wordsClass:"word-wrap"});gsap.set(e,{visibility:"visible"}),gsap.set(o.words,{display:"inline-block",whiteSpace:"nowrap"}),gsap.set(o.chars,{opacity:0,yPercent:20,willChange:"transform,opacity",force3D:!0,backfaceVisibility:"hidden",display:"inline-block"}),e.splitInstance=o,c.to(o.chars,{opacity:1,yPercent:0,duration:1.5,stagger:.03,ease:"power2.out",force3D:!0,clearProps:"willChange"},2.75)}),c.to(i.heroContent,{y:"0%",duration:.55,ease:i.wf5},2.75);return}var f=gsap.timeline({delay:1,onComplete:function(){t(i.preloader)}});f.to(i.firstItems,{y:"-2.2svw",duration:.608,ease:"power2.out"},0),f.to(i.secondItems,{y:"2.2svw",duration:.608,ease:"power2.out"},.07),a(f,e,1.05,.02,.52,"power2.out"),f.call(function(){d(n,i.wf5)},null,1.53),f.to(i.preloader,{backgroundColor:"transparent",ease:i.wf5},1.9),f.to(i.preloaderBack,{opacity:0,ease:i.wf5},1.9),f.to(i.preloaderImageAbs,{opacity:0,duration:.25,ease:i.wf4},1.9),f.to(i.imageHero,{width:"42svw",height:"28svw",duration:.77,ease:i.wf4},1.9),f.to(i.heroImg,{scale:1.25,duration:1.55,ease:i.wf6},1.99),f.to(i.imageHero,{width:"100svw",height:"100svh",duration:.76,ease:i.wf5},2.68),f.to(i.heroContent,{opacity:1,y:"0%",duration:.45,ease:i.wf5},2.76);var l=document.querySelectorAll('[data-preload="main-head"]');l.length&&"undefined"!=typeof SplitText&&l.forEach(function(e){var o=new SplitText(e,{type:"words,chars",charsClass:"char-wrap",wordsClass:"word-wrap"});gsap.set(e,{visibility:"visible"}),gsap.set(o.words,{display:"inline-block",whiteSpace:"nowrap"}),gsap.set(o.chars,{opacity:0,yPercent:20,willChange:"transform,opacity",force3D:!0,backfaceVisibility:"hidden",display:"inline-block"}),e.splitInstance=o,f.to(o.chars,{opacity:1,yPercent:0,duration:1.5,stagger:.03,ease:"power2.out",force3D:!0,clearProps:"willChange"},2.76)}),f.call(function(){i.header&&i.header.classList.remove("is-hide")},null,3.76),f.to(i.preloaderContent,{opacity:0,duration:.25,ease:i.wf6},2.78)}function n(){if("undefined"!=typeof gsap){var e={preloader:document.querySelector(".preloader"),preloaderContent:document.querySelector(".preloader-content"),preloaderText:document.querySelector(".preloader_text"),preloaderBack:document.querySelector(".preloader_back"),preloaderImageAbs:document.querySelector(".preloader_image-abs"),firstItems:document.querySelectorAll(".preloader-image_item.first"),secondItems:document.querySelectorAll(".preloader-image_item.second"),imageHero:document.querySelector(".image-hero"),heroImg:document.querySelector(".image-hero .u-image"),heroContent:document.querySelector(".hero-content_wrapper"),header:document.querySelector(".header")};if(e.preloader){r(),(o=e).preloader&&(o.preloaderText&&gsap.set(o.preloaderText,{visibility:"hidden"}),o.imageHero&&gsap.set(o.imageHero,{position:"relative",width:"4svw",height:"4svw",overflow:"hidden"}),o.heroImg&&(o.heroImg.classList.remove("is-blur"),gsap.set(o.heroImg,{opacity:1,filter:"none",scale:1,transformOrigin:"center center"})),gsap.set(o.heroContent,{opacity:0,y:"3%"}),o.header&&o.header.classList.add("is-hide"));var o,t,a={headChars:[],bodyWords:[]};t=function(){a=function e(o){if(!o||"undefined"==typeof SplitText)return{headChars:[],bodyWords:[]};if("function"==typeof gsap.registerPlugin)try{gsap.registerPlugin(SplitText)}catch(r){}gsap.set(o,{visibility:"hidden"});var t=o.querySelector(".u-head_one"),a=o.querySelector(".u-body_body"),d=[],i=[];if(t){var n=new SplitText(t,{type:"words,chars",charsClass:"char-wrap",wordsClass:"word-wrap"});t.splitInstance=n,gsap.set(n.words,{display:"inline-block",whiteSpace:"nowrap"}),gsap.set(n.chars,{opacity:0,yPercent:20,willChange:"transform,opacity",force3D:!0,backfaceVisibility:"hidden",display:"inline-block"}),d=n.chars}if(a){var s=new SplitText(a,{type:"words",wordsClass:"word-wrap"});a.splitInstance=s,gsap.set(s.words,{opacity:0,yPercent:20,willChange:"transform,opacity",force3D:!0,backfaceVisibility:"hidden",display:"inline-block"}),i=s.words}return o.classList.add("is-text-ready"),gsap.set(o,{visibility:"visible"}),{headChars:d,bodyWords:i}}(e.preloaderText),"complete"===document.readyState?i(e,a):window.addEventListener("load",function(){i(e,a)},{once:!0})},document.fonts&&document.fonts.ready?document.fonts.ready.then(t).catch(t):t()}}}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",n):n()}();

/* ===== SCRIPT ===== */

document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector('[data-button-swap="swap-trigger"]');if(!e)return;let t=e.querySelector('[data-text="show-swap"]');if(!t)return;let r=!1;e.addEventListener("click",()=>{r=!r,t.innerText=r?"show less":"show more"})});

/* ===== SCRIPT ===== */

document.addEventListener("DOMContentLoaded",function(){let e="modal_state-open";document.querySelectorAll("[data-trigger]").forEach(t=>{let a=t.getAttribute("data-trigger");t.addEventListener("click",()=>{let t=document.querySelector(`[data-modal="${a}"]`);t&&t.classList.add(e)})}),document.querySelectorAll("[data-close-modal]").forEach(t=>{let a=t.getAttribute("data-close-modal");t.addEventListener("click",()=>{let t=document.querySelector(`[data-modal="${a}"]`);t&&t.classList.remove(e)})})});

/* ===== SCRIPT ===== */

document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll('[data-copy="link"]');if(0===e.length){console.warn('Элементы с data-copy="link" не найдены');return}e.forEach(e=>{let t=e.querySelector('[data-copy="clicked"]');if(!t){console.warn('Внутри элемента с data-copy="link" не найден data-copy="clicked"');return}e.addEventListener("click",async()=>{let e=window.location.href;try{await navigator.clipboard.writeText(e),t.style.display="block",clearTimeout(t._hideTimer),t._hideTimer=setTimeout(()=>{t.style.display="none"},5e3)}catch(a){console.error("Не удалось скопировать ссылку:",a)}})})});

/* ===== SCRIPT ===== */

document.addEventListener("DOMContentLoaded",()=>{let t=document.querySelectorAll(".u-image"),e=document.querySelectorAll('[data-animation="false"]');e.forEach(t=>{t.classList.contains("is-blur")&&t.classList.remove("is-blur")});let i=Array.from(t).filter(t=>!t.hasAttribute("data-animation")||"false"!==t.getAttribute("data-animation"));function a(t){let e=t.getBoundingClientRect();return e.top<window.innerHeight&&e.bottom>0&&e.left<window.innerWidth&&e.right>0}function s(){i.forEach(t=>{t.classList.contains("is-blur")&&a(t)&&t.classList.remove("is-blur")})}s();let r=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&t.target.classList.contains("is-blur")&&t.target.classList.remove("is-blur")})},{threshold:.01});i.forEach(t=>r.observe(t)),window.observeNewImages=function(t){let e=t.querySelectorAll?t.querySelectorAll(".u-image"):e;Array.from(e).forEach(t=>{(!t.hasAttribute("data-animation")||"false"!==t.getAttribute("data-animation"))&&t.classList.contains("is-blur")&&(a(t)?t.classList.remove("is-blur"):r.observe(t))})}});

/* ===== SCRIPT ===== */

!function(){"use strict";var e=!1,t=null,n={capture:!0,passive:!0},i=["pointerdown","touchstart","touchmove","touchend","click","keydown"],a=["scroll","wheel"],o="undefined"!=typeof WeakSet?new WeakSet:null;function c(){return document.querySelectorAll('video[data-autoplay="true"]')}function u(e){if(!e.canPlayType)return!0;var t=e.currentSrc||e.src||"";return/\.webm(\?|$)/i.test(t)?Boolean(e.canPlayType('video/webm; codecs="vp9"')||e.canPlayType('video/webm; codecs="vp8"')):!(/\.mov(\?|$)/i.test(t)||/ap4h|apch|hvc1|hev1/i.test(t))||Boolean(e.canPlayType('video/quicktime; codecs="ap4h"')||e.canPlayType('video/mp4; codecs="ap4h"')||e.canPlayType('video/mp4; codecs="hvc1"')||e.canPlayType('video/mp4; codecs="hev1"'))}function r(e){e.autoplay=!1,e.defaultMuted=!0,e.muted=!0,e.playsInline=!0,e.setAttribute("muted",""),e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline","")}function d(e){if(!e.offsetParent&&0===e.getClientRects().length)return!1;var t=window.getComputedStyle(e);if("none"===t.display||"hidden"===t.visibility||0>=parseFloat(t.opacity))return!1;var n=e.getBoundingClientRect(),i=window.innerHeight||document.documentElement.clientHeight,a=window.innerWidth||document.documentElement.clientWidth;return n.bottom>0&&n.top<i&&n.right>0&&n.left<a}function l(e){return o?o.has(e):"true"===e.dataset.scrollPlayed}function p(e){o&&o.add(e),e.dataset.scrollPlayed="true"}function s(e){e._autoplayTimer&&(clearTimeout(e._autoplayTimer),e._autoplayTimer=null)}function f(e){if(s(e),d(e)&&!e.ended&&e.paused&&u(e)){r(e);var t=e.play();t&&"function"==typeof t.then?t.then(function(){e.paused||p(e)}).catch(function(){}):e.paused||p(e)}}function y(e){if(s(e),d(e)&&!e.ended&&e.paused&&u(e)){var t,n,i=(t=e,!Number.isFinite(n=parseFloat(t.getAttribute("data-delay")))||n<0?0:1e3*n);if(0===i){f(e);return}e._autoplayTimer=setTimeout(function(){e._autoplayTimer=null,d(e)&&f(e)},i)}}function v(e){s(e),e.paused||e.pause()}function h(){Array.prototype.forEach.call(c(),function(e){d(e)?y(e):v(e)})}function m(){e=!0,h()}function $(){var o=c();o.length&&(t=new IntersectionObserver(function(e){e.forEach(function(e){var t=e.target;e.isIntersecting?y(t):v(t)}),Array.prototype.every.call(c(),function(e){return!u(e)||e.ended})&&i.concat(a).forEach(function(e){window.removeEventListener(e,m,n)})},{threshold:0}),Array.prototype.forEach.call(o,function(n){r(n),t.observe(n),n.addEventListener("loadeddata",function(){e&&d(n)&&y(n)},{once:!0}),n.addEventListener("ended",function(){s(n)})}),i.concat(a).forEach(function(e){window.addEventListener(e,m,n)}),e=!0,h())}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",$):$()}();

/* ===== SCRIPT ===== */

document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector('header[data-scroll="header"]'),t=document.querySelectorAll('[data-scroll]:not([data-scroll="header"])'),l=document.querySelector(".nav_content");if(!e||!t.length)return;let n=0,r=()=>{let l=e.getBoundingClientRect().bottom,n=!1;for(let r of t){if("dark"!==r.dataset.scroll)continue;let o=r.getBoundingClientRect();if(l>=o.top&&l<=o.bottom){n=!0;break}}e.classList.toggle("header--dark",n)},o=()=>{if(l&&l.classList.contains("w--open"))return;let t=window.pageYOffset||document.documentElement.scrollTop,r=5*(.01*window.innerHeight),o=t>n;t>r&&o?e.classList.add("is-hide"):e.classList.remove("is-hide"),n=t<=0?0:t},a=()=>{r(),o()};window.addEventListener("scroll",a),window.addEventListener("resize",a),r(),o()});

/* ===== SCRIPT ===== */

const isDesktop=window.matchMedia("(hover: hover) and (pointer: fine)").matches;isDesktop&&document.querySelectorAll(".content_composition-card").forEach(e=>{let t=e.querySelector(".is-compos-anim");if(!t)return;let n=e.getBoundingClientRect(),i=n.width/2,o=n.height/2,r=i,c=o,l=null,s=!1;function a(){n=e.getBoundingClientRect()}function d(){r+=(i-r)*.12,c+=(o-c)*.12,t.style.transform=`translate3d(${r-t.offsetWidth/2}px, ${c-t.offsetHeight/2}px, 0)`,l=s||Math.abs(i-r)>.1||Math.abs(o-c)>.1?requestAnimationFrame(d):null}function f(e){a(),i=e.clientX-n.left,o=e.clientY-n.top,l||(s=!0,d())}function p(e){s=!0,a(),i=e.clientX-n.left,o=e.clientY-n.top,l||d()}function u(){s=!1}e.addEventListener("pointerenter",p),e.addEventListener("pointermove",f),e.addEventListener("pointerleave",u),window.addEventListener("resize",a)});

/* ===== SCRIPT ===== */

gsap.registerPlugin(SplitText,Flip,ScrollTrigger);

/* ===== SCRIPT ===== */

gsap.registerPlugin(SplitText);class TextAnimator{constructor(){this.textObserver=new IntersectionObserver(t=>{t.forEach(t=>{if(!t.isIntersecting)return;let e=t.target,a=this.getSettings(e);a&&(this.playAnimation(e,a),this.textObserver.unobserve(e))})},{threshold:0,rootMargin:"0px 0px -20% 0px"})}getSettings(t){let e=t.getAttribute("data-text");if("true"===t.getAttribute("data-text-none"))return null;switch(e){case"caption":return{type:"opacity",duration:.3};case"bid-body":return{type:"lines",duration:.6,stagger:.08};case"big-body":return{type:"opacity",duration:.6};case"body":return{type:"opacity",duration:.45};case"head-two":return{type:"chars",duration:1.5,stagger:.03,keepWordsTogether:!0};case"head-three":return{type:"opacity",duration:1.25};case"head-four":return{type:"opacity",duration:1};default:return null}}setup(t,e){if("chars"===e.type){if(e.keepWordsTogether){let a=new SplitText(t,{type:"words,chars",charsClass:"char-wrap",wordsClass:"word-wrap"});return t.splitInstance=a,gsap.set(a.words,{display:"inline-block",whiteSpace:"nowrap"}),gsap.set(a.chars,{opacity:0,yPercent:20,willChange:"transform,opacity",force3D:!0,backfaceVisibility:"hidden",display:"inline-block"}),a.chars}let r=new SplitText(t,{type:"chars",charsClass:"char-wrap"});return t.splitInstance=r,gsap.set(r.chars,{opacity:0,yPercent:20,willChange:"transform,opacity",force3D:!0,backfaceVisibility:"hidden"}),r.chars}return gsap.set(t,{opacity:0,willChange:"opacity",force3D:!0,backfaceVisibility:"hidden"}),t}playAnimation(t,e){let a;if(!(a="chars"===e.type?t.splitInstance?.chars:t)||Array.isArray(a)&&!a.length){console.warn("No elements to animate:",t);return}gsap.to(a,{duration:e.duration,opacity:1,yPercent:"chars"===e.type?0:void 0,stagger:e.stagger||0,ease:"power2.out",force3D:!0,clearProps:"willChange"})}async init(){if(document.fonts&&document.fonts.ready)try{await document.fonts.ready}catch(t){}document.querySelectorAll('[data-text="caption"], [data-text="big-body"], [data-text="body"], [data-text="head-two"], [data-text="head-three"], [data-text="head-four"]').forEach(t=>{let e=this.getSettings(t);e&&(this.setup(t,e),this.textObserver.observe(t))})}}window.addEventListener("load",()=>{new TextAnimator().init()});

/* ===== SCRIPT ===== */

document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector('[data-button-swap="swap-trigger"]');if(!e)return;let t=e.querySelector('[data-text="show-swap"]');if(!t)return;let r=!1;e.addEventListener("click",()=>{r=!r,t.innerText=r?"show less":"show more"})});

/* ===== SCRIPT ===== */

document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll('[data-awards="scroll"]');if(!e.length)return;let t=new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add("is-active"),t.unobserve(e.target))})},{root:null,rootMargin:"0px 0px -35% 0px",threshold:0});e.forEach(e=>t.observe(e))});

/* ===== SCRIPT ===== */

!function(){"use strict";var t={duration:1.5,stagger:.03};function e(){document.querySelectorAll('[data-text="caption"], [data-text="big-body"], [data-text="body"]').forEach(function(t){t.setAttribute("data-text-none","true")})}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e();class a{constructor(){this.observer=new IntersectionObserver((function(t){t.forEach((function(t){if(t.isIntersecting){var e=t.target,a=this.getSettings(e);a&&(this.playAnimation(e,a),this.observer.unobserve(e))}}).bind(this))}).bind(this),{threshold:0,rootMargin:"0px 0px -20% 0px"})}getSettings(e){if("true"===e.getAttribute("data-text-split-none"))return null;switch(e.getAttribute("data-text")){case"caption":return{type:"chars",duration:t.duration,stagger:t.stagger};case"body":case"big-body":return{type:"words",duration:t.duration,stagger:t.stagger};default:return null}}setup(t,e){if("undefined"==typeof SplitText)return null;if("chars"===e.type){var a=new SplitText(t,{type:"chars",charsClass:"char-wrap"});return t.splitInstance=a,gsap.set(a.chars,{opacity:0,yPercent:20,willChange:"transform,opacity",force3D:!0,backfaceVisibility:"hidden",display:"inline-block"}),a.chars}var n=new SplitText(t,{type:"words",wordsClass:"word-wrap"});return t.splitInstance=n,gsap.set(n.words,{opacity:0,yPercent:20,willChange:"transform,opacity",force3D:!0,backfaceVisibility:"hidden",display:"inline-block"}),n.words}playAnimation(t,e){var a="chars"===e.type?t.splitInstance&&t.splitInstance.chars:t.splitInstance&&t.splitInstance.words;if(!a||Array.isArray(a)&&!a.length){console.warn("No elements to animate:",t);return}gsap.to(a,{duration:e.duration,opacity:1,yPercent:0,stagger:e.stagger||0,ease:"power2.out",force3D:!0,clearProps:"willChange"})}async init(){if("undefined"!=typeof gsap&&"undefined"!=typeof SplitText){try{gsap.registerPlugin(SplitText)}catch(t){}if(document.fonts&&document.fonts.ready)try{await document.fonts.ready}catch(a){}e(),document.querySelectorAll('[data-text="caption"], [data-text="big-body"], [data-text="body"]').forEach((function(t){var e=this.getSettings(t);e&&this.setup(t,e)&&this.observer.observe(t)}).bind(this))}}}window.addEventListener("load",function(){new a().init()})}();

/* ===== SCRIPT ===== */

document.addEventListener("DOMContentLoaded",()=>{let t=document.querySelectorAll("[data-text-counter]");if(!("IntersectionObserver"in window)){t.forEach(t=>startCounter(t));return}let e=new IntersectionObserver((t,e)=>{t.forEach(t=>{if(t.isIntersecting){let n=t.target;startCounter(n),e.unobserve(n)}})},{threshold:.2});t.forEach(t=>{t.textContent="0",e.observe(t)})});function startCounter(t){let e=parseFloat(t.getAttribute("data-text-counter"))||0,n=performance.now();function r(o){var a;let u=Math.min((o-n)/1e3,1),i=1-(1-(a=u))*(1-a);t.textContent=Math.round(0+(e-0)*i),u<1?requestAnimationFrame(r):t.textContent=e}requestAnimationFrame(r)}

/* ===== SCRIPT ===== */

/**
 * Apartments section scroll animations
 * Source: webflow.faaafb9f.7a590ca3d7e105c7.js → u-section.is-apart
 *
 * Animates ALL CMS slides (querySelectorAll), not only the first.
 * Swiper unlocks when scrub reaches “fully visible”;
 * on reverse scroll below that point → slideTo(0) + disable.
 */
!(function () {
  "use strict";

  var SECTION = ".u-section.is-apart";
  var EASE = "power2.inOut";

  var UNLOCK_AT = {
    desktop: 1.5 / 3.12,
    mobile: 1.0 / 2.5,
  };

  var unlocked = false;

  function qa(root, sel) {
    return Array.prototype.slice.call(root.querySelectorAll(sel));
  }

  function q(root, sel) {
    return root.querySelector(sel);
  }

  function unlockSwiper(section) {
    if (unlocked) return;
    unlocked = true;
    section.dispatchEvent(
      new CustomEvent("apart:ready", {
        bubbles: true,
        detail: { section: section },
      })
    );
    if (window.DataSlider && typeof window.DataSlider.init === "function") {
      window.DataSlider.init(section);
    }
  }

  function lockSwiper(section) {
    if (!unlocked) return;
    unlocked = false;
    section.dispatchEvent(
      new CustomEvent("apart:lock", {
        bubbles: true,
        detail: { section: section },
      })
    );
    if (window.DataSlider && typeof window.DataSlider.lock === "function") {
      window.DataSlider.lock(section);
    } else if (window.DataSlider && typeof window.DataSlider.destroy === "function") {
      window.DataSlider.destroy(section);
    }
  }

  function onScrubProgress(section, threshold, progress) {
    if (progress >= threshold) unlockSwiper(section);
    else lockSwiper(section);
  }

  /** t-e350b67b — chess height bars */
  function buildIntroHeights(section) {
    var left = qa(section, ".scroll-chess-item.is-left");
    var right = qa(section, ".scroll-chess-item.is-right");
    if (!left.length && !right.length) return null;

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "top 35%",
        scrub: 0.8,
      },
    });

    if (left.length) {
      tl.fromTo(left, { height: "65svh" }, { height: "0svh", duration: 1, ease: EASE }, 0);
    }
    if (right.length) {
      tl.fromTo(right, { height: "25svh" }, { height: "0svh", duration: 1, ease: EASE }, 0);
    }

    return tl;
  }

  /** t-dbf72b33 — desktop, all CMS slides */
  function buildDesktop(section) {
    var sliders = qa(section, ".content_apatments-slider");
    var backsFirst = qa(section, ".content_apatments-back.is-first");
    var backsSecond = qa(section, ".content_apatments-back.is-second");
    var numbers = qa(section, ".content_apatments-slide-number");
    var tools = qa(section, ".swiper-tools");
    var overlays = qa(section, ".content_apatments-slider--overlay");
    var footerAnims = qa(section, ".apartments_footer.is-pc.is-anim");
    var bttnSlides = qa(section, ".apartments_footer_bttn");
    var bttnOpacity = qa(section, ".apartments_footer.is-pc.is-pc-main");
    var heads = qa(section, ".apartments_main_head");
    var advantages = qa(section, ".apartments_main_advantages");

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top -50%",
        end: "bottom bottom",
        scrub: 0.8,
        onUpdate: function (self) {
          onScrubProgress(section, UNLOCK_AT.desktop, self.progress);
        },
      },
    });

    if (backsSecond.length) {
      tl.fromTo(backsSecond, { scale: 0.65 }, { scale: 1.5, duration: 3, ease: EASE }, 0);
    }
    if (backsFirst.length) {
      tl.fromTo(backsFirst, { scale: 0.65 }, { scale: 1.25, duration: 3, ease: EASE }, 0.1);
    }
    if (sliders.length) {
      tl.fromTo(sliders, { scale: 0.65 }, { scale: 1, duration: 3, ease: EASE }, 0.2);
    }

    if (heads.length) {
      tl.fromTo(
        heads,
        { x: "2.2222222222222223rem", y: "-120%" },
        { x: "0rem", y: "0%", duration: 1, ease: EASE },
        0.5
      );
    }
    if (advantages.length) {
      tl.fromTo(
        advantages,
        { x: "-2.22222rem", y: "-85%" },
        { x: "0rem", y: "0%", duration: 1, ease: EASE },
        0.5
      );
    }

    if (numbers.length) {
      tl.fromTo(numbers, { opacity: 0 }, { opacity: 1, duration: 0.001, ease: EASE }, 1);
    }
    if (tools.length) {
      tl.fromTo(tools, { opacity: 0 }, { opacity: 1, duration: 0.001, ease: EASE }, 1);
    }
    if (bttnSlides.length) {
      tl.fromTo(bttnSlides, { y: "-3rem" }, { y: "0rem", duration: 2, ease: EASE }, 1);
    }
    if (footerAnims.length) {
      tl.to(footerAnims, { height: 0, duration: 0.001, ease: EASE }, 1);
    }
    if (bttnOpacity.length) {
      tl.fromTo(bttnOpacity, { opacity: 0 }, { opacity: 1, duration: 0.001, ease: EASE }, 1);
    }
    if (overlays.length) {
      tl.fromTo(overlays, { opacity: 0 }, { opacity: 1, duration: 0.001, ease: "none" }, 1.5);
    }
    if (tools.length) {
      tl.to(tools, { opacity: 0, duration: 0.12, ease: EASE }, 3);
    }

    return tl;
  }

  /** t-e769e757 — mobile, all CMS slides */
  function buildMobile(section) {
    var sliders = qa(section, ".content_apatments-slider");
    var slides = qa(section, ".content_apatments-slide");
    var heads = qa(section, ".apartments_main_head");
    var advantages = qa(section, ".apartments_main_advantages");
    var advOne = qa(section, ".apartments_main_advantage.is-one");
    var advTwo = qa(section, ".apartments_main_advantage.is-two");
    var advThree = qa(section, ".apartments_main_advantage.is-three");
    var tagTwo = qa(section, ".apartments_main_advantage-tag.is-relative.is-two");
    var tagThree = qa(section, ".apartments_main_advantage-tag.is-relative.is-three");
    var captions = qa(section, ".caption-mobile");
    var headContainers = qa(section, ".apartments_main_head-container");

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top -50%",
        end: "bottom bottom",
        scrub: 0.8,
        onUpdate: function (self) {
          onScrubProgress(section, UNLOCK_AT.mobile, self.progress);
        },
      },
    });

    if (sliders.length) {
      tl.fromTo(
        sliders,
        { width: "95%", height: "35%", x: "2.5%", y: "55%" },
        { width: "100%", height: "100%", x: "0%", y: "0%", duration: 2.5, ease: EASE },
        0
      );
    }
    if (slides.length) {
      tl.fromTo(slides, { y: "-9%" }, { y: "0%", duration: 2.5, ease: EASE }, 0);
    }

    if (heads.length) {
      tl.fromTo(heads, { x: "50%" }, { x: "0%", duration: 0.35, ease: EASE }, 0.5);
    }
    if (advantages.length) {
      tl.fromTo(
        advantages,
        { x: "50%", y: "-4rem" },
        { x: "0%", y: "0rem", duration: 0.35, ease: EASE },
        0.5
      );
    }

    [advOne, advTwo, advThree].forEach(function (els) {
      if (!els.length) return;
      tl.fromTo(els, { x: "-50%" }, { x: "0%", duration: 0.35, ease: EASE }, 0.5);
    });

    [tagTwo, tagThree].forEach(function (els) {
      if (!els.length) return;
      tl.fromTo(els, { x: "50%" }, { x: "0%", duration: 0.35, ease: EASE }, 0.5);
    });

    if (captions.length) {
      tl.fromTo(captions, { x: "-50%" }, { x: "0%", duration: 0.35, ease: EASE }, 0.5);
    }
    if (headContainers.length) {
      tl.fromTo(headContainers, { x: "-50%" }, { x: "0%", duration: 0.35, ease: EASE }, 0.5);
    }

    return tl;
  }

  function init() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
      console.warn("[apart] GSAP + ScrollTrigger required");
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    var section = document.querySelector(SECTION);
    if (!section) return;

    unlocked = false;

    buildIntroHeights(section);

    if (window.innerWidth < 768) {
      buildMobile(section);
    } else {
      buildDesktop(section);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.addEventListener("load", function () {
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  });
})();


/* ===== SCRIPT ===== */

/**
 * data-slider / Swiper helper
 * - Apart section (.u-section.is-apart): no 5s timer, unlocks on `apart:ready`
 * - Manual swipe disabled (allowTouchMove: false)
 * - Other sliders: still unlock via [data-slider="trigger"] visibility (no delay)
 */
!(function () {
  "use strict";

  var DEBUG = false;
  var SEL = {
    swiper: '[data-slider="swiper"]',
    wrapper: '[data-slider="swiper-wrapper"]',
    slide: '[data-slider="swiper-slide"]',
    navigation: '[data-slider="navigation"]',
    trigger: '[data-slider="trigger"]',
    arrowLeft: '[data-slider="arrow-left"]',
    arrowRight: '[data-slider="arrow-right"]',
    scrollbar: '[data-slider="scrollbar"]',
  };

  var swiperByEl = new WeakMap();
  var timers = new WeakMap();
  var initialized = new WeakSet();
  var pending = new WeakSet();
  var observed = new WeakSet();
  var io = null;

  function log() {
    if (!DEBUG) return;
    console.log.apply(console, ["[data-slider]"].concat(Array.prototype.slice.call(arguments)));
  }

  function qs(root, sel) {
    return (root || document).querySelector(sel);
  }

  function qsa(root, sel) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function merge(a, b) {
    var out = {};
    var k;
    for (k in a) if (Object.prototype.hasOwnProperty.call(a, k)) out[k] = a[k];
    for (k in b) {
      if (!Object.prototype.hasOwnProperty.call(b, k)) continue;
      if (b[k] && typeof b[k] === "object" && !Array.isArray(b[k]) && out[k] && typeof out[k] === "object") {
        out[k] = merge(out[k], b[k]);
      } else {
        out[k] = b[k];
      }
    }
    return out;
  }

  function findRoot(from) {
    var el = from;
    if (el.matches && el.matches(SEL.swiper)) el = el.parentElement;
    while (el && el !== document.documentElement) {
      if (qs(el, SEL.swiper) && el.contains(from)) return el;
      el = el.parentElement;
    }
    return null;
  }

  function getSwiperEl(root) {
    return qs(root, SEL.swiper);
  }

  function isApartRoot(root) {
    return !!(root && root.closest && root.closest(".u-section.is-apart")) ||
      !!(root && root.matches && root.matches(".u-section.is-apart"));
  }

  function decorate(root) {
    var swiperEl = getSwiperEl(root);
    var wrapper = qs(root, SEL.wrapper);
    var nav = qs(root, SEL.navigation);
    if (swiperEl) swiperEl.classList.add("swiper");
    if (wrapper) wrapper.classList.add("swiper-wrapper");
    if (nav) nav.classList.add("swiper-pagination");
    qsa(root, SEL.slide).forEach(function (slide) {
      slide.classList.add("swiper-slide");
    });
  }

  function setEnabled(root, enabled) {
    root.classList.toggle("is-slider-disabled", !enabled);
    root.classList.toggle("is-slider-enabled", enabled);
    var swiperEl = getSwiperEl(root);
    if (swiperEl) swiperEl.setAttribute("aria-disabled", enabled ? "false" : "true");
  }

  function readOptions(root) {
    var nodes = [root, getSwiperEl(root)];
    var i;
    var raw;
    for (i = 0; i < nodes.length; i++) {
      if (!nodes[i]) continue;
      raw = nodes[i].getAttribute("data-slider-options");
      if (!raw) continue;
      try {
        return JSON.parse(raw);
      } catch (err) {
        console.warn("[data-slider] Invalid data-slider-options JSON", err);
      }
    }
    return {};
  }

  function buildOptions(root, slideCount) {
    var user = readOptions(root);
    var canLoop = slideCount > 1;
    var nav = qs(root, SEL.navigation);
    var opts = merge(
      {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 600,
        grabCursor: false,
        allowTouchMove: false,
        simulateTouch: false,
        loop: canLoop,
        loopAdditionalSlides: canLoop ? 2 : 0,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        },
      },
      user
    );

    // Force behaviour for apartments / all data-sliders
    opts.allowTouchMove = false;
    opts.simulateTouch = false;
    opts.grabCursor = false;
    opts.autoplay = {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    };

    if (slideCount <= 1) opts.loop = false;

    if (nav) {
      opts.pagination = merge(
        { el: nav, clickable: true, type: "bullets" },
        user.pagination || {}
      );
    }

    opts.navigation = {
      prevEl: qs(root, SEL.arrowLeft),
      nextEl: qs(root, SEL.arrowRight),
    };

    opts.scrollbar = {
      el: qs(root, SEL.scrollbar),
      draggable: false,
      hide: false,
    };

    opts.on = merge(opts.on || {}, {
      init: function (swiper) {
        root.dispatchEvent(
          new CustomEvent("data-slider:init", {
            bubbles: true,
            detail: { root: root, swiper: swiper },
          })
        );
      },
      slideChange: function (swiper) {
        root.dispatchEvent(
          new CustomEvent("data-slider:change", {
            bubbles: true,
            detail: {
              root: root,
              swiper: swiper,
              activeIndex: swiper.activeIndex,
              realIndex: swiper.realIndex,
            },
          })
        );
      },
    });

    return opts;
  }

  function createSwiper(root, swiperEl, opts) {
    try {
      return new Swiper(swiperEl, opts);
    } catch (err) {
      console.warn("[data-slider] Init with loop failed, retrying without loop", err);
      opts.loop = false;
      opts.loopAdditionalSlides = 0;
      return new Swiper(swiperEl, opts);
    }
  }

  function initSlider(root) {
    if (!root) return null;
    if (initialized.has(root)) {
      var existing = getSwiperEl(root);
      return existing && swiperByEl.get(existing) || null;
    }

    if (typeof Swiper === "undefined") {
      console.error("[data-slider] Swiper library is not loaded");
      return null;
    }

    var swiperEl = getSwiperEl(root);
    if (!swiperEl) {
      console.warn('[data-slider] [data-slider="swiper"] not found in', root);
      return null;
    }
    if (!qs(root, SEL.wrapper)) {
      console.warn('[data-slider] [data-slider="swiper-wrapper"] not found in', root);
      return null;
    }

    var slides = qsa(root, SEL.slide);
    if (!slides.length) {
      console.warn('[data-slider] [data-slider="swiper-slide"] not found in', root);
      return null;
    }

    decorate(root);
    setEnabled(root, true);

    var opts = buildOptions(root, slides.length);
    var swiper = createSwiper(root, swiperEl, opts);

    if (swiper.autoplay && typeof swiper.autoplay.start === "function") {
      swiper.autoplay.start();
    }

    swiperByEl.set(swiperEl, swiper);
    initialized.add(root);
    pending.add(root);
    log("initialized", root, slides.length, "slides");

    root.dispatchEvent(
      new CustomEvent("data-slider:ready", {
        bubbles: true,
        detail: { root: root, swiper: swiper },
      })
    );

    return swiper;
  }

  function lockSlider(root) {
    if (!root) return;
    if (root.matches && root.matches(SEL.swiper)) {
      root = findRoot(root) || root.parentElement;
    }

    var swiperEl = getSwiperEl(root);
    var instance = swiperEl ? swiperByEl.get(swiperEl) : null;

    if (instance) {
      if (instance.autoplay && typeof instance.autoplay.stop === "function") {
        instance.autoplay.stop();
      }
      try {
        if (instance.params && instance.params.loop && typeof instance.slideToLoop === "function") {
          instance.slideToLoop(0, 0);
        } else {
          instance.slideTo(0, 0);
        }
      } catch (err) {
        try {
          instance.slideTo(0, 0);
        } catch (e2) {}
      }
      instance.destroy(true, true);
      swiperByEl.delete(swiperEl);
    }

    initialized.delete(root);
    pending.delete(root);
    setEnabled(root, false);
    log("locked", root);
  }

  function scheduleInit(root) {
    if (!root || initialized.has(root) || pending.has(root)) return;
    // Apart section is unlocked only by apart:ready / DataSlider.init
    if (isApartRoot(root)) {
      log("apart root waits for apart:ready", root);
      return;
    }
    pending.add(root);
    initSlider(root);
  }

  function onTriggerVisible(trigger) {
    var root = findRoot(trigger);
    if (!root) {
      console.warn("[data-slider] Slider root not found for trigger", trigger);
      return;
    }
    if (initialized.has(root) || pending.has(root)) return;
    if (isApartRoot(root)) return;
    scheduleInit(root);
  }

  function observeSize(el) {
    var rect = el.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0 && el.parentElement) {
      log("trigger has zero size, observing parent", el);
      return el.parentElement;
    }
    return el;
  }

  function bindTrigger(trigger) {
    if (!io || observed.has(trigger)) return;
    var target = observeSize(trigger);
    io.observe(target);
    observed.add(trigger);

    var rect = target.getBoundingClientRect();
    if (
      rect.bottom > 0 &&
      rect.top < window.innerHeight &&
      rect.right > 0 &&
      rect.left < window.innerWidth
    ) {
      onTriggerVisible(trigger);
    }
  }

  function collectTriggers() {
    var triggers = qsa(document, SEL.trigger);
    if (triggers.length) return triggers;

    log('no [data-slider="trigger"] found, using slider root as trigger');
    var roots = [];
    qsa(document, SEL.swiper).forEach(function (el) {
      var root = findRoot(el) || el.parentElement;
      if (root && roots.indexOf(root) === -1) roots.push(root);
    });
    return roots;
  }

  function registerAll() {
    var roots = [];
    qsa(document, SEL.swiper).forEach(function (el) {
      var root = findRoot(el) || el.parentElement;
      if (!root || roots.indexOf(root) !== -1) return;
      roots.push(root);
      decorate(root);
      if (!initialized.has(root)) setEnabled(root, false);
    });
    log("registered sliders", roots.length);
  }

  function bindAll() {
    registerAll();

    var triggers = collectTriggers();
    if (!("IntersectionObserver" in window)) {
      triggers.forEach(onTriggerVisible);
      return;
    }

    if (!io) {
      io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            collectTriggers().forEach(function (trigger) {
              if (observeSize(trigger) === entry.target || trigger === entry.target) {
                onTriggerVisible(trigger);
              }
            });
          });
        },
        { root: null, rootMargin: "0px 0px -5% 0px", threshold: 0.01 }
      );
    }

    triggers.forEach(bindTrigger);
    log("bound triggers", triggers.length);
  }

  function onApartReady(event) {
    var section = (event && event.detail && event.detail.section) || event.target;
    if (!section) return;
    var root =
      (section.matches && section.matches(".u-section.is-apart") && section) ||
      section.closest(".u-section.is-apart") ||
      section;
    initSlider(root);
  }

  function onApartLock(event) {
    var section = (event && event.detail && event.detail.section) || event.target;
    if (!section) return;
    var root =
      (section.matches && section.matches(".u-section.is-apart") && section) ||
      section.closest(".u-section.is-apart") ||
      section;
    lockSlider(root);
  }

  document.addEventListener("apart:ready", onApartReady);
  document.addEventListener("apart:lock", onApartLock);

  function boot() {
    bindAll();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  window.addEventListener("load", bindAll);

  if ("MutationObserver" in window) {
    var moTimer = null;
    new MutationObserver(function () {
      if (moTimer) window.clearTimeout(moTimer);
      moTimer = window.setTimeout(bindAll, 100);
    }).observe(document.documentElement, { childList: true, subtree: true });
  }

  window.DataSlider = {
    init: function (target) {
      if (typeof target === "string") target = qs(document, target);
      if (!target) return null;
      if (target.matches && target.matches(SEL.swiper)) {
        target = findRoot(target) || target.parentElement;
      }
      return initSlider(target);
    },
    get: function (target) {
      if (typeof target === "string") target = qs(document, target);
      if (!target) return null;
      if (target.matches && target.matches(SEL.swiper)) {
        return swiperByEl.get(target) || null;
      }
      var swiperEl = getSwiperEl(target);
      return swiperEl && swiperByEl.get(swiperEl) || null;
    },
    destroy: function (target) {
      if (typeof target === "string") target = qs(document, target);
      if (!target) return;
      lockSlider(target);
    },
    lock: function (target) {
      if (typeof target === "string") target = qs(document, target);
      if (!target) return;
      lockSlider(target);
    },
    debug: function (value) {
      DEBUG = value !== false;
    },
  };
})();
