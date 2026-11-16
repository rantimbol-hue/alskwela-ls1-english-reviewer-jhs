/* ALSKwela JHS LS1 English PWA — v4 balanced-option update. All 120 questions are embedded in index.html. */
const CACHE='alskwela-ae2027-ls1english-v4-options-20261116';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
 event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('alskwela-ae2027-ls1english-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url);
 if(url.origin!==self.location.origin || !url.pathname.startsWith(new URL(self.registration.scope).pathname))return;
 // Cache-first: keep 120-question reviewer usable when the phone is offline.
 event.respondWith(caches.match(event.request,{ignoreSearch:true}).then(hit=>hit || fetch(event.request).then(response=>{
   if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));}
   return response;
 }).catch(()=>event.request.mode==='navigate'?caches.match('./index.html'):Response.error())));
});
