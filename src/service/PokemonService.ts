import {ServiceBase} from './instance';

export default class PokemonService extends ServiceBase {
  static next: string;

  static async Find() {
    return this._find('pokemon');
  }

  static async FindNext() {
    return this._find(this.next);
  }

  private static async GetDetails(data: Array<any>) {
    const request = data.map((x: any) => this.instance.get(x.url));
    const result = await Promise.all(request);

    return result;
  }

  private static async _find(url: string) {
    const data = (await this.instance.get(url)).data;
    this.next = data.next;
    const result = await this.GetDetails(data.results);

    return result;
  }

  static async FindOne(data: number | string) {
    return <Array<any>>(await this.instance.get(`pokemon/${data}`)).data;
  }
}
