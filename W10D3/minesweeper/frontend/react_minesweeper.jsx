import React from 'react';
import ReactDom from 'react-dom';
import {Board} from './minesweeper.js';
import ReactBoard from './react_board'


class Game extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      board: new Board(10,10)
    }
    this.updateGame = this.updateGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  updateGame (tile, flagged) {
    // if (tile.explored) return;

    if (flagged) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({ board: this.state.board })
  }

  restartGame() {
    this.setState({ board: new Board(10, 20) });
  }

  render () {
    let message = ''
    if ( this.state.board.won() ) {
      message = 'Winner!';
    } else if ( this.state.board.lost()) {
      message = 'Game Over LOSER!';
    }

    return (
      <div>
        <ReactBoard board={this.state.board} updateGame={this.updateGame} />
        <h1>{message}</h1>
        
        <section id="modal" className= {`modal ${message.length=== 0 ? "" : "is-active"}`}>
          <article className="modal-content">
            <span className="modal-close js-hide-modal">&times;</span>

            <h1>{message}</h1>
            <button onClick={this.restartGame}>Restart Game!</button>

          </article>
          <div className="modal-screen js-hide-modal"></div>
        </section>

      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDom.render(<Game />, root);
});