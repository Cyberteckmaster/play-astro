// Basic Service Worker for caching static assets
const CACHE_NAME = 'cyberteckmaster-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/fonts/inter-var.woff2',
  '/images/hero-background.webp',
  '/images/cybersecurity-training.webp',
  '/images/zero-trust-security.webp',
  '/images/cybersecurity-consulting.webp',
  '/images/cyberteckmaster-og-image.webp',
  '/images/cyberteckmaster-hero.webp',
  '/images/logo.webp',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});