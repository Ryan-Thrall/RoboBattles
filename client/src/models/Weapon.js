

export class Weapon {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.space = data.space;
    this.energyCost = data.energyCost;
    this.damage = data.damage;
  }
}