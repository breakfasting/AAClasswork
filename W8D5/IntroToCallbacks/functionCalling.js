Function.prototype.myBind = (context) => this.apply(context);
  // // Function.prototype.apply(context, [this]);
  // debugger;
  // return this.apply(context);
// };

class Lamp {
  constructor() {
    this.thingName = "a lamp";
  }
}

const turnOn = function() {
  console.log("Turning on " + this.thingName);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
boundTurnOn(); // should say "Turning on a lamp"

const myBoundTurnOn = turnOn.myBind(lamp);
debugger
myBoundTurnOn(); // should say "Turning on a lamp"