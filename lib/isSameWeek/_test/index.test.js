const isSameWeek = require("../index");
const germane = require("../../germane");
describe("isSameWeek, returns on boolean, whether second given date is in the same week of the first", () => {
  test("should return false", () => {
    expect(isSameWeek(germane("2019-01-01", "UTC"), germane("2018-12-25", "UTC"))).toBe(false);
    expect(isSameWeek(germane("2012-09-15", "UTC"), germane("2012-09-08", "UTC"))).toBe(false);
    expect(isSameWeek(germane("2018-02-14", "UTC"), germane("2018-02-09", "UTC"))).toBe(false);
    expect(isSameWeek(germane("2030-11-01", "UTC"), germane("2030-10-20", "UTC"))).toBe(false);
    expect(
      isSameWeek(germane("2019-12-12T20:19:00Z", "UTC"), germane("2019-12-01T20:19:00Z", "UTC")),
    ).toBe(false);
  });

  test("should return true", () => {
    expect(isSameWeek(germane("2019-01-01", "UTC"), germane("2018-12-31", "UTC"))).toBe(true);
    expect(isSameWeek(germane("2012-09-15", "UTC"), germane("2012-09-09", "UTC"))).toBe(true);
    expect(isSameWeek(germane("2018-02-01", "UTC"), germane("2018-01-31", "UTC"))).toBe(true);
    expect(isSameWeek(germane("2030-11-11", "UTC"), germane("2030-11-16", "UTC"))).toBe(true);
    expect(
      isSameWeek(germane("2019-12-12T20:19:00", "UTC"), germane("2019-12-10T20:19:00", "UTC")),
    ).toBe(true);
  });

  test("should return an error", () => {
    expect(isSameWeek(Date.now(), null)).toStrictEqual(new TypeError("Invalid Date"));

    expect(isSameWeek(new Date("2019 09 05"), "")).toStrictEqual(new TypeError("Invalid Date"));

    expect(isSameWeek({}, Date.now())).toStrictEqual(new TypeError("Invalid Date"));

    expect(isSameWeek(new Date(""), Date.now())).toStrictEqual(new RangeError("Invalid Date"));
  });
});
