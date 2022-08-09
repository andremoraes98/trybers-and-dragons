import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  static createdArchetype = 0;
  private damage: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Warrior.createdArchetype += 1;
  }

  get energyType(): EnergyType {
    return this.damage;
  }
  
  static createdArchetypeInstances(): number {
    return Warrior.createdArchetype;
  }
}

export default Warrior;