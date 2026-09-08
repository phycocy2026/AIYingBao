const CACHE = 'aiyingbao-pwa-v1';
const CORE = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE))));
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request).then(resp => {
    if (e.request.method === 'GET' && new URL(e.request.url).origin === location.origin) {
      const copy = resp.clone(); caches.open(CACHE).then(c => c.put(e.request, copy));
    }
    return resp;
  }).catch(() => caches.match('./index.html'))));
});
