const startOfHour = require("../index");
const germane = require("../../germane");

describe("Returns the current of current hour in words", () => {
  test("should return the start of hour", () => {
    // 01:00
    expect(startOfHour(germane("2020-09-12 12:35:45Z", "Africa/Brazzaville")).toISOString()).toBe(
      "2020-09-12T12:00:00.000Z",
    );
    // 03:00
    expect(startOfHour(germane("2019-09-23 23:12:59Z", "Europe/Helsinki")).toISOString()).toBe(
      "2019-09-23T23:00:00.000Z",
    );

    // -05:00
    expect(startOfHour(germane("2010-01-19 23:00:34Z", "America/toronto")).toISOString()).toBe(
      "2010-01-19T23:00:00.000Z",
    );
    // +01:24
    expect(startOfHour(germane("1900-07-04 00:00:01Z", "Europe/Warsaw")).toISOString()).toBe(
      "1900-07-04T00:00:00.000Z",
    );
  });

  test("should throw an error (type or range)", () => {
    expect(startOfHour(new Date("19 19 19"))).toStrictEqual(new RangeError("Invalid Date"));

    expect(startOfHour(new Date("2019 09 19").toString())).toStrictEqual(
      new TypeError("Invalid Date"),
    );
  });
});
