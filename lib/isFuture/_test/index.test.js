const isFuture = require("../index");
const germane = require("../../germane");

describe("isFuture, checks whether its seconds parameter is the passed date of the first", () => {
  test("should return false", () => {
    expect(isFuture(germane("2019-12-08"), germane("2018-11-04"))).toBe(false);
    expect(isFuture(germane("2019-05-12T12:09:18.670Z"), germane("2018-04-05"))).toBe(false);
    expect(
      isFuture(new Date(1200, 1, 12, 14, 13, 4, 200), new Date(1200, 1, 12, 14, 13, 4, 100)),
    ).toBe(false);
    expect(isFuture(new Date("2000/01/01"), new Date("1999 12 31 23:56:00"))).toBe(false);
    expect(isFuture(new Date("2040 02 27 13:23:12"), new Date("2040 02 27 12:00:00"))).toBe(false);
  });

  test("should return true", () => {
    expect(isFuture(germane("1000-10-10"), germane("1000-11-10"))).toBe(true);
    expect(
      isFuture(germane("2019-09-02T12:09:18.670Z"), new Date(2021, 5, 13, 21, 0, 1, 450)),
    ).toBe(true);
    expect(isFuture(new Date(1200, 13, 23, 14, 13, 4, 200), new Date("2019 07 04"))).toBe(true);
    expect(isFuture(new Date("2000/01/01"), new Date("2019 12 09"))).toBe(true);
  });

  test("should throw an invalid date error", () => {
    expect(isFuture(null)).toStrictEqual(new TypeError("Invalid Date"));

    expect(isFuture(undefined)).toStrictEqual(new TypeError("Invalid Date"));

    expect(isFuture(new Date("19, 19, 19"), new Date(2100, 4, 6))).toStrictEqual(
      new RangeError("Invalid Date"),
    );
  });
});
