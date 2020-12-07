
// ? Definiowanie Zmiennych Globalnych
const _canvas = document.querySelector("#_canvas");
const _ctx = _canvas.getContext("2d");
let fireworks = [];

(function setup() {
  // ? Clear background
  _ctx.fillStyle = "#212121";
  _ctx.fillRect(0, 0, _canvas.width, _canvas.height);

  // ? Wykonanie funcki draw co kazde 5 milisekund
  setInterval(draw, 8);
})();

function draw() {
  // ? Clear background
  _ctx.fillStyle = "#212121";
  _ctx.fillRect(0, 0, _canvas.width, _canvas.height);

  // ? Animowanie Fireworka
  if (Math.random() > 0.99) {
    const firework = new Firework_();
    fireworks.push(firework);
  }

  fireworks.forEach(firework => firework.update());
  fireworks = fireworks.filter(firework => !firework.isDead());
}
