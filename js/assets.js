//==========================
// assets chargés, ils seront utilisables après l'appel à load assets
let assets;

let assetsToLoadURLs = {
    coin: {url:"../assets/images/lantern.png"},
    joueur: { url: '../assets/images/women.png' }, // http://www.clipartlord.com/category/weather-clip-art/winter-clip-art/
    ennemi: { url: '../assets/images/enemy.png' }, // http://www.clipartlord.com/category/weather-clip-art/winter-clip-art/
    bgn1: { url: '../assets/images/background.png' }, // http://www.clipartlord.com/category/weather-clip-art/winter-clip-art/
    bgn2: { url: '../assets/images/background3.png' },
    bgn3: { url: '../assets/images/background2.png' },
    bgn4: { url: '../assets/images/background1.png' }, 
    end: { url: '../assets/images/winner.png' },
    zombie: { url:'../assets/images/zombie.png'},
    zombie1: { url:'../assets/images/zombie1.png'},
    
    
    //backgroundImage: { url: 'https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/images/background.png' }, // http://www.clipartlord.com/category/weather-clip-art/winter-clip-art/
    //logo1: { url: "https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/images/SkywardWithoutBalls.png" },
    //logo2: { url: "https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/images/BoundsWithoutBalls.png" },
    //bell: { url: "https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/images/bells.png" },
    //spriteSheetBunny: { url: 'https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/images/bunnySpriteSheet.png' },
    plop: { url: 'https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/sounds/plop.mp3', buffer: false, loop: false, volume: 1.0 },
    victory: { url: '../assets/audio/victory.wav', buffer: false, loop: false, volume: 1.0 },
    humbug: { url: 'https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/sounds/humbug.mp3', buffer: true, loop: true, volume: 0.5 },
    concertino: { url: 'https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/sounds/christmas_concertino.mp3', buffer: true, loop: true, volume: 1.0 },
    xmas: { url: 'https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/sounds/xmas.mp3', buffer: true, loop: true, volume: 0.6 },
    backinblack: { url: '../assets/audio/backinblack.m4a', buffer: true, loop: true, volume: 0.5 }

};

function loadAssets(callback) {
    // here we should load the sounds, the sprite sheets etc.
    // then at the end call the callback function    
    loadAssetsUsingHowlerAndNoXhr(assetsToLoadURLs, callback);
}

// You do not have to understand in details the next parts of the code...
// just use the above function

/* ############################
    BUFFER LOADER for loading multiple files asyncrhonously. The callback functions is called when all
    files have been loaded and decoded 
 ############################## */
function isImage(url) {
    return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

function isAudio(url) {
    return (url.match(/\.(mp3|m4a|ogg|wav)$/) != null);
}

function loadAssetsUsingHowlerAndNoXhr(assetsToBeLoaded, callback) {
    var assetsLoaded = {};
    var loadedAssets = 0;
    var numberOfAssetsToLoad = 0;

    // define ifLoad function
    var ifLoad = function () {
        if (++loadedAssets >= numberOfAssetsToLoad) {
            callback(assetsLoaded);
        }
        console.log("Loaded asset " + loadedAssets);
    };

    // get num of assets to load
    for (var name in assetsToBeLoaded) {
        numberOfAssetsToLoad++;
    }

    console.log("Nb assets to load: " + numberOfAssetsToLoad);

    for (name in assetsToBeLoaded) {
        var url = assetsToBeLoaded[name].url;
        console.log("Loading " + url);
        if (isImage(url)) {
            assetsLoaded[name] = new Image();

            assetsLoaded[name].onload = ifLoad;
            // will start async loading. 
            assetsLoaded[name].src = url;
        } else {
            // We assume the asset is an audio file
            console.log("loading " + name + " buffer : " + assetsToBeLoaded[name].loop);
            assetsLoaded[name] = new Howl({
                src: [url],
                buffer: assetsToBeLoaded[name].buffer,
                loop: assetsToBeLoaded[name].loop,
                autoplay: false,
                volume: assetsToBeLoaded[name].volume,
                onload: function () {
                    if (++loadedAssets >= numberOfAssetsToLoad) {
                        callback(assetsLoaded);
                    }
                    console.log("Loaded asset " + loadedAssets);
                }
            }); // End of howler.js callback
        } // if

    } // for
} // function

export { loadAssets }