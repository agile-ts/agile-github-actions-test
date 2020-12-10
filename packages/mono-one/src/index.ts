export default class MonoOne {
    public name = "mono one";

    public getName(): string {
        return this.name;
    }

    public setName(value: string): this {
        this.name = value;
        return this;
    }
}
