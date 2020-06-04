import Stats from './Stats';

export default class Pokemon {
  id: number;
  name: string;
  types: Array<any>;
  image: string;
  primaryType: string;
  speed: Stats;
  specialDefense: Stats;
  specialAttack: Stats;
  defense: Stats;
  attack: Stats;
  hp: Stats;

  constructor(
    id: number,
    name: string,
    types: Array<any>,
    image: string,
    speed: Stats,
    specialDefense: Stats,
    specialAttack: Stats,
    defense: Stats,
    attack: Stats,
    hp: Stats,
  ) {
    this.id = id;
    this.name = name;
    this.types = types;
    this.image = image;
    this.primaryType = types[0].name;
    this.speed = speed;
    this.specialDefense = specialDefense;
    this.specialAttack = specialAttack;
    this.defense = defense;
    this.attack = attack;
    this.hp = hp;
  }

  private static formatStats(data: Array<any>) {
    array.forEach((element) => {});
  }

  private static sortTypes(a: any, b: any): number {
    return a.slot > b.slot ? 1 : a.slot < b.slot ? -1 : 0;
  }

  private static getStats(
    description: string,
    name: string,
    arr: Array<any>,
  ): Stats {
    const data = arr.find((x) => x.stat.name == name);

    return new Stats(description, data.effort, data.base_stat);
  }

  static fromJson(data: any): Pokemon {
    const id = data.id;
    const name = data.name;
    const types = data.types.sort(this.sortTypes).map((y: any) => y.type);
    const image = `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`;

    const speed = this.getStats('Speed', 'speed', data.stats);
    const specialDefense = this.getStats('Speed', 'speed', data.stats);
    const specialAttack = this.getStats('Sp. Atk', 'speed', data.stats);
    const defense = this.getStats('Sp. Def', 'speed', data.stats);
    const attack = this.getStats('Attack', 'speed', data.stats);
    const hp = this.getStats('Hp', 'speed', data.stats);

    return new Pokemon(
      id,
      name,
      types,
      image,
      speed,
      specialDefense,
      specialAttack,
      defense,
      attack,
      hp,
    );
  }
}
