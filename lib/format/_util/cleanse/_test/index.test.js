const cleanse = require("../index");

describe("cleanse removes 'dirty words' to a string in order to escape it", () => {
  test("should remove the dirty word from the string and replace it with the original", () => {
    expect(cleanse("Hello [World]", "Hello _multi_")).toBe("Hello World");
    expect(
      cleanse(
        "I'm not reliant on anyone including [friends, family, job, colleagues], trust me life is all ready enough [troubles, pain, whatever]",
        "I'm not reliant on anyone including _multi_, trust me life is all ready enough _multi_",
      ),
    ).toBe(
      "I'm not reliant on anyone including friends, family, job, colleagues, trust me life is all ready enough troubles, pain, whatever",
    );
  });
});
