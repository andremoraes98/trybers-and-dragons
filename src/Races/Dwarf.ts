import Race from './Race';

class Dwarf extends Race {
  static createdRaces = 0;
  private _maxLifePoints = 80;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.createdRaces += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  static createdRacesInstances(): number {
    return Dwarf.createdRaces;
  }
}

export default Dwarf;