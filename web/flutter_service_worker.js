'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d663d31c119dbb76ecb45444efd0d9d3",
"version.json": "014ea6bcca449b013075fb3581415911",
"index.html": "d83b08b6e733fa465f5f296b062d2d77",
"/": "d83b08b6e733fa465f5f296b062d2d77",
"main.dart.js": "2a287e4302985a6db6ffaa89990ffbd4",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c613bc6cdaa1234d4141f157ed74ffca",
"assets/AssetManifest.json": "a8b463e5f464b4135f5f2e92ddfed5b0",
"assets/NOTICES": "dc17cbb5d1aa1340a921f11b559474ad",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "78a2f131453a32e2e8eb80bceb90adff",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ea7e5486d7d231b3bb672b6b957574e3",
"assets/fonts/MaterialIcons-Regular.otf": "15273265c5fb4d0644a275ec8b53c751",
"assets/assets/background/languange.svg": "8d707efdce3934e7413ce975573c9ad1",
"assets/assets/logox.png": "9ec236e17ca6bccf6090e4c9f37d20b7",
"assets/assets/image/bg_gradient2.svg": "7ad36c2dfbf63d9181bb2105121a1437",
"assets/assets/image/bg_gradient3.svg": "5fbba597770c5f3448f0bde372b9bcd2",
"assets/assets/image/bg_gradient1.svg": "e13fdee0bf22eb81aa18e5e6b86df681",
"assets/assets/image/fire.png": "94c825042d36dea8cacc6bb014e9d2fb",
"assets/assets/image/banner.jpg": "4c518a765e44dcd553b503f10c3c63a5",
"assets/assets/image/recom2.jpg": "66adfd8e7799108bdee9dc399233a958",
"assets/assets/image/recom1.jpg": "80b4a1b72e8b5fa86e132713fefd6db7",
"assets/assets/image/credit_card.png": "fd779287835d48742f0dc9afb9523602",
"assets/assets/image/bg_gradient3.png": "b66978f85fc3ebb8a88cdc68eca3a963",
"assets/assets/image/wallet.svg": "c379e1c065238ea6638004f5131a339d",
"assets/assets/image/crown1.png": "bfb36add5163caac0a0c855a4cbaad86",
"assets/assets/image/grandienthome.png": "fea654a8a899cf36accec0d115dbe958",
"assets/assets/image/line-01.svg": "eb983609f9416e55a6f69c4290633875",
"assets/assets/image/userlotto.png": "722dadd4cc3136b28047f6150fe77d5e",
"assets/assets/image/logo.png": "6289e3d94198f70659c81ba100fb9e79",
"assets/assets/image/merchant.webp": "9580da46e9dfe04cf6aa9cd370a4d34d",
"assets/assets/image/credit-card.png": "3d35f6e135b8b18d16581da4edc21fa2",
"assets/assets/image/moreop1.jpg": "b2afa59cf98937d83830985b5b3c5fea",
"assets/assets/image/moreop3.jpg": "7d1c15d073f3db4de063dfbc48d30d1a",
"assets/assets/image/moreop2.jpg": "e7fa9988450f01d85b34aa8678280150",
"assets/assets/image/2.png": "a2fc8076172e687549b3ba0359a285ba",
"assets/assets/image/logo_color.png": "3d9c9afb6dc5f498cd4087348392ebcc",
"assets/assets/image/crown.png": "2ebb3158b114382834d258bc45d565c4",
"assets/assets/image/3.png": "ff02b69234e51320c29ac34e92fd64c2",
"assets/assets/image/package_bg.png": "c32ceaa3e0c4dfa4dedf996b1b8004d8",
"assets/assets/image/1.png": "f92e10a7c7537d0ffaf77dd813f0349e",
"assets/assets/icon/ic_wetv.png": "c170eafe14ada117408314d43d14f574",
"assets/assets/icon/dialog_success.svg": "100b6ab4a99e7ab680eb101507d7d962",
"assets/assets/icon/ic_profile.svg": "d940a681fd80c2add691b2a7dbb103b9",
"assets/assets/icon/recurbill_circle.png": "130c70f801e8b413a729d8ac5878208b",
"assets/assets/icon/dialog_warning_green.svg": "eebbce082ebc48291226208ce416d6df",
"assets/assets/icon/ic_language.svg": "8d707efdce3934e7413ce975573c9ad1",
"assets/assets/icon/ic_crown.svg": "1dd736a7ad0663b2c0676c1a5f53e1c6",
"assets/assets/icon/dialog_warning_red.svg": "02c30b7e4bfb4461169d3ba739e47be1",
"assets/assets/icon/ic_wallet.svg": "14222e863113e84cf5e6e5cc961e7033",
"assets/assets/icon/calendar2.svg": "86bff37406c172afe99506fedc61087f",
"assets/assets/icon/his.svg": "941fe618633ed11755e17368077755ae",
"assets/assets/icon/time2.svg": "be6efd96eca84fee4cc7008a18940144",
"assets/assets/translations/lo.json": "067ebaff521c690ba707d4dd43234fb1",
"assets/assets/translations/en-US.json": "657ab3db14f49ac85ea86449ad8d53f8",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
