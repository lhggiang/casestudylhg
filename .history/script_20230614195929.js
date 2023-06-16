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
