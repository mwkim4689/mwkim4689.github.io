'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "10c18081ebc0ba18671a0d5f57e97841",
"assets/assets/icons/btn_play.svg": "52fda6f6a12d1d1eb86d6e66db4bf8e0",
"assets/assets/icons/ic_arrow_S.svg": "7627ee4ce220809ff0ad4be675df3e4d",
"assets/assets/icons/ic_bookmark.svg": "876dd60b5301154940deb58fc30cc3d6",
"assets/assets/icons/ic_bookmark_active.svg": "02b0fd482e909a18a070e585a1a037dd",
"assets/assets/icons/ic_check.svg": "7a188813be1b811d72e2b69353893435",
"assets/assets/icons/ic_edit.svg": "2f8112d07fe8128a51181e33b30b7aad",
"assets/assets/icons/ic_menu_category.svg": "dc7716d8f007b22275061b3dae583661",
"assets/assets/icons/ic_menu_home.svg": "c7806a176001d8fcef77600e46b2ac8c",
"assets/assets/icons/ic_menu_noti.svg": "8b4f827ea175010c1d1658bac32bced9",
"assets/assets/icons/ic_menu_profile.svg": "9dfe193e8fb82ed66b330a578599c8f9",
"assets/assets/icons/ic_menu_status.svg": "94a7f9349d4a5c12683035cc7f31fccc",
"assets/assets/icons/ic_search.svg": "2d61a8f4f0a823e635d7d45ff5a060a0",
"assets/assets/icons/ic_search_S.svg": "d3f235dd2694de2a65bbda2a912fba0b",
"assets/assets/icons/ic_setting.svg": "58f8b26792bedb3a06c7ba32b4848346",
"assets/assets/icons/ic_setting_cs.svg": "441b76213720040500dbe396eb35885c",
"assets/assets/icons/ic_setting_logout.svg": "a5411ec720d15fd0c0a44d8baa439e51",
"assets/assets/icons/ic_setting_noti.svg": "c98e68051eb49f754d2930a480e95514",
"assets/assets/icons/ic_setting_password.svg": "ee7422848d79bfa346aeee8c7e0a7aa3",
"assets/assets/icons/ic_setting_policy.svg": "8ca2753bb0d46c89cbdf00ab3ee09607",
"assets/assets/icons/ic_setting_security.svg": "dcebb9a9dff0f2b5df323e99b0086539",
"assets/assets/icons/ic_share.svg": "187d4f62f0a619006a4c742a52d4ea79",
"assets/assets/images/heart_arrow_icon_2445092_1280.png": "e6da4cfce14d8b30d488eedcf8c84c28",
"assets/assets/images/ic_logo_ver1.png": "8b806a0dadf2275b4f9d41394832e58c",
"assets/assets/images/img_not_available.jpeg": "1c98fa4a13575d5854365f27b8bf66dc",
"assets/assets/images/mimi1.gif": "477fc8ddd40d200fe8f2635b5151a873",
"assets/assets/images/mimi2.gif": "82a783353a27abe59feafd40bc686af1",
"assets/assets/images/mimi3.gif": "477fc8ddd40d200fe8f2635b5151a873",
"assets/assets/images/mimi4.gif": "6b65742393c65511ba223ec388c85ecc",
"assets/assets/images/mimi5.gif": "609127cb5129f8e218fb57f059497c87",
"assets/assets/images/mimi6.gif": "1ce35a6b3c21cc308a7683dfbea81c63",
"assets/assets/images/mimi7.gif": "ace546bd302229af3a0c7e7221d2dc10",
"assets/assets/images/mimi8.gif": "6646a3dec849498313a17c7de5d2ea5c",
"assets/assets/images/mimi9.gif": "b5ec7c32285b24c09eca4646a4511518",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "8c80062757898a89712bcf8e32b794c6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/fluttertoast/assets/toastify.css": "8beb4c67569fb90146861e66d94163d7",
"assets/packages/fluttertoast/assets/toastify.js": "8f5ac78dd0b9b5c9959ea1ade77f68ae",
"assets/packages/flutter_signin_button/assets/logos/2.0x/facebook_new.png": "83bf0093719b2db2b16e2839aee1069f",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_dark.png": "937022ea241c167c8ce463d2ef7ed105",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_light.png": "8f10eb93525f0c0259c5e97271796b3c",
"assets/packages/flutter_signin_button/assets/logos/3.0x/facebook_new.png": "12531aa3541312b7e5ddd41223fc60cb",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_dark.png": "ac553491f0002941159b405c2d37e8c6",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_light.png": "fe46d37e7d6a16ecd15d5908a795b4ee",
"assets/packages/flutter_signin_button/assets/logos/facebook_new.png": "e1dff5c319a9d7898aee817f624336e3",
"assets/packages/flutter_signin_button/assets/logos/google_dark.png": "c32e2778b1d6552b7b4055e49407036f",
"assets/packages/flutter_signin_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "8786e632a2cf05f43dfa3662876b99dd",
"/": "8786e632a2cf05f43dfa3662876b99dd",
"main.dart.js": "4bbc599e08274cf8d53c0535f9a4b345",
"manifest.json": "f629a8ac11dd2c7ac6c47d62552c6386",
"version.json": "83ccaac0cb4faaa1248ed589abb96249"
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
