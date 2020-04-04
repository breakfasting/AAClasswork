class Clock {
  constructor() {
    let now = new Date();

    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();
    
    this.printTime();

    // setInterval(() => this._tick(), 1000);

    // let that = this;
    // setInterval(function() {
    //     that._tick()
    // }, 1000)

    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    let printSec = this.seconds < 10 ? '0' + this.seconds : this.seconds;
    let printMin = this.minutes < 10 ? '0' + this.minutes : this.minutes;
    let printHour = this.hours < 10 ? '0' + this.hours : this.hours;

    console.log(`${printHour}:${printMin}:${printSec}`);
  }

  _tick() {
    this.seconds++;
    if (this.seconds === 60) {
      this.minutes++;
      this.seconds = 0;
    }
    if (this.minutes === 60) {
      this.hours++;
      this.minutes = 0;
    }
    if (this.hours === 24) this.hours = 0;

    this.printTime();
  }
}

clocky = new Clock();