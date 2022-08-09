import Race from './Race';

class Elf extends Race {
  static createdRaces = 0;
  private _maxLifePoints = 99;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.createdRaces += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  static createdRacesInstances(): number {
    return Elf.createdRaces;
  }
}

export default Elf;