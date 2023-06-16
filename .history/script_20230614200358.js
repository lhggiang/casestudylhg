const GRID_SIZE = 30;

const WITDH = 600;
const HEIGHT = 600;
const SNAKE_SPEED = 8;
let snake, food;

function setup() {
  createCanvas(WITDH, HEIGHT);
  newGame();
}

function draw() {
  background(0);
  if (!snake.isDead) {
    drawSnake();
  } else {
    newGame();
  }
}

function drawSnake() {
  // update every SNAKE_SPEED frame
  if (frameCount % SNAKE_SPEED == 0) {
    snake.update();
  }
  //
  // textSize(15);
  // text("Score: " + snake.length, 0, 15);
  food.show();
  snake.show();

  // Handle when snake eat food
  if (snake.head.x == food.x && snake.head.y == food.y) {
    eatFood();
  }
}

function newGame() {
  snake = new Snake();
  food = new Food();
}

function eatFood() {
  snake.length++;
  food.newFood();
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
class Snake {
  constructor() {
    this.vel = createVector(0, 0);
    this.head = createVector(0, 0);
    this.length = 0;
    this.body = [];
    this.isDead = false;
  }
  update() {
    this.body.push(createVector(this.head.x, this.head.y));

    this.head.x += this.vel.x * GRID_SIZE;
    this.head.y += this.vel.y * GRID_SIZE;

    this.head.x = (this.head.x + WITDH) % WITDH;
    this.head.y = (this.head.y + HEIGHT) % HEIGHT;

    if (this.length < this.body.length) {
      this.body.shift();
    }

    for (let vector of this.body) {
      if (vector.x == this.head.x && vector.y == this.head.y) {
        this.isDead = true;
      }
    }
  }
  show() {
    noStroke();
    // Draw snake head
    fill(255);
    rect(this.head.x, this.head.y, GRID_SIZE, GRID_SIZE);

    // Draw snake body
    fill(155);
    for (let vector of this.body) {
      rect(vector.x, vector.y, GRID_SIZE, GRID_SIZE);
    }
  }
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
