'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f9fdfced741e97cedcd042a8c7e635c8",
"assets/assets/background.jpg": "b16d7cbf923a37d4529b61b425842601",
"assets/assets/fonts/sf-pro-display.ttf": "d09549c1ab4a5947a007561521e45da3",
"assets/assets/icons/BottomIcons.ttf": "15cb770618a2faf9d0ea4bcff2a94404",
"assets/assets/icons/Cart.ttf": "66c46ce686770dd65f1c2543925159f7",
"assets/assets/icons/no-image.svg": "03f89b96d3ae68a991b2277af79a3197",
"assets/assets/images/ayam.png": "0df7e35fd23247859e298974b3aadb4e",
"assets/assets/images/bg-1024.png": "3a5c2125ae65df03189cf1cd159778b6",
"assets/assets/images/daftar-512.png": "0773329a64ebc6f39127168ca0c85789",
"assets/assets/images/icon_app.png": "c42ddcd87595858a12ee7c7f32ffae68",
"assets/assets/images/login-512.png": "2faff496bcd1f874c995591aa89b907e",
"assets/assets/images/login512.png": "a2bfb35c1578e2b077eb06f54785bd21",
"assets/assets/images/logo.png": "77b92004d7c6f805f4d68a0f31032006",
"assets/assets/images/menu.png": "3fab935b1bc3b3f188dd6d306142a490",
"assets/assets/images/minus.png": "56a640b3af7763d25edcc00c7aa0782a",
"assets/assets/images/noto_pot-of-food.png": "4c933b03afdc25ab90e98f1ca147bb8d",
"assets/assets/images/onboarding-512.png": "bf24f16f3aedf5a09ed17df3780ef94f",
"assets/assets/images/onboarding_banner.png": "f2760ec9145c083b1f236ed44f01b7d3",
"assets/assets/images/onboarding_image.png": "47ba6455ac3b82431667d60af8cabedd",
"assets/assets/images/patra-logo-512.png": "5f0fb8d06bdaed9cdcedb7f6bcd22e65",
"assets/assets/images/patra-spalsh-logo-512.png": "6eeadf5e3452f3d13f433630b40a346e",
"assets/assets/images/plus.png": "3cb1057395fdc145d5948f224a025d4c",
"assets/assets/images/ramen.png": "608fa45b07a99e8924e218c5acc7d554",
"assets/assets/images/sample_images/sample_1.png": "608fa45b07a99e8924e218c5acc7d554",
"assets/assets/images/sample_images/sample_2.png": "0df7e35fd23247859e298974b3aadb4e",
"assets/assets/images/sample_images/sample_4.png": "3fab935b1bc3b3f188dd6d306142a490",
"assets/assets/images/sample_images/sample_5.png": "fb4746ba87de20321f3333004789ff22",
"assets/assets/images/sample_images/sample_6.png": "2b735313dfcf6019a4c2c7b800d277bf",
"assets/assets/images/sample_images/sample_7.png": "8c6df6cdf04f157263fc178875335080",
"assets/assets/images/selected_product.png": "1d1e4804ab79db8be01d075a875c3c8c",
"assets/assets/images/signin_banner.png": "b6e2b47a452b5dce74869f715d9494d6",
"assets/assets/images/signup_banner.png": "a3faf538de326d05951ffb11c1683f4f",
"assets/assets/images/splash_background.png": "502a16442669749a9f20116176a86976",
"assets/FontManifest.json": "78391b8db3591744175635dd06a7aa8a",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "607f0529e4c3ad9a6babdf436ffec559",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "4047e25bd957dbb3428adb9251740f02",
"/": "4047e25bd957dbb3428adb9251740f02",
"main.dart.js": "aa796ac08c6b6e4efdc2b5589899541e",
"manifest.json": "62aa2b9a9e4a819407d18bee1197b359",
"version.json": "2cfb5c4112619b0be53719f009be4dcd"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
