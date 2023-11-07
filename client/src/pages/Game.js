import React, { useContext, useEffect, useState } from 'react';
import Card from '../components/Card';
// @ts-ignore
import { RoboBody } from '../models/RoboBody';
import { Weapon } from '../models/Weapon';
import { Defense } from '../models/Defense';

function Game() {

  const roboBodies = [
    new RoboBody({
      id: 1,
      name: "Small Body",
      componentSize: 5,
      maxArmor: 8,
      speed: 3,
      energyMod: 1
    }),
    new RoboBody({
      id: 1,
      name: "Medium Body",
      componentSize: 10,
      maxArmor: 12,
      speed: 2,
      energyMod: 0
    }),
    new RoboBody({
      id: 1,
      name: "Large Body",
      componentSize: 15,
      maxArmor: 16,
      speed: 1,
      energyMod: -1
    }),
  ];

  const weapons = [
    new Weapon({
      id: 1,
      name: "Fist",
      space: 1,
      energyCost: 1,
      damage: 1
    }),
  ]
  const defenses = [
    new Defense({
      id: 1,
      name: "Plating",
      space: 1,
      energyCost: 0,
      block: 1
    }),
  ]

  const [listOfRobobodies, setListOfRobobodies] = useState([]);

  return (
    <div>
      <div className="m-2 flex justify-center">


        <div className="slot"></div>
        <div className="slot"></div>
        <div className="slot"></div>
        <div className="slot"></div>
        <div className="slot"></div>
        <div className="slot"></div>
      </div>

      <p>RoboBodies:</p>
      <div className="flex">
        {roboBodies.map(body => <Card roboBody={body} />)}
      </div>

      <p>Weapons:</p>
      <div className="flex">
        {weapons.map(weapon => <Card weapon={weapon} />)}
      </div>

      <p>Defenses:</p>
      <div className="flex">
        {defenses.map(defense => <Card defense={defense} />)}
      </div>

    </div>
  )
}

export default Game;
