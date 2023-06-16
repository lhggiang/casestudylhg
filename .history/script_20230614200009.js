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
