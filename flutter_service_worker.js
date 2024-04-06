'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "73e97633b06596a0531cc83b0472d017",
"assets/AssetManifest.bin.json": "d7d202f54c7c23ce5ef99fe9b56b4d87",
"assets/AssetManifest.json": "946f94ec03055a3d1e7da7e55462e26c",
"assets/FontManifest.json": "7ccf83ad371194f384f9733fdfc7c01c",
"assets/fonts/MaterialIcons-Regular.otf": "6ebf7afde89003c0c545f5bb5432e740",
"assets/fonts/RainlyRegular-OVl7O.otf": "bf5bb68c19907c7f1a4aeaa9ce466ad4",
"assets/images/1.png": "d6ff0cd67198879c4b3141b4ea143501",
"assets/images/10.png": "698ac44354e645a885a89777b0889a6e",
"assets/images/11.png": "0dc35a1a36a89bb0dbd91b69776977c5",
"assets/images/12.png": "d1224f4a3443453529fd6cc8d58f613b",
"assets/images/2.png": "7084f4d5f3c369c6b54686582ade4dac",
"assets/images/3.png": "e433224bc7ab3831e4138e0ea47526e9",
"assets/images/4.png": "cae31cb419c8998fabab65db2b6ac68d",
"assets/images/5.png": "a43a911c7bcef2115f78c72cffa4afcc",
"assets/images/6.png": "fa39e47d454133c60f03a5c007164455",
"assets/images/7.png": "07b21f55f20f610f92504bc1db170755",
"assets/images/8.png": "94e8a0afad8fe9c08d10464fc42be6b9",
"assets/images/9.png": "d9dcb4c0b38134747edc38afe3255177",
"assets/images/animation.json": "25558524c0f558619ebb30bd1f0db9c7",
"assets/images/developer_team.jpg": "864b8c7809fff4c205613221a1b15c06",
"assets/images/girl.jpg": "c76a9f16081123a9dc8b2cf447e59422",
"assets/images/google_play_download.png": "1e91d02cf5a902f38f2923c006d79281",
"assets/images/Google_Play_logo.png": "513027c24555bfd374da024d2acfc232",
"assets/images/inspection.jpg": "a14ffbd5565e3d20a51867933efc6798",
"assets/images/logo.png": "6a637d7a0e9faabe0c90452aefb5f226",
"assets/images/look_ahead.jpg": "28f1e7790f0b47b857c75955154004f3",
"assets/images/mobile2.png": "67f1bbba9ccb74e6668656205f88d4f8",
"assets/images/mockuper.png": "a320493262d10f0b31965e4c11032281",
"assets/images/Network-Technology.jpg": "db838212a51249d21c0ad392af912bbb",
"assets/images/qrcode.png": "704cbcbc13f9941384a6999a8cb6a7c3",
"assets/NOTICES": "091a964a356f3a1d10c17bfe14f623a6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "e3002b9a85a508f2edb61defb1b2db24",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e9540663c275f2668a452aa249fc6980",
"/": "e9540663c275f2668a452aa249fc6980",
"main.dart.js": "6b8226fad14bd0e521d2b661f0574f01",
"manifest.json": "55009abfb3ec25fb0643c546fb52e217",
"version.json": "d4765e3f0c3916a7122487eb07043c7d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
