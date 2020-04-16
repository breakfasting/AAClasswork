import React from 'react';

const ReactTile = ({ tile, updateGame}) => {
  // let tile = props.tile;
  // let { tile } = props;
  let val;


  let state;
  if (tile.explored) {
    state = "tile explored";

    if (tile.bombed) {
      val = '💣';
    } else {
      val = tile.adjacentBombCount();
      if (val === 0) {
        val = '';
      }
    }

  } else {
    state = "tile"
    if (tile.flagged) {
      val = '🚩';
    }
  }

  function handleClick (e) {
    e.preventDefault();
    // console.log(e.altKey)
    updateGame(tile, e.altKey);
  }

  return (
    <div className = {state} onClick = {handleClick}>
      <div>{val}</div>
    </div>
  );
};

export default ReactTile;

