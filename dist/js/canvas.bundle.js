/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/img/platformSmallTall.png":
/*!***************************************!*\
  !*** ./src/img/platformSmallTall.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/img/spriteRunLeft.png":
/*!***********************************!*\
  !*** ./src/img/spriteRunLeft.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/img/spriteRunRight.png":
/*!************************************!*\
  !*** ./src/img/spriteRunRight.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/img/spriteStandLeft.png":
/*!*************************************!*\
  !*** ./src/img/spriteStandLeft.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/img/spriteStandRight.png":
/*!**************************************!*\
  !*** ./src/img/spriteStandRight.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/platformSmallTall.png */ "./src/img/platformSmallTall.png");
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









var VELOCITY_Y = 18;
var HORIZONTAL_MAX_TRAVEL_THRESHOLD = 450;
var HORIZONTAL_MIN_TRAVEL_THRESHOLD = 200;
console.log(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var scrollOffset = 0;
canvas.width = 1024;
canvas.height = 576;
var gravity = .9;
var keys = {
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
};

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 1
    };
    this.width = 66;
    this.height = 150;
    this.speed = 10;
    this.image = createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_6__["default"]);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
        left: createImage(_img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
        cropWidth: 177,
        width: 66,
        frameRate: 59
      },
      run: {
        right: createImage(_img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
        cropWidth: 340,
        width: 127.875,
        frameRate: 29,
        left: createImage(_img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_4__["default"])
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = this.sprites.stand.cropWidth;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, 400, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "stopVerticalMovement",
    value: function stopVerticalMovement() {
      this.velocity.y = 0;
    }
  }, {
    key: "stopPlayerHorizontalMovement",
    value: function stopPlayerHorizontalMovement() {
      this.velocity.x = 0;
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;

      if (this.frames > this.sprites.stand.frameRate && (this.currentSprite == this.sprites.stand.right || this.currentSprite == this.sprites.stand.left)) {
        this.frames = 0;
      } else if (this.frames > this.sprites.run.frameRate && (this.currentSprite == this.sprites.run.right || this.currentSprite == this.sprites.run.left)) {
        this.frames = 0;
      }

      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;

      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity; // Increasing the velocity on every update
      } else {// this.stopVerticalMovement(); // Don't increase the velocity as player reached bottom
        }

      if (keys.right.pressed && player.position.x < HORIZONTAL_MAX_TRAVEL_THRESHOLD) {
        this.velocity.x = player.speed;
      } else if (keys.left.pressed && player.position.x > HORIZONTAL_MIN_TRAVEL_THRESHOLD || keys.left.pressed && scrollOffset === 0 && player.position.x - player.width > 0) {
        // move player to left
        this.velocity.x = -player.speed;
      } else {
        // Platform start moving
        this.stopPlayerHorizontalMovement();

        if (keys.right.pressed) {
          scrollOffset += player.speed;
          platforms.forEach(function (platform) {
            // move platform to left
            platform.movePlatform(-player.speed);
          });
          GenericObjects.forEach(function (go) {
            go.position.x -= player.speed * .66;
          });
        } else if (keys.left.pressed && scrollOffset > 0) {
          scrollOffset -= player.speed;
          platforms.forEach(function (platform) {
            // move platform to right
            platform.movePlatform(player.speed);
          });
          GenericObjects.forEach(function (go) {
            go.position.x += player.speed * .66;
          });
        }
      } //Win condition


      if (scrollOffset > 2000) {
        console.log('You win');
      } // loose condition


      if (player.position.y >= canvas.height) {
        init();
      }

      this.draw();
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }, {
    key: "movePlatform",
    value: function movePlatform(velocity) {
      this.position.x += velocity;
    }
  }]);

  return Platform;
}(); // Creating Player


var player = new Player();
player.update(); // Creating Platform

var platformImg;
var platforms = [];
var smallTallPlatformImg; // Creating generic objects

var GenericObjects = [];

function init() {
  // Creating Player
  player = new Player();
  player.update();
  scrollOffset = 0; // Creating Platform

  platformImg = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  smallTallPlatformImg = createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
  console.log(smallTallPlatformImg);
  platforms = [new Platform({
    x: platformImg.width * 5 + 700,
    y: 350,
    image: smallTallPlatformImg
  }), new Platform({
    x: -1,
    y: 452,
    image: platformImg
  }), new Platform({
    x: platformImg.width - 3,
    y: 452,
    image: platformImg
  }), new Platform({
    x: platformImg.width * 2 + 100,
    y: 452,
    image: platformImg
  }), new Platform({
    x: platformImg.width * 3 + 300,
    y: 452,
    image: platformImg
  }), new Platform({
    x: platformImg.width * 4 + 500,
    y: 452,
    image: platformImg
  })]; // Creating generic objects

  GenericObjects = [new GenericObject({
    x: -1,
    y: -2,
    image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new GenericObject({
    x: -1,
    y: -2,
    image: createImage(_img_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  })];
}

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height); // Clearing whold canvas so that object is retained

  GenericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  }); // if player collides with platform

  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.stopVerticalMovement();
    }
  });
  player.update();
}

init();
animate();
addEventListener('keydown', function (_ref3) {
  var keyCode = _ref3.keyCode;

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
}); // Key up

addEventListener('keyup', function (_ref4) {
  var keyCode = _ref4.keyCode;

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
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map