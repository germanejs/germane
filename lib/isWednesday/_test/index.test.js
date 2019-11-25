const isWednesday = require("../index");
const germane = require("../../germane");

describe("isWednesday returns a boolean value true if given date's day of week is a sunday", () => {
  test("should return true", () => {
    expect(isWednesday(new Date("2098-04-02 23:59:59.999"))).toBe(true);
    expect(isWednesday(new Date("2016-12-14 09:11:02.009"))).toBe(true);
    expect(isWednesday(germane("2098-04-03T02:59:59.999Z", "America/Los_Angeles"))).toBe(true);
    expect(isWednesday(germane("2019-01-02", "Asia/Baku"))).toBe(true);
  });
  test("should return false", () => {
    expect(isWednesday(new Date("1997-03-31 23:59:59.999"))).toBe(false);
    expect(isWednesday(new Date("2016-12-10 09:11:02.009"))).toBe(false);
    expect(isWednesday(germane("2098-03-30T02:59:59.999Z", "America/Los_Angeles"))).toBe(false);
    expect(isWednesday(germane("2098-03-30T23:59:59.999Z", "Asia/Baku"))).toBe(false);
  });

  test("should return an error", () => {
    expect(isWednesday(null)).toStrictEqual(new TypeError("Invalid Date"));

    expect(isWednesday(germane("2019 09 11"))).toStrictEqual(new TypeError("Invalid Date"));

    expect(isWednesday(new Date(""))).toStrictEqual(new RangeError("Invalid Date"));
  });
});
