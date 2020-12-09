class Particle {
  constructor() {
    this.size = 7;
    this.pos = createVector(
      random(this.size / 2, width - this.size / 2),
      random(this.size / 2, height - this.size / 2)
    );
    this.vel = p5.Vector.random2D();
  }

  draw() {
    stroke("#118ab2");
    fill("#90e0ef");
    ellipse(this.pos.x, this.pos.y, this.size);
  }

  edges() {
    if (this.pos.x < this.size / 2 || this.pos.x > width - this.size / 2) {
      this.vel.x *= -1;
    }

    if (this.pos.y < this.size / 2 || this.pos.y > height - this.size / 2) {
      this.vel.y *= -1;
    }
  }

  drawLine(particlesArray) {
    particlesArray.forEach(p => {
      const dystans = dist(this.pos.x, this.pos.y, p.pos.x, p.pos.y);
      if (dystans < 70) {
        stroke("rgba(255,255,255, 0.6)");
        line(this.pos.x, this.pos.y, p.pos.x, p.pos.y);
      }
    });
  }
  update() {
    this.draw();
    this.edges();

    this.pos.add(this.vel);
  }
}
