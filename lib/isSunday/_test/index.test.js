const isSunday = require("../index");
const germane = require("../../germane");

describe("isSunday returns a boolean value true if given date's day of week is a sunday", () => {
  test("should return true", () => {
    expect(isSunday(new Date("2098-03-30 23:59:59.999"))).toBe(true);
    expect(isSunday(new Date("2014-12-14 09:11:02.009"))).toBe(true);
    expect(isSunday(germane("2098-03-31T02:59:59.999Z", "America/Los_Angeles"))).toBe(true);
    expect(isSunday(germane("2098-03-29T23:59:59.999Z", "Asia/Baku"))).toBe(true);
  });
  test("should return false", () => {
    expect(isSunday(new Date("1997-03-31 23:59:59.999"))).toBe(false);
    expect(isSunday(new Date("2016-12-14 09:11:02.009"))).toBe(false);
    expect(isSunday(germane("2098-03-30T02:59:59.999Z", "America/Los_Angeles"))).toBe(false);
    expect(isSunday(germane("2098-03-30T23:59:59.999Z", "Asia/Baku"))).toBe(false);
  });

  test("should return an error", () => {
    expect(isSunday(null)).toStrictEqual(new TypeError("Invalid Date"));

    expect(isSunday(germane("2019 09 11"))).toStrictEqual(new TypeError("Invalid Date"));

    expect(isSunday(new Date(""))).toStrictEqual(new RangeError("Invalid Date"));
  });
});
