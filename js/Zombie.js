import ObjetGraphique from "./ObjetGraphique.js";


export default class Zombie extends ObjetGraphique {

  constructor(x, y, l, h, sprite, vitesse) {
    // on appelle le constructeur de la classe mère
    // pour initialiser les propriétés héritées
    super(x, y, l, h, 'red');
    this.sprite = sprite;
    // on initialise les propriétés propres à la classe Ennemi
    this.vitesse = vitesse;
    this.direction = 1;
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

  move() {
    this.y += this.vitesse * this.direction;
    if (this.y >= 500 || this.y <= 0) {
      this.direction *= -1;
    }
  }

}