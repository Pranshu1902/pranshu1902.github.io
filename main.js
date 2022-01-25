var c = document.getElementById("bounce");
let ctx = c.getContext("2d");

var c1 = document.getElementById("bounce2");
let ctx1 = c1.getContext("2d");

var c2 = document.getElementById("bounce3");
let ctx2 = c2.getContext("2d");

// creating the image elements
var Img = document.createElement("img");
Img.src = "github1.svg";

var Img1 = document.createElement("img");
Img1.src = "linkedin.png";

var Img2 = document.createElement("img");
Img2.src = "twitter.png";

// creating circlular background around image
let drawCircle = (centerx, centery, radius, color, ctx) => {
  ctx.beginPath();
  ctx.arc(centerx, centery, radius, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.stroke();
};

let y_icon = 110;
let y_icon1 = 120;
let stepY = 1;
let x_icon = 40;
let y_icon_linkedin = 130;
let y_end = 130;
canvas_x = 300;
canvas_y = 300;
let radius = 110;

let y_icon_bg = (150 + 2 * y_icon) / 2;
let y_icon_bg1 = (150 + 2 * y_icon1) / 2;
let y_icon_bg2 = (150 + 2 * y_icon_linkedin) / 2;

function myAnimation1() {
  ctx.clearRect(0, 0, canvas_x, canvas_y);
  if (y_icon_bg < radius || y_icon_bg > y_end) {
    stepY = -stepY;
  }
  y_icon += stepY;
  y_icon_bg += stepY;
  drawCircle((2 * x_icon + 150) / 2, y_icon_bg, radius, "gray", ctx);
  ctx.drawImage(Img, x_icon, y_icon, 150, 150);
}

function myAnimation2() {
  ctx1.clearRect(0, 0, canvas_x, canvas_y);
  if (y_icon_linkedin < radius || y_icon_linkedin > y_end) {
    stepY = -stepY;
  }
  y_icon_linkedin += stepY;
  y_icon_bg2 += stepY;
  drawCircle((2 * x_icon + 150) / 2, y_icon_bg2, radius, "gray", ctx1);
  ctx1.drawImage(Img1, x_icon, y_icon_linkedin, 150, 150);
}

function myAnimation3() {
  ctx2.clearRect(0, 0, canvas_x, canvas_y);
  if (y_icon1 < radius || y_icon1 > y_end) {
    stepY = -stepY;
  }
  y_icon1 += stepY;
  y_icon_bg1 += stepY;
  drawCircle((2 * x_icon + 150) / 2, y_icon_bg1, radius, "gray", ctx2);
  ctx2.drawImage(Img2, x_icon, y_icon1, 150, 150);
}

setInterval(() => {
  myAnimation1();
}, 50);

setInterval(() => {
  myAnimation2();
}, 50);

setInterval(() => {
  myAnimation3();
}, 50);
