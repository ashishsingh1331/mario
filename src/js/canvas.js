import platform from '../img/platform.png';
import hills from '../img/hills.png';
import background from '../img/background.png';
import platformSmallTall from '../img/platformSmallTall.png';
import spriteRunLeft from '../img/spriteRunLeft.png';
import spriteRunRight from '../img/spriteRunRight.png';
import spriteStandRight from '../img/spriteStandRight.png';
import spriteStandLeft from '../img/spriteStandLeft.png';


const VELOCITY_Y = 18;
const HORIZONTAL_MAX_TRAVEL_THRESHOLD = 450;
const HORIZONTAL_MIN_TRAVEL_THRESHOLD = 200;

console.log(platform);
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
let scrollOffset = 0;

canvas.width = 1024;
canvas.height = 576;

const gravity = .9;

const keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  down: {
    pressed: false
  },
  up: {
    pressed: false
  }
}
class GenericObject {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y
    }

    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

function createImage(imageSrc) {
  const image = new Image();
  image.src = imageSrc;
  return image;
}



class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100
    }

    this.velocity = {
      x: 0,
      y: 1
    }

    this.width = 66;
    this.height = 150;
    this.speed = 10;
    this.image = createImage(spriteStandRight);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(spriteStandRight),
        left: createImage(spriteStandLeft),
        cropWidth: 177,
        width: 66,
        frameRate: 59
      },
      run: {
        right: createImage(spriteRunRight),
        cropWidth: 340,
        width: 127.875,
        frameRate: 29,
        left: createImage(spriteRunLeft)
      }
    }
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = this.sprites.stand.cropWidth;
  }

  draw() {
    c.drawImage(
              this.currentSprite,
              this.currentCropWidth* this.frames,
              0,
              this.currentCropWidth,
              400,
              this.position.x,
              this.position.y,
              this.width,
              this.height);
  }

  stopVerticalMovement() {
    this.velocity.y = 0;
  }

  stopPlayerHorizontalMovement() {
    this.velocity.x = 0;
  }

  update() {
    this.frames++;
    if(this.frames > this.sprites.stand.frameRate && (this.currentSprite == this.sprites.stand.right || this.currentSprite == this.sprites.stand.left)) {
      this.frames = 0;
    } else if (this.frames > this.sprites.run.frameRate && (this.currentSprite == this.sprites.run.right || this.currentSprite == this.sprites.run.left)) {
      this.frames = 0;
    }


    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;

    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity; // Increasing the velocity on every update
    } else {
      // this.stopVerticalMovement(); // Don't increase the velocity as player reached bottom
    }

    if (keys.right.pressed && player.position.x < HORIZONTAL_MAX_TRAVEL_THRESHOLD) {
      this.velocity.x = player.speed;
    } else if ((keys.left.pressed && player.position.x > HORIZONTAL_MIN_TRAVEL_THRESHOLD) || (keys.left.pressed && scrollOffset === 0 && player.position.x - player.width > 0 )) { // move player to left
      this.velocity.x = -player.speed;
    } else { // Platform start moving
      this.stopPlayerHorizontalMovement();
      if (keys.right.pressed) {
        scrollOffset += player.speed;
        platforms.forEach((platform) => { // move platform to left
          platform.movePlatform(-player.speed);
        })

        GenericObjects.forEach((go) => {
          go.position.x -= player.speed*.66;
        })
      } else if (keys.left.pressed && scrollOffset > 0) {
        scrollOffset -= player.speed;
        platforms.forEach((platform) => { // move platform to right
          platform.movePlatform(player.speed);
        });

        GenericObjects.forEach((go) => {
          go.position.x += player.speed*.66;
        })
      }
    }
    //Win condition
    if (scrollOffset > 2000) {
      console.log('You win');
    }

    // loose condition
    if (player.position.y >= canvas.height) {
      init();
    }
    this.draw();
  }
}

class Platform {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y
    }

    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }

  movePlatform(velocity) {
    this.position.x += velocity
  }
}



// Creating Player
let player = new Player();
player.update();



// Creating Platform
let platformImg ;
let platforms = []
let  smallTallPlatformImg;


// Creating generic objects
let GenericObjects = [];

function init() {
  // Creating Player
   player = new Player();
  player.update();
  scrollOffset = 0;



  // Creating Platform
   platformImg = createImage(platform);
   smallTallPlatformImg = createImage(platformSmallTall);
   console.log(smallTallPlatformImg);
   platforms = [
    new Platform({ x: platformImg.width * 5 + 700 , y: 350, image: smallTallPlatformImg }),
    new Platform({ x: -1, y: 452, image: platformImg }),
    new Platform({ x: platformImg.width - 3, y: 452, image: platformImg }),
    new Platform({ x: platformImg.width * 2 + 100, y: 452, image: platformImg }),
    new Platform({ x: platformImg.width * 3 + 300, y: 452, image: platformImg }),
    new Platform({ x: platformImg.width * 4 + 500, y: 452, image: platformImg }),
  ]

  // Creating generic objects
  GenericObjects = [
    new GenericObject({ x: -1, y: -2, image: createImage(background) }),
    new GenericObject({ x: -1, y: -2, image: createImage(hills) })
  ];
}
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height); // Clearing whold canvas so that object is retained

  GenericObjects.forEach((genericObject) => {
    genericObject.draw();
  })

  platforms.forEach((platform) => {
    platform.draw();
  });


  // if player collides with platform
  platforms.forEach((platform) => {
    if (player.position.y + player.height <= platform.position.y &&
      player.position.y + player.height + player.velocity.y >= platform.position.y &&
      player.position.x + player.width >= platform.position.x &&
      player.position.x <= platform.position.x + platform.width
    ) {
      player.stopVerticalMovement();
    }
  });
  player.update();
}
init();
animate();

addEventListener('keydown', ({ keyCode }) => {
  switch (keyCode) {
    case 65:

      keys.left.pressed = true;
      player.currentSprite = player.sprites.run.left;
      player.currentCropWidth = player.sprites.run.cropWidth;
      player.width = player.sprites.run.width;
      break;

    case 83:
      keys.down.pressed = true;
      break;

    case 68:
      keys.right.pressed = true;
      player.currentSprite = player.sprites.run.right;
      player.currentCropWidth = player.sprites.run.cropWidth;
      player.width = player.sprites.run.width;
      break;

    case 87:
      keys.up.pressed = true;
      player.velocity.y -= VELOCITY_Y;
      break;
  }
})

// Key up
addEventListener('keyup', ({ keyCode }) => {
  switch (keyCode) {
    // left
    case 65:
      keys.left.pressed = false;
      player.currentSprite = player.sprites.stand.left;
      player.currentCropWidth = player.sprites.stand.cropWidth;
      player.width = player.sprites.stand.width;
      break;
    // down
    case 83:
      keys.down.pressed = true;
      break;
    // right
    case 68:
      keys.right.pressed = false;
      player.currentSprite = player.sprites.stand.right;
      player.currentCropWidth = player.sprites.stand.cropWidth;
      player.width = player.sprites.stand.width;
      break;
    // up
    case 87:
      player.velocity.y -= 0;
      break;
  }
})
