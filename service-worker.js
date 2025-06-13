self.addEventListener('install', event => {
  console.log('Installing service worker');
});

// Mengontrol fetch event
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request).catch(() => {
    return new Response('Offline!', {status: 503,statusText:'Service Unavailable'})
  }));
});