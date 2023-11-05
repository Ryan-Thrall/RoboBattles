import React, { useContext, useEffect, useState } from 'react';
import Card from '../components/Card';
// @ts-ignore
import { RoboBody } from '../models/RoboBody';

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

  const [listOfRobobodies, setListOfRobobodies] = useState([]);

  return (
    <div className="m-2 flex">
      <Card roboBody={roboBodies[0]} />
      <Card roboBody={roboBodies[1]} />
      <Card roboBody={roboBodies[2]} />
    </div>
  )
}

export default Game;
