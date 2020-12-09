let particles;
const maxParticles = 40;
function setup() {
  const parentDiv = select("#parentDiv");
  const canvas = createCanvas(480, 500);
  parentDiv.child(canvas);
  particles = new Array(maxParticles).fill(null).map(() => new Particle());
}

function draw() {
  background("#023e8a");

  particles.forEach((p, index) => {
    p.update();
    p.drawLine(particles.slice(index));
  });
}

//   * O DZIEKUJĘ <3
