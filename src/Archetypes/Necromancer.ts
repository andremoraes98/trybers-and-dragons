import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  static createdArchetype = 0;
  private damage: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Necromancer.createdArchetype += 1;
  }

  get energyType(): EnergyType {
    return this.damage;
  }
  
  static createdArchetypeInstances(): number {
    return Necromancer.createdArchetype;
  }
}

export default Necromancer;