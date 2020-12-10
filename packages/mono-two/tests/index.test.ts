import MonoTwo from "../src";

describe("MonoTwo Tests", () => {
  it("should create MonoTwo", () => {
    const monoTwo = new MonoTwo();

    expect(monoTwo).toBeInstanceOf(MonoTwo);
    expect(monoTwo.name).toBe("mono two");
  });

  describe("MonoTwo Function Tests", () => {
    let monoTwo: MonoTwo;

    beforeEach(() => {
      monoTwo = new MonoTwo();
    });

    describe("setName function tests", () => {
      it("should update name", () => {
        monoTwo.setName("cool test");

        expect(monoTwo.name).toBe("cool test");
      });
    });

    describe("getName function tests", () => {
      it("should get name", () => {
        monoTwo.name = "hello jeff";

        expect(monoTwo.getName()).toBe("hello jeff");
      });
    });
  });
});
