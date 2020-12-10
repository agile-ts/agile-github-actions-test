import MonoOne from "../src";

describe("MonoOne Tests", () => {
  it("should create MonoOne", () => {
    const monoOne = new MonoOne();

    expect(monoOne).toBeInstanceOf(MonoOne);
    expect(monoOne.name).toBe("mono one");
  });

  describe("MonoOne Function Tests", () => {
    let monoOne: MonoOne;

    beforeEach(() => {
      monoOne = new MonoOne();
    });

    describe("setName function tests", () => {
      it("should update name", () => {
        monoOne.setName("cool test");

        expect(monoOne.name).toBe("cool test");
      });
    });

    describe("getName function tests", () => {
      it("should get name", () => {
        monoOne.name = "hello jeff";

        expect(monoOne.getName()).toBe("hello jeff");
      });
    });
  });
});
