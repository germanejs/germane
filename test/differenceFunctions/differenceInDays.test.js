const differenceInDays = require("../../lib/differenceInDays");
const germane = require("../../lib/germane");

describe("differenceInDays returns the distance or difference between two dates in days", () => {
  test("should return the number of days between dates specified in test", () => {
    expect(differenceInDays(new Date(), new Date())).toBe(0);

    expect(differenceInDays(new Date("2010-11-19 23:11:02Z"), new Date("2019-01-23 02:17:09Z"))).toBe(
      2987,
    );

    expect(differenceInDays(new Date("2010-11-19 18:34:52Z"), new Date("2000-01-23 12:11:09Z"))).toBe(
      -3953,
    );

    expect(differenceInDays(germane("2019-12-31 18:34:52Z"), germane("1970-01-01"))).toBe(-18261);

    expect(differenceInDays(germane("1920-08-01"), germane("1945-02-11"))).toBe(8960);
  });

  test("should throw errors", () => {
    expect(differenceInDays(new Date("2018 01 11"), new Date(""))).toStrictEqual(
      new RangeError("Invalid Date"),
    );

    expect(differenceInDays("", new Date(""))).toStrictEqual(new TypeError("Invalid Date"));

    expect(differenceInDays(new Date("2018 01 11"), new Date("2019 23 10 23:90:09"))).toStrictEqual(
      new RangeError("Invalid Date"),
    );

    expect(differenceInDays(null)).toStrictEqual(new TypeError("Invalid Date"));
  });
});
