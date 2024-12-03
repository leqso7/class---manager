const cacheName = 'site-cache-v1';
const filesToCache = [
  '/gogo/', // Root გვერდი რეპოზიტორიისთვის
  '/gogo/index.html', // მთავარი გვერდი
  '/gogo/icon-192x192.png', // აიკონები
  '/gogo/icon-512x512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName)
      .then((cache) => {
        console.log('Caching all files');
        return cache.addAll(filesToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
