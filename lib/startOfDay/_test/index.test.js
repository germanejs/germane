const startOfDay = require("../index");
const germane = require("../../germane");

describe("Returns the total hour|minute|seconds passed since the current of the date provided", () => {
  test("should return the start of day ", () => {
    // +02:30
    expect(startOfDay(germane("1800-09-04 23:12:19Z", "Europe/Moscow")).toISOString()).toBe(
      "1800-09-04T21:30:00.000Z",
    );

    // +02:00
    expect(startOfDay(germane("1960-01-01", "Europe/Helsinki")).toISOString()).toBe(
      "1959-12-31T22:00:00.000Z",
    );

    // +01:00
    expect(startOfDay(germane("2040-12-23 00:56:19Z", "Europe/Warsaw")).toISOString()).toBe(
      "2040-12-22T23:00:00.000Z",
    );
  });

  test("should throw an error (type or range)", () => {
    expect(startOfDay(germane("19 19 19"))).toStrictEqual(new TypeError("Invalid Date"));

    expect(startOfDay(new Date("2019-19-19").toLocaleDateString())).toStrictEqual(
      new TypeError("Invalid Date"),
    );

    expect(startOfDay(new Date("2019-09-19 23:09:60"))).toStrictEqual(
      new RangeError("Invalid Date"),
    );
  });
});
