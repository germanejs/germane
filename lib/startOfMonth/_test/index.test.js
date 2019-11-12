const startOfMonth = require("../index");
const germane = require("../../germane");

describe("Returns the time passed from given date till the beginning of its month", () => {
  test("should return the start of month", () => {
    // +10:00
    expect(startOfMonth(germane("2019-09-09 12:00:00Z", "Australia/Victoria")).toISOString()).toBe(
      "2019-08-31T14:00:00.000Z",
    );
    // +00:00
    expect(startOfMonth(germane("2113-11-30 23:59:59Z", "UTC")).toISOString()).toBe(
      "2113-11-01T00:00:00.000Z",
    );
    // +07:00
    expect(startOfMonth(germane("1990-01-01 00:00:01Z", "Asia/Bangkok")).toISOString()).toBe(
      "1989-12-31T17:00:00.000Z",
    );
  });

  test("should throw an error (type or range)", () => {
    expect(startOfMonth(new Date("1900 19 00"))).toStrictEqual(new RangeError("Invalid Date"));

    expect(startOfMonth(new Date("2019 09 19").toString())).toStrictEqual(
      new TypeError("Invalid Date"),
    );
  });
});
