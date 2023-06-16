var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

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
let point = 0;
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

// 1 1
//len  > x giuwx nguyen y -1 : move x = 0; move y = -1

function updateSnake() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // draw food
  ctx.fillStyle = foodColor;
  ctx.fillRect(foodX, foodY, blockSnake, blockSnake);
  if (snakeX == foodX && snakeY == foodY) {
    point++;
    snakesBody.push([foodX, foodY]);

    showPoint();
    randomFood();
  }

  for (let index2 = snakesBody.length - 1; index2 > 0; index2--) {
    snakesBody[index2] = snakesBody[index2 - 1];
  }
  if (snakesBody.length) {
    snakesBody[0] = [snakeX, snakeY];
  }
  // [ [1,2],[2,3] ]
  // draw snake
  ctx.fillStyle = "green";
  snakeX += moveX * blockSnake;
  snakeY += moveY * blockSnake;
  ctx.fillRect(snakeX, snakeY, blockSnake, blockSnake);

  for (let index = 0; index < snakesBody.length; index++) {
    let color = "blue";
    if (index == snakesBody.length - 1) {
      color = "white";
    }
    ctx.fillStyle = color;
    let xBody = snakesBody[index][0];
    let yBody = snakesBody[index][1];

    ctx.fillRect(xBody, yBody, blockSnake, blockSnake);
  }

  if (
    snakeX < 0 ||
    snakeY < 0 ||
    snakeX > blockSnake * size ||
    snakeY > blockSnake * size
  ) {
    alert("game over");
    return;
  }

  //  ctx.fillRect(snakeX, snakeY, blockSnake, blockSnake);
  // 100 100 : 0 -1; => 100 80
  // 10 10 : 10 9
}
