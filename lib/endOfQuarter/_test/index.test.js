const endOfQuarter = require("../index");
const germane = require("../../germane");

describe("endOfQuarter returns the difference from given date to when its quarter ends", () => {
  test("should return difference till quarter end", () => {
    expect(endOfQuarter(germane("2019-09-12 19:23:18Z", "America/Los_Angeles")).toISOString()).toBe(
      "2019-10-01T06:59:59.999Z",
    );
    expect(endOfQuarter(germane("2023-01-12 09:12:19Z", "Europe/Minsk")).toISOString()).toBe(
      "2023-03-31T20:59:59.999Z",
    );
    expect(endOfQuarter(germane("1990-12-31 22:00:00Z", "Africa/Windhoek")).toISOString()).toBe(
      "1991-03-31T21:59:59.999Z",
    );
  });
  test("should return an error", () => {
    expect(endOfQuarter(new Date(""))).toStrictEqual(new RangeError("Invalid Date"));

    expect(endOfQuarter("" + new Date("2019 10 09 23:12:01"))).toStrictEqual(
      new TypeError("Invalid Date"),
    );

    expect(endOfQuarter([null])).toStrictEqual(new TypeError("Invalid Date"));
  });
});
