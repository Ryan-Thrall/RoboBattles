import React from 'react';
import Tile from './Tile.tsx';

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

interface Piece {
  image: string;
  x: number;
  y: number;
}

const pieces: Piece[] = [];

for (let i = 0; i < 8; i++) {
  pieces.push({ image: "assets/RedBot.png", x: i, y: 0 })
}
for (let i = 0; i < 8; i++) {
  pieces.push({ image: "assets/RedBot.png", x: i, y: 7 })
}




function Board() {


  let board: any[] = [];

  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const number = j + i + 2;
      let image = "";

      pieces.forEach(p => {
        if (p.x === i && p.y === j) {
          image = p.image;
        }

      })

      board.push(<Tile image={image} number={number} />);

    }
  }

  return (

    <div id="board">
      {board}
    </div>
  )
}

export default Board;
