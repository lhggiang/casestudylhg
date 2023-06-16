let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let blockSnake = 20;
//  food
let foodColor = "red";
let foodX = 0;
let foodY = 0;
let size = 20;
// snake
let snakeColor = "green";
let snakeX = 100;
let snakeY = 100;
//
let moveX = 0;
let moveY = 0;
canvas.width = size * blockSnake;
canvas.height = size * blockSnake;
function randomFood() {
  foodX = Math.floor(Math.random() * size) * blockSnake;
  foodY = Math.floor(Math.random() * size) * blockSnake;
}
function showPoint() {
  document.querySelector("#point").innerHTML = point;
}
let level = document.querySelector("#level").value * 50;
console.log(level);
let snakesBody = [];
window.onload = function () {
  randomFood();
  showPoint();
  document.addEventListener("keyup", function (event) {
    console.log(event.key);
    let key = event.key;
    if (key == "ArrowRight") {
      moveX = 1;
      moveY = 0;
    }

    if (key == "ArrowLeft") {
      moveX = -1;
      moveY = 0;
    }

    if (key == "ArrowUp") {
      moveX = 0;
      moveY = -1;
    }

    if (key == "ArrowDown") {
      moveX = 0;
      moveY = 1;
    }
  });
  setInterval(updateSnake, 10000 / level);
};
