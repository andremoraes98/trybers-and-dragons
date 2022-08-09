import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  static createdArchetype = 0;
  private damage: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Mage.createdArchetype += 1;
  }

  get energyType(): EnergyType {
    return this.damage;
  }
  
  static createdArchetypeInstances(): number {
    return Mage.createdArchetype;
  }
}

export default Mage;