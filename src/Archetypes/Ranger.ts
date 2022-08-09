import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  static createdArchetype = 0;
  private damage: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Ranger.createdArchetype += 1;
  }

  get energyType(): EnergyType {
    return this.damage;
  }
  
  static createdArchetypeInstances(): number {
    return Ranger.createdArchetype;
  }
}

export default Ranger;