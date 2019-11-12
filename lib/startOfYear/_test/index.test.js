const startOfYear = require("../index");
const germane = require("../../germane");

describe("Returns the difference between the date provided and when its year started", () => {
  test("should return start of year", () => {
    // +01:00
    expect(startOfYear(germane("2019-12-12T09:23:09.000Z", "Africa/Lagos")).toISOString()).toBe(
      "2018-12-31T23:00:00.000Z",
    );
    // -07:00
    expect(startOfYear(germane("2019-08-11T18:19:49.000Z", "America/Phoenix")).toISOString()).toBe(
      "2019-01-01T07:00:00.000Z",
    );
    // +06:00 '2019-01-03T22:14:45.000Z'
    expect(startOfYear(germane(1546553685000, "Asia/Dhaka")).toISOString()).toBe(
      "2018-12-31T18:00:00.000Z",
    );

    // +00:00
    expect(startOfYear(germane("2000-01-01T19:18:56.000Z", "Europe/Lisbon")).toISOString()).toBe(
      "2000-01-01T00:00:00.000Z",
    );

    // +00:00
    expect(startOfYear(germane("1776-01-01", "Antarctica/Palmer")).toISOString()).toBe(
      "1776-01-01T00:00:00.000Z",
    );
  });

  test("should throw an error", () => {
    expect(startOfYear(new Date(""))).toStrictEqual(new RangeError("Invalid Date"));

    expect(startOfYear(new Date("2019 19 09"))).toStrictEqual(new RangeError("Invalid Date"));

    expect(startOfYear(new Date("2019 09 09").toISOString())).toStrictEqual(
      new TypeError("Invalid Date"),
    );
  });
});
