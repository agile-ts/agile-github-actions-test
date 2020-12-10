import MonoThree from "../src";

describe("MonoThree Tests", () => {
  it("should create MonoThree", () => {
    const monoThree = new MonoThree();

    expect(monoThree).toBeInstanceOf(MonoThree);
    expect(monoThree.name).toBe("mono three");
  });

  describe("MonoThree Function Tests", () => {
    let monoThree: MonoThree;

    beforeEach(() => {
      monoThree = new MonoThree();
    });

    describe("setName function tests", () => {
      it("should update name", () => {
        monoThree.setName("cool test");

        expect(monoThree.name).toBe("cool test");
      });
    });

    describe("getName function tests", () => {
      it("should get name", () => {
        monoThree.name = "hello jeff";

        expect(monoThree.getName()).toBe("hello jeff");
      });
    });
  });
});
