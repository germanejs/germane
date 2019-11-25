const isThursday = require("../index");
const germane = require("../../germane");

describe("isThursday returns a boolean value true if given date's day of week is a sunday", () => {
  test("should return true", () => {
    expect(isThursday(new Date("2098-04-03 23:59:59.999"))).toBe(true);
    expect(isThursday(new Date("2014-12-18 09:11:02.009"))).toBe(true);
    expect(isThursday(germane("2098-03-28T02:59:59.999Z", "America/Los_Angeles"))).toBe(true);
    expect(isThursday(germane("2098-03-26T23:59:59.999Z", "Asia/Baku"))).toBe(true);
  });
  test("should return false", () => {
    expect(isThursday(new Date("1997-03-31 23:59:59.999"))).toBe(false);
    expect(isThursday(new Date("2016-12-14 09:11:02.009"))).toBe(false);
    expect(isThursday(germane("2098-03-30T02:59:59.999Z", "America/Los_Angeles"))).toBe(false);
    expect(isThursday(germane("2098-03-30T23:59:59.999Z", "Asia/Baku"))).toBe(false);
  });

  test("should return an error", () => {
    expect(isThursday(null)).toStrictEqual(new TypeError("Invalid Date"));

    expect(isThursday(germane("2019 09 11"))).toStrictEqual(new TypeError("Invalid Date"));

    expect(isThursday(new Date(""))).toStrictEqual(new RangeError("Invalid Date"));
  });
});
