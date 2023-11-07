import React from 'react';
import classNames from 'classnames';

function Card(props) {
  return (
    <div className={classNames("border-2", "border-black", "rounded-md", "w-32", "h-32", "text-center", "mx-2", {
      'bg-red-200': props.weapon != null,
      'bg-gray-200': props.roboBody != null,
      'bg-blue-200': props.defense != null
    })}>

      {props.roboBody != null &&
        <div>
          <p>{props.roboBody.name}</p>
          <p>Armor: {props.roboBody.maxArmor}</p>
        </div>
      }

      {props.weapon != null &&
        <div>
          <p>{props.weapon.name}</p>
          <p>Damage: {props.weapon.damage}</p>
          <p>EnergyCost: {props.weapon.energyCost}</p>
        </div>
      }
      {props.defense != null &&
        <div>
          <p>{props.defense.name}</p>
          <p>Block: {props.defense.block}</p>
          <p>EnergyCost: {props.defense.energyCost}</p>
        </div>
      }

    </div>
  )
}

export default Card;
