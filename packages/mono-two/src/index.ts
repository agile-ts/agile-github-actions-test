export default class MonoTwo {
    public name = "mono two";

    public getName(): string {
        return this.name;
    }

    public setName(value: string): this {
        this.name = value;
        return this;
    }
}
