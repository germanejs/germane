const differenceInWeeks = require("../../lib/differenceInWeeks");
const germane = require("../../lib/germane");

describe("differenceInWeeks returns the distance or difference between two dates in days", () => {
  test("should return the number of days between dates specified in test", () => {
    expect(
      differenceInWeeks(new Date("2019-12-11 17:45:23Z"), new Date("2019-12-11 17:45:23Z")),
    ).toBe(0);

    // should default to "absFloor" as rounding method.
    expect(
      differenceInWeeks(germane("2010-11-19 23:11:02Z"), germane("2019-01-23 02:17:09Z")),
    ).toBe(426);

    expect(
      differenceInWeeks(germane("2010-11-19 18:34:52Z"), germane("2000-01-23 12:11:09Z")),
    ).toBe(564);

    expect(
      differenceInWeeks(new Date("2019 12 31 18:34:52"), new Date("1970 01 01 12:11:09")),
    ).toBe(2608);
  });

  test("should throw errors", () => {
    expect(differenceInWeeks(new Date("2018 01 11"), germane(""))).toStrictEqual(
      new TypeError("Invalid Date"),
    );

    expect(differenceInWeeks(germane(null), new Date(""))).toStrictEqual(
      new TypeError("Invalid Date"),
    );

    expect(
      differenceInWeeks(new Date("2018 01 11"), new Date("2019 23 10 23:90:09")),
    ).toStrictEqual(new RangeError("Invalid Date"));

    expect(differenceInWeeks(null)).toStrictEqual(new TypeError("Invalid Date"));
  });
});
