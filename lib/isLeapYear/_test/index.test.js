const isLeapYear = require("../index");
const germane = require("../../germane");
describe("isLeapYear checks if a given date's year is a leap year", () => {
  test("should return true", () => {
    expect(isLeapYear(new Date("2016-01-11 09:11"))).toBe(true);
    expect(isLeapYear(new Date("2000-01-22 11:11"))).toBe(true);
    expect(isLeapYear(new Date("2020-09-27 23:11"))).toBe(true);
    expect(isLeapYear(new Date("1972-05-19 02:11"))).toBe(true);
  });
  test("should return false", () => {
    expect(isLeapYear(new Date("2017-01-11 09:11"))).toBe(false);
    expect(isLeapYear(new Date("2006-01-22 11:11"))).toBe(false);
    expect(isLeapYear(new Date("2021-09-27 23:11"))).toBe(false);
    expect(isLeapYear(new Date("1970-05-19 02:11"))).toBe(false);
  });

  test("should return an error", () => {
    expect(isLeapYear(null)).toStrictEqual(new TypeError("Invalid Date"));

    expect(isLeapYear(germane("2019 09 11"))).toStrictEqual(new TypeError("Invalid Date"));

    expect(isLeapYear(new Date(""))).toStrictEqual(new RangeError("Invalid Date"));
  });
});
