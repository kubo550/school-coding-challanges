class Particle_ {
  constructor() {
    this.size = 6;
    this.pos = createVector(
      random(this.size, width - this.size),
      random(this.size, height - this.size)
    );
    this.vel = p5.Vector.random2D();
  }

  draw() {
    stroke("#3f37c9");
    fill("#ade8f4");
    ellipse(this.pos.x, this.pos.y, this.size);
  }

  edges() {
    if (this.pos.x < this.size * 0.5 || this.pos.x > width - this.size * 0.5) {
      this.vel.x *= -1;
    }

    if (this.pos.y < this.size * 0.5 || this.pos.y > height - this.size * 0.5) {
      this.vel.y *= -1;
    }
  }

  drawLine(particles) {
    particles.forEach(p => {
      const d = dist(this.pos.x, this.pos.y, p.pos.x, p.pos.y);
      if (d < 100) {
        push();
        stroke("rgba(255,255,255, 0.6)");
        line(this.pos.x, this.pos.y, p.pos.x, p.pos.y);
        pop();
      }
    });
  }

  update() {
    this.draw();
    this.edges();

    this.pos.add(this.vel);
  }
}
