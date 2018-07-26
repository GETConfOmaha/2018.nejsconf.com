var CACHE_NAME = "nejsconf-2018-v1";
var urlsToCache = [
	"/",
	"/assets/img/earth-nobg-crop.png",
	"/assets/img/moon.svg",
	"/assets/img/telescope.svg",
	"/assets/img/facebook.svg",
	"/assets/img/facebook-active.svg",
	"/assets/img/twitter.svg",
	"/assets/img/twitter-active.svg",
	"/assets/img/space-bg.png",
	"/assets/img/earth-nobg-crop.png",
	"/assets/img/infoblock-astronaut-thumb.png",
	"/assets/img/infoblock-moon-thumb.png",
	"/assets/img/infoblock-astronaut.png",
	"/assets/img/infoblock-moon.png",
	"/assets/img/space-bg.png",
	"/assets/img/lander-stars.svg",
	"/assets/img/landed.jpg",
	"/assets/img/lander.svg",

	// speakers
	"/speakers/clarissa/",
	"/speakers/seldo/",
	"/speakers/carmalou/",
	"/speakers/chantastic/",
	"/speakers/haubertdashery/",
	"/speakers/karlgroves/",
	"/speakers/benmvp/",
	"/speakers/stevekinney/",
	"/speakers/sitnikcode/",
	"/assets/img/speakers/clarissa.jpg",
	"/assets/img/speakers/seldo.jpg",
	"/assets/img/speakers/carmalou.jpg",
	"/assets/img/speakers/chantastic.jpg",
	"/assets/img/speakers/haubertdashery.jpg",
	"/assets/img/speakers/karlgroves.jpg",
	"/assets/img/speakers/benmvp.jpg",
	"/assets/img/speakers/stevekinney.jpg",
	"/assets/img/speakers/sitnikcode.jpg",

	// Sponsors
	"/assets/img/sponsors/zillow.svg" ,
	"/assets/img/sponsors/agape-red.svg",
	"/assets/img/sponsors/sitepen.svg" ,
	"/assets/img/sponsors/flywheel.svg" ,
	"/assets/img/sponsors/flyover-technical.svg",
	"/assets/img/sponsors/midland-code.svg",

	// countdown pages
	"/countdown/",
	"/assets/img/countdown.jpg",
	"/assets/fonts/7segfault.ttf"
];

self.addEventListener("install", function(event) {
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then(function(cache) {
				console.log("Opened cache");
				return cache.addAll(urlsToCache);
			})
	);
});

self.addEventListener("fetch", function(event) {
	console.log( event.request );
	event.respondWith(
		caches.match(event.request)
			.then(function(response) {
				console.log("Cache hit");
				// Cache hit - return response
				if (response) {
					return response;
				}
				return fetch(event.request);
			}
		)
	);
});