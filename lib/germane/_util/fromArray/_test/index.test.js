const fromArray = require("../index");

describe("fromArray returns a timestamp given an array of date and timeunit (usually in lenght of 2 <= array <= 7", () => {
  test("should return 131e10", () => {
    expect(fromArray([2011, 6, 7, 0, 53, 20, 0])).toBe(131e10);
  });
  test("should return 191e6", () => {
    expect(fromArray([1970, 0, 3, 5, 3, 20, 0])).toBe(191e6);
  });
  test("should return -15507072e5", () => {
    expect(fromArray([1920, 10, 11])).toBe(-15507072e5);
  });
  test("should return -15507072e5", () => {
    expect(fromArray([1920, 10, 11])).toBe(-15507072e5);
  });

  test("should return RangeError[Invalid Date]", () => {
    expect(fromArray([2019, 14, 11, 1])).toStrictEqual(new RangeError("Invalid Date"));
  });
  test("should return RangeError[Invalid Date]", () => {
    expect(fromArray([2019])).toStrictEqual(new RangeError("Invalid Date"));
  });
});
