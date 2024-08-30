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
"assets/AssetManifest.bin": "6163f83367e0dfff753b75e1d6f30212",
"assets/AssetManifest.bin.json": "f7f91ebe095fa8510fe06918176e56a4",
"assets/AssetManifest.json": "cb402a73e8566385ab3e590f3bea1520",
"assets/assets/animations/empty_list.json": "becaa01bf552f9cad36e0511058dd7d7",
"assets/assets/animations/request.json": "36d8692e7661f8d0044a465be8b2cf36",
"assets/assets/images/analysis.jpg": "c17239e1eac722d69a3f9c90f16a169b",
"assets/assets/images/bw.jpg": "fe4274263271409f91e97832c17c07d2",
"assets/assets/images/b_w.jpg": "66938cc36cbd0583028ccd19db7c7e91",
"assets/assets/images/coins.jpg": "221e085e991853a10e69229fa5cb4953",
"assets/assets/images/deafult.jpeg": "a53adc54a158efe0bee947d2ac9fce84",
"assets/assets/images/logo.png": "dae1c232d142a1390ffc7b2f7afdd9c2",
"assets/assets/images/products.jpg": "db59495bf2a26906ffbe3c055b738709",
"assets/assets/images/sides.jpeg": "065c170391c39a6c8c7d0a1b6b439016",
"assets/FontManifest.json": "7ccf83ad371194f384f9733fdfc7c01c",
"assets/fonts/MaterialIcons-Regular.otf": "93f907811b8b01f77d84f36b0394dc47",
"assets/fonts/RainlyRegular-OVl7O.otf": "bf5bb68c19907c7f1a4aeaa9ce466ad4",
"assets/images/animation.json": "25558524c0f558619ebb30bd1f0db9c7",
"assets/images/austria.jpg": "7cea74847f7af8d9abb155aa66793454",
"assets/images/developer_team.jpg": "864b8c7809fff4c205613221a1b15c06",
"assets/images/developer_team_mobile.jpg": "f1a0afd74ed7efd5d7c5f9f3b50b7184",
"assets/images/egypt.jpg": "958aadce633a9c16bd22e8a5d7436dd9",
"assets/images/egypt_mobile.jpg": "ab90848b408c8eb84fbd9058b3e1b9f0",
"assets/images/FRANKFURT.png": "c6e3f8fefd207c8305ec6eeb85d0a61d",
"assets/images/FRANKFURT_mobile.png": "6ba2623030ead72e776811b56cb4bbe0",
"assets/images/germany.jpg": "84f8d38e6456f88828a77b2c49d2f56e",
"assets/images/germany_mobile.jpg": "33785533302a4f7516f6b151bf59cffd",
"assets/images/girl.jpg": "c76a9f16081123a9dc8b2cf447e59422",
"assets/images/girl_mobile.jpg": "cff15afcdd707aa4f2e830cf35b92e86",
"assets/images/inspection.jpg": "a14ffbd5565e3d20a51867933efc6798",
"assets/images/inspection_mobile.jpg": "7639742e6b6ecaf2baff20e6be98fd4d",
"assets/images/look_ahead.jpg": "28f1e7790f0b47b857c75955154004f3",
"assets/images/look_ahead_mobile.jpg": "d3353e778da72b12ec87e59df629612d",
"assets/images/Network-Technology.jpg": "db838212a51249d21c0ad392af912bbb",
"assets/images/Network-Technology_mobile.jpg": "1d9166aae58f787ba043bb4e89e8ca7f",
"assets/images/p1_mockup.png": "c7fd91431d60bc22704ff19cf0cec3e8",
"assets/images/p1_mockup_mobile.png": "cdb841bb641904a5fdf3d715ffdb13a0",
"assets/images/p3_mockup.png": "44efcd5ae72bca626f7fe778e61d1392",
"assets/images/p3_mockup_mobile.png": "a1c165dbb8172f5b533732c9aaadbf9f",
"assets/images/sport_mockup.png": "92bf8746be60e653f0f58b3672983572",
"assets/images/sport_mockup_mobile.png": "7fa0d61e7f233d726718f97ccbb9c81a",
"assets/NOTICES": "1f127eefda878977988706908c4289d8",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "e3002b9a85a508f2edb61defb1b2db24",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "512f444987aa455ce12d41a4642429ce",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f5c6bbd72d9b353b1f4b5d4f7012024c",
"/": "f5c6bbd72d9b353b1f4b5d4f7012024c",
"main.dart.js": "72605bb773e551503b094c4fd0ae05ac",
"manifest.json": "55009abfb3ec25fb0643c546fb52e217",
"version.json": "d4765e3f0c3916a7122487eb07043c7d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
