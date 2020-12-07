const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const fps = 10;

let myFireworks = [];

(function setup() {
  // ? Clear Background
  ctx.fillStyle = "#212121";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  //   ^ Zeby moj laptop to wytrzymał xD
  setInterval(draw, fps);
})();

function draw() {
  // ^ tworzenie Fireworka
  if (Math.random() > 0.98) {
    myFireworks.push(new Firework());
  }
  // ? Clear Background
  ctx.fillStyle = "#212121";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  myFireworks.forEach(firework => firework.update());

  //  ? Reduckja Fireworków to tylko tych ktore jeszcze "zyją"
  myFireworks = myFireworks.filter(firework => !firework.isDead());
}
