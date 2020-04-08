const Game = require("./game.js");

function GameView(ctx){
    this.ctx = ctx;
    this.game = new Game();
}



GameView.prototype.start = function (){
    const testMove = () => {
        this.bindKeyHandlers();
        this.game.step();
        this.game.draw(this.ctx);
        this.ctx.fillStyle = 'white';
        this.ctx.font = 'bold 30px Arial';
        this.ctx.fillText('Asteroids: ' + this.game.asteroids.length, 10, 470);
    }
    setInterval(testMove, 20);
};

GameView.prototype.bindKeyHandlers = function() {

    let scale = 2;
    key('w', () => { this.game.ship.power([0, -scale]) });
    key('s', () => { this.game.ship.power([0, scale]) });
    key('a', () => { this.game.ship.power([-scale, 0]) });
    key('d', () => { this.game.ship.power([scale, 0]) });
    // window.addEventListener('keypress', this.game.ship.power([0.01, 0]));
};



module.exports = GameView;