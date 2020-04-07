const Game = require("./game.js");

function GameView(ctx){
    this.ctx = ctx;
    this.game = new Game();
}

GameView.prototype.start = function (){
    const testMove = () => {
        this.game.draw(this.ctx);
        this.game.step();
        this.game.draw(this.ctx);
    }
    setInterval(testMove, 20);
}

module.exports = GameView;