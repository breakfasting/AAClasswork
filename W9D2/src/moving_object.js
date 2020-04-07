function MovingObject(obj) {
  this.x = obj.pos[0];
  this.y = obj.pos[1];
  this.vx = obj.vel[0];
  this.vy = obj.vel[1];
  this.radius = obj.radius;
  this.color = obj.color;
  this.game = obj.game;
}

MovingObject.prototype.draw = function (ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
};

MovingObject.prototype.move = function() {
    let newPos = this.game.wrap([this.x + this.vx, this.y + this.vy]);
    this.x = newPos[0];
    this.y = newPos[1];
};

MovingObject.prototype.isCollidedWith = function (otherObject) {
    let dist = Math.sqrt((this.x - otherObject.x) ** 2 + (this.y - otherObject.y) ** 2);
    let radSum = this.radius + otherObject.radius;
    return dist <= radSum;
};

module.exports = MovingObject;