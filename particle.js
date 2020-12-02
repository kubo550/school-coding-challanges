class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 3;
    this.velX = Math.random() - 0.5;
    this.velY = Math.random() - 0.5;
    this.lifespan = 1;
  }
  random255() {
    return Math.random() * 255;
  }
  draw() {
    ctx.fillStyle = `rgba(${this.random255()}, 30, 55, ${this.lifespan})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
  }
  isDead() {
    return this.lifespan < 0;
  }
  update() {
    this.draw();
    this.x += this.velX;
    this.y += this.velY;

    this.lifespan -= 0.005;
  }
}
