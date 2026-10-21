/* ================================================================
   Moleqyn – Service Worker (sw.js)
   Provides offline caching for school computer labs & slow networks
================================================================ */

const CACHE_NAME = 'moleqyn-cache-v4';

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

  // Network-first navigation handler: try network first; on network failure, return precached HTML
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((networkResponse) => {
          // Cache only valid successful (200 OK) HTML page responses
          if (networkResponse && networkResponse.ok && networkResponse.status === 200) {
            const contentType = networkResponse.headers ? (networkResponse.headers.get('content-type') || '') : '';
            if (contentType.includes('text/html') || !contentType) {
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(req, responseToCache);
              });
            }
          }
          // Return non-OK responses (404, 500, etc.) directly without treating them as network failures
          return networkResponse;
        })
        .catch(() => {
          // Network failure (offline) – attempt offline cache resolution
          return caches.match(req).then((cachedResponse) => {
            if (cachedResponse) return cachedResponse;

            // Resolve relative to service worker scope while preserving nested paths
            const reqUrl = new URL(req.url);
            const scopeUrl = new URL(self.registration.scope);

            let relPath = reqUrl.pathname.startsWith(scopeUrl.pathname)
              ? reqUrl.pathname.slice(scopeUrl.pathname.length)
              : reqUrl.pathname.replace(/^\/+/, '');

            // Strip trailing slashes to handle paths like '/simulators/' properly
            const cleanPath = relPath.replace(/\/+$/, '');

            // Build prioritized list of candidate URLs to match in cache
            const candidates = [];
            if (!cleanPath) {
              // Root navigation
              candidates.push(new URL('index.html', self.registration.scope).toString());
              candidates.push(new URL('./', self.registration.scope).toString());
            } else if (cleanPath.endsWith('.html')) {
              // Explicit .html path (preserving nested folders)
              candidates.push(new URL(cleanPath, self.registration.scope).toString());
            } else if (!cleanPath.includes('.')) {
              // Clean extensionless path: first try path + '.html', then path + '/index.html'
              candidates.push(new URL(cleanPath + '.html', self.registration.scope).toString());
              candidates.push(new URL(cleanPath + '/index.html', self.registration.scope).toString());
            } else {
              // Other extension: try exact cleanPath
              candidates.push(new URL(cleanPath, self.registration.scope).toString());
            }

            // Always ensure root index.html is the final fallback
            const rootFallback = new URL('index.html', self.registration.scope).toString();
            if (!candidates.includes(rootFallback)) {
              candidates.push(rootFallback);
            }

            // Test candidate URLs sequentially against cache
            return candidates.reduce((promise, candidate) => {
              return promise.then((match) => {
                if (match) return match;
                return caches.match(candidate);
              });
            }, Promise.resolve(null));
          });
        })
    );
    return;
  }

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
