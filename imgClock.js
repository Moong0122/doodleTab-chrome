let canvas;
let ctx;
let x = 70;
let y = 350;
let WIDTH = 400;
let HEIGHT = 400;
let r = 1;
let i = Math.PI / 2;

function clock() {
  //   clear();
  ctx.fillStyle = "#444444";
  circle(x, y, 10);

  x -= 37 * Math.cos(i);
  y -= 37 * Math.sin(i);
  i += (Math.PI / 180) * 8.5;
}

function clear() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function circle(x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, true);
  ctx.fill();
}

function init() {
  canvas = document.getElementById("js-imgClock");
  ctx = canvas.getContext("2d");
  setInterval(clock, 1000);
}

init();
