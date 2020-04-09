class View {
  constructor(game, $el) {
    this.game = game;
    this.$grid = $el;
    this.$grid.append(this.setupBoard());
    this.bindEvents();
  }

  bindEvents() {
    $("ul").on("click", "li", (event) => {
      // this.game.playMove([]);
      // console.log($(this).data("pos"));
      let id = event.currentTarget.id;
      let pos = $(`li#${id}`).data("pos");
      this.makeMove($(`li#${id}`));
      this.game.playMove(pos);
      if (this.game.isOver()) {
        alert(this.game.winner());
      };
    });
  }
  
  makeMove($square) {
    $square.text(`${this.game.currentPlayer}`);
    $square.css('background-color', 'white');
    
    if (this.game.currentPlayer === 'x') {
      $square.css('color', 'orange');
    } else {
      $square.css('color', 'purple');
    }

  }

  setupBoard() {
    const board = $("<ul></ul>");

    let i = 0;
    while (i < 9) {
      let li = $(`<li id="${i}"></li>`);
      li.data("pos", [Math.floor(i/3),i%3])
      board.append(li);
      i++;
    }
    return board;
  }
}




module.exports = View;
