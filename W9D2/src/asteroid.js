const Util = require("./util.js");
const MovingObject = require("./moving_object.js");
const Ship = require('./ship.js');

Util.inherits(Asteroid, MovingObject);

Asteroid.COLOR = "#666";
Asteroid.RADIUS = 10;

function Asteroid(obj){
    let options = {
        pos: obj.pos,
        game: obj.game,
        color: Asteroid.COLOR,
        radius: Asteroid.RADIUS,
        vel: Util.randomVec(2)
    };
    MovingObject.call(this, options);
}


Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Ship){
        otherObject.relocate();
    }
    this.game.remove(otherObject);
    this.game.remove(this);
}

module.exports = Asteroid;