import React from 'react'

interface Props {
  image?: string;
  number: number;
}

function Tile({ number, image }: Props) {
  if (number % 2 === 0) {
    return <div className="tile dark-tile"><img src={image} className="bot" alt="" /></div>;
  } else {
    return <div className="tile light-tile"><img src={image} className="bot" alt="" /></div>;
  }
}

export default Tile;
