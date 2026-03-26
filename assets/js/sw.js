self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(async response => {
        if (response) return response;
  
        try {
          const fetchResponse = await fetch(event.request);
          const cache = await caches.open('app-cache-v1');
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        } catch {
          return response;
        }
      })
    );
  });