import React from 'react';

export class Robot extends React.Component {
  constructor(data) {
    super(data);
    this.id = data.id;
    this.RoboBody = data.RoboBody;
    this.Battery = data.Battery;
    this.Weapon = data.Weapon;
    this.Defense = data.Defense;
    this.Special = data.Special;
    this.position = data.position;
  }
}