const dayOfWeek = require("../index");

describe("dayOfWeek returns the ordinal day of week from a given date", () => {
  test("should return 4", () => {
    expect(dayOfWeek(2019, 11, 14)).toBe(4);
  });
  test("should return 2", () => {
    expect(dayOfWeek(2048, 12, 1)).toBe(2);
  });
  test("should return 6", () => {
    expect(dayOfWeek(1930, 7, 5)).toBe(6);
  });
  test("should return 7", () => {
    expect(dayOfWeek(1822, 4, 7)).toBe(7);
  });
  test("should return 3", () => {
    expect(dayOfWeek(2000, 10, 18)).toBe(3);
  });
  test("should return 1", () => {
    expect(dayOfWeek(2100, 10, 18)).toBe(1);
  });
  test("should return 5", () => {
    expect(dayOfWeek(2427, 2, 26)).toBe(5);
  });
});
