import ObjetGraphique from "./ObjetGraphique.js";
import { distance } from "./ecouteurs.js";

export default class Ennemi extends ObjetGraphique {

  constructor(x, y, l, h, sprite, vitesse) {
    // on appelle le constructeur de la classe mère
    // pour initialiser les propriétés héritées
    super(x, y, l, h, 'red');
    this.sprite = sprite;
    // on initialise les propriétés propres à la classe Ennemi
    this.vitesse = vitesse;
  }

  // on redefinit la méthode héritée draw(ctx)
  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    // faire tourner l'ennemi 
    //ctx.rotate(this.angle);
    //ctx.translate(-this.l/2, -this.h/2);
    ctx.drawImage(this.sprite, 0, 0, this.l, this.h);
    /*
    ctx.fillStyle = this.couleur;
    ctx.fillRect(0, 0, this.l, this.h);
    */
    ctx.restore();
  }

  followJoueur(joueur) {
    // calcule la différence en x et en y entre le joueur et l'ennemi
    let dx = joueur.x - this.x;
    let dy = joueur.y - this.y;
    // obtenir l'angle entre les deux objets en utilisant le rapport de tangente entre la différence en y et la différence en x 
    this.angle = Math.atan2(dy,dx);
    // Faire avancer l'ennemi vers le joueur
    this.x += this.vitesse * Math.cos(this.angle);
    this.y += this.vitesse * Math.sin(this.angle);
    //
    if (distance(this.x, this.y) > 10) {
        //ball.v = 0;
        this.x -= this.v * Math.cos(this.angle);
        this.y -= this.v * Math.sin(this.angle);
    }
}
}
