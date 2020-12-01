class Firework_ {
  constructor() {
    this.x = Math.random() * _canvas.width;
    this.y = _canvas.height;
    this.velY = 4;
    this.radius = 4.5;
    this.expoded = false;
    this.particles = [];
  }

  draw() {
    // ? Stworzenie Pierwszego fireworka
    _ctx.fillStyle = "#f00";
    _ctx.beginPath();
    _ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    _ctx.closePath();
    _ctx.fill();
  }
  explode() {
    for (let i = 0; i < 30; i++) {
      const particle = new Particle_(this.x, this.y);
      this.particles.push(particle);
    }
    this.expoded = true;
  }
  isDead() {
    return this.expoded && this.particles.length === 0;
  }
  update() {
    if (!this.expoded) {
      this.draw();
      this.y -= this.velY;
      this.velY -= 0.02;
      if (this.velY < 0) {
        this.explode();
      }
    }
    this.particles.forEach(particle => particle.update());
    this.particles = this.particles.filter(particle => particle.isAlive());
  }
}
