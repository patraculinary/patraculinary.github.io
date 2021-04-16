'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/images/signin_banner.png": "b6e2b47a452b5dce74869f715d9494d6",
"assets/assets/images/patra-logo-512.png": "5f0fb8d06bdaed9cdcedb7f6bcd22e65",
"assets/assets/images/onboarding-512.png": "bf24f16f3aedf5a09ed17df3780ef94f",
"assets/assets/images/login512.png": "a2bfb35c1578e2b077eb06f54785bd21",
"assets/assets/images/logo.png": "77b92004d7c6f805f4d68a0f31032006",
"assets/assets/images/onboarding_image.png": "47ba6455ac3b82431667d60af8cabedd",
"assets/assets/images/onboarding_banner.png": "f2760ec9145c083b1f236ed44f01b7d3",
"assets/assets/images/linkaja.png": "f49679263602d3db3e7d2ed28e7a2e24",
"assets/assets/images/menu.png": "3fab935b1bc3b3f188dd6d306142a490",
"assets/assets/images/noto_pot-of-food.png": "4c933b03afdc25ab90e98f1ca147bb8d",
"assets/assets/images/splash_background.png": "502a16442669749a9f20116176a86976",
"assets/assets/images/person-no-image.png": "3b1b4474028bf2c8c447bb7b53c29954",
"assets/assets/images/icon_app_150.png": "c3606495a2e9b162695f10e89d6c05e6",
"assets/assets/images/icon_app_bw.png": "5799fd0a7e4ebb22636976196ec4b83d",
"assets/assets/images/minus.png": "56a640b3af7763d25edcc00c7aa0782a",
"assets/assets/images/signup_banner.png": "a3faf538de326d05951ffb11c1683f4f",
"assets/assets/images/selected_product.png": "1d1e4804ab79db8be01d075a875c3c8c",
"assets/assets/images/icon_app_120.png": "f107507435481f0f63434377d57bd284",
"assets/assets/images/ramen.png": "608fa45b07a99e8924e218c5acc7d554",
"assets/assets/images/ayam.png": "0df7e35fd23247859e298974b3aadb4e",
"assets/assets/images/daftar-512.png": "0773329a64ebc6f39127168ca0c85789",
"assets/assets/images/plus.png": "3cb1057395fdc145d5948f224a025d4c",
"assets/assets/images/patra-spalsh-logo-512.png": "6eeadf5e3452f3d13f433630b40a346e",
"assets/assets/images/dana.png": "1b031093ce7ae3817d1df1ff8b86f01f",
"assets/assets/images/ovo.png": "1a62aa1c175a7bb8ce2aaeb1aef6b2c4",
"assets/assets/images/icon_app.png": "c42ddcd87595858a12ee7c7f32ffae68",
"assets/assets/images/sample_images/sample_4.png": "3fab935b1bc3b3f188dd6d306142a490",
"assets/assets/images/sample_images/sample_6.png": "2b735313dfcf6019a4c2c7b800d277bf",
"assets/assets/images/sample_images/sample_2.png": "0df7e35fd23247859e298974b3aadb4e",
"assets/assets/images/sample_images/sample_7.png": "8c6df6cdf04f157263fc178875335080",
"assets/assets/images/sample_images/sample_1.png": "608fa45b07a99e8924e218c5acc7d554",
"assets/assets/images/sample_images/sample_5.png": "fb4746ba87de20321f3333004789ff22",
"assets/assets/images/bg-1024.png": "3a5c2125ae65df03189cf1cd159778b6",
"assets/assets/images/login-512.png": "2faff496bcd1f874c995591aa89b907e",
"assets/assets/images/no_image.png": "5975d96b60a6337d4319ca9900f2bc2f",
"assets/assets/background.jpg": "b16d7cbf923a37d4529b61b425842601",
"assets/assets/icons/BottomIcons.ttf": "15cb770618a2faf9d0ea4bcff2a94404",
"assets/assets/icons/Cart.ttf": "66c46ce686770dd65f1c2543925159f7",
"assets/assets/fonts/sf-pro-display.ttf": "d09549c1ab4a5947a007561521e45da3",
"assets/AssetManifest.json": "c01925ed1c03f5daba9e81498b8624ed",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/awesome_dialog/assets/flare/error_without_loop.flr": "35b9b6c9a71063406bdac60d7b3d53e8",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/error.flr": "87d83833748ad4425a01986f2821a75b",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/NOTICES": "ef0dff474191de5d7d97b0dd82676994",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/FontManifest.json": "78391b8db3591744175635dd06a7aa8a",
"manifest.json": "62aa2b9a9e4a819407d18bee1197b359",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "6b3c87eda367d32651e93aee0517d9c9",
"main.dart.js": "91cf2fe641471a6c67d5032d8999843e",
"index.html": "b22114290b090119d5bf5feae0b43f45",
"/": "b22114290b090119d5bf5feae0b43f45"
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
