// Replaces the old Munchmark app's offline helper at this address, so pages here load fresh from the network.
// It deletes only the old app's cached files, never the saved food log (that lives in IndexedDB, untouched).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('macrolens-')).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
