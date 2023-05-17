import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute, Route } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

// Do precaching
precacheAndRoute(self.__WB_MANIFEST);

// Handle images:
const imageRoute = new Route(({ request }) => {
  return request.destination === 'image'
}, new StaleWhileRevalidate({
  cacheName: 'images'
}));

// Handle resto-data:
const restoDataRoute = new Route(({ url }) => {
  return url.origin === 'https://restaurant-api.dicoding.dev';
}, new StaleWhileRevalidate({
  cacheName: 'resto-data'
}));

// Register routes
registerRoute(imageRoute);
registerRoute(restoDataRoute);