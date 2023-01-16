self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", 
                "./sw.js",
                "./css/style.css", 
                "./css/style-switcher.css",
                "./css/skins/color-1.css", 
                "./css/skins/color-2.css", 
                "./css/skins/color-3.css",
                "./css/skins/color-4.css",
                "./css/skins/color-5.css",
                "./index.html",
                "./about.html",
                "./education.html",
                "./work.html",
                "./testimonials.html",
                "./skills.html",
                "./contact.html",
                "./manifest.json",
                "./js/index.js",
                "./js/script.js",
                "./js/style-switcher.js",
                "./pdf/Journal_Certificate.pdf",
                "./pdf/Journal_Copy.pdf",
                "./pdf/Sara_CV.pdf",
                "./logo-no-background_1.png",
                "./images/logo-512x512.png",
                "./images/logo-192x192.png",
                "./images/chart.jpg",
                "./images/converter_6.png",
                "./images/icon.png",
                "./images/icon_2.png",
                "./images/icon_3.png",
                "./images/icon_4.png",
                "./images/icon_5.png",
                "./images/icon_6.png",
                "./images/Profile_pic_new.jpeg",
                "./images/profile_pic2.jpeg",
                "./images/small.jpg"
                    
            ]);
        })
    );
});

self.addEventListener("activate", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    ); 
});

this.addEventListener("fetch", {

});