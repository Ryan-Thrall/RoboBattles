import React from 'react';

function Card(props) {
  return (
    <div className="border-2 border-black rounded-md w-40 h-48 text-center mx-2">
      <p>{props.roboBody.name}</p>
      <p>Armor: {props.roboBody.maxArmor}</p>
    </div>
  )
}

export default Card;
