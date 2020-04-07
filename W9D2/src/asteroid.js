const Util = require("./util.js");
const MovingObject = require("./moving_object.js");

Util.inherits(Asteroid, MovingObject);

Asteroid.COLOR = "#666";
Asteroid.RADIUS = 10;

function Asteroid(obj){
    let options = {
        pos: obj.pos,
        game: obj.game,
        color: Asteroid.COLOR,
        radius: Asteroid.RADIUS,
        vel: Util.randomVec(1)
    };
    MovingObject.call(this, options);
}

module.exports = Asteroid;