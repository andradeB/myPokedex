export default class Stats {
  name: string;
  effort: number;
  base: number;

  constructor(name: string, effort: number, base: number) {
    this.name = name;
    this.effort = effort;
    this.base = base;
  }
}
