import React, { useContext, useEffect, useState } from 'react';
import Card from '../components/Card';
// @ts-ignore
import { RoboBody } from '../models/RoboBody';
import { Robot } from '../models/Robot';
import { Weapon } from '../models/Weapon';
import { Defense } from '../models/Defense';

function Game() {

  const selectCard = (card) => {
    if (card.type === "RoboBody") {
      setRobot1({
        ...robot1,
        RoboBody: card,
      });
    }
    if (card.type === "Weapon") {
      setRobot1({
        ...robot1,
        Weapon: card,
      });
    }
    if (card.type === "Defense") {
      setRobot1({
        ...robot1,
        Defense: card,
      });
    }

    console.log(robot1)
  }

  const roboBodies = [
    new RoboBody({
      id: 1,
      name: "Small Body",
      type: "RoboBody",
      componentSize: 5,
      maxArmor: 8,
      speed: 3,
      energyMod: 1
    }),
    new RoboBody({
      id: 1,
      name: "Medium Body",
      type: "RoboBody",
      componentSize: 10,
      maxArmor: 12,
      speed: 2,
      energyMod: 0
    }),
    new RoboBody({
      id: 1,
      name: "Large Body",
      type: "RoboBody",
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
      type: "Weapon",
      space: 1,
      energyCost: 1,
      damage: 1
    }),
  ]
  const defenses = [
    new Defense({
      id: 1,
      name: "Plating",
      type: "Defense",
      space: 1,
      energyCost: 0,
      block: 1
    }),
  ]

  // const [listOfRobobodies, setListOfRobobodies] = useState([]);
  const [robot1, setRobot1] = useState(new Robot({
    id: 1, RoboBody: null,
    Weapon: null,
    Defense: null,
  }))

  return (
    <div>

      <p>{robot1.RoboBody?.name}</p>
      <p>{robot1.Weapon?.name}</p>
      <p>{robot1.Defense?.name}</p>

      <div className="m-2 flex justify-center">
        <div className="slot blue"></div>
        <div className="slot blue"></div>
        <div className="slot blue"></div>
        <div className="slot blue"></div>
        <div className="slot blue"></div>
        <div className="slot blue"></div>
        <div className="slot blue"></div>
      </div>
      <div className="m-2 flex justify-center">
        <div className="slot red"></div>
        <div className="slot red"></div>
        <div className="slot red"></div>
        <div className="slot red"></div>
        <div className="slot red"></div>
        <div className="slot red"></div>
        <div className="slot red"></div>
      </div>

      <p>RoboBodies:</p>
      <div className="flex">
        {roboBodies.map(body =>
          <button className="cursor-pointer" onClick={() => selectCard(body)}>
            <Card roboBody={body} key={body.id} />
          </button>
        )}
      </div>

      <p>Weapons:</p>
      <div className="flex">
        {weapons.map(weapon =>
          <button className="cursor-pointer" onClick={() => selectCard(weapon)}>
            <Card weapon={weapon} key={weapon.id} />
          </button>
        )}
      </div>

      <p>Defenses:</p>
      <div className="flex">
        {defenses.map(defense =>
          <button className="cursor-pointer" onClick={() => selectCard(defense)}>
            <Card defense={defense} key={defense.id} />
          </button>
        )}
      </div>

      <div className="factorySlot">
        {robot1.RoboBody != null && <Card roboBody={robot1.RoboBody} />}


        <div className="weaponSlot">
          {robot1.Weapon != null && <Card weapon={robot1.Weapon} />}
        </div>
        <div className="defenseSlot">
          {robot1.Defense != null && <Card defense={robot1.Defense} />}
        </div>
      </div>

    </div>
  )
}

export default Game;
