let particles = [];

function setup() {
  select("#_canvasPlace").child(createCanvas(470, 500));
  particles = Array(30)
    .fill(null)
    .map(() => new Particle_());
}

function draw() {
  background("#ade8f4");
  particles.forEach((p, i) => {
    p.update();
    p.drawLine(particles.slice(i));
  });
}
