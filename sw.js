if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let t={};const l=e=>i(e,o),d={module:{uri:o},exports:t,require:l};n[o]=Promise.all(s.map((e=>d[e]||l(e)))).then((e=>(r(...e),t)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CTnye8_r.js",revision:null},{url:"assets/index-D1tI4GHa.css",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"index.html",revision:"17d88c7f85857b43f35a427204130c78"},{url:"icon-192x192.png",revision:"46b122d57b64e7bea697953d403101f2"},{url:"icon-512x512.png",revision:"3d3823b37fbbc497b788b85bb6a99022"},{url:"manifest.webmanifest",revision:"32bf4cc167bd18f43df61a47c79223bd"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
