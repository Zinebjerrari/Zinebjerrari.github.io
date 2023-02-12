import Sortie from "./Sortie.js";
import ObstacleAnimeClignotant from "./ObstacleAnimeClignotant.js";
import ObstacleAnime from "./ObstacleAnime.js";
import Obstacle from "./ObstacleClass.js";
import ObstacleTexture from "./ObstacleTexture.js";
import Coin from "./Coin.js";
import Ennemi from "./Ennemi.js";
import Zombie from "./zombie.js";

let tabNiveaux = [];

function creerLesNiveaux(assets) {
    let sortieLevel1 = new Sortie(500, 500, 50, "green");

    let level1 = {
        objetsGraphiques: [
            sortieLevel1,
            new Coin(100, 100, 50, 50, assets.coin, 10),
            new Coin(200, 150, 50, 50, assets.coin, 10),
            new Coin(400, 300, 50, 50, assets.coin, 10),
            
        ],
        temps: 60,
        sortie : sortieLevel1,
        titre : "Niveau 1",
        description: "Souffre petit padawan !",
        background: "bgn1",
        musique: "xmas"
    }
    tabNiveaux.push(level1);
    
    let sortieLevel2 = new Sortie(600, 300, 40, "yellow");
    let level2 = {
        objetsGraphiques: [
            sortieLevel2,
            new ObstacleAnime(450, 0, 30, 300, 'yellow', 1),
            new Coin(200, 150, 50, 50, assets.coin, 10),
            new Coin(400, 300, 50, 50, assets.coin, 10),
        ],
        sortie: sortieLevel2,
        temps: 30,
        titre : "Niveau 2",
        description: "Ne te laisse pas faire !",
        background: "bgn2",
        musique: "humbug"
    }
    tabNiveaux.push(level2);

    let sortieLevel3 = new Sortie(600, 300, 40, "red");
let level3 = {
    objetsGraphiques: [
        sortieLevel3,
        new ObstacleAnime(450, 0, 30, 300, 'blue', 1),
        new ObstacleAnime(650, 0, 30, 300, 'red', 2),
        new Coin(200, 150, 50, 50, assets.coin, 10),
        new Coin(400, 300, 50, 50, assets.coin, 10),
        new Coin(520, 600, 50, 50, assets.coin, 10),
        new Coin(800, 450, 50, 50, assets.coin, 10),
    ],
    sortie: sortieLevel3,
    temps: 30,
    titre : "Niveau 3",
    description: "Ne te laisse pas faire !",
    background: "bgn3",
    musique: "humbug"
}
tabNiveaux.push(level3);

let sortieLevel4 = new Sortie(600, 300, 40, "pink");
let level4 = {
    objetsGraphiques: [
        sortieLevel4,
        new ObstacleAnime(150, 0, 30, 300, 'purple', 1),
        new ObstacleAnime(380, 0, 30, 300, 'black', 1),
        new ObstacleAnime(670, 0, 30, 300, 'pink', 1),
        new Coin(100, 250, 50, 50, assets.coin, 10),
        new Coin(320, 250, 50, 50, assets.coin, 10),
        new Coin(460, 380, 50, 50, assets.coin, 10),
        new Coin(650, 600, 50, 50, assets.coin, 10),
        new Coin(820, 790, 50, 50, assets.coin, 10),
    ],
    sortie: sortieLevel4,
    temps: 30,
    titre : "Niveau 4",
    description: "Ne te laisse pas faire !",
    background: "bgn4",
    musique: "humbug"
}
tabNiveaux.push(level4);

let level5 = {
    objetsGraphiques: [
        
    ],
    temps: 30,
    titre : "Niveau 5",
    description: "Ne te laisse pas faire !",
    background: "end",
    musique: "humbug"
}
tabNiveaux.push(level5);

}
export { creerLesNiveaux, tabNiveaux }