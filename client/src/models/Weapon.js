

export class Weapon {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.type = data.type;
    this.space = data.space;
    this.energyCost = data.energyCost;
    this.damage = data.damage;
  }
}