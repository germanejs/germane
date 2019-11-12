const dirtify = require("../index");

describe("dirtify adds 'dirty words' to a string in order to escape it", () => {
  test("should add a dirty word to the string", () => {
    expect(dirtify("Hello [World], Head[Quarters]")).toBe("Hello _multi_, Head_multi_");
    expect(
      dirtify(
        "I'm not reliant on anyone [friends, family, job, colleagues], trust me life is all ready enough [troubles, pain, whatever]",
      ),
    ).toBe("I'm not reliant on anyone _multi_, trust me life is all ready enough _multi_");
  });
});
