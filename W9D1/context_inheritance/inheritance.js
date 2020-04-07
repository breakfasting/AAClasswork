

Function.prototype.inherits = function(Parent) {
  function Surrogate() {};
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}

function MovingObject(velocity) {
  this.velocity = velocity;
}

MovingObject.prototype.sayHello = function(){
    console.log("there is no sound in space...");
}

MovingObject.prototype.printVelocity = function () {
    // console.log(this);
    console.log(this.velocity);
}

function Ship(passengers, ...args) {
    MovingObject.call(this, args);
    this.passengers = passengers;
}

function Asteroid(composition) {
    this.composition = composition;
}



Ship.inherits(MovingObject);
let ship1 = new Ship(200, "very fast")

Asteroid.inherits(MovingObject);
let asteroid1 = new Asteroid("cheese");

ship1.sayHello();
asteroid1.sayHello();
console.log(ship1.passengers);
console.log(asteroid1.composition);
console.log(ship1.velocity);
ship1.printVelocity();