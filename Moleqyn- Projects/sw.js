/* ================================================================
   Moleqyn – Service Worker (sw.js)
   Provides offline caching for school computer labs & slow networks
================================================================ */

const CACHE_NAME = 'moleqyn-cache-v1';

const STATIC_ASSETS = [
  './',
  'index.html',
  'simulators.html',
  'learn.html',
  'board-prep.html',
  'experiments.html',
  'periodic-table.html',
  'reaction.html',
  'nomenclature.html',
  'junior.html',
  'ai-tutor.html',
  'vr-lab.html',
  'quiz.html',
  'dashboard.html',
  'resources.html',
  'login.html',
  'about.html',
  'contact.html',
  'sim_atomverse.html',
  'sim_bonding.html',
  'sim_titration.html',
  'sim_gaslaws.html',
  'sim_electro.html',
  'sim_particle.html',
  'sim_equilibrium.html',
  'sim_flametest.html',
  'sim_calorimetry.html',
  'sim_halflife.html',
  'sim_molecules.html',
  'sim_rutherford.html',
  'css/style.css',
  'css/pages.css',
  'js/shared-nav.js',
  'js/main.js',
  'js/matter-lab.js',
  'favicon.svg',
  'manifest.json'
];

// Install: Cache core application shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('[SW] Cache addAll skipped non-critical files:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate: Clean up old cache versions
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Stale-While-Revalidate strategy
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Only handle HTTP/HTTPS GET requests
  if (req.method !== 'GET') return;

  event.respondWith(
    caches.match(req).then((cachedResponse) => {
      // Fetch fresh from network in background
      const fetchPromise = fetch(req)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(req, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // If offline and not in cache, fallback
          return cachedResponse;
        });

      return cachedResponse || fetchPromise;
    })
  );
});
