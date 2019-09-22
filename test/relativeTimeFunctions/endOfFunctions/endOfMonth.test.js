const endOfMonth = require("../../../lib/endOfMonth");
const germane = require("../../../lib/germane");

describe("endOfMonth returns the end of the fien dates' month in either days|hours|minutes|seconds", () => {
  test("should return the difference from each given date to its month end ", () => {
    expect(endOfMonth(germane("2013-09-09 12:34:12Z"))).toBe("In 21 days");
    expect(endOfMonth(germane("2014-12-31 20:12:45Z"))).toBe("In 3 hours");
    expect(endOfMonth(germane("2014-09-30 23:56:59Z"))).toBe("In 3 minutes");
    expect(endOfMonth(new Date("1987-03-31 23:59:59Z"))).toBe("In 0 second");
    expect(endOfMonth(new Date("2017-11-21"))).toBe("In 9 days");
  });
  test("should throw an error", () => {
    expect(endOfMonth(new Date(""))).toStrictEqual(new RangeError("Invalid Date"));

    expect(endOfMonth("" + new Date("2019 10 09 23:12:01"))).toStrictEqual(
      new TypeError("Invalid Date"),
    );

    expect(endOfMonth(null)).toStrictEqual(new TypeError("Invalid Date"));
  });
});
