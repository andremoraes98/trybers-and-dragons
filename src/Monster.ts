import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._lifePoints;

    const hp = damage > 0
      ? this._lifePoints - damage
      : this._lifePoints;

    this._lifePoints = hp > 0
      ? hp
      : -1;

    return this._lifePoints;
  }

  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}

export default Monster;