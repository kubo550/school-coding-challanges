class Particle_ {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velX = Math.random() - 0.5;
    this.velY = Math.random() - 0.5;
    this.radius = 2.5;
    this.lifespan = 1;
  }
  r255() {
    return Math.random() * 255;
  }
  draw() {
    // ? Stworzenie Pierwszego fireworka
    _ctx.fillStyle = `rgba(${this.r255()}, 2, 8, ${this.lifespan})`;
    _ctx.beginPath();
    _ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    _ctx.closePath();
    _ctx.fill();
  }
  isAlive() {
    return this.lifespan > 0;
  }
  update() {
    this.draw();

    this.x += this.velX;
    this.y += this.velY;
    this.lifespan -= 0.004;
  }
}
