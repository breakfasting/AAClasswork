const Util = require("./util.js");
const MovingObject = require("./moving_object.js");

Util.inherits(Ship, MovingObject);

Ship.RADIUS = 10;
Ship.COLOR = 'yellow';

function Ship(obj) {
  let options = {
    pos: obj.pos,
    vel: [0, 0],
    radius: Ship.RADIUS,
    color: Ship.COLOR,
    game: obj.game
  };
  MovingObject.call(this, options);
}

Ship.prototype.relocate = function(){
    let randPos = this.game.randomPosition();
    this.x = randPos[0];
    this.y = randPos[1];
    this.vx = 0;
    this.vy = 0;
}

Ship.prototype.power = function(impulse){
    // let scale = 1;
    // if (Math.abs(this.vx) <= scale){
    //     this.vx += impulse[0];
    // }
    // }
    // if (Math.abs(this.vy) < scale){
    //     this.vy += impulse[1];
    // }

    this.vx = impulse[0];
    this.vy = impulse[1];  


    // console.log("x: " + this.vx);
    // console.log("y: " + this.vy);
}

module.exports = Ship;