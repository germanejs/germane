const {
  absFloor, absCeil, floor, trunc, ceil, floordiv, divmod,
} = require("../index");

describe("rounding methods", () => {
  test("should return 4", () => {
    expect(absFloor(4.92323123)).toBe(4);
  });

  test("should return 5", () => {
    expect(absCeil(4.92323123)).toBe(5);
  });

  test("should return -5", () => {
    expect(floor(-4.92323123)).toBe(-5);
  });

  test("should return -4", () => {
    expect(trunc(-4.92323123)).toBe(-4);
  });

  test("should return [10, 50]", () => {
    expect(divmod(650, 60)).toStrictEqual([10, 50]);
  });

  test("should return [5, 3]", () => {
    expect(divmod(23, 4)).toStrictEqual([5, 3]);
  });

  test("should return [-8, -2]", () => {
    expect(divmod(-450, 56)).toStrictEqual([-8, -2]);
  });

  test("should return 0", () => {
    expect(floordiv(5, 7)).toBe(0);
  });
  test("should return -4", () => {
    expect(floordiv(-80, 5)).toBe(-16);
  });
});
