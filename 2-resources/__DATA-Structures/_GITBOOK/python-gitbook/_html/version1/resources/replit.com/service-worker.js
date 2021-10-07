/**
 * This is a placeholder service worker to make Replit appear as "installable" in Chrome.
 * In the future this could be used to cache assets, fetch notifications, or alert they should refresh.
 *
 * Background about SW: https://developers.google.com/web/fundamentals/primers/service-workers
 * Offline fallback page: https://web.dev/offline-fallback-page/
 */

// Incrementing OFFLINE_VERSION will kick off the install event and force
// previously cached resources to be updated from the network.
// This variable is intentionally declared and unused.
// eslint-disable-next-line no-unused-vars
const OFFLINE_VERSION = 1;
const OFFLINE_CACHE_KEY = 'offline';
const OFFLINE_URL = '/public/offline.html';

self.addEventListener('install', function (event) {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(OFFLINE_CACHE_KEY);
      // Setting {cache: 'reload'} in the new request will ensure that the
      // response isn't fulfilled from the HTTP cache; i.e., it will be from
      // the network.
      await cache.add(
        new Request(OFFLINE_URL, {
          cache: 'reload',
        })
      );
    })()
  );
  // Force the waiting service worker to become the active service worker.
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    (async () => {
      // Enable navigation preload if it's supported.
      // See https://developers.google.com/web/updates/2017/02/navigation-preload
      if ('navigationPreload' in self.registration) {
        await self.registration.navigationPreload.enable();
      }
    })()
  );

  // Tell the active service worker to take control of the page immediately.
  self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  // We only want to call event.respondWith() if this is a navigation request
  // for an HTML page.
  if (event.request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          // First, try to use the navigation preload response if it's supported.
          const preloadResponse = await event.preloadResponse;
          if (preloadResponse) {
            return preloadResponse;
          }

          // Always try the network first.
          const networkResponse = await fetch(event.request);
          return networkResponse;
        } catch (error) {
          const cache = await caches.open(OFFLINE_CACHE_KEY);
          const cachedResponse = await cache.match(OFFLINE_URL);
          return cachedResponse;
        }
      })()
    );
  }
});
