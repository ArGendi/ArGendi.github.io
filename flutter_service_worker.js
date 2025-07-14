'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6163f83367e0dfff753b75e1d6f30212",
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
"assets/fonts/MaterialIcons-Regular.otf": "0c802aca8aa736f6a75a8ebc0057a87b",
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
"assets/NOTICES": "30361cb4412dd18d827f7ed5f183e957",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "e3002b9a85a508f2edb61defb1b2db24",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "d35082bbca9cd05d3db79c2759b9a835",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5a2cdbaaec12c8d2adb7a195520d6154",
"/": "5a2cdbaaec12c8d2adb7a195520d6154",
"main.dart.js": "c6d2af2f50a75e9e0c0df3d1269a297d",
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
