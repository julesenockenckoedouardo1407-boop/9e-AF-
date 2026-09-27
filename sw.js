const CACHE="nine-af-v2";
const FILES=["./","./index.html","./style.css","./app.js","./manifest.json","./icon-192.png","./icon-512.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{
 const copy=resp.clone(); caches.open(CACHE).then(c=>c.put(e.request,copy)); return resp;
}).catch(()=>caches.match("./index.html")))));
