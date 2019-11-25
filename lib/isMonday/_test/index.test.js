const isMonday = require("../index");
const germane = require("../../germane");

describe("isMonday returns a boolean value true if given date's day of week is a sunday", () => {
  test("should return true", () => {
    expect(isMonday(new Date("2098-03-31 23:59:59.999"))).toBe(true);
    expect(isMonday(new Date("2014-12-15 09:11:02.009"))).toBe(true);
    expect(isMonday(germane("2098-04-01T02:59:59.999Z", "America/Los_Angeles"))).toBe(true);
    expect(isMonday(germane("2098-03-30T23:59:59.999Z", "Asia/Baku"))).toBe(true);
  });
  test("should return false", () => {
    expect(isMonday(new Date("1997-03-26 23:59:59.999"))).toBe(false);
    expect(isMonday(new Date("2016-12-11 09:11:02.009"))).toBe(false);
    expect(isMonday(germane("2098-03-30T02:59:59.999Z", "America/Los_Angeles"))).toBe(false);
    expect(isMonday(germane("2098-03-29T23:59:59.999Z", "Asia/Baku"))).toBe(false);
  });

  test("should return an error", () => {
    expect(isMonday(null)).toStrictEqual(new TypeError("Invalid Date"));

    expect(isMonday(germane("2019 09 11"))).toStrictEqual(new TypeError("Invalid Date"));

    expect(isMonday(new Date(""))).toStrictEqual(new RangeError("Invalid Date"));
  });
});
