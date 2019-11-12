const range = require("../index");

describe("range returns the length or 'range' of two numbers, using the step", () => {
  test("should return a total sum of number that ranges from the current value to the end value including the step", () => {
    expect(range(1, 10)).toBe(9);
  });
  test("should return a total sum of number that ranges from the current value to the end value including the step", () => {
    expect(range(1, 10, 2)).toBe(5);
  });
  test("should return a total sum of number that ranges from the current value to the end value including the step", () => {
    expect(range(23, 12, 3)).toBe(-3);
  });
});
