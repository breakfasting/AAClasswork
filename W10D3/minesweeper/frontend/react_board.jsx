import React from 'react';
import ReactTile from './react_tile'

class ReactBoard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let ct = 0;
    return (
      <div>
        {this.props.board.grid.map( (row,row_idx) => {
          return (
          <div key={row_idx} className = 'row'>
            {row.map( (tile,idx)=>{
              return <ReactTile tile={tile} key={idx} updateGame = {this.props.updateGame}/>
            })}
          </div>)
        } )}
      </div>
    );
  }
}

export default ReactBoard;