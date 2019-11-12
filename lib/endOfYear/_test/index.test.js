const endOfYear = require("../index");
const germane = require("../../germane");

describe("endOfYear returns the difference between given date till when its year ends", () => {
  test("should return difference till given here end ", () => {
     // -05:00 -offset
    expect(endOfYear(germane("2019-02-28", "America/New_York")).toISOString()).toBe(
     "2020-01-01T04:59:59.999Z",
    );
    // 01:00 -offset
    expect(endOfYear(germane("2011-04-01 06:18:45Z", "Africa/Lagos")).toISOString()).toBe(
      "2011-12-31T22:59:59.999Z",
    );

    // 01:00 -offset
    expect(endOfYear(germane("2030-12-31 23:55:17Z", "Europe/Paris")).toISOString()).toBe(
      "2031-12-31T22:59:59.999Z"
    );
    // -04:30 -offset
    expect(endOfYear(germane("1920-12-31 23:59:00Z", "America/Caracas")).toISOString()).toBe(
      "1921-01-01T04:29:59.999Z"
    );

  });

  test("should throw an error", () => {
    expect(endOfYear(new Date(""))).toStrictEqual(new RangeError("Invalid Date"));

    expect(endOfYear("" + new Date("2019 10 09 23:12:01"))).toStrictEqual(
      new TypeError("Invalid Date"),
    );

    expect(endOfYear(null)).toStrictEqual(new TypeError("Invalid Date"));
  });
});
