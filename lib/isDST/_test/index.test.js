const isDST = require("../index");
const germane = require("../../germane");

describe("isDST returns true or false whether a given date is a Daylight Savings Time or Not", () => {
  test("should return true", () => {
    expect(isDST(germane("2014-06-11 12:11:00.990Z", "America/Los_Angeles"))).toBe(true);
    expect(isDST(germane("2019-11-24", "America/Santiago"))).toBe(true);
    expect(isDST(germane(1570025576005, "Europe/London"))).toBe(true);
  });
  test("should return false", () => {
    expect(isDST(germane("2019-09-11", "Africa/Windhoek"))).toBe(false);
    expect(isDST(germane("2013-10-09", "Asia/Bangkok"))).toBe(false);
    expect(isDST(germane("2001-01-18 13:11:09", "America/New_York"))).toBe(false);
  });
  test("should return an Error", () => {
    expect(isDST(null)).toStrictEqual(new TypeError("Invalid Date"));
    expect(isDST(germane(""))).toStrictEqual(new TypeError("Invalid Date"));
    expect(isDST(new Date(" "))).toStrictEqual(new RangeError("Invalid Date"));
  });
});
