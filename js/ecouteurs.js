let inputState = {}
let mousePos = { x: 0, y: 0 }
export {distance}

function ajouteEcouteurSouris() {
    window.onmousemove = (event) => {
        // on récupère la positon de la souris et on
        // la stocke dans une variable globale mousePos
        // adjust mouse position relative to the canvas
        var rect = event.target.getBoundingClientRect()
        mousePos.x = event.clientX - rect.left;
        mousePos.y = event.clientY - rect.top;
        console.log(mousePos);
    }
}

function distance(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}

function ajouteEcouteursClavier() {
    // On va écouter les événements clavier
    // et on va modifier la vitesse du joueur
    // en fonction de la touche pressée
    window.onkeydown = (event) => {
        console.log(event.key);
        switch (event.key) {
            case 'ArrowLeft':
                inputState.left = true;
                break;
            case 'ArrowRight':
                inputState.right = true;
                break;
            case 'ArrowUp':
                inputState.up = true;
                break;
            case 'ArrowDown':
                inputState.down = true;
                break;
            case ' ':
                inputState.space = true;
                break;
        }
    }

    window.onkeyup = (event) => {
        console.log(event.key);
        switch (event.key) {
            case 'ArrowLeft':
                inputState.left = false;
                break;
            case 'ArrowRight':
                inputState.right = false;
                break;
            case 'ArrowUp':
                inputState.up = false;
                break;
            case 'ArrowDown':
                inputState.down = false;
                break;
            case ' ':
                inputState.space = false;
                break;
        }
    }

}

export { ajouteEcouteurSouris, ajouteEcouteursClavier, inputState, mousePos }