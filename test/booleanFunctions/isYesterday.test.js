const isYesterday = require("../../lib/isYesterday");
const germane = require("../../lib/germane");

describe("isYesterday, returns on boolean, whether second given date is in the previous day of the first", () => {
  test("should return true", () => {
    expect(isYesterday(new Date("2019-01-01"), new Date("2018-12-31"))).toBe(true);
    expect(isYesterday(new Date("2012-09-15"), new Date("2012-09-14"))).toBe(true);
    expect(isYesterday(germane("2018-02-14"), germane("2018-02-13"))).toBe(true);
    expect(isYesterday(germane("2030-11-01"), germane("2030-10-31"))).toBe(true);
    expect(isYesterday(germane("2019-12-12T20:19:00Z"), germane("2019-12-11T20:19:00Z"))).toBe(
      true,
    );
  });

  test("should return false", () => {
    expect(isYesterday(germane("2019-01-01"), germane("2018-12-30"))).toBe(false);
    expect(isYesterday(germane("2012-09-15"), germane("2012-09-09"))).toBe(false);
    expect(isYesterday(new Date("2018 02 1"), new Date("2018 01 12"))).toBe(false);
    expect(isYesterday(new Date("2030 11 11"), new Date("2030 11 16"))).toBe(false);
    expect(isYesterday(new Date("2019-12-12T20:19:00"), new Date("2019-12-10T20:19:00"))).toBe(
      false,
    );
  });

  test("should return an error", () => {
    expect(isYesterday(Date.now(), null)).toStrictEqual(new TypeError("Invalid Date"));

    expect(isYesterday(new Date("2019 09 05"), "")).toStrictEqual(new TypeError("Invalid Date"));

    expect(isYesterday({}, Date.now())).toStrictEqual(new TypeError("Invalid Date"));

    expect(isYesterday(new Date("19 19 23"), Date.now())).toStrictEqual(
      new RangeError("Invalid Date"),
    );
  });
});
