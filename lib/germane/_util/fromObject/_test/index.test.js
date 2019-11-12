const fromObject = require("../index");

describe("Returns a timestamp from a object of date and time units", () => {
  test("should return 191e10", () => {
    const date = {
      year: 2030,
      month: 6,
      date: 11,
      hours: 11,
      minutes: 33,
      seconds: 20,
      milliseconds: 0,
    };
    expect(fromObject(date)).toBe(191e10);
  });
  test("should return 171340011001", () => {
    const date = {
      year: 1975,
      month: 5,
      date: 7,
      hours: 2,
      minutes: 26,
      seconds: 51,
      milliseconds: 1,
    };
    expect(fromObject(date)).toBe(171340011001);
  });
  test("should return -94646920219", () => {
    const date = {
      year: 1967,
      month: 0,
      date: 1,
      hours: 13,
      minutes: 11,
      seconds: 19,
      milliseconds: 781,
    };
    expect(fromObject(date)).toBe(-94646920219);
  });
  test('should return new RangeError("Invalid Date"', () => {
    const date = {
      year: 1967,
      month: 0,
      date: 1,
      hours: 34,
      minutes: 11,
      seconds: 67,
      milliseconds: 1007,
    };
    expect(fromObject(date)).toStrictEqual(new RangeError("Invalid Date"));
  });
  test('should return new RangeError("Invalid Date"', () => {
    const date = {
      date: 1,
      hours: 1,
      minutes: 11,
      seconds: 2,
      milliseconds: 1,
    };
    expect(fromObject(date)).toStrictEqual(new RangeError("Invalid Date"));
  });
  test('should return new TypeError("Invalid Date"', () => {
    const date = {
      year: 1967,
      month: 0,
      date: 1,
      hours: "34",
      minutes: 11,
      seconds: 2,
      milliseconds: "1007",
    };
    expect(fromObject(date)).toStrictEqual(new TypeError("Invalid Date"));
  });
});
