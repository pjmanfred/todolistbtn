if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const c=e=>i(e,o),f={module:{uri:o},exports:t,require:c};s[o]=Promise.all(r.map((e=>f[e]||c(e)))).then((e=>(n(...e),t)))}}define(["./workbox-b3f8ee23"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"imagen_icono.png",revision:"cca07605c19a58a08f660783ff782f00"},{url:"index.html",revision:"6524883a2cbf87ff947480e974e07ba4"},{url:"manifest.json",revision:"71d9d8a7bdf91ec735be2a44f44faf76"},{url:"scrips.js/hola.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"scrips.js/sp.js",revision:"5efa283b286878e337db55b08e48845f"},{url:"style.css/estilo.css",revision:"908da097025f9dd4c00c4abc80727bae"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
