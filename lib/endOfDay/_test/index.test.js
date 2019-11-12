const endOfDay = require("../index");
const germane = require("../../germane");

describe("endOfDay returns the difference from given date and time to the end of its day", () => {
  test("should return the end of day either in seconds | minutes | hours, varying on the datetime specified", () => {
    expect(endOfDay(germane("2014-06-18T09:12:33Z", "Africa/lagos")).toISOString()).toBe(
      "2014-06-18T22:59:59.999Z",
    );
    expect(endOfDay(germane("1945-10-12T18:19:56Z", "Europe/London")).toISOString()).toBe(
      "1945-10-12T23:59:59.999Z",
    );
    expect(endOfDay(germane("18801223T233412Z", "Europe/Minsk")).toISOString()).toBe(
      "1880-12-24T22:09:59.999Z",
    );
  });
  test("should throw an error", () => {
    expect(endOfDay(new Date(""))).toStrictEqual(new RangeError("Invalid Date"));

    expect(endOfDay("" + new Date("2019 10 09 23:12:01"))).toStrictEqual(
      new TypeError("Invalid Date"),
    );

    expect(endOfDay({})).toStrictEqual(new TypeError("Invalid Date"));
  });
});
