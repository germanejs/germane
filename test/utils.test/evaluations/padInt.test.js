const padInt = require("../../../lib/utils/evaluations/padInt");

describe("Applies the String.prototype.padStart or padEnd method on a number", () => {
  test("should return 0999", () => {
    expect(padInt(999, "padStart", 4, "0")).toBe("0999");
  });
  test("should return 10", () => {
    expect(padInt(1, "padEnd", 2, "0")).toBe("10");
  });
  test("should return 01", () => {
    expect(padInt(1, "padStart", 2, "0")).toBe("01");
  });
});
