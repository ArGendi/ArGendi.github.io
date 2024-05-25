'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"assets/AssetManifest.bin": "67e65b42fe55056b3d949f15fb01f9af",
"assets/AssetManifest.bin.json": "933da27f670427fdfbab0eba6228e578",
"assets/AssetManifest.json": "b85f0425058c46d2a58ae1e8c3bfb0d7",
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
"assets/images/austria.jpg": "7cea74847f7af8d9abb155aa66793454",
"assets/images/developer_team.jpg": "864b8c7809fff4c205613221a1b15c06",
"assets/images/egypt.jpg": "958aadce633a9c16bd22e8a5d7436dd9",
"assets/images/FRANKFURT.png": "c6e3f8fefd207c8305ec6eeb85d0a61d",
"assets/images/germany.jpg": "84f8d38e6456f88828a77b2c49d2f56e",
"assets/images/girl.jpg": "c76a9f16081123a9dc8b2cf447e59422",
"assets/images/google_play_download.png": "1e91d02cf5a902f38f2923c006d79281",
"assets/images/Google_Play_logo.png": "513027c24555bfd374da024d2acfc232",
"assets/images/inspection.jpg": "a14ffbd5565e3d20a51867933efc6798",
"assets/images/logo.png": "6a637d7a0e9faabe0c90452aefb5f226",
"assets/images/look_ahead.jpg": "28f1e7790f0b47b857c75955154004f3",
"assets/images/mobile2.png": "67f1bbba9ccb74e6668656205f88d4f8",
"assets/images/mockuper.png": "a320493262d10f0b31965e4c11032281",
"assets/images/Network-Technology.jpg": "db838212a51249d21c0ad392af912bbb",
"assets/images/p1_mockup.png": "c7fd91431d60bc22704ff19cf0cec3e8",
"assets/images/p2_mockup.png": "4129d9084e28f9e078ef2bb2840b63e5",
"assets/images/p3_mockup.png": "44efcd5ae72bca626f7fe778e61d1392",
"assets/images/qrcode.png": "704cbcbc13f9941384a6999a8cb6a7c3",
"assets/images/sport_mockup.png": "92bf8746be60e653f0f58b3672983572",
"assets/NOTICES": "6aaca239a2e35a1d2bbacbb2bd98c6ba",
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
"index.html": "ad85d42f355fda7359afdadc785bb784",
"/": "ad85d42f355fda7359afdadc785bb784",
"main.dart.js": "1669264f194a53dc9c7ff880ca6d0b62",
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
