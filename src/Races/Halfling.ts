import Race from './Race';

class Halfling extends Race {
  static createdRaces = 0;
  private _maxLifePoints = 60;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.createdRaces += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  static createdRacesInstances(): number {
    return Halfling.createdRaces;
  }
}

export default Halfling;