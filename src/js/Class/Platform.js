class Platform {
  constructor({ x, y }) {
    this.position = {
      x,
      y
    }

    this.width = 200;
    this.height = 20;
  }

  draw() {
    c.fillStyle = 'blue';
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  movePlatform(velocity) {
    this.position.x += velocity
  }
}

export default Platform;
