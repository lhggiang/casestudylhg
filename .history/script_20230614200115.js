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
  update() {
    this.head.x += this.vel.x * GRID_SIZE;
    this.head.y += this.vel.y * GRID_SIZE;

    this.head.x = (this.head.x + WITDH) % WITDH;
    this.head.y = (this.head.y + HEIGHT) % HEIGHT;
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
function drawSnake() {
  // update every SNAKE_SPEED frame
  if (frameCount % SNAKE_SPEED == 0) {
    snake.update();
  }
  snake.show();
}
class Food {
  constructor() {
    this.newFood();
  }
  newFood() {
    this.x = Math.floor(random(width));
    this.y = Math.floor(random(height));

    this.x = Math.floor(this.x / GRID_SIZE) * GRID_SIZE;
    this.y = Math.floor(this.y / GRID_SIZE) * GRID_SIZE;
  }
  show() {
    fill(255, 40, 0);
    rect(this.x, this.y, GRID_SIZE, GRID_SIZE);
  }
}
