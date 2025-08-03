const CACHE_NAME = 'mastermind-v1';
// A list of all the files and assets your app needs to work offline.
const urlsToCache = [
  '/',
  '/index.html',
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&family=VT323&family=Press+Start+2P&display=swap',
  'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/tone/14.7.77/Tone.js'
];

// The 'install' event is fired when the service worker is first installed.
self.addEventListener('install', event => {
  // We wait until the installation is complete.
  event.waitUntil(
    // Open the cache.
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        // Add all the specified URLs to the cache.
        return cache.addAll(urlsToCache);
      })
  );
});

// The 'fetch' event is fired every time the app requests a resource (like a page, script, or image).
self.addEventListener('fetch', event => {
  event.respondWith(
    // Check if the requested resource is in our cache.
    caches.match(event.request)
      .then(response => {
        // If we have it in the cache, return the cached version.
        if (response) {
          return response;
        }
        // If it's not in the cache, try to get it from the network.
        return fetch(event.request);
      }
    )
  );
});