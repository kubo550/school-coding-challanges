const totalParticles = 30;
class Firework {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height;
    this.size = 5;
    this.velY = 4;
    this.exploded = false;
    this.particles = [];
  }

  draw() {
    ctx.fillStyle = "#e71d36";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
  }

  isDead() {
    return this.exploded && !this.particles.length;
  }

  update() {
    if (!this.exploded) {
      this.draw();
      this.y -= this.velY;
      this.velY -= 0.02;
    }

    if (this.velY < 0 && !this.exploded) {
      for (let i = 0; i < totalParticles; i++) {
        const particle = new Particle(this.x, this.y);
        this.particles.push(particle);
      }
      this.exploded = true;
    }

    this.particles.forEach(particle => particle.update());

    // ? Usuwanie zużytych particlów z pamięci operacyjnej
    this.particles = this.particles.filter(particle => !particle.isDead());
  }
}
