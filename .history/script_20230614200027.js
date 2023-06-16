const GRID_SIZE = 30;
const WITDH = 600;
const HEIGHT = 600;
class Snake {
  constructor() {
    this.head = createVector(0, 0);
  }
  show() {
    noStroke();
    // Draw snake head
    fill(255);
    rect(this.head.x, this.head.y, GRID_SIZE, GRID_SIZE);
  }
}
let snake;

function setup() {
  createCanvas(WITDH, HEIGHT);
  newGame();
}

function draw() {
  background(0);
  drawSnake();
}

function drawSnake() {
  snake.show();
}

function newGame() {
  snake = new Snake();
}
function keyPressed() {
  if (keyCode == UP_ARROW && snake.vel.y != 1) {
    snake.vel.y = -1;
    snake.vel.x = 0;
  } else if (keyCode == DOWN_ARROW && snake.vel.y != -1) {
    snake.vel.y = 1;
    snake.vel.x = 0;
  } else if (keyCode == LEFT_ARROW && snake.vel.x != 1) {
    snake.vel.y = 0;
    snake.vel.x = -1;
  } else if (keyCode == RIGHT_ARROW && snake.vel.x != -1) {
    snake.vel.y = 0;
    snake.vel.x = 1;
  }
}
