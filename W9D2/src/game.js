const Asteroid = require('./asteroid.js');

Game.DIM_X = 640;
Game.DIM_Y = 480;
Game.NUM_ASTEROIDS = 100;

function Game() {
    this.asteroids = [];
    this.addAsteroids();
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
    for (let ast of this.asteroids) {
        ast.draw(ctx);
    }
};

Game.prototype.moveObjects = function () {
    for (let ast of this.asteroids) {
        ast.move();
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
    for (let i = 0; i < this.asteroids.length; i++) {
        for (let j = 0; j < this.asteroids.length; j++) {
            if (i === j) continue;
            if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
                // alert("COLLISION!!");
                this.asteroids[i].color = "red";
                this.asteroids[j].color = "green";
            } else {
                // this.asteroids[i].color = "#666";
                // this.asteroids[j].color = "#666";
            }
        }
    }
};

Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
};

Game.prototype.remove = function(asteroid) {

}

module.exports = Game;