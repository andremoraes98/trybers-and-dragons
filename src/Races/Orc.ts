import Race from './Race';

class Orc extends Race {
  static createdRaces = 0;
  private _maxLifePoints = 74;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.createdRaces += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  static createdRacesInstances(): number {
    return Orc.createdRaces;
  }
}

export default Orc;