const isWeekend = require("../../lib/isWeekend");
const germane = require("../../lib/germane");

describe("isWeekend, returns on boolean, whether second given date is a non business day (weekend)", () => {
  test("should return true", () => {
    expect(isWeekend(new Date("2019 12 01"))).toBe(true);
    expect(isWeekend(new Date("2012 09 15"))).toBe(true);
    expect(isWeekend(germane("2018-02-10"))).toBe(true);
    expect(isWeekend(germane("2030-11-02"))).toBe(true);
    expect(isWeekend(germane("2019-12-15T20:19:00"))).toBe(true);
  });

  test("should return false", () => {
    expect(isWeekend(new Date("2019 12 05"))).toBe(false);
    expect(isWeekend(new Date("2012 09 18"))).toBe(false);
    expect(isWeekend(new Date("2018 02 14"))).toBe(false);
    expect(isWeekend(new Date("2027 07 05"))).toBe(false);
    expect(isWeekend(new Date("2027-12-31T20:19:00"))).toBe(false);
  });

  test("should return an error", () => {
    expect(isWeekend(null)).toStrictEqual(new TypeError("Invalid Date"));

    expect(isWeekend(new Date("2019 19 19"))).toStrictEqual(new RangeError("Invalid Date"));

    expect(isWeekend({})).toStrictEqual(new TypeError("Invalid Date"));

    expect(isWeekend(new Date(""))).toStrictEqual(new RangeError("Invalid Date"));
  });
});
