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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.COLOR = \"#666\";\nAsteroid.RADIUS = 10;\n\nfunction Asteroid(obj){\n    let options = {\n        pos: obj.pos,\n        game: obj.game,\n        color: Asteroid.COLOR,\n        radius: Asteroid.RADIUS,\n        vel: Util.randomVec(2)\n    };\n    MovingObject.call(this, options);\n}\n\n\nAsteroid.prototype.collideWith = function (otherObject) {\n    if (otherObject instanceof Ship){\n        otherObject.relocate();\n    }\n    this.game.remove(otherObject);\n    this.game.remove(this);\n}\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nGame.DIM_X = 640;\nGame.DIM_Y = 480;\nGame.NUM_ASTEROIDS = 100;\n\nfunction Game() {\n    this.asteroids = [];\n    this.addAsteroids();\n    this.ship = new Ship({ \n        pos: this.randomPosition(), \n        game: this\n    });\n}\n\nGame.prototype.addAsteroids = function () {\n    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {\n        let rand_pos = this.randomPosition();\n        let new_ast = new Asteroid({ pos: rand_pos, game: this });\n        this.asteroids.push(new_ast);\n    }\n    // this.asteroids[0].color = \"red\";\n    // this.asteroids[1].color = \"slateblue\";\n};\n\nGame.prototype.randomPosition = function () {\n    return [Math.random() * Game.DIM_X, Math.random() * Game.DIM_Y];\n};\n\nGame.prototype.draw = function (ctx) {\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    for (let item of this.allObjects()) {\n        item.draw(ctx);\n    }\n};\n\nGame.prototype.moveObjects = function () {\n    for (let item of this.allObjects()) {\n        item.move();\n    }\n};\n\nGame.prototype.wrap = function (pos) {\n    if (pos[0] > Game.DIM_X) {\n        pos[0] = pos[0] % Game.DIM_X;\n    } else if (pos[0] < 0){\n        pos[0] = Game.DIM_X;\n    }\n    if (pos[1] > Game.DIM_Y) {\n        pos[1] = pos[1] % Game.DIM_Y;\n    } else if (pos[1] < 0){\n        pos[1] = Game.DIM_Y;\n    }\n\n    return pos;\n};\n\nGame.prototype.checkCollisions = function() {\n    for (let i = 0; i < this.allObjects().length; i++) {\n        for (let j = 0; j < this.allObjects().length; j++) {\n            if (i === j) continue;\n            if (this.allObjects()[i].isCollidedWith(this.allObjects()[j])) {\n                // alert(\"COLLISION!!\");\n                // this.asteroids[i].color = \"red\";\n                // this.asteroids[j].color = \"green\";\n                this.allObjects()[i].collideWith(this.allObjects()[j]);\n            }\n        }\n    }\n};\n\nGame.prototype.step = function() {\n    this.moveObjects();\n    this.checkCollisions();\n};\n\nGame.prototype.remove = function(asteroid) {\n    // console.log(this.asteroids);\n    this.asteroids = this.asteroids.filter((ast) => {\n        return (asteroid.x !== ast.x) && (asteroid.y !== ast.y);\n    });\n    // console.log(this.asteroids);\n}\n\nGame.prototype.allObjects = function(){\n    return this.asteroids.concat([this.ship]);\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction GameView(ctx){\n    this.ctx = ctx;\n    this.game = new Game();\n}\n\n\n\nGameView.prototype.start = function (){\n    const testMove = () => {\n        this.bindKeyHandlers();\n        this.game.step();\n        this.game.draw(this.ctx);\n        this.ctx.fillStyle = 'white';\n        this.ctx.font = 'bold 30px Arial';\n        this.ctx.fillText('Asteroids: ' + this.game.asteroids.length, 10, 470);\n    }\n    setInterval(testMove, 20);\n};\n\nGameView.prototype.bindKeyHandlers = function() {\n\n    let scale = 2;\n    key('w', () => { this.game.ship.power([0, -scale]) });\n    key('s', () => { this.game.ship.power([0, scale]) });\n    key('a', () => { this.game.ship.power([-scale, 0]) });\n    key('d', () => { this.game.ship.power([scale, 0]) });\n    // window.addEventListener('keypress', this.game.ship.power([0.01, 0]));\n};\n\n\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\nwindow.addEventListener(\"DOMContentLoaded\", function() {\n    let canvas = document.getElementById(\"game-canvas\");\n    let ctx = canvas.getContext(\"2d\");\n    const gameView = new GameView(ctx);\n    gameView.start();\n    \n    // window.GameView = GameView;\n});\n\nconsole.log(\"Webpack is working!\");\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(obj) {\n  this.x = obj.pos[0];\n  this.y = obj.pos[1];\n  this.vx = obj.vel[0];\n  this.vy = obj.vel[1];\n  this.radius = obj.radius;\n  this.color = obj.color;\n  this.game = obj.game;\n}\n\nMovingObject.prototype.draw = function (ctx) {\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n};\n\nMovingObject.prototype.move = function() {\n    let newPos = this.game.wrap([this.x + this.vx, this.y + this.vy]);\n    this.x = newPos[0];\n    this.y = newPos[1];\n};\n\nMovingObject.prototype.isCollidedWith = function (otherObject) {\n    let dist = Math.sqrt((this.x - otherObject.x) ** 2 + (this.y - otherObject.y) ** 2);\n    let radSum = this.radius + otherObject.radius;\n    return dist <= radSum;\n};\n\nMovingObject.prototype.collideWith = function(otherObject) {\n  // this.game.remove(otherObject);\n  // this.game.remove(this);\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nUtil.inherits(Ship, MovingObject);\n\nShip.RADIUS = 10;\nShip.COLOR = 'yellow';\n\nfunction Ship(obj) {\n  let options = {\n    pos: obj.pos,\n    vel: [0, 0],\n    radius: Ship.RADIUS,\n    color: Ship.COLOR,\n    game: obj.game\n  };\n  MovingObject.call(this, options);\n}\n\nShip.prototype.relocate = function(){\n    let randPos = this.game.randomPosition();\n    this.x = randPos[0];\n    this.y = randPos[1];\n    this.vx = 0;\n    this.vy = 0;\n}\n\nShip.prototype.power = function(impulse){\n    // let scale = 1;\n    // if (Math.abs(this.vx) <= scale){\n    //     this.vx += impulse[0];\n    // }\n    // }\n    // if (Math.abs(this.vy) < scale){\n    //     this.vy += impulse[1];\n    // }\n\n    this.vx = impulse[0];\n    this.vy = impulse[1];  \n\n\n    // console.log(\"x: \" + this.vx);\n    // console.log(\"y: \" + this.vy);\n}\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    function Surrogate() {}\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.construtor = childClass;\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });