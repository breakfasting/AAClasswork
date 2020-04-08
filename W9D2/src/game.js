const Asteroid = require('./asteroid.js');
const Ship = require('./ship.js');

Game.DIM_X = 640;
Game.DIM_Y = 480;
Game.NUM_ASTEROIDS = 100;

function Game() {
    this.asteroids = [];
    this.addAsteroids();
    this.ship = new Ship({ 
        pos: this.randomPosition(), 
        game: this
    });
}

Game.prototype.addAsteroids = function () {
    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
        let rand_pos = this.randomPosition();
        let new_ast = new Asteroid({ pos: rand_pos, game: this });
        this.asteroids.push(new_ast);
    }
    // this.asteroids[0].color = "red";
    // this.asteroids[1].color = "slateblue";
};

Game.prototype.randomPosition = function () {
    return [Math.random() * Game.DIM_X, Math.random() * Game.DIM_Y];
};

Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    for (let item of this.allObjects()) {
        item.draw(ctx);
    }
};

Game.prototype.moveObjects = function () {
    for (let item of this.allObjects()) {
        item.move();
    }
};

Game.prototype.wrap = function (pos) {
    if (pos[0] > Game.DIM_X) {
        pos[0] = pos[0] % Game.DIM_X;
    } else if (pos[0] < 0){
        pos[0] = Game.DIM_X;
    }
    if (pos[1] > Game.DIM_Y) {
        pos[1] = pos[1] % Game.DIM_Y;
    } else if (pos[1] < 0){
        pos[1] = Game.DIM_Y;
    }

    return pos;
};

Game.prototype.checkCollisions = function() {
    for (let i = 0; i < this.allObjects().length; i++) {
        for (let j = 0; j < this.allObjects().length; j++) {
            if (i === j) continue;
            if (this.allObjects()[i].isCollidedWith(this.allObjects()[j])) {
                // alert("COLLISION!!");
                // this.asteroids[i].color = "red";
                // this.asteroids[j].color = "green";
                this.allObjects()[i].collideWith(this.allObjects()[j]);
            }
        }
    }
};

Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
};

Game.prototype.remove = function(asteroid) {
    // console.log(this.asteroids);
    this.asteroids = this.asteroids.filter((ast) => {
        return (asteroid.x !== ast.x) && (asteroid.y !== ast.y);
    });
    // console.log(this.asteroids);
}

Game.prototype.allObjects = function(){
    return this.asteroids.concat([this.ship]);
}

module.exports = Game;