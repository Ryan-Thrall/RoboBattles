export class RoboBody {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.type = data.type;
    this.componentSize = data.componentSize;
    this.maxArmor = data.maxArmor;
    this.armor = data.armor;
    this.speed = data.speed;
    this.energyMod = data.energyMod;
  }
}