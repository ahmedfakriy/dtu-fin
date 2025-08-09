const CACHE_NAME = "dtu-cache-v1";
const urlsToCache = [
  "/",                 // الصفحة الرئيسية
  "/index.html",       // ملف الـ HTML
  "/styles.css",       // ملف الـ CSS
  "/script.js",        // ملف الـ JS
  "/icons/icon-192.png",
  "/icons/icon-512.png"
];

// أثناء التثبيت: نخزن الملفات المهمة في الكاش
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// تفعيل الـ Service Worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
  console.log("Service Worker Activated");
});

// جلب الملفات من الكاش أو من الإنترنت
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
