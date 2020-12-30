export default class MonoThree {
  public name = "mono three";

  public getName(): string {
    return this.name;
  }

  public setName(value: string): this {
    this.name = value;
    return this;
  }

  public getRandomString():string {
    return "random0";
  }
}
