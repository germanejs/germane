const { getDaysInYear, daysInPrevMonths } = require("../index");

describe("An array containing the total days in a month", () => {
  test("should return an object of the days in each 12 month of a year", () => {
    expect(getDaysInYear(2019)).toStrictEqual([
      null,
      31,
      28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ]);

    expect(getDaysInYear(1980)).toStrictEqual([
      null,
      31,
      29,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ]);
  });
});

describe("Returns the totals days of a specified ranges of month in a year", () => {
  test("should return 151", () => {
    expect(daysInPrevMonths(2019, 6)).toBe(151);
  });
  test("should return 244", () => {
    expect(daysInPrevMonths(2020, 9)).toBe(244);
  });
  test("should return 121", () => {
    expect(daysInPrevMonths(2016, 5)).toBe(121);
  });
  test("should return 304", () => {
    expect(daysInPrevMonths(2011, 11)).toBe(304);
  });
});
