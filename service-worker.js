const CACHE_NAME = "moje-rostliny-pwa-v91";
const SHELL = ["./","./index.html","./styles.css","./app.js","./manifest.webmanifest","./assets/app-logo.png","./assets/app-icon-192.png","./assets/app-icon-512.png","./assets/category-icons-final/icon-01.png","./assets/category-icons-final/icon-02.png","./assets/category-icons-final/icon-03.png","./assets/category-icons-final/icon-04.png","./assets/category-icons-final/icon-05.png","./assets/category-icons-final/icon-06.png","./assets/category-icons-final/icon-07.png","./assets/category-icons-final/icon-08.png","./assets/category-icons-final/icon-09.png","./assets/category-icons-final/icon-10.png","./assets/category-icons-final/icon-11.png","./assets/category-icons-final/icon-12.png","./assets/category-icons-final/icon-13.png","./assets/category-icons-final/icon-14.png","./assets/category-icons-final/icon-15.png","./assets/category-icons-final/icon-16.png","./assets/category-icons-final/icon-17.png","./assets/category-icons-final/icon-18.png","./assets/category-icons-final/icon-19.png","./assets/category-icons-final/icon-20.png","./assets/category-icons-final/icon-21.png","./assets/category-icons-final/icon-22.png","./assets/category-icons-final/icon-23.png","./assets/category-icons-final/icon-24.png","./assets/category-icons-final/icon-25.png","./assets/category-icons-final/icon-26.png","./assets/category-icons-final/icon-27.png","./assets/category-icons-final/icon-28.png","./assets/category-icons-final/icon-29.png","./assets/category-icons-final/icon-30.png","./assets/category-icons-final/icon-31.png","./assets/category-icons-final/icon-32.png","./assets/category-icons-final/icon-33.png","./assets/category-icons-final/icon-34.png","./assets/category-icons-final/icon-35.png","./assets/category-icons-final/icon-36.png","./assets/category-icons-final/icon-37.png","./assets/category-icons-final/icon-38.png","./assets/category-icons-final/icon-39.png","./assets/category-icons-final/icon-40.png","./assets/category-icons-final/icon-41.png","./assets/category-icons-final/icon-42.png","./assets/category-icons-final/icon-43.png","./assets/category-icons-final/icon-44.png","./assets/category-icons-final/icon-45.png","./assets/category-icons-final/icon-46.png","./assets/category-icons-final/icon-47.png","./assets/category-icons-final/icon-48.png","./assets/category-icons-final/icon-49.png","./assets/category-icons-final/icon-50.png","./assets/category-icons-final/icon-51.png","./assets/category-icons-final/icon-52.png","./assets/category-icons-final/icon-53.png","./assets/category-icons-final/icon-54.png","./assets/category-icons-final/icon-55.png","./assets/category-icons-final/icon-56.png","./assets/category-icons-final/icon-57.png","./assets/category-icons-final/icon-58.png","./assets/category-icons-final/icon-59.png","./assets/category-icons-final/icon-60.png","./assets/category-icons-final/icon-61.png","./assets/category-icons-final/icon-62.png","./assets/category-icons-final/icon-63.png","./assets/category-icons-final/icon-64.png","./assets/category-icons-final/icon-65.png","./assets/category-icons-final/icon-66.png","./assets/category-icons-final/icon-67.png","./assets/category-icons-final/icon-68.png","./assets/category-icons-final/icon-69.png","./assets/category-icons-final/icon-70.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
    const copy = response.clone();
    caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)).catch(() => {});
    return response;
  }).catch(() => caches.match("./index.html"))));
});







































































