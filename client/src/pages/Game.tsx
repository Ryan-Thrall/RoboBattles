// @ts-ignore
import React, { useContext, useEffect, useState } from 'react';
import Card from '../components/Card';
// @ts-ignore
import { RoboBody } from '../models/RoboBody';
import { Robot } from '../models/Robot';
import { Weapon } from '../models/Weapon';
import { Defense } from '../models/Defense';

function Game() {

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

  const [listOfRedBots, setListOfRedBots] = useState<Robot[]>([]);
  // const [listOfBlueBots, setListOfBlueBots] = useState([{}]);

  const [factoryBot, setfactoryBot] = useState(new Robot({
    id: 1, RoboBody: null,
    Weapon: null,
    Defense: null,
  }))

  const selectCard = (card) => {
    if (card.type === "RoboBody") {
      // @ts-ignore
      setfactoryBot({
        ...factoryBot,
        RoboBody: card,
      });
    }
    if (card.type === "Weapon") {
      // @ts-ignore
      setfactoryBot({
        ...factoryBot,
        Weapon: card,
      });
    }
    if (card.type === "Defense") {
      // @ts-ignore
      setfactoryBot({
        ...factoryBot,
        Defense: card,
      });
    }
  }



  const deployBot = (team) => {
    if (team === "Red") {
      console.log([...listOfRedBots, factoryBot]);
      setListOfRedBots([...listOfRedBots, factoryBot]);

    }
    else if (team === "Blue") {
    }
  }


  useEffect(() => {

  })


  return (
    <div>

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

      <div className="bodySlot w-32 h-32 p-0">
        {factoryBot.RoboBody != null && <Card roboBody={factoryBot.RoboBody} />}


        <div className="weaponSlot w-32 h-32">
          {factoryBot.Weapon != null && <Card weapon={factoryBot.Weapon} />}
        </div>
        <div className="defenseSlot w-32 h-32">
          {factoryBot.Defense != null && <Card defense={factoryBot.Defense} />}
        </div>
      </div>

      <button type="button" onClick={() => deployBot("Red")} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Deploy Red</button>
      <button type="button" onClick={() => deployBot("Blue")} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Deploy Blue</button>

    </div>
  )
}

export default Game;
