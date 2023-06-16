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
